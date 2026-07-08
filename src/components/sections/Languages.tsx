import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { languages } from "../../data/content";
import { brand } from "../../data/assets";
import { viewportOnce } from "../../lib/motion";

export function Languages() {
  return (
    <Section id="languages" tone="white">
      <SectionHeading eyebrow={`${languages.count} languages`} title={languages.title} subtitle={languages.subtitle} />
      <div className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-soft">
        <Search size={16} className="text-muted" />
        <span className="text-sm text-muted">Search 117 languages</span>
        <span className="ml-auto rounded-md bg-accent-soft px-1.5 py-0.5 text-[11px] font-medium text-accent">{languages.highlightPair}</span>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
        className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
      >
        {languages.list.map((l) => (
          <motion.span
            key={l}
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
          >
            {brand.langFlags[l] ? <img src={brand.langFlags[l]} alt="" className="h-4 w-4 shrink-0 rounded-full object-cover" /> : null}
            {l}
          </motion.span>
        ))}
      </motion.div>
      <div className="mt-10 flex justify-center">
        <Button href="#" variant="outline" size="md">{languages.cta}</Button>
      </div>
    </Section>
  );
}
