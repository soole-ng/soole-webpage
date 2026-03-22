"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { DivIcon, LatLngTuple } from "leaflet";
import L from "leaflet";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

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

/* ─── Road-network route geometry ─── */

/** Build a cache key from two points so we don't refetch the same route */
function cacheKey(a: MapPoint, b: MapPoint) {
  return `${a.lat.toFixed(5)},${a.lng.toFixed(5)}-${b.lat.toFixed(5)},${b.lng.toFixed(5)}`;
}

const routeCache = new Map<string, LatLngTuple[]>();

/** Try OSRM demo server */
async function tryOSRM(from: MapPoint, to: MapPoint): Promise<LatLngTuple[] | null> {
  const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) return null;

  const json = await res.json();
  const coords: [number, number][] = json?.routes?.[0]?.geometry?.coordinates ?? [];
  if (!coords.length) return null;

  return coords.map(([lng, lat]) => [lat, lng] as LatLngTuple);
}

/** Try OpenRouteService (free public API, good global coverage) */
async function tryORS(from: MapPoint, to: MapPoint): Promise<LatLngTuple[] | null> {
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?start=${from.lng},${from.lat}&end=${to.lng},${to.lat}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) return null;

  const json = await res.json();
  const coords: [number, number][] =
    json?.features?.[0]?.geometry?.coordinates ?? [];
  if (!coords.length) return null;

  // GeoJSON [lng, lat] → Leaflet [lat, lng]
  return coords.map(([lng, lat]) => [lat, lng] as LatLngTuple);
}

async function fetchRouteGeometry(
  from: MapPoint,
  to: MapPoint,
): Promise<LatLngTuple[]> {
  const key = cacheKey(from, to);
  if (routeCache.has(key)) return routeCache.get(key)!;

  // Try providers in order
  const result =
    (await tryOSRM(from, to).catch(() => null)) ??
    (await tryORS(from, to).catch(() => null));

  if (result && result.length > 0) {
    routeCache.set(key, result);
    return result;
  }

  // Final fallback: straight line
  return [
    [from.lat, from.lng],
    [to.lat, to.lng],
  ];
}

function useRouteGeometry(from: MapPoint, to: MapPoint): LatLngTuple[] {
  const fallback = useMemo<LatLngTuple[]>(
    () => [
      [from.lat, from.lng],
      [to.lat, to.lng],
    ],
    [from, to],
  );

  const [coords, setCoords] = useState<LatLngTuple[]>(fallback);
  const activeKey = useRef("");

  useEffect(() => {
    const key = cacheKey(from, to);
    activeKey.current = key;

    fetchRouteGeometry(from, to).then((result) => {
      // only apply if this is still the active request
      if (activeKey.current === key) setCoords(result);
    });
  }, [from, to]);

  return coords;
}

/* ─── Map helper components ─── */

function InitialCurrentViewport({ current }: { current: MapPoint }) {
  const map = useMap();
  const hasCenteredRef = useRef(false);

  useEffect(() => {
    if (hasCenteredRef.current) {
      return;
    }

    hasCenteredRef.current = true;
    map.setView([current.lat, current.lng], 16, { animate: false });
  }, [map, current]);

  return null;
}

function FocusHandler({
  focusTarget,
  origin,
  destination,
  current,
  onFocusHandled,
}: {
  focusTarget: MapFocusTarget;
  origin: MapPoint;
  destination: MapPoint;
  current: MapPoint;
  onFocusHandled?: () => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (!focusTarget) return;

    const target = focusTarget === "origin" ? origin : destination;

    map.fitBounds(
      [
        [current.lat, current.lng],
        [target.lat, target.lng],
      ],
      { padding: [60, 60], maxZoom: 15, animate: true, duration: 0.8 },
    );

    onFocusHandled?.();
  }, [focusTarget, map, origin, destination, current, onFocusHandled]);

  return null;
}

function useLocationIcon(color: string) {
  return useMemo<DivIcon>(
    () =>
      L.divIcon({
        className: "",
        iconSize: [28, 40],
        iconAnchor: [14, 40],
        popupAnchor: [0, -40],
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
          <circle cx="14" cy="14" r="6" fill="#fff"/>
        </svg>`,
      }),
    [color],
  );
}

/* ─── Main map component ─── */

export function RideLiveMap({
  origin,
  destination,
  current,
  status,
  lastUpdatedLabel,
  focusTarget = null,
  onFocusHandled,
}: RideLiveMapProps) {
  const originIcon = useLocationIcon("#34A853");
  const destinationIcon = useLocationIcon("#EA4335");

  const traveledCoords = useRouteGeometry(
    origin,
    status === "over" ? destination : current,
  );

  return (
    <MapContainer
      center={[current.lat, current.lng]}
      zoom={13}
      className="h-full w-full [&_.leaflet-control-zoom]:!mt-40"
      zoomControl
      attributionControl={false}
      scrollWheelZoom
    >
      <TileLayer
        attribution="&copy; Google Maps"
        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
      />

      <InitialCurrentViewport current={current} />
      <FocusHandler
        focusTarget={focusTarget}
        origin={origin}
        destination={destination}
        current={current}
        onFocusHandled={onFocusHandled}
      />

      {/* Traveled route — solid, follows real roads */}
      <Polyline
        positions={traveledCoords}
        pathOptions={{
          color: "#4285F4",
          weight: 6,
          lineCap: "round",
          opacity: 1,
        }}
      />

      <Marker position={[origin.lat, origin.lng]} icon={originIcon}>
        <Popup>Origin</Popup>
      </Marker>

      <Marker
        position={[destination.lat, destination.lng]}
        icon={destinationIcon}
      >
        <Popup>Destination</Popup>
      </Marker>

      <CircleMarker
        center={[current.lat, current.lng]}
        radius={9}
        pathOptions={{
          color: "#ffffff",
          weight: 2,
          fillColor: "#0ea5e9",
          fillOpacity: 1,
        }}
      >
        <Popup>
          {status === "over"
            ? "Trip completed"
            : `Updated ${lastUpdatedLabel}`}
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
