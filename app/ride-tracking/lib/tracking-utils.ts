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

export function estimateEtaMinutes(current: MapPoint, destination: MapPoint) {
  const remainingKm = haversineKm(current, destination);
  const avgCitySpeedKmPerHour = 28;
  const minutes = Math.round((remainingKm / avgCitySpeedKmPerHour) * 60);

  return Math.max(1, minutes);
}

export function isTripEnded(current: MapPoint, destination: MapPoint) {
  return haversineKm(current, destination) <= 0.05;
}

export function computeTrackingData(
  apiData: TrackRideSuccessResponse | null,
): ComputedTrackingData | null {
  if (!apiData) {
    return null;
  }

  const current = { lat: apiData.latitude, lng: apiData.longitude };
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

  return {
    origin,
    current,
    destination,
    status,
    etaMinutes: ended ? 0 : estimateEtaMinutes(current, destination),
    updatedAtLabel: formatRecordedAt(apiData.recorded_at),
    updatedAtTime: formatShortTime(apiData.recorded_at),
    initials: getInitials(apiData.driver_fullname),
  };
}
