import { Drawer } from "vaul";
import { User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { TrackRideSuccessResponse } from "@/services/tracking";
import { formatRecordedAt, getInitials, type RideStatus } from "../lib/tracking-utils";

type UserDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: TrackRideSuccessResponse;
  status: RideStatus;
};

export function UserDrawer({
  open,
  onOpenChange,
  data,
  status,
}: UserDrawerProps) {
  const initials = getInitials(data.driver_fullname);

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
        aria-label="Open driver details"
      >
        <User className="size-4" />
      </button>

      <Drawer.Root
        open={open}
        onOpenChange={onOpenChange}
        direction="right"
        dismissible
      >
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-[900] bg-black/40"
            onClick={() => onOpenChange(false)}
          />
          <Drawer.Content className="fixed top-0 right-0 z-[1000] h-[100dvh] w-full bg-white outline-none sm:top-8 sm:right-6 sm:h-[calc(100dvh-64px)] sm:w-[360px] sm:rounded-3xl sm:border sm:border-zinc-200 sm:shadow-2xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
                <div>
                  <p className="text-xs text-zinc-500">Driver profile</p>
                  <h2 className="text-base font-semibold text-zinc-900">
                    {data.driver_fullname}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100"
                  aria-label="Close drawer"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="space-y-4 overflow-y-auto p-4">
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-full bg-zinc-100 bg-cover bg-center"
                      style={{
                        backgroundImage: data.driver_picture
                          ? `url(${data.driver_picture})`
                          : "none",
                      }}
                    >
                      {!data.driver_picture && (
                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-700">
                          {initials}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {data.driver_fullname}
                      </p>
                      <p className="text-xs text-zinc-500">{data.car_name}</p>
                      <p className="text-xs text-zinc-500">{data.car_plate}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Trip state
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    {status === "over"
                      ? "Trip has reached destination"
                      : "Trip is currently in progress"}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Origin: {data.origin_state}
                  </p>
                  <p className="text-sm text-zinc-600">
                    Destination: {data.destination_state}
                  </p>
                  <p className="text-sm text-zinc-600">
                    Last ping: {formatRecordedAt(data.recorded_at)}
                  </p>
                </div>
              </div>

              <div className="mt-auto border-t border-zinc-200 p-4">
                <Button
                  className="h-10 w-full"
                  onClick={() => onOpenChange(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
