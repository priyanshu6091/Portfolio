"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";

const Hamburger = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="1" y1="1" x2="21" y2="1" />
    <line x1="1" y1="8" x2="21" y2="8" />
    <line x1="1" y1="15" x2="21" y2="15" />
  </svg>
);

const Close = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="4" y1="4" x2="18" y2="18" />
    <line x1="18" y1="4" x2="4" y2="18" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? y / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-signal/0 via-signal to-signal/0 z-50"
        style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}
        aria-hidden="true"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-hairline bg-paper/85 backdrop-blur"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-tight text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            PG<span className="text-signal">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-slate transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper md:inline-block"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            {open ? <Close /> : <Hamburger />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-hairline bg-paper md:hidden">
            <ul className="mx-auto flex max-w-content flex-col px-6 py-2">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-hairline last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-sm uppercase tracking-widest text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}