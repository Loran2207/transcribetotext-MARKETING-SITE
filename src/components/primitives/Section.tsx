import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "sky" | "mint" | "soft";

const toneClass: Record<Tone, string> = {
  white: "bg-canvas",
  sky: "bg-tint-sky",
  mint: "bg-tint-mint",
  soft: "bg-surface-soft",
};

export function Section({
  id,
  tone = "white",
  className = "",
  containerClassName = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${toneClass[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
