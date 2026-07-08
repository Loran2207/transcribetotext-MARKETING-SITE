import { motion } from "framer-motion";
import { Waveform } from "../primitives/Waveform";

type Line = {
  time: string;
  speaker: string;
  color: string;
  text: string;
  tag?: string;
  highlight?: boolean;
};

const LINES: Line[] = [
  { time: "00:00", speaker: "Host", color: "#4DD4FF", text: "Welcome back to the show. Today we are talking about how AI is changing the way teams work." },
  { time: "00:14", speaker: "Guest", color: "#C46BFF", text: "Thanks for having me. The biggest shift is speed, what took hours now takes seconds." },
  { time: "00:29", speaker: "Host", color: "#4DD4FF", text: "And the accuracy has caught up too.", tag: "[laughter]" },
  { time: "00:41", speaker: "Guest", color: "#C46BFF", text: "Exactly. We hit 99% on clean audio, even with accents and background noise.", highlight: true },
];

export function TranscriptPanel() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] border border-border bg-surface-1/90 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="truncate font-mono text-xs text-muted">interview-2024.mp3</span>
        <span className="ml-auto font-mono text-xs text-muted">18:24</span>
      </div>

      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <Waveform bars={40} height={28} className="flex-1" />
        <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-fg-2">EN to ES</span>
      </div>

      <div className="space-y-4 px-4 py-4 sm:px-5">
        {LINES.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
            className="flex gap-3"
          >
            <span className="mt-1 shrink-0 font-mono text-[11px] text-muted">{l.time}</span>
            <div className="min-w-0">
              <span className="mb-1 flex items-center gap-1.5 text-[13px] font-medium text-fg">
                <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                {l.speaker}
              </span>
              <p className={`text-[13px] leading-relaxed ${l.highlight ? "rounded-md bg-accent/15 px-1.5 py-0.5 text-fg" : "text-fg-2"}`}>
                {l.text}
                {l.tag ? <span className="ml-1 font-mono text-[11px] text-accent-hi">{l.tag}</span> : null}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
