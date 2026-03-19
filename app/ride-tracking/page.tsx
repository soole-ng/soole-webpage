"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import {
  ArrowLeft,
  CarFront,
  Flag,
  Home,
  Loader2,
  MapPin,
  Phone,
  RefreshCw,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  type TrackRideQueryError,
  type TrackRideSuccessResponse,
  useTrackRide,
} from "@/services/tracking";
import { TrackingTerminalState } from "./components/tracking-terminal-state";
import { UserDrawer } from "./components/user-drawer";
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

      <header className="absolute inset-x-0 top-0 z-[700] border-b border-white/20 bg-black/45 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between text-white">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              }
            }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
            aria-label="Back"
          >
            <ArrowLeft className="size-4" />
          </button>

          <div className="text-center">
            <p className="text-sm font-semibold">Live Ride Tracking</p>
            <p className="text-xs text-zinc-200">{`ID: ${trackingId}`}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                void refetchTracking();
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
              aria-label="Refresh"
            >
              <RefreshCw
                className={`size-4 ${refreshing ? "animate-spin" : ""}`}
              />
            </button>
            <Link
              href="/"
              className="inline-flex h-9 items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 text-xs font-medium text-white transition hover:bg-white/20"
            >
              <Home className="size-3.5" />
              Home
            </Link>
          </div>
        </div>
      </header>

      <div className="pointer-events-none absolute left-4 top-20 z-[650] rounded-xl bg-white/95 px-3 py-2 text-zinc-900 shadow-lg">
        <p className="text-[11px] uppercase tracking-wide text-zinc-500">
          Dropoff ETA
        </p>
        <p className="text-lg font-semibold">
          {computed.status === "over"
            ? "Arrived"
            : `${computed.etaMinutes} min`}
        </p>
      </div>

      <section className="absolute inset-x-0 bottom-0 z-[750] rounded-t-3xl border-t border-zinc-200 bg-white/96 p-4 shadow-[0_-12px_30px_rgba(0,0,0,0.2)] backdrop-blur lg:inset-y-4 lg:right-4 lg:left-auto lg:w-[390px] lg:rounded-3xl lg:border">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-semibold text-zinc-900">
                {computed.status === "over"
                  ? "Trip completed"
                  : "Driver en route"}
              </p>
              <p className="text-xs text-zinc-500">
                Updated {computed.updatedAtLabel}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
                aria-label="Call"
              >
                <Phone className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
                aria-label="Report"
              >
                <Flag className="size-4" />
              </button>
              <UserDrawer
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                data={apiData}
                status={computed.status}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex w-4 flex-col items-center">
                <MapPin className="size-4 text-zinc-700" />
                <div className="my-1 h-8 w-0.5 bg-zinc-300" />
                <div className="h-3 w-3 rounded-[2px] border-2 border-zinc-700" />
              </div>

              <div className="min-w-0 flex-1 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                      Origin
                    </p>
                    <p className="text-sm font-medium text-zinc-900">
                      {apiData.origin_state}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className="h-8 rounded-full bg-zinc-100 px-4 text-xs text-zinc-800 hover:bg-zinc-200"
                  >
                    Navigate
                  </Button>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                      Destination
                    </p>
                    <p className="text-sm font-medium text-zinc-900">
                      {apiData.destination_state}
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500">
                    {computed.updatedAtTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full bg-zinc-100 bg-cover bg-center"
                  style={{
                    backgroundImage: apiData.driver_picture
                      ? `url(${apiData.driver_picture})`
                      : "none",
                  }}
                >
                  {!apiData.driver_picture && (
                    <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-700">
                      {computed.initials}
                    </div>
                  )}
                </div>
            
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {apiData.driver_fullname}
                  </p>
                  {/* <p className="inline-flex items-center gap-1 text-xs text-zinc-600">
                    4.8
                    <Star className="size-3 fill-current" />
                  </p> */}
                </div>
              </div>

              <div className="text-right">
                <p className="text-base font-semibold tracking-wide text-zinc-900">
                  {apiData.car_plate}
                </p>
                <p className="text-base text-zinc-500">{apiData.car_name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
