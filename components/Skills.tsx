import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const groupIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M10 4v16M14 4v16M6 8h4M6 16h4M14 8h4M14 16h4" />
    </svg>
  ),
  "AI & Agentic Tools": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "Web & Frameworks": <span className="font-mono text-slate">{String.fromCharCode(60)}/{String.fromCharCode(62)}</span>,
  "Cloud & DevOps": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  Databases: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  "Tools & Platforms": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <polyline points="14 1.5 19 6 14 10.5" />
      <polyline points="10 1.5 5 6 10 10.5" />
      <path d="M8.5 13.5H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-3.5" />
    </svg>
  ),
  Practices: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="02" eyebrow="Toolkit" title="Skills" />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate">
                <span className="text-signal">{groupIcons[s.group]}</span>
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-hairline px-4 py-2 text-sm text-ink transition-all duration-200 hover:border-signal hover:text-signal hover:shadow-[0_0_0_1px_#1e2aff] hover:scale-[1.02]"
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