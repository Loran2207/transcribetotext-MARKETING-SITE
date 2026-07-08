import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className={`inline-flex items-center rounded-full border border-border bg-surface-1 px-3.5 py-1.5 font-mono text-[13px] text-fg-2 transition-colors hover:border-accent ${className}`}
    >
      {children}
    </motion.span>
  );
}
