import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "dark" | "paper";
  className?: string;
}) {
  const titleColor = tone === "paper" ? "text-ink" : "text-fg";
  const subColor = tone === "paper" ? "text-ink-2" : "text-fg-2";
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
        <motion.div variants={fadeUp}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[48px] md:leading-[1.1] ${titleColor}`}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p variants={fadeUp} className={`text-pretty text-lg leading-relaxed ${subColor}`}>
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
