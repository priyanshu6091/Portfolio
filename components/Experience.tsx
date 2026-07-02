import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="03" eyebrow="Timeline" title="Experience" />
        <ol className="space-y-0">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05} as="li">
              <div className="grid gap-4 border-t border-hairline py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-signal">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-slate">
                    {job.role}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <ul className="space-y-3 md:col-span-8">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/85">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-signal" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
