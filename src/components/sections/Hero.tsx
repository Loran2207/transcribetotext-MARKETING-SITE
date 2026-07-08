import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "../primitives/Button";
import { GlowBackground } from "../primitives/GlowBackground";
import { hero } from "../../data/content";
import { brand } from "../../data/assets";
import { EASE_OUT, fadeUp, stagger } from "../../lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-wash pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.div variants={stagger(0.09)} initial="hidden" animate="show" className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-accent shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {hero.eyebrow}
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 text-balance font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-ink sm:text-6xl md:text-[68px]">
            {hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-2 md:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#pricing" size="lg">{hero.primaryCta} <ArrowRight size={18} /></Button>
            <Button href="#how" variant="outline" size="lg"><Play size={16} /> {hero.secondaryCta}</Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-sm text-muted">No credit card required</motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: EASE_OUT }}
          className="relative mx-auto mt-16 max-w-2xl"
        >
          <GlowBackground className="inset-x-0 -top-4 bottom-8 opacity-90" />
          <GlowBackground variant="teal" className="right-0 top-1/3 h-40 w-40 opacity-70" />
          <img
            src={brand.heroShot}
            alt="TranscribeToText.AI upload and transcription interface"
            className="relative mx-auto w-full drop-shadow-[0_30px_60px_rgba(16,24,40,0.16)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
