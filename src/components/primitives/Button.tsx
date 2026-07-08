import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SPRING } from "../../lib/motion";

type Variant = "primary" | "ghost" | "beacon";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-[#1f6bf0]",
  ghost: "border border-border-strong text-fg hover:bg-white/5",
  beacon: "bg-beacon text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
  glow = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  glow?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors ${variants[variant]} ${sizes[size]} ${glow ? "shadow-[0_0_40px_rgba(46,123,255,0.35)]" : ""} ${className}`}
    >
      {children}
    </motion.a>
  );
}
