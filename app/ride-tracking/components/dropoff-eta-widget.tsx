import type { RideStatus } from "../lib/tracking-utils";

type DropoffEtaWidgetProps = {
  status: RideStatus;
  etaMinutes: number;
};

function formatEta(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) return `${hrs}hr ${mins}min`;
  if (hrs > 0) return `${hrs}hr`;
  return `${mins}min`;
}

export function DropoffEtaWidget({ status, etaMinutes }: DropoffEtaWidgetProps) {
  return (
    <div className="pointer-events-none absolute left-4 top-20 z-[650] rounded-xl bg-white/95 px-3 py-2 text-zinc-900 shadow-lg">
      <p className="text-[11px] uppercase tracking-wide text-zinc-500">
        Dropoff ETA
      </p>
      <p className="text-lg font-semibold">
        {status === "over" ? "Arrived" : formatEta(etaMinutes)}
      </p>
    </div>
  );
}
