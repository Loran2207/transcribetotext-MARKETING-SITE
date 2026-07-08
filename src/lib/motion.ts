import type { Variants } from "framer-motion";

// Cubic-bezier easings from the design brief.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_SWEEP: [number, number, number, number] = [0.77, 0, 0.175, 1];
export const SPRING = { type: "spring", stiffness: 300, damping: 24 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function stagger(staggerChildren = 0.08, delayChildren = 0): Variants {
  return { hidden: {}, show: { transition: { staggerChildren, delayChildren } } };
}

export const viewportOnce = { once: true, margin: "-80px" } as const;
