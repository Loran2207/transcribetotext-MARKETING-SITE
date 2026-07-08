export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "paper" }) {
  const text = tone === "paper" ? "text-ink" : "text-fg";
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" className="shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4DD4FF" />
            <stop offset="1" stopColor="#2E7BFF" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logoG)" opacity="0.14" />
        <g fill="url(#logoG)">
          <rect x="6" y="13" width="3" height="6" rx="1.5" />
          <rect x="11" y="9" width="3" height="14" rx="1.5" />
          <rect x="16" y="5" width="3" height="22" rx="1.5" />
          <rect x="21" y="10" width="3" height="12" rx="1.5" />
          <rect x="26" y="14" width="3" height="4" rx="1.5" />
        </g>
      </svg>
      <span className={`text-[15px] font-semibold tracking-tight ${text}`}>
        TranscribeToText<span className="text-accent">.AI</span>
      </span>
    </a>
  );
}
