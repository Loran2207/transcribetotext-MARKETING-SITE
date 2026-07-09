import { useState } from "react";
import { Tag, Check } from "lucide-react";
import { subscribe } from "../../data/subscribe";

export function PromoCode() {
  const [code, setCode] = useState(subscribe.promo.code);
  const [applied, setApplied] = useState(true);
  return (
    <div className="mx-auto mt-8 max-w-md">
      <div className={`flex items-center gap-2 rounded-2xl border p-2 pl-4 transition-colors ${applied ? "border-deal/40 bg-deal-soft" : "border-border bg-surface-soft"}`}>
        <Tag size={16} className={applied ? "shrink-0 text-deal" : "shrink-0 text-muted"} />
        <input
          value={code}
          onChange={(e) => { setCode(e.target.value); setApplied(false); }}
          placeholder="Enter promo code"
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-ink outline-none placeholder:font-normal placeholder:text-muted"
        />
        {applied ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-deal px-3 py-1.5 text-xs font-semibold text-white"><Check size={13} /> Applied</span>
        ) : (
          <button onClick={() => setApplied(true)} className="shrink-0 rounded-full bg-[linear-gradient(180deg,#3B82F6,#2563EB)] px-4 py-1.5 text-xs font-semibold text-white shadow-blue ring-1 ring-inset ring-white/20 transition-[filter] hover:brightness-[1.05]">Apply</button>
        )}
      </div>
      {applied && <p className="mt-2 text-center text-xs font-semibold text-deal">{subscribe.promo.label}</p>}
    </div>
  );
}
