import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "../primitives/Container";
import { Button } from "../primitives/Button";
import { Waveform } from "../primitives/Waveform";
import { GlowBackground } from "../primitives/GlowBackground";
import { finalCta } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-atmosphere py-24 md:py-32">
      <GlowBackground variant="beacon" className="left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <Container>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl leading-[1.05] tracking-[-0.02em] text-fg md:text-6xl">
            {finalCta.title}
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8">
            <Button href="#pricing" variant="beacon" size="lg" glow>
              {finalCta.cta}
              <ArrowRight size={18} />
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {finalCta.trust.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-fg-2">
                <Check size={15} className="text-success" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {finalCta.items.map((it) => (
            <motion.div key={it.title} variants={fadeUp} className="rounded-card border border-border bg-surface-1/60 p-5 text-left backdrop-blur-sm">
              <p className="text-sm font-semibold text-fg">{it.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-fg-2">{it.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl px-6 opacity-60">
        <Waveform bars={72} height={36} />
      </div>
    </section>
  );
}
