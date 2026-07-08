import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { Container } from "../primitives/Container";
import { stats } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";
  const [n, setN] = useState(reduce ? target : 0);
  useEffect(() => {
    if (!m || reduce || !inView) return;
    const c = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, reduce, target]);
  return (
    <span className="font-sans text-4xl font-bold tracking-tight text-fg md:text-[42px]">
      <span ref={ref}>{m ? n : value}</span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <div className="border-y border-border bg-surface-1">
      <Container>
        <motion.dl
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-3 md:grid-cols-5 md:py-14"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center gap-2 px-2 text-center">
              <dd><StatValue value={s.value} /></dd>
              <dt className="text-sm text-muted">{s.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </div>
  );
}
