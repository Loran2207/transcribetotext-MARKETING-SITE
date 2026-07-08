import { Youtube, Facebook } from "lucide-react";
import { Container } from "../primitives/Container";
import { Logo } from "../primitives/Logo";
import { footer } from "../../data/content";

const SOCIAL = { YouTube: Youtube, Facebook: Facebook } as const;

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-fg">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-sm text-muted transition-colors hover:text-fg">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI-powered audio and video transcription in 117 languages, with 99% accuracy.
            </p>
            <div className="mt-5 flex gap-3">
              {footer.social.map((s) => {
                const Icon = SOCIAL[s as keyof typeof SOCIAL];
                return (
                  <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:text-fg">
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          <Column title="Services" items={footer.services} />
          <Column title="Company" items={footer.company} />
          <Column title="Information" items={footer.information} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {footer.copyright}</span>
          <span>{footer.companyDetails}</span>
        </div>
      </Container>
    </footer>
  );
}
