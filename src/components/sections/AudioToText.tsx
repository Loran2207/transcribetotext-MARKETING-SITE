import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "../primitives/Section";
import { Chip } from "../primitives/Chip";
import { audioToText } from "../../data/content";
import { brand } from "../../data/assets";
import { EASE_OUT, fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function AudioToText() {
  return (
    <Section id="features" tone="sky">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="md:col-span-6">
          <motion.span variants={fadeUp} className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent shadow-soft">Audio to text</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-[42px] md:leading-[1.1]">{audioToText.heading}</motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-ink-2">{audioToText.description}</motion.p>
          <motion.div variants={stagger(0.03)} className="mt-7 flex flex-wrap gap-2.5">
            {audioToText.formats.map((f) => (
              <motion.div key={f} variants={fadeUp}><Chip>{f}</Chip></motion.div>
            ))}
          </motion.div>
          <motion.a variants={fadeUp} href="#pricing" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Start transcribing <ArrowRight size={15} />
          </motion.a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease: EASE_OUT }} className="md:col-span-6">
          <div className="rounded-tile border border-border bg-white p-6 shadow-card md:p-8">
            <img src={brand.compareShot} alt="Transcription quality before and after TranscribeToText.AI" className="mx-auto w-full max-w-md" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
