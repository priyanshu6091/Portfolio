import { NextResponse } from "next/server";
import { contactConfig } from "@/lib/data";

// Pure Turnstile verifier. The contact form calls this to prove the visitor
// solved the captcha; the actual email send happens client-side to Web3Forms
// (api.web3forms.com blocks server-to-server requests with a Cloudflare
// managed challenge, but a real browser passes it).
export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    token?: string;
    "cf-turnstile-response"?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const token = (body.token ?? body["cf-turnstile-response"] ?? "").trim();

  if (!name || !email || !message || !token) {
    return NextResponse.json(
      { success: false, message: "Please fill in every field and the captcha." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || contactConfig.turnstileSecretKey,
        response: token,
      }),
    },
  );
  const verifyText = await verifyRes.text();
  let verify: { success?: boolean };
  try {
    verify = JSON.parse(verifyText);
  } catch {
    console.error("Turnstile siteverify returned non-JSON:", verifyText.slice(0, 200));
    return NextResponse.json(
      { success: false, message: "Captcha service error. Please try again." },
      { status: 502 },
    );
  }
  if (!verify.success) {
    return NextResponse.json(
      { success: false, message: "Captcha verification failed. Please try again." },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true });
}
