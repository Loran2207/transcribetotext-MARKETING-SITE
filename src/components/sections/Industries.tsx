import { motion } from "framer-motion";
import { GraduationCap, Radio, Landmark, HeartPulse, Newspaper, Scale, Megaphone, Mic, FlaskConical } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { industries } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const ICONS = [GraduationCap, Radio, Landmark, HeartPulse, Newspaper, Scale, Megaphone, Mic, FlaskConical];

export function Industries() {
  return (
    <Section tone="white">
      <SectionHeading eyebrow="Who it is for" title={industries.title} subtitle={industries.subtitle} />
      <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {industries.list.map((name, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div key={name} variants={fadeUp} whileHover={{ y: -4 }} className="group flex items-center gap-3 rounded-card border border-border bg-white p-4 shadow-soft transition-all hover:border-accent/40 hover:shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={20} strokeWidth={1.7} />
              </span>
              <span className="text-sm font-semibold text-ink">{name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
