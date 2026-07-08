import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "../primitives/Logo";
import { Button } from "../primitives/Button";
import { nav } from "../../data/content";
import { EASE_OUT } from "../../lib/motion";

export function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0.3, 0.85]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 -z-10 bg-canvas backdrop-blur-xl" />
      <motion.div style={{ opacity: borderOpacity }} className="absolute inset-x-0 bottom-0 h-px bg-border" />
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center gap-6 px-6 md:px-10">
        <Logo />
        <ul className="ml-2 hidden items-center gap-6 lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a href="#" className="hidden text-sm text-muted transition-colors hover:text-fg sm:block">
            {nav.login}
          </a>
          <Button href="#pricing" size="md">
            {nav.cta}
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
