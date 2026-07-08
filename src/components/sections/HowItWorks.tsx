import { motion } from "framer-motion";
import { Upload, Languages as LangIcon, FileCheck2 } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { howItWorks } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const ICONS = [Upload, LangIcon, FileCheck2];

export function HowItWorks() {
  return (
    <Section id="how" tone="dark">
      <SectionHeading eyebrow="How it works" title={howItWorks.title} subtitle={howItWorks.subtitle} />
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />
        <motion.div
          variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="grid gap-10 md:grid-cols-3 md:gap-8"
        >
          {howItWorks.steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={s.n} variants={fadeUp} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-surface-1 text-accent-hi">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-3xl text-muted/50">{s.n}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">{s.title}</h3>
                <p className="mt-3 max-w-sm text-pretty leading-relaxed text-fg-2">{s.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="#pricing" size="lg">{howItWorks.cta}</Button>
      </div>
    </Section>
  );
}
