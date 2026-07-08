import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}
    >
      {eyebrow ? (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent shadow-soft"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-[44px] md:leading-[1.08]"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p variants={fadeUp} className="text-pretty text-lg leading-relaxed text-ink-2">
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
