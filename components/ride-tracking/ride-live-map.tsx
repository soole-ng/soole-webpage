"use client";

import { useEffect, useRef } from "react";
import {
  Navigatr,
  type LatLng,
  type NavigatrMap,
  type NavigatrMarker,
} from "@navigatr/web";

type RideStatus = "ongoing" | "over";

type MapPoint = {
  lat: number;
  lng: number;
};

export type MapFocusTarget = "origin" | "destination" | null;

type RideLiveMapProps = {
  origin: MapPoint;
  destination: MapPoint;
  current: MapPoint;
  status: RideStatus;
  lastUpdatedLabel: string;
  focusTarget?: MapFocusTarget;
  onFocusHandled?: () => void;
};

function cacheKey(a: MapPoint, b: MapPoint) {
  return `${a.lat.toFixed(5)},${a.lng.toFixed(5)}-${b.lat.toFixed(5)},${b.lng.toFixed(5)}`;
}

const routeCache = new Map<string, LatLng[]>();

function fallbackLine(from: MapPoint, to: MapPoint): LatLng[] {
  return [
    { lat: from.lat, lng: from.lng },
    { lat: to.lat, lng: to.lng },
  ];
}

function nearestRouteIndex(polyline: LatLng[], current: MapPoint): number {
  if (polyline.length === 0) return 0;

  let nearest = 0;
  let minDistance = Number.POSITIVE_INFINITY;

  for (let i = 0; i < polyline.length; i += 1) {
    const dLat = polyline[i].lat - current.lat;
    const dLng = polyline[i].lng - current.lng;
    const distance = dLat * dLat + dLng * dLng;

    if (distance < minDistance) {
      minDistance = distance;
      nearest = i;
    }
  }

  return nearest;
}

function createPinIconHtml(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
    <circle cx="14" cy="14" r="6" fill="#fff"/>
  </svg>`;
}

const CURRENT_MARKER_ICON_HTML = `<div style="width:18px;height:18px;border-radius:9999px;background:#0ea5e9;border:2px solid #fff;box-shadow:0 0 0 4px rgba(14,165,233,0.25);"></div>`;
const ROUTE_STYLE = { color: "#4285F4", weight: 6, opacity: 1 };

export function RideLiveMap({
  origin,
  destination,
  current,
  status,
  lastUpdatedLabel,
  focusTarget = null,
  onFocusHandled,
}: RideLiveMapProps) {
  const containerIdRef = useRef(
    `ride-live-map-${Math.random().toString(36).slice(2, 11)}`,
  );
  const navRef = useRef<Navigatr | null>(null);
  const mapRef = useRef<NavigatrMap | null>(null);
  const originMarkerRef = useRef<NavigatrMarker | null>(null);
  const destinationMarkerRef = useRef<NavigatrMarker | null>(null);
  const currentMarkerRef = useRef<NavigatrMarker | null>(null);
  const activePolylineRef = useRef<LatLng[]>([]);
  const currentRef = useRef(current);
  const statusRef = useRef(status);

  useEffect(() => {
    if (mapRef.current) return;

    const nav = new Navigatr();
    const map = nav.map({
      container: containerIdRef.current,
      center: { lat: current.lat, lng: current.lng },
      zoom: 16,
    });

    navRef.current = nav;
    mapRef.current = map;

    originMarkerRef.current = map.addMarker({
      lat: origin.lat,
      lng: origin.lng,
      label: "Origin",
      iconHtml: createPinIconHtml("#34A853"),
    });
    destinationMarkerRef.current = map.addMarker({
      lat: destination.lat,
      lng: destination.lng,
      label: "Destination",
      iconHtml: createPinIconHtml("#EA4335"),
    });
    currentMarkerRef.current = map.addMarker({
      lat: current.lat,
      lng: current.lng,
      label: "Driver location",
      iconHtml: CURRENT_MARKER_ICON_HTML,
    });

    return () => {
      map.clearRoute();
      map.removeDriverMarker();
      originMarkerRef.current?.remove();
      destinationMarkerRef.current?.remove();
      currentMarkerRef.current?.remove();
      originMarkerRef.current = null;
      destinationMarkerRef.current = null;
      currentMarkerRef.current = null;
      mapRef.current = null;
      navRef.current = null;
    };
  }, [origin, destination, current, status, lastUpdatedLabel]);

  useEffect(() => {
    originMarkerRef.current?.setLatLng(origin);
  }, [origin]);

  useEffect(() => {
    destinationMarkerRef.current?.setLatLng(destination);
  }, [destination]);

  useEffect(() => {
    currentRef.current = current;
    currentMarkerRef.current?.setLatLng(current);
  }, [current]);

  useEffect(() => {
    statusRef.current = status;

    const container = document.getElementById(containerIdRef.current);
    if (!container) return;

    container.dataset.lastUpdated =
      status === "over" ? "Trip completed" : `Updated ${lastUpdatedLabel}`;
  }, [status, lastUpdatedLabel]);

  useEffect(() => {
    const nav = navRef.current;
    const map = mapRef.current;
    if (!nav || !map) return;

    const key = cacheKey(origin, destination);
    const cached = routeCache.get(key);
    let isCanceled = false;

    const drawRoute = (polyline: LatLng[]) => {
      if (isCanceled) return;

      const safePolyline = polyline.length > 1 ? polyline : fallbackLine(origin, destination);
      activePolylineRef.current = safePolyline;
      map.clearRoute();
      map.drawRoute(safePolyline, ROUTE_STYLE);

      const currentIndex =
        statusRef.current === "over"
          ? safePolyline.length - 1
          : nearestRouteIndex(safePolyline, currentRef.current);
      map.updateTraveledRoute(safePolyline, currentIndex);
    };

    if (cached) {
      drawRoute(cached);
      return () => {
        isCanceled = true;
      };
    }

    nav
      .route({
        origin: { lat: origin.lat, lng: origin.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        mode: "drive",
      })
      .then((route) => {
        const polyline =
          route.polyline.length > 1 ? route.polyline : fallbackLine(origin, destination);
        routeCache.set(key, polyline);
        drawRoute(polyline);
      })
      .catch(() => {
        drawRoute(fallbackLine(origin, destination));
      });

    return () => {
      isCanceled = true;
    };
  }, [origin, destination]);

  useEffect(() => {
    const map = mapRef.current;
    const activePolyline = activePolylineRef.current;
    if (!map || activePolyline.length < 2) return;

    const currentIndex =
      status === "over"
        ? activePolyline.length - 1
        : nearestRouteIndex(activePolyline, current);
    map.updateTraveledRoute(activePolyline, currentIndex);
  }, [current, status]);

  useEffect(() => {
    if (!focusTarget) return;

    const map = mapRef.current;
    if (!map) return;

    const target = focusTarget === "origin" ? origin : destination;
    map.fitRoute([
      { lat: current.lat, lng: current.lng },
      { lat: target.lat, lng: target.lng },
    ]);

    onFocusHandled?.();
  }, [focusTarget, origin, destination, current, onFocusHandled]);

  return <div id={containerIdRef.current} className="h-full w-full" />;
}
