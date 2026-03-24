import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api } from "./api";

export interface RideTrackingPoint {
  latitude: number;
  longitude: number;
}

export interface RoutePoint extends RideTrackingPoint {
  recorded_at: string;
}

export interface TrackRideSuccessResponse {
  route: RoutePoint[];
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

const defaultTrackingErrorMessage = "Unable to load tracking data right now.";

const extractErrorMessage = (payload: unknown): string | null => {
  if (!payload) return null;

  if (typeof payload === "string") {
    const trimmed = payload.trim();
    if (!trimmed) return null;

    try {
      const parsed = JSON.parse(trimmed) as unknown;
      return extractErrorMessage(parsed) ?? trimmed;
    } catch {
      return trimmed;
    }
  }

  if (typeof payload === "object") {
    const body = payload as Record<string, unknown>;
    const candidate =
      body.message ??
      body.detail ??
      body.error ??
      body.title;

    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  return null;
};

const tripEnded = (payload: TrackRideSuccessResponse) => {
  if (!payload.route || payload.route.length === 0) return false;
  const lastPoint = payload.route[payload.route.length - 1];

  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(payload.destination_point.latitude - lastPoint.latitude);
  const dLng = toRad(payload.destination_point.longitude - lastPoint.longitude);

  const aa =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lastPoint.latitude)) *
      Math.cos(toRad(payload.destination_point.latitude)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const distanceKm = earthRadiusKm * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  return distanceKm <= 0.05;
};

const normalizeTrackRideError = (error: unknown): TrackRideQueryError => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const payloadMessage = extractErrorMessage(error.response?.data);

    const fallbackMessage =
      status === 404
        ? "Invalid tracking token or Ride does not exist"
        : status === 410
          ? "This tracking link has expired."
          : defaultTrackingErrorMessage;

    const message =
      payloadMessage ||
      (status ? fallbackMessage : error.message || defaultTrackingErrorMessage);

    return { status, message };
  }

  return {
    message: defaultTrackingErrorMessage,
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
        return 300000; // 5 minutes
      }

      return tripEnded(payload) ? false : 300000; // 5 minutes
    },
  });
};
