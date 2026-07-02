import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <SectionHeader index="01" eyebrow="Profile" title="About" />
      <div className="grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <p className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:pt-2">
          <dl className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-slate">Based in</dt>
              <dd className="text-ink">{profile.location}</dd>
            </div>
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-slate">Focus</dt>
              <dd className="text-ink">Full-stack · AI</dd>
            </div>
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-slate">Status</dt>
              <dd className="text-signal">Open to roles</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
