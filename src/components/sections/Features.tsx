import { motion } from "framer-motion";
import { Infinity as InfinityIcon, Zap, ShieldCheck, Link2, FileAudio, Download, ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { WaveViz } from "../mocks/WaveViz";
import { IntegrationsViz } from "../mocks/IntegrationsViz";
import { premiumFeatures } from "../../data/content";
import { fadeUp, stagger, viewportOnce, SPRING } from "../../lib/motion";

const ICONS = [InfinityIcon, Zap, ShieldCheck, Link2, FileAudio, Download];
const WIDE = new Set([0, 3]);
const FORMATS = ["MP3", "MP4", "WAV", "MOV", "M4A", "OGG"];
const EXPORTS = ["DOCX", "PDF", "TXT", "SRT", "VTT"];

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-1.5">
      {items.map((x) => (<span key={x} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-muted-invert">{x}</span>))}
    </div>
  );
}

export function Features() {
  return (
    <section id="premium" className="relative overflow-hidden bg-dark-atmosphere py-20 md:py-28">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-70" />
      <Container className="relative">
        <SectionHeading eyebrow="Premium" title={premiumFeatures.title} tone="dark" />
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {premiumFeatures.items.map((f, i) => {
            const Icon = ICONS[i];
            const wide = WIDE.has(i);
            return (
              <motion.div key={f.title} variants={fadeUp} whileHover={{ y: -6 }} transition={SPRING} className={`group relative flex flex-col overflow-hidden rounded-tile border border-white/10 bg-dark-2 p-6 transition-colors hover:border-white/20 ${wide ? "lg:col-span-2" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent-glow"><Icon size={22} strokeWidth={1.6} /></span>
                  <ArrowUpRight size={18} className="text-white/25 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-invert">{f.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-invert">{f.body}</p>
                {i === 0 ? <WaveViz /> : null}
                {i === 3 ? <IntegrationsViz /> : null}
                {i === 4 ? <Chips items={FORMATS} /> : null}
                {i === 5 ? <Chips items={EXPORTS} /> : null}
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
