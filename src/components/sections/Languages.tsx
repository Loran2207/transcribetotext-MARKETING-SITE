import { motion } from "framer-motion";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { LangRow } from "../mocks/LangRow";
import { GlobeViz } from "../mocks/GlobeViz";
import { languages } from "../../data/content";
import { fadeUp, viewportOnce } from "../../lib/motion";

const half = Math.ceil(languages.list.length / 2);
const row1 = languages.list.slice(0, half);
const row2 = languages.list.slice(half);
const MASK = "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

export function Languages() {
  return (
    <Section id="languages" tone="white" className="overflow-hidden">
      <SectionHeading eyebrow={`${languages.count} languages`} title={languages.title} subtitle={languages.subtitle} />
      <div className="relative mt-8">
        <GlobeViz className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 opacity-80" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[60px]" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative flex flex-col gap-4 overflow-hidden py-6"
          style={{ WebkitMaskImage: MASK, maskImage: MASK }}
        >
          <LangRow items={row1} />
          <LangRow items={row2} reverse />
        </motion.div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="#" variant="outline" size="md">{languages.cta}</Button>
      </div>
    </Section>
  );
}
