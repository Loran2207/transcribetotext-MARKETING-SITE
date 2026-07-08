import { motion } from "framer-motion";
import { GraduationCap, Radio, Landmark, HeartPulse, Newspaper, Scale, Megaphone, Mic, FlaskConical } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { industries } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const ICONS = [GraduationCap, Radio, Landmark, HeartPulse, Newspaper, Scale, Megaphone, Mic, FlaskConical];

export function Industries() {
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="Who it is for" title={industries.title} subtitle={industries.subtitle} />
      <motion.div
        variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {industries.list.map((name, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={name} variants={fadeUp} whileHover={{ y: -4 }}
              className={`flex items-center gap-3 rounded-card border border-border ${i % 2 ? "bg-surface-2" : "bg-surface-1"} p-4 transition-colors hover:border-border-strong`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-accent-hi">
                <Icon size={18} strokeWidth={1.6} />
              </span>
              <span className="text-sm font-medium text-fg">{name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
