import { motion } from "framer-motion";
import { Infinity as InfinityIcon, Zap, ShieldCheck, Link2, FileAudio, Download, ArrowUpRight } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { premiumFeatures } from "../../data/content";
import { fadeUp, stagger, viewportOnce, SPRING } from "../../lib/motion";

const ICONS = [InfinityIcon, Zap, ShieldCheck, Link2, FileAudio, Download];
const WIDE = new Set([0, 3]);

export function Features() {
  return (
    <Section id="premium" tone="dark">
      <SectionHeading eyebrow="Premium" title={premiumFeatures.title} />
      <motion.div
        variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {premiumFeatures.items.map((f, i) => {
          const Icon = ICONS[i];
          const surface = i % 2 === 1 ? "bg-surface-2" : "bg-surface-1";
          return (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={SPRING}
              className={`group relative flex flex-col overflow-hidden rounded-tile border border-border ${surface} p-6 transition-colors hover:border-border-strong ${WIDE.has(i) ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-accent-hi">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <ArrowUpRight size={18} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{f.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-fg-2">{f.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
