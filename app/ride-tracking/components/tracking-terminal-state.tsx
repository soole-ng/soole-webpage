import Link from "next/link";
import { Loader2 } from "lucide-react";

import type { TrackRideQueryError, TrackRideSuccessResponse } from "@/services/tracking";
import { formatRecordedAt } from "../lib/tracking-utils";

type TrackingTerminalStateProps = {
  hasTrackingId: boolean;
  apiData: TrackRideSuccessResponse | undefined;
  isRideOver: boolean;
  normalizedError: TrackRideQueryError | null;
  refreshing: boolean;
  onRetry: () => void;
};

export function TrackingTerminalState({
  hasTrackingId,
  apiData,
  isRideOver,
  normalizedError,
  refreshing,
  onRetry,
}: TrackingTerminalStateProps) {
  const errorStatus = normalizedError?.status;
  const isExpired = errorStatus === 410;
  const isNotFound = !hasTrackingId || errorStatus === 404;
  const isTerminalError = Boolean(normalizedError && !isExpired && !isNotFound);

  const title = isRideOver
    ? "Ride completed"
    : isExpired
      ? "Tracking link expired"
      : "Tracking unavailable";

  const description = isRideOver
    ? "This ride has reached its destination."
    : isExpired
      ? normalizedError?.message || "This tracking link has expired."
      : isNotFound
        ? normalizedError?.message || "Token is invalid, ride not found, or no data yet."
        : normalizedError?.message || "Unable to load tracking data right now.";

  const canRetry = !isRideOver && hasTrackingId && (isExpired || isNotFound || isTerminalError);

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-zinc-100 p-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
        <p className="mt-2 text-sm text-zinc-600">{description}</p>
        {apiData && isRideOver && apiData.route && apiData.route.length > 0 && (
          <p className="mt-2 text-xs text-zinc-500">
            Last update: {formatRecordedAt(apiData.route[apiData.route.length - 1].recorded_at)}
          </p>
        )}
        {canRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={refreshing}
          >
            {refreshing && <Loader2 className="size-4 animate-spin" />}
            {refreshing ? "Retrying..." : "Retry"}
          </button>
        )}
        <Link
          href="/"
          className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
