import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "../primitives/Container";
import { SectionCutout } from "../primitives/SectionCutout";
import { StarField } from "../mocks/StarField";
import { EncryptionViz } from "../mocks/EncryptionViz";
import { security } from "../../data/content";
import { EASE_OUT, fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function Security() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 md:py-28">
      <SectionCutout />
      <StarField />
      <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={viewportOnce} transition={{ duration: 1.1, ease: EASE_OUT }} className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <Container className="relative">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col items-center gap-3 text-center">
          <motion.span variants={fadeUp} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent-glow">{security.eyebrow}</motion.span>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink-invert sm:text-4xl md:text-[44px] md:leading-[1.08]">{security.title}</motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-pretty text-lg leading-relaxed text-muted-invert">{security.subtitle}</motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }} whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={viewportOnce} transition={{ duration: 0.9, ease: EASE_OUT }} className="mt-10">
          <EncryptionViz />
        </motion.div>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {security.chips.map((c) => (
            <motion.span key={c} variants={fadeUp} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-invert">
              <Check size={14} className="text-accent-glow" /> {c}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
