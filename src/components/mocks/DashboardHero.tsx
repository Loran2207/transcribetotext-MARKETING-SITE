import { motion } from "framer-motion";
import { Play, Sparkles, Download } from "lucide-react";
import { Waveform } from "../primitives/Waveform";

const NAV = ["Home", "My records", "Meetings", "Templates", "Shared"];
const LINES = [
  { t: "00:04", s: "Sarah", c: "#0088EB", x: "Let's kick off the Q3 review. Revenue is up 24% quarter over quarter." },
  { t: "00:19", s: "David", c: "#7B6BFF", x: "That's ahead of plan. The new onboarding is converting much better." },
  { t: "00:33", s: "Sarah", c: "#0088EB", x: "Agreed. Let's double down on it next quarter.", hl: true },
  { t: "00:48", s: "David", c: "#7B6BFF", x: "I'll prepare the roadmap.", tag: "[applause]" },
];

export function DashboardHero() {
  return (
    <div className="w-full overflow-hidden rounded-[20px] border border-border bg-white text-left shadow-lift">
      <div className="flex items-center gap-3 border-b border-border bg-surface-soft px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 font-mono text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> app.transcribetotext.ai
        </div>
        <div className="h-6 w-6 rounded-full bg-accent-soft" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr_244px]">
        <aside className="hidden flex-col gap-1 border-r border-border p-3 md:flex">
          {NAV.map((n, i) => (
            <span key={n} className={`rounded-lg px-3 py-2 text-[13px] font-medium ${i === 0 ? "bg-accent-soft text-accent" : "text-ink-2"}`}>{n}</span>
          ))}
        </aside>
        <main className="min-w-0 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">Q3 board meeting.mp4</p>
              <p className="font-mono text-[11px] text-muted">48:12 · 2 speakers</p>
            </div>
            <span className="ml-auto hidden rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-ink-2 sm:inline">EN to ES</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white"><Download size={13} /> Export</span>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface-soft px-3 py-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-white"><Play size={12} /></span>
            <Waveform bars={38} height={26} color="accent" className="flex-1" />
            <span className="font-mono text-[11px] text-muted">12:04</span>
          </div>
          <div className="mt-4 space-y-3.5">
            {LINES.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12, duration: 0.4 }} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[11px] text-muted">{l.t}</span>
                <div className="min-w-0">
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold text-ink"><span className="h-2 w-2 rounded-full" style={{ background: l.c }} />{l.s}</span>
                  <p className={`mt-0.5 text-[13px] leading-relaxed ${l.hl ? "rounded-md bg-accent-soft px-1.5 py-0.5 text-ink" : "text-ink-2"}`}>{l.x}{l.tag ? <span className="ml-1 font-mono text-[11px] text-accent">{l.tag}</span> : null}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        <aside className="hidden border-l border-border p-4 lg:block">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-ink"><Sparkles size={15} className="text-accent" /> AI summary</div>
          <div className="mt-4 space-y-2.5">
            {["Revenue grew 24% QoQ, ahead of plan.", "New onboarding lifted conversion.", "Team to double down next quarter."].map((s) => (
              <div key={s} className="flex gap-2 text-[12px] leading-relaxed text-ink-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{s}</div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-border bg-surface-soft p-3">
            <p className="font-mono text-[10px] text-muted">Template</p>
            <p className="mt-1 text-[12px] font-medium text-ink">Meeting notes</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
