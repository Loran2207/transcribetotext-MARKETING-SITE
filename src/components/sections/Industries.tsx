import { motion } from "framer-motion";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { industries } from "../../data/content";
import { brand } from "../../data/assets";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function Industries() {
  return (
    <Section tone="white">
      <SectionHeading eyebrow="Who it is for" title={industries.title} subtitle={industries.subtitle} />
      <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {industries.list.map((name) => (
          <motion.div
            key={name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex items-center gap-3 rounded-card border border-border bg-white p-4 shadow-soft transition-shadow hover:shadow-card"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft">
              {brand.industries[name] ? <img src={brand.industries[name]} alt="" className="h-6 w-6" /> : null}
            </span>
            <span className="text-sm font-semibold text-ink">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
