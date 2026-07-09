import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { CountdownBar } from "../components/subscribe/CountdownBar";
import { PlanCards } from "../components/subscribe/PlanCards";
import { CheckoutModal } from "../components/subscribe/CheckoutModal";
import { Guarantee, Benefits, Feedbacks, SafeCheckout } from "../components/subscribe/SubscribeSections";
import { Logo } from "../components/primitives/Logo";
import { subscribe } from "../data/subscribe";
import { fadeUp, stagger } from "../lib/motion";

export function SubscribePage() {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen bg-canvas">
      <CountdownBar onGetPlan={() => setOpen(true)} />
      <div className="bg-grid-lines-fine relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-hero-wash" />
        <div className="relative mx-auto w-full max-w-[1100px] px-4 pb-32 pt-10 sm:px-6">
          <div className="flex items-center justify-between">
            <Logo />
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-ink"><ArrowLeft size={15} /> Back to site</Link>
          </div>
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="mt-12 flex flex-col items-center text-center">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-accent shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {subscribe.promo.label}
            </motion.span>
            <motion.h1 variants={fadeUp} className="mt-6 text-balance font-display text-4xl font-semibold tracking-[-0.025em] text-ink sm:text-5xl">{subscribe.heading}</motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-pretty text-lg text-ink-2">{subscribe.subheading}</motion.p>
          </motion.div>
          <PlanCards selected={selected} onSelect={setSelected} />
          <Guarantee />
          <Benefits />
          <Feedbacks />
          <SafeCheckout />
        </div>
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
        <motion.button
          onClick={() => setOpen(true)}
          initial={reduce ? undefined : { y: 24, opacity: 0 }}
          animate={reduce ? undefined : { y: [0, -5, 0], opacity: 1 }}
          transition={reduce ? undefined : { y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="pointer-events-auto inline-flex h-14 items-center gap-2 rounded-full bg-[linear-gradient(180deg,#3B82F6,#2563EB)] px-9 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-[filter] hover:brightness-[1.06]"
          style={{ boxShadow: "0 14px 44px rgba(37,99,235,0.55), 0 2px 8px rgba(37,99,235,0.4)" }}
        >
          {subscribe.cta} <ArrowRight size={18} />
        </motion.button>
      </div>
      <CheckoutModal open={open} onClose={() => setOpen(false)} planIndex={selected} />
    </div>
  );
}
