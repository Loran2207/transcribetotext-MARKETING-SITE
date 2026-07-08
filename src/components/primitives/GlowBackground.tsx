export function GlowBackground({
  className = "",
  variant = "spectrum",
}: {
  className?: string;
  variant?: "spectrum" | "beacon";
}) {
  const bg =
    variant === "beacon"
      ? "radial-gradient(closest-side, rgba(120,90,255,0.45), rgba(46,123,255,0.22), transparent)"
      : "radial-gradient(closest-side, rgba(77,212,255,0.40), rgba(46,123,255,0.22), transparent)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 blur-[64px] ${className}`}
      style={{ background: bg }}
    />
  );
}
