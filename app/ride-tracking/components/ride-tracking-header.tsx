"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Copy, Home, RefreshCw } from "lucide-react";

type RideTrackingHeaderProps = {
  trackingId: string;
  refreshing: boolean;
  onRefresh: () => void;
};

function shortenTrackingId(trackingId: string) {
  if (trackingId.length <= 12) {
    return trackingId;
  }

  return `${trackingId.slice(0, 6)}...${trackingId.slice(-4)}`;
}

export function RideTrackingHeader({
  trackingId,
  refreshing,
  onRefresh,
}: RideTrackingHeaderProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopyTrackingId = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(trackingId);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = trackingId;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
    } catch (error) {
      console.error("Failed to copy tracking ID", error);
    }
  };

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
          <p className="text-xs md:text-sm font-semibold">Live Ride Tracking</p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <p className="text-xs text-zinc-200">{`ID: ${shortenTrackingId(trackingId)}`}</p>
            <button
              type="button"
              onClick={() => {
                void handleCopyTrackingId();
              }}
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[11px] font-medium text-white transition hover:bg-white/20"
              aria-label="Copy full tracking ID"
              title={copied ? "Tracking ID copied" : "Copy full tracking ID"}
            >
              {copied ? (
                <Check className="size-3" />
              ) : (
                <Copy className="size-3" />
              )}
              <span className="hidden md:inline-block">
                {" "}
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
          </div>
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
            <span className="hidden md:inline-block"> Home</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
