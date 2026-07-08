import { FileVideo, Plus } from "lucide-react";
import { DashActions } from "./DashActions";

const TABS: [string, string][] = [["Recent", "13"], ["Starred", "0"], ["Shared", "3"], ["Trash", "0"]];
const ROWS: [string, string, string, string][] = [
  ["Weekly product sync - Q3", "Meeting Notes", "32 min", "03/13/2026"],
  ["Customer feedback session", "Meeting Notes", "28 min", "03/12/2026"],
  ["Design review - mobile app", "Summary", "41 min", "03/11/2026"],
  ["Sales call - Acme Corp", "Action Items", "24 min", "03/10/2026"],
];

export function DashMain() {
  return (
    <main className="min-w-0 flex-1 p-5">
      <h3 className="font-display text-2xl font-semibold text-ink">Good morning, Admin</h3>
      <DashActions />
      <div className="mt-6 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">My Records</h4>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink-2 shadow-soft"><Plus size={13} /> Add Folder</span>
      </div>
      <div className="mt-3 flex items-center gap-4">
        {TABS.map(([l, n], i) => (
          <span key={l} className={`flex items-center gap-1.5 text-[13px] font-medium ${i === 0 ? "text-ink" : "text-muted"}`}>
            {l} <span className={`rounded-full px-1.5 text-[10px] ${i === 0 ? "bg-accent text-white" : "bg-black/5 text-muted"}`}>{n}</span>
          </span>
        ))}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-border">
        {ROWS.map(([t, tpl, d, date], i) => (
          <div key={t} className={`flex items-center gap-3 px-4 py-3 text-[13px] ${i > 0 ? "border-t border-border" : ""}`}>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent"><FileVideo size={14} /></span>
            <span className="min-w-0 flex-1 truncate font-medium text-ink">{t}</span>
            <span className="hidden shrink-0 rounded-md bg-surface-soft px-2 py-0.5 text-[11px] text-ink-2 sm:inline">{tpl}</span>
            <span className="hidden shrink-0 font-mono text-[11px] text-muted md:inline">{d}</span>
            <span className="hidden shrink-0 font-mono text-[11px] text-muted lg:inline">{date}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
