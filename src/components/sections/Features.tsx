import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { premiumFeatures } from "../../data/content";
import { brand } from "../../data/assets";
import { fadeUp, stagger, viewportOnce, SPRING } from "../../lib/motion";

const WIDE = new Set([0, 3]);

export function Features() {
  return (
    <Section id="premium" tone="sky">
      <SectionHeading eyebrow="Premium" title={premiumFeatures.title} />
      <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {premiumFeatures.items.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={SPRING}
            className={`group relative flex flex-col rounded-tile border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card ${WIDE.has(i) ? "lg:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft">
                <img src={brand.features[i]} alt="" className="h-6 w-6" />
              </span>
              <ArrowUpRight size={18} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{f.title}</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-2">{f.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
