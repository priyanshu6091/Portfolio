import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const year = 2026; // Date.* unavailable at build; graduation-year context.

  return (
    <footer id="contact" className="rule bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
            // let&apos;s build something
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
            Open to full-stack roles and interesting problems.
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-display text-2xl tracking-tight text-paper underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-white md:text-3xl"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              LinkedIn ↗
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="text-paper/70 transition-colors hover:text-paper"
            >
              {profile.phone}
            </a>
            <a
              href={profile.resumeHref}
              className="text-paper/70 transition-colors hover:text-paper"
            >
              Résumé ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 font-mono text-[0.7rem] text-paper/50 sm:flex-row">
          <span>© {year} {profile.name}</span>
          <span>Built with Next.js · Tailwind · deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
