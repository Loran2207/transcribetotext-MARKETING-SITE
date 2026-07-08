export function GlobeViz({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" fill="none" className={className} aria-hidden="true">
      <g stroke="#C4CCDA" strokeWidth="1">
        <circle cx="240" cy="240" r="198" />
        <ellipse cx="240" cy="240" rx="198" ry="66" />
        <ellipse cx="240" cy="240" rx="198" ry="134" />
        <ellipse cx="240" cy="240" rx="66" ry="198" />
        <ellipse cx="240" cy="240" rx="134" ry="198" />
        <line x1="42" y1="240" x2="438" y2="240" />
        <line x1="240" y1="42" x2="240" y2="438" />
      </g>
    </svg>
  );
}
