import { ShieldCheck, Zap, Users, Captions, Phone, Languages, Pencil, Search, Upload, Sparkles, Globe, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { subscribe } from "../../data/subscribe";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const ICONS: Record<string, LucideIcon> = { zap: Zap, users: Users, captions: Captions, phone: Phone, languages: Languages, pencil: Pencil, search: Search, upload: Upload, sparkles: Sparkles, globe: Globe };

export function Guarantee() {
  return (
    <div className="mx-auto mt-12 flex max-w-2xl items-start gap-4 rounded-card border border-border bg-surface-soft p-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent"><ShieldCheck size={22} /></span>
      <div>
        <p className="font-semibold text-ink">{subscribe.guarantee.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{subscribe.guarantee.body}</p>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <div className="mx-auto mt-20 max-w-2xl">
      <h2 className="text-balance text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{subscribe.benefitsTitle}</h2>
      <motion.div variants={stagger(0.05)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-8 space-y-5">
        {subscribe.benefits.map((b) => {
          const Icon = ICONS[b.icon] || Sparkles;
          return (
            <motion.div key={b.title} variants={fadeUp} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={18} /></span>
              <div>
                <p className="font-semibold text-ink">{b.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-2">{b.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Feedbacks() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{subscribe.feedbacksTitle}</h2>
      <p className="mx-auto mt-3 max-w-xl text-pretty text-center text-sm text-ink-2">{subscribe.feedbacksSub}</p>
      <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-8 grid gap-4 sm:grid-cols-3">
        {subscribe.feedbacks.map((f) => (
          <motion.figure key={f.name} variants={fadeUp} className="rounded-card border border-border bg-surface-soft p-5">
            <div className="flex items-center gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div>
            <figcaption className="mt-3 text-sm font-semibold text-ink">{f.name}</figcaption>
            <blockquote className="mt-2 text-sm leading-relaxed text-ink-2">{f.quote}</blockquote>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}

export function SafeCheckout() {
  return (
    <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-3">
      <p className="text-xs font-medium text-muted">{subscribe.safeCheckout}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {subscribe.payments.map((p) => (
          <span key={p} className="rounded-md border border-border bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-2 shadow-soft">{p}</span>
        ))}
      </div>
    </div>
  );
}
