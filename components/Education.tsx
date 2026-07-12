import { education, certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const InstitutionLogo = ({ initials }: { initials: string }) => (
  <span
    aria-hidden
    className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-signal/10 font-display text-lg font-semibold text-signal shrink-0"
  >
    {initials}
  </span>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Education() {
  return (
    <section id="education" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="05" eyebrow="Foundations" title="Education & Credentials" />
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="border-t border-hairline pt-6">
              <div className="flex items-start gap-4">
                <InstitutionLogo initials="CU" />
                <div>
                  <p className="font-mono text-xs text-signal">{education.period}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-slate">{education.degree}</p>
                  <p className="mt-3 font-mono text-sm text-ink">{education.detail}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <ul className="divide-y divide-hairline">
              {certifications.map((c) => (
                <li key={c} className="flex gap-4 py-5 text-[0.95rem] leading-relaxed text-ink/85">
                  <CheckIcon className="flex-none mt-1 text-signal shrink-0" />
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