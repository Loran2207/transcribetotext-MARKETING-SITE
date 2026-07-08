import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "../primitives/Button";
import { Eyebrow } from "../primitives/Eyebrow";
import { Waveform } from "../primitives/Waveform";
import { GlowBackground } from "../primitives/GlowBackground";
import { TranscriptPanel } from "../mocks/TranscriptPanel";
import { hero } from "../../data/content";
import { EASE_OUT, fadeUp, stagger } from "../../lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden bg-atmosphere pt-32 pb-20 md:pt-40 md:pb-28">
      <GlowBackground className="left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 opacity-70" />
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-1/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-hi" />
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-display text-[44px] leading-[1.03] tracking-[-0.02em] text-fg sm:text-6xl md:text-[76px]"
          >
            {hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fg-2 md:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#pricing" variant="beacon" size="lg" glow>
              {hero.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <Button href="#how" variant="ghost" size="lg">
              <Play size={16} />
              {hero.secondaryCta}
            </Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 font-mono text-xs text-muted">
            No credit card required
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: EASE_OUT }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <GlowBackground className="inset-x-8 bottom-0 top-10 opacity-60" />
          <TranscriptPanel />
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <Waveform bars={64} height={44} className="opacity-80" animated={!reduce} />
      </div>
    </section>
  );
}
