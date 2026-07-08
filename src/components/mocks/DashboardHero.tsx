import { Search } from "lucide-react";
import { DashSidebar } from "./DashSidebar";
import { DashMain } from "./DashMain";
import { DashPanel } from "./DashPanel";

export function DashboardHero() {
  return (
    <div className="w-full overflow-hidden rounded-[20px] border border-border bg-white text-left shadow-lift">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex w-full max-w-xs items-center gap-2 rounded-full border border-border bg-surface-soft px-3 py-1.5 text-[12px] text-muted">
          <Search size={13} /> Quick Find
          <span className="ml-auto rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-muted shadow-soft">Ctrl K</span>
        </div>
        <span className="ml-auto hidden font-mono text-[11px] text-muted md:inline">support@transcribetotext.ai</span>
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-accent-soft" />
          <div className="hidden leading-tight sm:block">
            <p className="text-[11px] font-semibold text-ink">admin@test.com</p>
            <p className="text-[10px] text-muted">Pro Plan</p>
          </div>
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
