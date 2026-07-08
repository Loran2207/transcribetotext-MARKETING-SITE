import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../primitives/Container";
import { AudioToTextViz } from "../mocks/AudioToTextViz";
import { audioToText } from "../../data/content";
import { EASE_OUT, fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function AudioToText() {
  return (
    <section id="features" className="relative overflow-hidden rounded-[36px] bg-dark py-20 md:rounded-[56px] md:py-28">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <Container className="relative">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="md:col-span-6">
            <motion.span variants={fadeUp} className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent-glow">Audio to text</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink-invert sm:text-4xl md:text-[42px] md:leading-[1.1]">{audioToText.heading}</motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-invert">{audioToText.description}</motion.p>
            <motion.div variants={stagger(0.03)} className="mt-7 flex flex-wrap gap-2.5">
              {audioToText.formats.map((f) => (<motion.span key={f} variants={fadeUp} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-invert">{f}</motion.span>))}
            </motion.div>
            <motion.a variants={fadeUp} href="#pricing" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-glow">Start transcribing <ArrowRight size={15} /></motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease: EASE_OUT }} className="relative md:col-span-6">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-8 opacity-70 blur-[80px]" style={{ background: "radial-gradient(closest-side, rgba(37,99,235,0.35), transparent)" }} />
            <div className="relative"><AudioToTextViz /></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
