import { Mic, Video, Users, Youtube, Link2, HardDrive } from "lucide-react";
import { Waveform } from "../primitives/Waveform";

function Badge({ k }: { k: string }) {
  return <span className="absolute right-2.5 top-2.5 rounded-md bg-white px-1.5 py-0.5 font-mono text-[10px] text-muted shadow-soft">{"⌘"}{k}</span>;
}
const CARD = "relative overflow-hidden rounded-2xl border border-border bg-surface-soft p-4";

export function DashActions() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
      <div className={CARD}>
        <Badge k="1" />
        <div className="relative mx-auto flex h-[68px] items-center justify-center">
          <span className="absolute -translate-x-8 -rotate-[14deg] grid h-16 w-12 place-items-center rounded-xl border border-[#CDBFF2] bg-[#EDE8FB] font-mono text-[9px] font-semibold text-[#7C5CD6] shadow-soft">MP4</span>
          <span className="absolute z-10 grid h-16 w-12 place-items-center rounded-xl border border-[#9DBEF5] bg-[#E3EEFE] font-mono text-[10px] font-semibold text-accent shadow-card">MOV</span>
          <span className="absolute translate-x-8 rotate-[14deg] grid h-16 w-12 place-items-center rounded-xl border border-[#F2B8CE] bg-[#FBE7EF] font-mono text-[9px] font-semibold text-[#D6478A] shadow-soft">+10</span>
        </div>
        <p className="mt-4 text-[13px] font-semibold text-ink">Audio & Video Files</p>
      </div>

      <div className={CARD}>
        <Badge k="2" />
        <div className="flex h-[68px] items-center justify-center">
          <div className="relative h-16 w-24 rounded-xl border border-border bg-white p-2.5 shadow-card">
            <span className="block h-1.5 w-12 rounded-full bg-accent-soft" />
            <span className="mt-1.5 block h-1.5 w-16 rounded-full bg-[#EEF1F7]" />
            <span className="mt-1.5 block h-1.5 w-9 rounded-full bg-[#EEF1F7]" />
            <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(180deg,#3B82F6,#2563EB)] text-white shadow-blue"><Mic size={14} /></span>
            <span className="absolute -bottom-2 left-2 rounded-md bg-white px-1.5 py-1 shadow-soft"><Waveform bars={7} height={12} color="accent" /></span>
          </div>
        </div>
        <p className="mt-4 text-[13px] font-semibold text-ink">Instant speech</p>
      </div>

      <div className={CARD}>
        <Badge k="3" />
        <div className="relative flex h-[68px] items-center justify-center">
          <div className="grid h-16 w-24 place-items-center rounded-xl bg-[linear-gradient(135deg,#CBDDFF,#EAD9FB)] shadow-card"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/70 text-accent"><Video size={16} /></span></div>
          <div className="absolute -top-1 flex -space-x-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-md border border-border bg-white shadow-soft"><Video size={12} className="text-[#00AC47]" /></span>
            <span className="grid h-6 w-6 place-items-center rounded-md border border-border bg-white shadow-soft"><Video size={12} className="text-[#2D8CFF]" /></span>
            <span className="grid h-6 w-6 place-items-center rounded-md border border-border bg-white shadow-soft"><Users size={12} className="text-[#5B5FC7]" /></span>
          </div>
        </div>
        <p className="mt-4 text-[13px] font-semibold text-ink">Meeting Recorder</p>
      </div>

      <div className={CARD}>
        <Badge k="4" />
        <div className="relative flex h-[68px] items-center justify-center">
          <span className="absolute -translate-x-6 -rotate-12 grid h-14 w-11 place-items-center rounded-xl border border-[#FCE0A6] bg-[#FEF6E6] shadow-soft"><HardDrive size={16} className="text-[#F4B400]" /></span>
          <span className="absolute z-10 grid h-14 w-11 place-items-center rounded-xl border border-[#F5B8B8] bg-[#FDECEC] shadow-card"><Youtube size={18} className="text-[#FF0000]" /></span>
          <span className="absolute translate-x-6 rotate-12 grid h-14 w-11 place-items-center rounded-xl border border-[#B8D0F5] bg-[#EAF1FE] shadow-soft"><Link2 size={16} className="text-accent" /></span>
        </div>
        <p className="mt-4 text-[13px] font-semibold text-ink">Transcribe from Link</p>
      </div>
    </div>
  );
}
