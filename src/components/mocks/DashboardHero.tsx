import { Search, Zap, HelpCircle, ChevronDown } from "lucide-react";
import { DashSidebar } from "./DashSidebar";
import { DashMain } from "./DashMain";
import { DashPanel } from "./DashPanel";
import { brand } from "../../data/assets";

export function DashboardHero() {
  return (
    <div className="w-full overflow-hidden rounded-[20px] border border-border bg-white text-left shadow-lift">
      <div className="flex items-center gap-4 border-b border-border px-4 py-2.5">
        <img src={brand.logo} alt="Transcribe To Text" className="h-6 w-auto shrink-0 object-contain" style={{ maxWidth: 176 }} />
        <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-border bg-surface-soft px-3 py-1.5 text-[12px] text-muted">
          <Search size={13} /> Quick Find
          <span className="ml-auto rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-muted shadow-soft">Ctrl K</span>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] font-medium text-accent">
          <Zap size={13} fill="currentColor" /> Start my trial now
        </span>
        <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] text-muted">
          <HelpCircle size={14} /> support@transcribetotext.ai
        </span>
        <div className="flex items-center gap-2">
          <img src={brand.avatars[0]} alt="" className="h-7 w-7 rounded-full object-cover ring-1 ring-border" />
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-ink">admin@test.com</p>
            <p className="text-[10px] text-muted">Free Plan</p>
          </div>
          <ChevronDown size={13} className="text-muted" />
        </div>
      </div>
      <div className="flex">
        <DashSidebar />
        <DashMain />
        <DashPanel />
      </div>
    </div>
  );
}
