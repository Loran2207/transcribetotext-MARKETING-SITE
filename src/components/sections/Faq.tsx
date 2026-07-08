import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "../primitives/Section";
import { SectionHeading } from "../primitives/SectionHeading";
import { faq } from "../../data/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" tone="dark">
      <SectionHeading eyebrow="FAQ" title={faq.title} />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="overflow-hidden rounded-card border border-border bg-surface-1">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center gap-4 px-6 py-5 text-left">
                <span className="text-[15px] font-medium text-fg">{item.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="ml-auto shrink-0 text-muted">
                  <Plus size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-pretty text-sm leading-relaxed text-fg-2">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">{faq.support}</p>
    </Section>
  );
}
