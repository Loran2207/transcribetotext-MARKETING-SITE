import { UploadCloud } from "lucide-react";

const LINES = [
  { who: "Speaker 1", t: "00:04", text: "Let's kick off the quarterly review.", c: "#4C9BFF" },
  { who: "Speaker 2", t: "00:11", text: "Revenue is up 24% over last quarter.", c: "#7C5CD6" },
  { who: "Speaker 1", t: "00:18", text: "Perfect, let's dig into the details.", c: "#4C9BFF" },
];

export function TranscriptMini() {
  return (
    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-glow">Transcript</span>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-muted-invert">Speakers: 2</span>
        <span className="ml-auto font-mono text-[10px] text-muted-invert/70">EN</span>
      </div>
      <div className="space-y-2.5">
        {LINES.map((l, idx) => (
          <div key={l.t} className="flex gap-2.5">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: l.c }} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-ink-invert">{l.who}</span>
                <span className="font-mono text-[10px] text-muted-invert/70">{l.t}</span>
              </div>
              <p className="text-[12px] leading-relaxed text-muted-invert">
                {l.text}
                {idx === LINES.length - 1 ? (
                  <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] bg-accent-glow" style={{ animation: "caret 1s step-end infinite" }} />
                ) : null}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MeetingLiveMini() {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow/60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-glow" />
      </span>
      <span className="text-[12px] font-medium text-ink-invert">Recording, Weekly Sync</span>
      <span className="ml-auto font-mono text-[11px] text-muted-invert">12:04</span>
    </div>
  );
}

export function FormatDropMini() {
  return (
    <div className="mt-5 flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent-glow ring-1 ring-inset ring-white/10">
        <UploadCloud size={18} strokeWidth={1.7} />
      </span>
      <div>
        <p className="text-[12px] font-medium text-ink-invert">Drop a file to transcribe</p>
        <p className="text-[11px] text-muted-invert">Any format, up to 5GB</p>
      </div>
    </div>
  );
}
