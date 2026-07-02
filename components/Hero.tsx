"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, manifest } from "@/lib/data";

const layers = ["frontend", "backend", "cloud"];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Connective line motif: frontend -> backend -> cloud */}
          <motion.div
            variants={item}
            className="mb-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-slate"
          >
            {layers.map((layer, i) => (
              <span key={layer} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
                <span>{layer}</span>
                {i < layers.length - 1 && (
                  <span aria-hidden className="mx-1 h-px w-8 bg-hairline md:w-12" />
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="eyebrow"
          >
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tightest text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl font-display text-xl leading-snug text-ink/80 md:text-2xl"
          >
            {profile.thesis}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate transition-colors hover:border-ink hover:text-ink"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate transition-colors hover:border-ink hover:text-ink"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Build manifest — spec-sheet signature */}
          <motion.div
            variants={item}
            className="mt-16 border-t border-hairline pt-8"
          >
            <p className="eyebrow mb-6">// build manifest</p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
              {manifest.map((m) => (
                <div key={m.label} className="border-l border-hairline pl-4">
                  <dt className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl">
                    {m.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[0.7rem] leading-relaxed text-slate">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
