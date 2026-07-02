import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="02" eyebrow="Toolkit" title="Skills" />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate">
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-hairline px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
