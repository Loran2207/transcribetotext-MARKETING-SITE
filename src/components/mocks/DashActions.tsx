import { Mic, Youtube, Link2, Video, Users } from "lucide-react";
import { Waveform } from "../primitives/Waveform";

function Badge({ k }: { k: string }) {
  return <span className="absolute right-2.5 top-2.5 rounded-md bg-white px-1.5 py-0.5 font-mono text-[10px] text-muted shadow-soft">{"⌘"}{k}</span>;
}
const CARD = "relative overflow-hidden rounded-2xl border border-border bg-surface-soft p-4";
const FILE = "grid h-14 w-10 place-items-center rounded-lg border border-border bg-white font-mono text-[8px] text-muted shadow-soft";

export function DashActions() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
      <div className={CARD}>
        <Badge k="1" />
        <div className="flex h-14 items-center justify-center -space-x-3">
          <span className={`${FILE} -rotate-12`}>MP4</span>
          <span className="z-10 grid h-14 w-10 place-items-center rounded-lg border border-accent/30 bg-accent-soft font-mono text-[9px] font-semibold text-accent shadow-soft">MOV</span>
          <span className={`${FILE} rotate-12`}>+10</span>
        </div>
        <p className="mt-3 text-[13px] font-semibold text-ink">Audio & Video Files</p>
      </div>
      <div className={CARD}>
        <Badge k="2" />
        <div className="flex h-14 items-center justify-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(180deg,#3B82F6,#2563EB)] text-white shadow-blue"><Mic size={18} /></span>
          <Waveform bars={9} height={22} color="accent" />
        </div>
        <p className="mt-3 text-[13px] font-semibold text-ink">Instant speech</p>
      </div>
      <div className={CARD}>
        <Badge k="3" />
        <div className="flex h-14 items-center justify-center -space-x-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-accent-soft text-accent shadow-soft"><Video size={15} /></span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-white text-ink-2 shadow-soft"><Users size={15} /></span>
          <span className="z-10 grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-accent text-white shadow-soft"><Mic size={13} /></span>
        </div>
        <p className="mt-3 text-[13px] font-semibold text-ink">Meeting Recorder</p>
      </div>
      <div className={CARD}>
        <Badge k="4" />
        <div className="flex h-14 items-center justify-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FF0000]/10 text-[#FF0000]"><Youtube size={18} /></span>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent"><Link2 size={16} /></span>
        </div>
        <p className="mt-3 text-[13px] font-semibold text-ink">Transcribe from Link</p>
      </div>
    </div>
  );
}
