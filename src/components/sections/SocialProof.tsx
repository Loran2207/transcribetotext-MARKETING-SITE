import { motion } from "framer-motion";
import { Stars } from "../primitives/Stars";
import { socialProof } from "../../data/content";
import { scaleIn, viewportOnce } from "../../lib/motion";

export function SocialProof() {
  return (
    <section className="relative bg-canvas py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.figure
          variants={scaleIn} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="mx-auto max-w-3xl rounded-tile bg-paper-card px-8 py-12 text-center shadow-[0_1px_4px_rgba(0,0,0,0.25),0_30px_80px_rgba(0,0,0,0.45)] md:px-14 md:py-16"
        >
          <div className="flex justify-center"><Stars count={5} /></div>
          <blockquote className="mt-6 text-balance font-display text-2xl leading-snug text-ink md:text-[34px] md:leading-[1.25]">
            {socialProof.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
              {socialProof.rating}
            </span>
            <span className="font-mono text-sm text-ink-2">{socialProof.ratingLabel}</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
