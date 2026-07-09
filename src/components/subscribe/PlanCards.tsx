import { Check } from "lucide-react";
import { subscribe } from "../../data/subscribe";

// Cards stay vertical and in a row on desktop. On narrow screens they become a
// swipe carousel (scroll-snap, one card per view) - built now, hidden by the desktop lock.
export function PlanCards({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 pt-3 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {subscribe.plans.map((p, i) => {
          const on = i === selected;
          return (
            <button
              key={p.key}
              onClick={() => onSelect(i)}
              className={`relative flex min-w-full shrink-0 snap-center flex-col rounded-card border p-6 text-left transition-all sm:min-w-0 ${on ? "border-accent bg-white shadow-card ring-2 ring-accent/25" : "border-border bg-surface-soft hover:border-accent/40 hover:bg-white"}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#3B82F6,#2563EB)] px-3 py-1 text-[11px] font-semibold text-white shadow-blue">Most popular</span>
              )}
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-ink">{p.name}</p>
                <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors ${on ? "border-accent bg-accent text-white" : "border-border text-transparent"}`}><Check size={13} /></span>
              </div>
              <p className="mt-3 text-sm text-muted"><span className="line-through">{p.was}</span> <span className="font-semibold text-accent">{p.now}</span></p>
              <div className="mt-5 flex items-end gap-1.5 border-t border-border pt-5">
                <span className="mb-1 text-sm text-muted line-through">{p.perDayWas}</span>
                <span className="font-display text-4xl font-semibold tracking-tight text-ink">{p.perDay}</span>
                <span className="mb-1.5 text-sm text-muted">per day</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
