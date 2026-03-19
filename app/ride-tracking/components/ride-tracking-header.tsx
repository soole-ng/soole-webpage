import Link from "next/link";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";

type RideTrackingHeaderProps = {
  trackingId: string;
  refreshing: boolean;
  onRefresh: () => void;
};

export function RideTrackingHeader({ trackingId, refreshing, onRefresh }: RideTrackingHeaderProps) {
  return (
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
            onClick={onRefresh}
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
  );
}
