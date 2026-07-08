import { Video } from "lucide-react";

const SOURCES: [string, number, number][] = [
  ["Zoom", 138, 100], ["Google Meet", 92, 68], ["Microphone", 64, 46], ["File upload", 48, 34],
];
type Ev = { time: string; t: string; a: number; auto?: boolean };
const EVENTS: Ev[] = [
  { time: "09:30 - 10:00", t: "Design sync - weekly", a: 5, auto: true },
  { time: "11:00 - 11:30", t: "Product standup", a: 8 },
  { time: "14:00 - 15:00", t: "Nexora - QL - instance daily", a: 4 },
  { time: "16:30 - 17:00", t: "Customer onboarding call", a: 3 },
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
        <p className="text-[13px] font-semibold text-ink">Today's Events</p>
        <div className="mt-3 flex flex-col gap-2.5">
          {EVENTS.map((e) => (
            <div key={e.t} className="flex gap-2.5 rounded-xl border border-border bg-white p-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E6F4EA]"><Video size={15} className="text-[#00AC47]" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] text-ink-2">{e.time}</p>
                <p className="truncate text-[12px] font-medium text-ink">{e.t}</p>
                <div className="mt-1 flex items-center gap-2.5">
                  {e.auto ? <span className="flex items-center gap-1 text-[10px] text-muted"><span className="flex h-3 w-5 items-center rounded-full bg-accent px-0.5"><span className="ml-auto h-2 w-2 rounded-full bg-white" /></span> Auto-join</span> : null}
                  <span className="text-[10px] text-muted">{e.a} attendees</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
