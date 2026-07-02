import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="work" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04" eyebrow="Selected builds" title="Work" />
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-white">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
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
                      className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.68rem] text-slate"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
