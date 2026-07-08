import { motion } from "framer-motion";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { howItWorks } from "../../data/content";
import { brand } from "../../data/assets";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function HowItWorks() {
  return (
    <Section id="how" tone="white">
      <SectionHeading eyebrow="How it works" title={howItWorks.title} subtitle={howItWorks.subtitle} />
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent md:block" />
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-12 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((s, i) => (
            <motion.div key={s.n} variants={fadeUp} className="relative flex flex-col items-center text-center">
              <div className="relative grid h-20 w-20 place-items-center rounded-3xl border border-border bg-white shadow-soft">
                <img src={brand.steps[i]} alt="" className="h-10 w-10" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-semibold text-white shadow-blue">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-3 max-w-sm text-pretty leading-relaxed text-ink-2">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-14 flex justify-center">
        <Button href="#pricing" size="lg">{howItWorks.cta}</Button>
      </div>
    </Section>
  );
}
