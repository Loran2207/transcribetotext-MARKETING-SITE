import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "dark" | "surface" | "paper";

const toneClass: Record<Tone, string> = {
  dark: "bg-canvas text-fg-2",
  surface: "bg-surface-1 text-fg-2",
  paper: "bg-paper text-ink-2",
};

export function Section({
  id,
  tone = "dark",
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
    <section
      id={id}
      className={`relative py-16 md:py-28 ${toneClass[tone]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
