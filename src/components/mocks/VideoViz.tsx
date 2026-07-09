import { motion } from "framer-motion";
import { Play, Volume2, Rewind, FastForward, Settings, Maximize } from "lucide-react";

const CHIPS = [
  { flag: "🇺🇸", text: "Hello!", pos: "-left-3 top-6" },
  { flag: "🇫🇷", text: "Bonjour!", pos: "-right-3 top-1/2 -translate-y-1/2" },
  { flag: "🇯🇵", text: "こんにちは", pos: "-left-2 -bottom-3" },
];

const CONTROLS = [Volume2, Rewind, Play, FastForward, Settings, Maximize];

export function VideoViz() {
  return (
    <div className="rounded-tile border border-white/10 bg-dark-2 p-5 sm:p-6">
      <div className="relative">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-dark-2 to-black/40">
          <div className="absolute inset-0 grid place-items-center">
            <motion.span
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 ring-1 ring-white/20"
            >
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </motion.span>
          </div>
          <p className="absolute inset-x-0 bottom-4 text-center text-lg font-semibold text-white drop-shadow">Hello!</p>
        </div>
        {CHIPS.map((c) => (
          <span key={c.text} className={`absolute ${c.pos} inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-ink shadow-lg`}>
            <span className="text-[13px] leading-none">{c.flag}</span>
            {c.text}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 text-muted-invert">
        {CONTROLS.map((Icon, i) => (
          <Icon key={i} size={16} className={i === 2 ? "text-ink-invert" : ""} />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="relative flex-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/5 rounded-full bg-accent" />
          </div>
          <span className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow ring-1 ring-black/10" style={{ left: "40%" }} />
        </div>
        <span className="font-mono text-[11px] text-muted-invert">01:41 / 04:12</span>
      </div>
    </div>
  );
}
