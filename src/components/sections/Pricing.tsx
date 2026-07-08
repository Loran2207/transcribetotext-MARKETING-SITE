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
    <Section id="pricing" tone="dark">
      <SectionHeading eyebrow="Pricing" title="Simple pricing that scales with you" />

      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-1 p-1">
          {([["monthly", false], ["yearly", true]] as const).map(([label, val]) => (
            <button key={label} onClick={() => setYearly(val)} className="relative rounded-full px-4 py-2 text-sm font-medium">
              {yearly === val && (
                <motion.span layoutId="toggle" transition={SPRING} className="absolute inset-0 -z-10 rounded-full bg-accent" />
              )}
              <span className={yearly === val ? "text-white" : "text-muted"}>
                {label === "monthly" ? pricing.toggle.monthly : pricing.toggle.yearly}
              </span>
              {label === "yearly" && (
                <span className="ml-2 rounded-full bg-success/15 px-2 py-0.5 font-mono text-[11px] text-success">{pricing.toggle.save}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl items-start gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="rounded-tile border border-border bg-surface-1 p-8"
        >
          <p className="text-sm font-medium text-muted">{pricing.free.name}</p>
          <p className="mt-4 font-display text-4xl text-fg">{pricing.free.price}</p>
          <div className="mt-8">
            <Button href="#" variant="ghost" size="lg" className="w-full">{pricing.free.cta}</Button>
          </div>
          <ul className="mt-8 space-y-4">
            {pricing.free.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-fg-2">
                <Check size={18} className="mt-0.5 shrink-0 text-muted" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative rounded-tile p-[1.5px]"
          style={{ background: "var(--beacon)" }}
        >
          <div className="rounded-[22px] bg-surface-1 p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-fg">{p.name}</p>
              <span className="rounded-full bg-beacon px-3 py-1 text-xs font-medium text-white">{pricing.popular}</span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <AnimatePresence mode="popLayout">
                <motion.span key={price} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="font-display text-5xl text-fg">
                  {price}
                </motion.span>
              </AnimatePresence>
              <span className="mb-1.5 font-mono text-xs text-muted">{note}</span>
            </div>
            <div className="mt-8">
              <Button href="#" variant="beacon" size="lg" glow className="w-full">
                {yearly ? p.ctaYearly : p.ctaMonthly}
              </Button>
            </div>
            <ul className="mt-8 space-y-4">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-fg-2">
                  <Check size={18} className="mt-0.5 shrink-0 text-success" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted">{pricing.badge}</p>
    </Section>
  );
}
