import { useReducedMotion } from "framer-motion";

const SPECTRUM = ["#0088EB", "#2AAFA7", "#38A9F0", "#1EC8BF", "#0A6FCC"];

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
    <div className={`flex items-center justify-center gap-[3px] ${className}`} style={{ height }} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => {
        const seed = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
        const base = 0.22 + seed * 0.78;
        const fill =
          color === "spectrum" ? SPECTRUM[i % SPECTRUM.length] : color === "accent" ? "#0088EB" : "#C7CDDA";
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
              opacity: color === "muted" ? 0.5 : 0.85,
            }}
          />
        );
      })}
    </div>
  );
}
