import { motion } from "framer-motion";
import { Lock } from "lucide-react";

// A field of "encrypted" tokens fading toward a glowing lock at the centre,
// echoing Reflect's Hardened Security visual - adapted to our blue.
const TOKENS = ["8dKa824HDs", "1Ka12jfj", "aFdzxz", "8df1uSs", "1FQ2z48j", "aG5Kstx2z", "fdSD2fu1", "5KX+FsJ", "45xj2Kf", "B2gsa33Xc", "FIM5dhX4", "5Xw72W", "LKfxBi4g", "6x19qwR", "vG3gVs3e", "Jp4xsMg", "PU1Xgg", "E1pUrhA", "fYD0vc2", "QaX7ztG", "DlQ9e+pu", "wufZ3Ka", "Gzot4tTax", "qalBbVib", "65aq2AbS", "wVVKqJfU", "ccYckWa", "pztw9zYD"];
const ROWS = 9;
const MASK = "radial-gradient(circle at 50% 46%, transparent 0%, transparent 20%, rgba(0,0,0,0.6) 42%, black 70%)";

function line(i: number) {
  const out: string[] = [];
  for (let j = 0; j < 9; j++) out.push(TOKENS[(i * 5 + j * 3) % TOKENS.length]);
  return out.join("   ");
}

export function EncryptionViz() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center gap-2 px-2" style={{ WebkitMaskImage: MASK, maskImage: MASK }}>
        {Array.from({ length: ROWS }).map((_, i) => (
          <motion.p
            key={i}
            initial={false}
            animate={{ opacity: [0.14, 0.34, 0.14] }}
            transition={{ duration: 3.4 + (i % 4) * 0.5, repeat: Infinity, ease: "easeInOut", delay: (i % 5) * 0.4 }}
            className="whitespace-nowrap text-center font-mono text-[12px] tracking-wide text-accent-glow"
          >
            {line(i)}
          </motion.p>
        ))}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[46%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[60px]" />
      <div className="absolute left-1/2 top-[46%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
        <motion.span
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 30px rgba(37,99,235,0.45)", "0 0 46px rgba(37,99,235,0.65)", "0 0 30px rgba(37,99,235,0.45)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-16 w-16 place-items-center rounded-2xl bg-[linear-gradient(180deg,#3B82F6,#2563EB)] text-white ring-1 ring-white/25"
        >
          <Lock size={26} />
        </motion.span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-accent-glow backdrop-blur-sm">Encrypted</span>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-48 w-[80%] rounded-[50%]" style={{ background: "radial-gradient(closest-side, rgba(76,155,255,0.5), rgba(37,99,235,0.15), transparent)" }} />
    </div>
  );
}
