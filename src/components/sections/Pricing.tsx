import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { pricing } from "../../data/content";
import { SPRING, viewportOnce } from "../../lib/motion";

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const p = pricing.premium;
  const price = yearly ? p.yearlyPrice : p.monthlyPrice;
  const note = yearly ? p.yearlyNote : p.monthlyNote;
  return (
    <Section id="pricing" tone="sky">
      <SectionHeading eyebrow="Pricing" title="Simple pricing that scales with you" />
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 shadow-soft">
          {([["monthly", false], ["yearly", true]] as const).map(([label, val]) => (
            <button key={label} onClick={() => setYearly(val)} className="relative rounded-full px-4 py-2 text-sm font-medium">
              {yearly === val && <motion.span layoutId="toggle" transition={SPRING} className="absolute inset-0 -z-10 rounded-full bg-accent" />}
              <span className={yearly === val ? "text-white" : "text-ink-2"}>{label === "monthly" ? pricing.toggle.monthly : pricing.toggle.yearly}</span>
              {label === "yearly" && <span className={`ml-2 rounded-full px-2 py-0.5 text-[11px] font-semibold ${yearly ? "bg-white/25 text-white" : "bg-accent-soft text-accent"}`}>{pricing.toggle.save}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl items-start gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6 }} className="rounded-tile border border-border bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold text-ink-2">{pricing.free.name}</p>
          <p className="mt-4 font-display text-4xl font-semibold text-ink">{pricing.free.price}</p>
          <div className="mt-8"><Button href="#" variant="outline" size="lg" className="w-full">{pricing.free.cta}</Button></div>
          <ul className="mt-8 space-y-4">
            {pricing.free.features.map((f) => (<li key={f} className="flex gap-3 text-sm text-ink-2"><Check size={18} className="mt-0.5 shrink-0 text-muted" /><span>{f}</span></li>))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, delay: 0.08 }} className="relative rounded-tile border-2 border-accent bg-white p-8 shadow-lift">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">{p.name}</p>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">{pricing.popular}</span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <AnimatePresence mode="popLayout">
              <motion.span key={price} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="font-display text-5xl font-semibold text-ink">{price}</motion.span>
            </AnimatePresence>
            <span className="mb-1.5 text-xs text-muted">{note}</span>
          </div>
          <div className="mt-8"><Button href="#" size="lg" className="w-full">{yearly ? p.ctaYearly : p.ctaMonthly}</Button></div>
          <ul className="mt-8 space-y-4">
            {p.features.map((f) => (<li key={f} className="flex gap-3 text-sm text-ink-2"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft"><Check size={13} className="text-accent" /></span><span>{f}</span></li>))}
          </ul>
        </motion.div>
      </div>
      <p className="mt-8 text-center text-xs text-muted">{pricing.badge}</p>
    </Section>
  );
}
