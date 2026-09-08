import type {
  RoutePoint,
  TrackRideSuccessResponse,
} from "@/services/tracking";

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
  /**
   * Whether to draw the road ahead of the vehicle.
   *
   * False for the first half hour of a journey. See routeAheadVisible.
   */
  showRouteAhead: boolean;
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

/** How long a driver is given to pick a road before we draw one for them. */
export const ROUTE_AHEAD_AFTER_MINUTES = 30;

/**
 * Whether enough of the journey has happened to guess the rest of it.
 *
 * The road ahead is a routing engine's opinion, and at the start of a trip
 * it is an opinion with nothing to go on. Abuja to Lagos leaves Abuja the
 * same way whether the driver is going via Ilorin or via Lokoja, so the line
 * drawn in the first minutes is a coin toss - and it was drawn straight
 * across the country through Ilorin, which is exactly what "the driver has
 * gone the wrong way" looks like to a relative following the page.
 *
 * Half an hour of driving settles it. By then the vehicle is on one corridor
 * or the other and the route from where they actually are is the route they
 * are actually taking. Waiting costs nothing: the origin pin, the
 * destination pin and the trail already say where the journey starts, ends
 * and has got to.
 *
 * Measured from the first recorded position rather than the departure time,
 * because that is the first moment we know anything at all about where the
 * vehicle is. A trip shorter than half an hour never shows a road ahead, and
 * does not need one - on a journey that short the two pins are close enough
 * to read together.
 *
 * A caveat worth knowing rather than coding around: a driver who spends
 * thirty minutes in Abuja traffic has disambiguated nothing, and the line
 * will still be a guess when it appears. It self-corrects on the next
 * position either way.
 */
export function routeAheadVisible(route: RoutePoint[], now = Date.now()) {
  const first = route[0];
  if (!first) return false;

  const startedAt = new Date(first.recorded_at).getTime();
  if (Number.isNaN(startedAt)) return false;

  return now - startedAt >= ROUTE_AHEAD_AFTER_MINUTES * 60 * 1000;
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
    // The server's figure when it sends one.
    //
    // It knows the real road distance for this route, where this page only
    // ever had a straight line and a copied constant; and it is the same
    // calculation the fleet dashboard uses, so a passenger and an operator
    // are not shown two different arrival times for one vehicle. Falls back
    // to the local estimate when the backend does not send one.
    etaMinutes: ended
      ? 0
      : apiData.duration_remaining_minutes ??
        estimateEtaMinutes(current, destination, liveSpeedKmh),
    updatedAtLabel: formatRecordedAt(lastPoint.recorded_at),
    updatedAtTime: formatShortTime(lastPoint.recorded_at),
    initials: getInitials(apiData.driver_fullname),
    showRouteAhead: !ended && routeAheadVisible(apiData.route),
  };
}
