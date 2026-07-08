import { motion } from "framer-motion";
import { Stars } from "../primitives/Stars";
import { socialProof } from "../../data/content";
import { brand } from "../../data/assets";
import { scaleIn, viewportOnce } from "../../lib/motion";

export function SocialProof() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.figure
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl rounded-tile border border-border bg-white px-8 py-12 text-center shadow-lift md:px-14 md:py-14"
        >
          <div className="flex justify-center"><Stars count={5} /></div>
          <blockquote className="mt-6 text-balance font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-[32px] md:leading-[1.3]">
            {socialProof.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <img src={brand.avatars[0]} alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-left">
              <span className="block text-sm font-semibold text-ink">Verified customer</span>
              <span className="block text-sm text-ink-2">{socialProof.rating} {socialProof.ratingLabel}</span>
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
