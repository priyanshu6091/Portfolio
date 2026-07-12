"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { contactConfig, profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

const isConfigured =
  contactConfig.web3formsKey &&
  contactConfig.web3formsKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

const TURNSTILE_SITE_KEY = contactConfig.turnstileSiteKey;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Render the Turnstile widget once the script is available. Re-runs when
  // `status` changes (e.g. returning from the success panel) so the widget
  // is freshly mounted with the form.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let tries = 0;
    const renderWidget = () => {
      const el = turnstileRef.current;
      if (!el || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(el, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };
    renderWidget();
    const interval = setInterval(() => {
      if (window.turnstile) {
        renderWidget();
        if (widgetIdRef.current) clearInterval(interval);
      } else if (++tries > 50) {
        clearInterval(interval);
      }
    }, 100);
    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [status]);

  const resetCaptcha = () => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setToken("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users leave this empty; bots fill it.
    if ((data.get("botcheck") as string)?.length) return;

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and a message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email address doesn't look right.");
      return;
    }
    if (!token) {
      setError("Please complete the captcha.");
      return;
    }

    setStatus("sending");

    try {
      // 1) Prove the captcha server-side.
      const verifyRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyJson.success) {
        resetCaptcha();
        setStatus("error");
        setError(verifyJson.message || "Captcha verification failed. Please try again.");
        return;
      }

      // 2) Send the email from the browser (Web3Forms blocks server-side calls).
      if (isConfigured) {
        const fd = new FormData();
        fd.set("access_key", contactConfig.web3formsKey);
        fd.set("subject", `Portfolio message from ${name}`);
        fd.set("from_name", "Portfolio Contact Form");
        fd.set("name", name);
        fd.set("email", email);
        fd.set("message", message);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        const json = await res.json();
        if (!json.success) {
          resetCaptcha();
          setStatus("error");
          setError(json.message || "Something went wrong. Please email me directly.");
          return;
        }
      }

      resetCaptcha();
      setStatus("success");
      form.reset();
    } catch {
      resetCaptcha();
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col justify-center rounded-xl border border-white/15 p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          ● Message sent
        </p>
        <h3 className="mt-3 font-display text-2xl tracking-tight text-paper">
          Thanks — I&apos;ll get back to you soon.
        </h3>
        <p className="mt-2 text-sm text-paper/60">
          {isConfigured
            ? `A copy landed in my inbox at ${profile.email}.`
            : "Form is in demo mode — add a Web3Forms key to receive real messages."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 self-start font-mono text-xs uppercase tracking-widest text-paper/70 underline underline-offset-4 hover:text-paper"
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-paper placeholder:text-paper/35 transition-colors focus:border-signal focus:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Honeypot — visually hidden, off-screen, ignored by humans. */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60">
          Message
        </label>
        <textarea id="message" name="message" required rows={4} placeholder="What are you working on?" className={`${fieldClass} resize-none`} />
      </div>

      <div>
        <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60">
          Captcha
        </span>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
        <div ref={turnstileRef} className="cf-turnstile" />
      </div>

      {error && (
        <p role="alert" className="font-mono text-xs text-signal">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
