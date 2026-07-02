"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

// Email as a real interaction: click to mail, dedicated button to copy.
// The copy path works everywhere, even without a mail client configured.
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the mailto anchor remains the fallback.
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${profile.email}`}
        className="font-display text-2xl tracking-tight text-paper underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-white md:text-3xl"
      >
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-paper/70 transition-colors hover:border-paper hover:text-paper"
      >
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            copied ? "bg-signal" : "bg-paper/40"
          }`}
        />
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
