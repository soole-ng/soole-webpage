"use client";

import { useEffect, useMemo } from "react";
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

type RideLiveMapProps = {
  origin: MapPoint;
  destination: MapPoint;
  current: MapPoint;
  status: RideStatus;
  lastUpdatedLabel: string;
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
}: RideLiveMapProps) {
  const destinationIcon = useDestinationIcon();

  const routePath = useMemo(() => [origin, destination], [origin, destination]);
  const traveledPath = useMemo(
    () => (status === "over" ? [origin, destination] : [origin, current]),
    [status, origin, destination, current]
  );
  const fitPoints = useMemo(() => [origin, current, destination], [origin, current, destination]);

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

      <Polyline
        positions={routePath.map((point) => [point.lat, point.lng])}
        pathOptions={{ color: "#94a3b8", weight: 5, dashArray: "7 8" }}
      />

      <Polyline
        positions={traveledPath.map((point) => [point.lat, point.lng])}
        pathOptions={{ color: "#0f766e", weight: 6, lineCap: "round" }}
      />

      <CircleMarker
        center={[origin.lat, origin.lng]}
        radius={6}
        pathOptions={{ color: "#111827", fillColor: "#111827", fillOpacity: 1, weight: 2 }}
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
