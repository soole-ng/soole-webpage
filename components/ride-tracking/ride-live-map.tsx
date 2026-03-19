"use client";

import { useEffect, useMemo, useState } from "react";
import type { DivIcon } from "leaflet";
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

function FitBounds({ points }: { points: MapPoint[] }) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) {
      return;
    }

    map.fitBounds(points.map((point) => [point.lat, point.lng]), {
      padding: [36, 36],
      maxZoom: 14,
    });
  }, [map, points]);

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

function useDestinationIcon() {
  return useMemo<DivIcon>(
    () =>
      L.divIcon({
        className: "",
        html: '<div style="width: 12px; height: 12px; background: #0f172a; border: 2px solid #ffffff; border-radius: 2px;"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      }),
    []
  );
}

export function RideLiveMap({
  origin,
  destination,
  current,
  status,
  lastUpdatedLabel,
  focusTarget = null,
  onFocusHandled,
}: RideLiveMapProps) {
  const destinationIcon = useDestinationIcon();

  const routePath = useMemo(() => [origin, destination], [origin, destination]);
  const traveledPath = useMemo(
    () => (status === "over" ? [origin, destination] : [origin, current]),
    [status, origin, destination, current]
  );
  const fitPoints = useMemo(() => [origin, current, destination], [origin, current, destination]);

  const isHighlighted = focusTarget !== null;

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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
      />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
      />

      <FitBounds points={fitPoints} />
      <FocusHandler
        focusTarget={focusTarget}
        origin={origin}
        destination={destination}
        current={current}
        onFocusHandled={onFocusHandled}
      />

      {/* Full route (dashed) */}
      <Polyline
        positions={routePath.map((point) => [point.lat, point.lng])}
        pathOptions={{
          color: isHighlighted ? "#6366f1" : "#94a3b8",
          weight: isHighlighted ? 7 : 5,
          dashArray: "7 8",
          opacity: isHighlighted ? 1 : 0.7,
        }}
      />

      {/* Traveled route (solid) */}
      <Polyline
        positions={traveledPath.map((point) => [point.lat, point.lng])}
        pathOptions={{
          color: isHighlighted ? "#4f46e5" : "#0f766e",
          weight: isHighlighted ? 8 : 6,
          lineCap: "round",
        }}
      />

      <CircleMarker
        center={[origin.lat, origin.lng]}
        radius={isHighlighted && focusTarget === "origin" ? 10 : 6}
        pathOptions={{
          color: isHighlighted && focusTarget === "origin" ? "#4f46e5" : "#111827",
          fillColor: isHighlighted && focusTarget === "origin" ? "#6366f1" : "#111827",
          fillOpacity: 1,
          weight: isHighlighted && focusTarget === "origin" ? 3 : 2,
        }}
      >
        <Popup>Origin</Popup>
      </CircleMarker>

      <Marker position={[destination.lat, destination.lng]} icon={destinationIcon}>
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
        <Popup>{status === "over" ? "Trip completed" : `Updated ${lastUpdatedLabel}`}</Popup>
      </CircleMarker>
    </MapContainer>
  );
}
