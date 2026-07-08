export function GlowBackground({
  className = "",
  variant = "blue",
}: {
  className?: string;
  variant?: "blue" | "teal";
}) {
  const bg =
    variant === "teal"
      ? "radial-gradient(closest-side, rgba(42,175,167,0.22), rgba(42,175,167,0.06), transparent)"
      : "radial-gradient(closest-side, rgba(0,136,235,0.20), rgba(0,136,235,0.05), transparent)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 blur-[70px] ${className}`}
      style={{ background: bg }}
    />
  );
}
