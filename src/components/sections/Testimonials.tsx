import { motion } from "framer-motion";
import { Container } from "../primitives/Container";
import { Stars } from "../primitives/Stars";
import { testimonials } from "../../data/content";
import { brand } from "../../data/assets";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-tint-mint py-20 md:py-28">
      <Container>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col items-center gap-3 text-center">
          <motion.span variants={fadeUp} className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-teal shadow-soft">Reviews</motion.span>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-[44px] md:leading-[1.1]">{testimonials.title}</motion.h2>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Stars count={5} /><span className="text-sm text-ink-2">{testimonials.rating}</span></motion.div>
        </motion.div>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.items.map((t, i) => (
            <motion.figure key={t.user} variants={fadeUp} className="break-inside-avoid rounded-card border border-border bg-white p-6 shadow-soft">
              <Stars count={5} />
              <figcaption className="mt-4 text-sm font-semibold text-ink">{t.title}</figcaption>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-ink-2">{t.quote}</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <img src={brand.avatars[i % brand.avatars.length]} alt="" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm font-medium text-ink">{t.user}</span>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
