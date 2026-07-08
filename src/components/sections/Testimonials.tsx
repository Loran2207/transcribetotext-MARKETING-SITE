import { motion } from "framer-motion";
import { Container } from "../primitives/Container";
import { Stars } from "../primitives/Stars";
import { testimonials } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-20 md:py-28">
      <Container>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col items-center gap-3 text-center">
          <motion.span variants={fadeUp} className="font-mono text-xs tracking-[0.06em] text-ink-2">Reviews</motion.span>
          <motion.h2 variants={fadeUp} className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[48px] md:leading-[1.1]">
            {testimonials.title}
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <Stars count={5} />
            <span className="font-mono text-sm text-ink-2">{testimonials.rating}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.items.map((t) => (
            <motion.figure key={t.user} variants={fadeUp} className="break-inside-avoid rounded-card border border-paper-border bg-paper-card p-6">
              <Stars count={5} />
              <figcaption className="mt-4 text-sm font-semibold text-ink">{t.title}</figcaption>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-ink-2">{t.quote}</blockquote>
              <p className="mt-4 font-mono text-xs text-ink-2">{t.user}</p>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
