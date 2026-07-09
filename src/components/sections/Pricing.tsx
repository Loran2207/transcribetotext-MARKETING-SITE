import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { pricing } from "../../data/content";
import { SPRING, viewportOnce } from "../../lib/motion";

const GRID_MASK = "radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,0.55), transparent 72%)";

function Feature({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-ink-2">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft"><Check size={13} className="text-accent" /></span>
      <span>{children}</span>
    </li>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const p = pricing.premium;
  const price = yearly ? p.yearlyPrice : p.monthlyPrice;
  const note = yearly ? p.yearlyNote : p.monthlyNote;
  return (
    <Section id="pricing" tone="sky" cutout="#FFFFFF" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid-lines-fine pointer-events-none absolute inset-0" style={{ WebkitMaskImage: GRID_MASK, maskImage: GRID_MASK }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="relative">
        <SectionHeading eyebrow="Pricing" title="Simple pricing that scales with you" />
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 shadow-soft">
            {([["monthly", false], ["yearly", true]] as const).map(([label, val]) => (
              <button key={label} onClick={() => setYearly(val)} className="relative rounded-full px-4 py-2 text-sm font-medium">
                {yearly === val && <motion.span layoutId="toggle" transition={SPRING} className="absolute inset-0 rounded-full bg-accent" />}
                <span className={`relative z-10 ${yearly === val ? "text-white" : "text-ink-2"}`}>{label === "monthly" ? pricing.toggle.monthly : pricing.toggle.yearly}</span>
                {label === "yearly" && <span className={`relative z-10 ml-2 rounded-full px-2 py-0.5 text-[11px] font-semibold ${yearly ? "bg-white/25 text-white" : "bg-accent-soft text-accent"}`}>{pricing.toggle.save}</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6 }} className="flex h-full flex-col rounded-tile border border-border bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold text-ink-2">{pricing.free.name}</p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">{pricing.free.price}</p>
            <ul className="mt-8 flex-1 space-y-4">
              {pricing.free.features.map((f) => (<Feature key={f}>{f}</Feature>))}
            </ul>
            <div className="mt-8"><Button href="#" variant="outline" size="lg" className="w-full">{pricing.free.cta}</Button></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, delay: 0.08 }} className="relative h-full">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 rounded-[38px] opacity-70 blur-2xl" style={{ background: "radial-gradient(closest-side, rgba(37,99,235,0.28), transparent)" }} />
            <div className="h-full rounded-tile p-[1.5px] shadow-blue" style={{ background: "linear-gradient(180deg,#3B82F6,#2563EB)" }}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] bg-white p-8">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-44" style={{ background: "linear-gradient(180deg, rgba(37,99,235,0.07), transparent)" }} />
                <div className="relative flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">{p.name}</p>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "linear-gradient(180deg,#3B82F6,#2563EB)" }}>{pricing.popular}</span>
                </div>
                <div className="relative mt-3 flex items-end gap-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span key={price} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="font-display text-5xl font-semibold tracking-tight text-ink">{price}</motion.span>
                  </AnimatePresence>
                  <span className="mb-1.5 text-xs text-muted">{note}</span>
                </div>
                <ul className="relative mt-8 flex-1 space-y-4">
                  {p.features.map((f) => (<Feature key={f}>{f}</Feature>))}
                </ul>
                <div className="relative mt-8"><Button href="#" size="lg" className="w-full">{yearly ? p.ctaYearly : p.ctaMonthly}</Button></div>
              </div>
            </div>
          </motion.div>
        </div>
        <p className="mt-8 text-center text-xs text-muted">{pricing.badge}</p>
      </div>
    </Section>
  );
}
