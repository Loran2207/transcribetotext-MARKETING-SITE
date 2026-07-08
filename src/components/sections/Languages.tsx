import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { Button } from "../primitives/Button";
import { languages } from "../../data/content";
import { viewportOnce } from "../../lib/motion";

export function Languages() {
  return (
    <Section id="languages" tone="dark">
      <SectionHeading
        eyebrow={`${languages.count} languages`}
        title={languages.title}
        subtitle={languages.subtitle}
      />
      <div className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-border bg-surface-1 px-4 py-2.5">
        <Search size={16} className="text-muted" />
        <span className="text-sm text-muted">Search 117 languages</span>
        <span className="ml-auto rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[11px] text-muted">{languages.highlightPair}</span>
      </div>
      <motion.div
        initial="hidden" whileInView="show" viewport={viewportOnce}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.015 } } }}
        className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
      >
        {languages.list.map((l) => (
          <motion.span
            key={l}
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="rounded-full border border-border bg-surface-1 px-4 py-2 font-mono text-sm text-fg-2"
          >
            {l}
          </motion.span>
        ))}
      </motion.div>
      <div className="mt-10 flex justify-center">
        <Button href="#" variant="ghost" size="md">{languages.cta}</Button>
      </div>
    </Section>
  );
}
