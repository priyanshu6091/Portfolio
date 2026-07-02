import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#17171B",
        slate: "#5B5B66",
        hairline: "#E6E6E0",
        signal: "#1E2AFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  plugins: [],
};

export default config;
