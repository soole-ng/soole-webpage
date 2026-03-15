import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api } from "./api";

export interface RideTrackingPoint {
  latitude: number;
  longitude: number;
}

export interface TrackRideSuccessResponse extends RideTrackingPoint {
  recorded_at: string;
  driver_fullname: string;
  driver_picture: string;
  car_name: string;
  car_plate: string;
  origin_state: string;
  destination_state: string;
  origin_point: RideTrackingPoint;
  destination_point: RideTrackingPoint;
}

export type TrackRideErrorStatus = 404 | 410;

export interface TrackRideErrorResponse {
  status: TrackRideErrorStatus;
  message: string;
}

export interface TrackRideQueryError {
  status?: number;
  message: string;
}

const tripEnded = (payload: TrackRideSuccessResponse) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(payload.destination_point.latitude - payload.latitude);
  const dLng = toRad(payload.destination_point.longitude - payload.longitude);

  const aa =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(payload.latitude)) *
      Math.cos(toRad(payload.destination_point.latitude)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const distanceKm = earthRadiusKm * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  return distanceKm <= 0.05;
};

const normalizeTrackRideError = (error: unknown): TrackRideQueryError => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      (error.response?.data as { message?: string } | undefined)?.message ||
      error.message ||
      "Unable to load tracking data right now.";

    return { status, message };
  }

  return {
    message: "Unable to load tracking data right now.",
  };
};

const trackRide = async (ride_id: string): Promise<TrackRideSuccessResponse> => {
  try {
    const res = await api.get<TrackRideSuccessResponse>(
      `/rides/ride_tracking/soole-ride-tracking/${ride_id}`,
    );
    return res.data;
  } catch (error) {
    throw normalizeTrackRideError(error);
  }
};

export const useTrackRide = (ride_id: string) => {
  return useQuery<TrackRideSuccessResponse, TrackRideQueryError>({
    queryKey: ["trackRide", ride_id],
    queryFn: () => trackRide(ride_id),
    enabled: !!ride_id,
    refetchInterval: (query) => {
      const payload = query.state.data;
      if (!payload) {
        return 15000;
      }

      return tripEnded(payload) ? false : 15000;
    },
  });
};
