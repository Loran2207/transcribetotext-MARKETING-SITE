import { motion } from "framer-motion";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { LangRow } from "../mocks/LangRow";
import { languages } from "../../data/content";
import { fadeUp, viewportOnce } from "../../lib/motion";

const half = Math.ceil(languages.list.length / 2);
const row1 = languages.list.slice(0, half);
const row2 = languages.list.slice(half);
const MASK = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

export function Languages() {
  return (
    <Section id="languages" tone="white">
      <SectionHeading eyebrow={`${languages.count} languages`} title={languages.title} subtitle={languages.subtitle} />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 flex flex-col gap-3 overflow-hidden"
        style={{ WebkitMaskImage: MASK, maskImage: MASK }}
      >
        <LangRow items={row1} />
        <LangRow items={row2} reverse />
      </motion.div>
      <div className="mt-12 flex justify-center">
        <Button href="#" variant="outline" size="md">{languages.cta}</Button>
      </div>
    </Section>
  );
}
