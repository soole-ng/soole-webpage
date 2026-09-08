type RouteLegendProps = {
  /**
   * Whether the road ahead is being drawn. The legend exists to tell the two
   * lines apart, so with only one line on the map there is nothing to tell
   * apart and no legend.
   */
  showRouteAhead: boolean;
};

/**
 * Says which of the two lines is a fact and which is a guess.
 *
 * The solid line is where the vehicle has actually been - real positions the
 * phone reported. The dashed line is the road ahead, and it is a routing
 * engine's opinion of the fastest way from where they are now to where they
 * are going. Nobody has agreed to drive it.
 *
 * On an Abuja-to-Lagos trip it draws through Ilorin. A driver who goes via
 * Lokoja instead is doing nothing wrong, but somebody watching this page for
 * a relative sees a vehicle leaving the line the map drew for it - which is
 * exactly what "something has gone wrong" looks like. The page exists to
 * make people feel safe about a journey, so a line it invented must not be
 * the thing that frightens them.
 *
 * The bigger half of that answer is that the guess is not made at all until
 * the driver has been going half an hour and the road they are on has
 * settled the question - see routeAheadVisible in tracking-utils. This
 * labels it once it appears, and stays out of the way until then.
 */
export function RouteLegend({ showRouteAhead }: RouteLegendProps) {
  if (!showRouteAhead) return null;

  return (
    <div className="pointer-events-none absolute left-4 top-40 z-[650] rounded-xl bg-white/95 px-3 py-2 text-zinc-900 shadow-lg">
      <div className="flex items-center gap-2">
        <svg width="22" height="6" viewBox="0 0 22 6" aria-hidden="true">
          <line
            x1="1"
            y1="3"
            x2="21"
            y2="3"
            stroke="#4285F4"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[11px] text-zinc-700">Travelled</span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <svg width="22" height="6" viewBox="0 0 22 6" aria-hidden="true">
          <line
            x1="1"
            y1="3"
            x2="21"
            y2="3"
            stroke="#4285F4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.8"
            strokeDasharray="5 4"
          />
        </svg>
        <span className="text-[11px] text-zinc-700">Likely route</span>
      </div>
    </div>
  );
}
