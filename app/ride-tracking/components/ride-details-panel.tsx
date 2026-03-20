"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronUp, Flag, MapPin, Phone, CarFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { TrackRideSuccessResponse } from "@/services/tracking";
import type { ComputedTrackingData } from "../lib/tracking-utils";
import { UserDrawer } from "./user-drawer";

type RideDetailsPanelProps = {
  apiData: TrackRideSuccessResponse;
  computed: ComputedTrackingData;
  drawerOpen: boolean;
  onDrawerOpenChange: (open: boolean) => void;
  onNavigate: (target: "origin" | "destination") => void;
};

export function RideDetailsPanel({
  apiData,
  computed,
  drawerOpen,
  onDrawerOpenChange,
  onNavigate,
}: RideDetailsPanelProps) {
  const [expanded, setExpanded] = useState(true);

  /* ── touch / drag handling ── */
  const dragStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (dragStartY.current === null) return;
      const delta = e.changedTouches[0].clientY - dragStartY.current;
      // swipe down → collapse, swipe up → expand (30px threshold)
      if (delta > 30) setExpanded(false);
      else if (delta < -30) setExpanded(true);
      dragStartY.current = null;
    },
    [],
  );

  return (
    <section
      className={[
        "absolute inset-x-0 bottom-0 z-[750] rounded-t-3xl border-t border-zinc-200 bg-white/96 shadow-[0_-12px_30px_rgba(0,0,0,0.2)] backdrop-blur transition-all duration-300 ease-in-out",
        /* desktop — always full height sidebar */
        "lg:top-[100px] lg:bottom-4 lg:right-4 lg:left-auto lg:w-[390px] lg:rounded-3xl lg:border lg:h-auto",
      ].join(" ")}
      style={{
        /* only control height on mobile via inline style so transition works */
        maxHeight: undefined,
      }}
    >
      {/* ── drag handle (mobile only) ── */}
      <button
        type="button"
        className="flex w-full flex-col items-center pb-1 pt-2 lg:hidden"
        onClick={() => setExpanded((v) => !v)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={expanded ? "Collapse panel" : "Expand panel"}
      >
        <span className="h-1 w-10 rounded-full bg-zinc-300" />
        <ChevronUp
          className={[
            "mt-1 size-4 text-zinc-400 transition-transform duration-300",
            expanded ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      <div className="overflow-hidden p-4 pt-0 lg:pt-4">
        {/* ── header row — always visible ── */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-zinc-900">
              {computed.status === "over" ? "Trip completed" : "Driver en route"}
            </p>
            <p className="text-xs text-zinc-500">
              Updated {computed.updatedAtLabel}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* <button
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
            </button> */}
            <UserDrawer
              open={drawerOpen}
              onOpenChange={onDrawerOpenChange}
              data={apiData}
              status={computed.status}
            />
          </div>
        </div>

        {/* ── collapsible content (mobile) ── */}
        <div
          className={[
            "transition-all duration-300 ease-in-out lg:!max-h-none lg:!opacity-100 lg:!mt-4",
            expanded
              ? "max-h-[60vh] opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0 overflow-hidden",
          ].join(" ")}
        >
          <div className="space-y-4">
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
                      onClick={() => onNavigate("origin")}
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
        </div>
      </div>
    </section>
  );
}
