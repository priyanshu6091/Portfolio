import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="work" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04" eyebrow="Selected builds" title="Work" />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.06}
              className={
                p.featured
                  ? "col-span-1 sm:col-span-2 lg:col-span-3"
                  : "col-span-1 sm:col-span-1 lg:col-span-2"
              }
            >
              <article className="group relative flex h-full flex-col bg-paper p-7 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(23,23,27,0.12)]">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={
                      p.featured
                        ? "font-display text-3xl font-semibold tracking-tight text-ink"
                        : "font-display text-2xl font-semibold tracking-tight text-ink"
                    }
                  >
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
                  {p.tagline}
                </p>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-slate"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {p.links && p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-hairline pt-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-signal transition-colors hover:text-ink"
                      >
                        {l.label}
                        <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}