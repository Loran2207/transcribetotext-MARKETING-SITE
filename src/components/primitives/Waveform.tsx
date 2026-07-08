import { useReducedMotion } from "framer-motion";

const SPECTRUM = ["#4DD4FF", "#62F6B5", "#C46BFF", "#FFC53D", "#7B6BFF"];

export function Waveform({
  bars = 48,
  className = "",
  color = "spectrum",
  height = 56,
  animated = true,
}: {
  bars?: number;
  className?: string;
  color?: "spectrum" | "accent" | "muted";
  height?: number;
  animated?: boolean;
}) {
  const reduce = useReducedMotion();
  const play = animated && !reduce;
  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const seed = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
        const base = 0.22 + seed * 0.78;
        const fill =
          color === "spectrum"
            ? SPECTRUM[i % SPECTRUM.length]
            : color === "accent"
              ? "#2E7BFF"
              : "#7A828F";
        return (
          <span
            key={i}
            className="w-[3px] shrink-0 rounded-full"
            style={{
              height: "100%",
              background: fill,
              transformOrigin: "center",
              transform: `scaleY(${base.toFixed(3)})`,
              animation: play
                ? `eq ${(0.9 + seed * 0.9).toFixed(2)}s ease-in-out ${(i * 0.045).toFixed(2)}s infinite`
                : "none",
              opacity: color === "muted" ? 0.45 : 0.92,
            }}
          />
        );
      })}
    </div>
  );
}
