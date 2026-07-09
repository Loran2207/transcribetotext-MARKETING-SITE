import { motion } from "framer-motion";
import { Quote, BadgeCheck } from "lucide-react";
import { Container } from "../primitives/Container";
import { Stars } from "../primitives/Stars";
import { testimonials } from "../../data/content";
import { brand } from "../../data/assets";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const MASK = "radial-gradient(120% 90% at 50% 0%, rgba(0,0,0,0.5), transparent 70%)";

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-surface-soft py-20 md:py-28">
      <div aria-hidden="true" className="bg-dot-grid-light pointer-events-none absolute inset-0" style={{ WebkitMaskImage: MASK, maskImage: MASK }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      <Container className="relative">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col items-center gap-3 text-center">
          <motion.span variants={fadeUp} className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent shadow-soft">Reviews</motion.span>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-[44px] md:leading-[1.08]">{testimonials.title}</motion.h2>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Stars count={5} /><span className="text-sm text-ink-2">{testimonials.rating}</span></motion.div>
        </motion.div>
        <motion.div variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.items.map((t, i) => (
            <motion.figure
              key={t.user}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative break-inside-avoid overflow-hidden rounded-card border border-border bg-white p-6 shadow-soft transition-all hover:border-accent/40 hover:shadow-card"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Quote aria-hidden="true" size={40} className="pointer-events-none absolute right-5 top-5 text-accent/10" fill="currentColor" strokeWidth={0} />
              <Stars count={5} />
              <figcaption className="relative mt-4 text-sm font-semibold text-ink">{t.title}</figcaption>
              <blockquote className="relative mt-2 text-[15px] leading-relaxed text-ink-2">{t.quote}</blockquote>
              <div className="relative mt-5 flex items-center gap-3">
                <img src={brand.avatars[i % brand.avatars.length]} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-soft" />
                <span className="flex items-center gap-1 text-sm font-medium text-ink">{t.user}<BadgeCheck size={14} className="text-accent" /></span>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
