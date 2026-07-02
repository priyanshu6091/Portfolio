import { education, certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="05" eyebrow="Foundations" title="Education & Credentials" />
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="border-t border-hairline pt-6">
              <p className="font-mono text-xs text-signal">{education.period}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                {education.school}
              </h3>
              <p className="mt-1 text-slate">{education.degree}</p>
              <p className="mt-3 font-mono text-sm text-ink">{education.detail}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <ul className="border-t border-hairline">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex gap-4 border-b border-hairline py-4 text-[0.95rem] leading-relaxed text-ink/85"
                >
                  <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-signal" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
