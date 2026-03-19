"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

import {
  type TrackRideQueryError,
  type TrackRideSuccessResponse,
  useTrackRide,
} from "@/services/tracking";
import { TrackingTerminalState } from "./components/tracking-terminal-state";
import { RideTrackingHeader } from "./components/ride-tracking-header";
import { DropoffEtaWidget } from "./components/dropoff-eta-widget";
import { RideDetailsPanel } from "./components/ride-details-panel";
import { computeTrackingData } from "./lib/tracking-utils";

type TrackingApiData = TrackRideSuccessResponse;

const RideLiveMap = dynamic(
  () =>
    import("@/components/ride-tracking/ride-live-map").then(
      (mod) => mod.RideLiveMap,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-zinc-600">
        Loading map...
      </div>
    ),
  },
);

function RideTrackingContent() {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get("tracking_id")?.trim() ?? "";

  const hasTrackingId = Boolean(trackingId);
  const {
    data: apiData,
    error,
    isLoading,
    refetch,
  } = useTrackRide(trackingId);

  const [refreshing, setRefreshing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const refetchTracking = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } finally {
      setRefreshing(false);
    }
  };

  const computed = useMemo(() => computeTrackingData(apiData ?? null), [apiData]);

  const isRideOver = computed?.status === "over";
  const normalizedError = error as TrackRideQueryError | null;

  if (hasTrackingId && isLoading) {
    return (
      <div className="flex h-[100dvh] w-full items-center justify-center bg-zinc-100">
        <div className="inline-flex items-center gap-2 text-sm text-zinc-600">
          <Loader2 className="size-4 animate-spin" />
          Loading tracking data...
        </div>
      </div>
    );
  }

  if (!hasTrackingId || !apiData || !computed || normalizedError || isRideOver) {
    return (
      <TrackingTerminalState
        hasTrackingId={hasTrackingId}
        apiData={apiData}
        isRideOver={Boolean(isRideOver)}
        normalizedError={normalizedError}
        refreshing={refreshing}
        onRetry={() => {
          void refetchTracking();
        }}
      />
    );
  }

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <RideLiveMap
          origin={computed.origin}
          destination={computed.destination}
          current={computed.current}
          status={computed.status}
          lastUpdatedLabel={computed.updatedAtTime}
        />
      </div>

      <RideTrackingHeader
        trackingId={trackingId}
        refreshing={refreshing}
        onRefresh={() => void refetchTracking()}
      />

      <DropoffEtaWidget
        status={computed.status}
        etaMinutes={computed.etaMinutes}
      />

      <RideDetailsPanel
        apiData={apiData}
        computed={computed}
        drawerOpen={drawerOpen}
        onDrawerOpenChange={setDrawerOpen}
      />
    </main>
  );
}

export default function RideTrackingPage() {
  return (
    <Suspense>
      <RideTrackingContent />
    </Suspense>
  );
}
