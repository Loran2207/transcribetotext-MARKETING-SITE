import { ChevronRight } from "lucide-react";

const SOURCES: [string, number, number][] = [
  ["Zoom", 138, 100], ["Google Meet", 92, 68], ["Microphone", 64, 46], ["File upload", 48, 34],
];
const EVENTS: [string, string, number][] = [
  ["09:30 - 10:00", "Design sync - weekly", 5],
  ["11:00 - 11:30", "Product standup", 8],
  ["14:00 - 15:00", "Nexora - QL - instance daily", 4],
  ["16:30 - 17:00", "Customer onboarding call", 3],
];

export function DashPanel() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col gap-5 border-l border-border p-5 xl:flex">
      <div className="rounded-2xl border border-border bg-white p-4">
        <p className="text-[11px] font-semibold text-muted">Analytics</p>
        <div className="mt-3 flex gap-6">
          <div><p className="font-display text-2xl font-semibold text-ink">128.4</p><p className="text-[11px] text-muted">Hours transcribed</p></div>
          <div><p className="font-display text-2xl font-semibold text-ink">342</p><p className="text-[11px] text-muted">Files transcribed</p></div>
        </div>
        <p className="mt-4 text-[11px] font-medium text-ink-2">By source</p>
        <div className="mt-2 flex flex-col gap-2">
          {SOURCES.map(([l, n, w]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="w-20 shrink-0 text-[11px] text-ink-2">{l}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-soft"><span className="block h-full rounded-full bg-accent" style={{ width: `${w}%` }} /></span>
              <span className="w-6 shrink-0 text-right font-mono text-[11px] text-muted">{n}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 text-[13px] font-semibold text-ink">Today's Events <ChevronRight size={14} className="text-muted" /></div>
        <div className="mt-3 flex flex-col gap-2.5">
          {EVENTS.map(([time, t, a]) => (
            <div key={t} className="rounded-xl border border-border bg-white p-3">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /><span className="font-mono text-[11px] text-ink-2">{time}</span></div>
              <p className="mt-1.5 truncate text-[12px] font-medium text-ink">{t}</p>
              <p className="mt-1 text-[11px] text-muted">{a} attendees</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
