import type { TrackRideSuccessResponse } from "@/services/tracking";

export type RideStatus = "ongoing" | "over";

export type MapPoint = {
  lat: number;
  lng: number;
};

export type ComputedTrackingData = {
  origin: MapPoint;
  current: MapPoint;
  destination: MapPoint;
  status: RideStatus;
  etaMinutes: number;
  updatedAtLabel: string;
  updatedAtTime: string;
  initials: string;
};

export function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (!parts.length) {
    return "U";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export function haversineKm(a: MapPoint, b: MapPoint) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);

  const aa =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(a.lat)) *
      Math.cos(toRad(b.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  return earthRadiusKm * c;
}

export function formatRecordedAt(recordedAt: string) {
  const date = new Date(recordedAt);

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function formatShortTime(recordedAt: string) {
  const date = new Date(recordedAt);

  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

// Real roads are never a straight line between two points - matches the
// backend's ROAD_CIRCUITY_FACTOR (rides/services/telemetry.py), applied
// here to the haversine distance so ETA isn't based on "as the crow
// flies" figures.
const ROAD_CIRCUITY_FACTOR = 1.3;
const FALLBACK_CITY_SPEED_KMH = 28;

export function estimateEtaMinutes(
  current: MapPoint,
  destination: MapPoint,
  speedKmh?: number | null,
) {
  const remainingKm = haversineKm(current, destination) * ROAD_CIRCUITY_FACTOR;
  // Real live/average speed from recorded GPS pings when available (e.g.
  // just started, or the driver's phone hasn't reported enough pings yet
  // to derive a speed) - falls back to a flat city-driving estimate.
  const speed =
    speedKmh && speedKmh > 0 ? speedKmh : FALLBACK_CITY_SPEED_KMH;
  const minutes = Math.round((remainingKm / speed) * 60);

  return Math.max(1, minutes);
}

export function isTripEnded(current: MapPoint, destination: MapPoint) {
  return haversineKm(current, destination) <= 0.05;
}

export function computeTrackingData(
  apiData: TrackRideSuccessResponse | null,
): ComputedTrackingData | null {
  if (!apiData || !apiData.route || apiData.route.length === 0) {
    return null;
  }

  const lastPoint = apiData.route[apiData.route.length - 1];
  const current = { lat: lastPoint.latitude, lng: lastPoint.longitude };
  const origin = {
    lat: apiData.origin_point.latitude,
    lng: apiData.origin_point.longitude,
  };
  const destination = {
    lat: apiData.destination_point.latitude,
    lng: apiData.destination_point.longitude,
  };

  const ended = isTripEnded(current, destination);
  const status: RideStatus = ended ? "over" : "ongoing";
  // Prefer the smoothed average (resists a momentary stop at a light or
  // junction reading as 0) over the last-two-pings instantaneous speed.
  const liveSpeedKmh = apiData.average_speed_kmh ?? apiData.current_speed_kmh;

  return {
    origin,
    current,
    destination,
    status,
    etaMinutes: ended ? 0 : estimateEtaMinutes(current, destination, liveSpeedKmh),
    updatedAtLabel: formatRecordedAt(lastPoint.recorded_at),
    updatedAtTime: formatShortTime(lastPoint.recorded_at),
    initials: getInitials(apiData.driver_fullname),
  };
}
