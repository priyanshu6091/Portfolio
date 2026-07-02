import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshugalani.vercel.app"),
  title: "Priyanshu Galani — Full-Stack Developer",
  description:
    "Full-Stack Developer building web and mobile products end-to-end with React, Next.js, Node.js and cloud tooling. AI-focused, real-time systems, fast delivery.",
  keywords: [
    "Priyanshu Galani",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Priyanshu Galani" }],
  openGraph: {
    title: "Priyanshu Galani — Full-Stack Developer",
    description:
      "Full-Stack Developer building web and mobile products end-to-end. AI, real-time systems, fast delivery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
