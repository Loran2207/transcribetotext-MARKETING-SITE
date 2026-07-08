import { motion } from "framer-motion";
import { FileAudio, ArrowRight } from "lucide-react";
import { Section } from "../primitives/Section";
import { Eyebrow } from "../primitives/Eyebrow";
import { Chip } from "../primitives/Chip";
import { Waveform } from "../primitives/Waveform";
import { GlowBackground } from "../primitives/GlowBackground";
import { audioToText } from "../../data/content";
import { EASE_OUT, fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function AudioToText() {
  return (
    <Section id="features" tone="dark">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="md:col-span-6">
          <motion.div variants={fadeUp}><Eyebrow>Audio to text</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[42px] md:leading-[1.1]">
            {audioToText.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-fg-2">
            {audioToText.description}
          </motion.p>
          <motion.div variants={stagger(0.03)} className="mt-7 flex flex-wrap gap-2">
            {audioToText.formats.map((f) => (
              <motion.div key={f} variants={fadeUp}><Chip>{f}</Chip></motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE_OUT }} className="relative md:col-span-6"
        >
          <GlowBackground className="inset-6 opacity-50" />
          <div className="relative overflow-hidden rounded-tile border border-border bg-surface-1 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-hi">
                <FileAudio size={20} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-fg">podcast-episode-42.mp3</p>
                <p className="font-mono text-xs text-muted">42:18 · 38.4 MB</p>
              </div>
              <span className="ml-auto font-mono text-xs text-success">Done</span>
            </div>
            <Waveform bars={52} height={60} className="my-6" />
            <div className="rounded-xl border border-border bg-canvas/60 p-4">
              <p className="text-[13px] leading-relaxed text-fg-2">
                "Every great story starts with a single recording. Today we explore how creators turn raw audio into polished content in minutes."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent">
              View full transcript <ArrowRight size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
