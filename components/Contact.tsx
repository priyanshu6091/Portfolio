import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import CopyEmail from "./CopyEmail";
import ContactForm from "./ContactForm";

const socials = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "Résumé", href: profile.resumeHref, external: true },
];

const ExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Contact() {
  const year = 2026;

  return (
    <footer id="contact" className="rule bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
                <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                {profile.availability}
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tightest md:text-5xl">
                Open to full-stack roles and interesting problems.
              </h2>
              <CopyEmail />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper/80 transition-all duration-200 hover:border-paper hover:bg-white/5 hover:text-paper"
                  >
                    {s.label}
                    {s.external && <ExternalLink />}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-6">
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-content flex-col justify-between gap-2 px-6 py-6 font-mono text-[0.7rem] text-paper/50 md:flex-row md:px-10">
          <span>
            © {year} {profile.name}
          </span>
          <span>Built with Next.js · Tailwind · deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}