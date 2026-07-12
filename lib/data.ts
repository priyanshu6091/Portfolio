// Single source of truth — all resume content lives here.

export const profile = {
  name: "Priyanshu Galani",
  role: "Full-Stack Developer",
  location: "Ahmedabad, India",
  phone: "+91 8320666091",
  email: "galanipriyanshu@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyanshugalani/",
  github: "https://github.com/priyanshu6091",
  resumeHref: "/resume.pdf",
  // Short availability line for the contact section (mono spec-sheet style).
  availability: "Available from June 2026 · Ahmedabad / Remote",
  // Hero thesis — the most characteristic thing about the work.
  thesis:
    "I build web and mobile products end-to-end — from data model to interface — and ship them fast.",
  summary:
    "Full-Stack Developer with hands-on experience building web and mobile applications using modern JavaScript frameworks, cloud infrastructure, and AI/agentic tools. Experienced in LLM-powered application development, multi-agent orchestration, and workflow automation, with a focus on performance and user experience.",
};

// Build manifest — the spec-sheet signature. Real numbers from the work.
export const manifest: { value: string; label: string }[] = [
  { value: "60%", label: "faster content search — AIDynamoLearn" },
  { value: "40%", label: "faster decisions — TaxSavvy dashboards" },
  { value: "1 mo", label: "fastest module revival on the project" },
  { value: "15+", label: "languages in the CodeColab editor" },
  { value: "8.81", label: "CGPA / 10.0 — B.Tech IT" },
  { value: "Top 3", label: "of 50+ teams — DoseHACK-24" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    group: "AI & Agentic Tools",
    items: [
      "LangChain",
      "LangGraph",
      "NousResearch Hermes",
      "OpenAI API (GPT)",
      "RAG Architecture",
      "Vector Embeddings",
      "Prompt Engineering",
      "GitHub Copilot",
    ],
  },
  {
    group: "Web & Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux",
      "React Native",
      "Angular",
      ".NET",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, S3)", "Docker", "Git", "GitHub", "GitHub Actions"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Appwrite", "Firebase"],
  },
  {
    group: "Tools & Platforms",
    items: ["Apache Superset", "Jira", "Postman", "n8n", "VS Code", "WebSockets", "WebRTC"],
  },
  {
    group: "Practices",
    items: [
      "REST APIs",
      "Unit Testing",
      "Performance Optimization",
      "Agile",
      "Automations",
      "OAuth 2.0",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Azilen Technologies",
    location: "Ahmedabad",
    period: "Jan 2026 — Jun 2026",
    bullets: [
      "Built an LLM analytics chatbot using LangGraph and Apache Superset to convert natural language into SQL and generate interactive charts.",
      "Applied clean-code principles and AI-assisted workflows (GitHub Copilot, structured prompt engineering) to accelerate delivery across multiple concurrent projects.",
      "Authored end-to-end technical documentation for a multi-module legacy background-check platform inactive for years — module-level and system-wide docs that revived the project and enabled seamless onboarding.",
      "Migrated the candidate module from .NET Framework 4.6 to a modern .NET backend with Angular frontend and PostgreSQL, delivering full parity with all legacy modules in one month — the fastest turnaround in the revival timeline.",
      "Delivered iterative Angular UI enhancements for an internal product, implementing responsive components aligned with evolving design and product requirements.",
      "Drove OAuth 2.0 integrations on the partnership team — analysed third-party docs, set up developer portals, built and submitted OAuth apps, authored integration guides, and produced demo videos for external app submissions.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Skill Software INC.",
    period: "Mar 2025 — Aug 2025",
    bullets: [
      "Built and deployed React Native apps with AWS (Lambda, EC2, S3), delivering smooth, responsive interfaces for iOS and Android.",
      "Contributed to 2 client projects under Agile workflows — sprint planning, daily standups, and code reviews.",
    ],
  },
  {
    role: "MERN Developer Intern",
    company: "Citadel Infotech Pvt. Ltd.",
    location: "Rajkot",
    period: "May 2024 — Jul 2024",
    bullets: [
      "Built a Library Management System with the MERN stack — book, user, and transaction management.",
      "Designed the UI, developed backend APIs, and deployed to Vercel and Render.",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AIDynamoLearn",
    tagline: "AI reading + query engine for books",
    description:
      "AI-powered learning platform built on a RAG architecture — integrates OpenAI GPT API with vector embeddings for semantic document indexing, enabling natural-language queries across PDF book content and cutting search time by 60%.",
    stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Vector Embeddings", "NLP"],
  },
  {
    name: "CodeColab",
    tagline: "Real-time collaborative code editor",
    description:
      "Real-time collaborative editor with syntax highlighting for 15+ languages, intelligent auto-suggestions, secure room generation, and group chat over WebRTC for seamless remote pair programming.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "WebSockets", "WebRTC"],
    links: [{ label: "Live", href: "https://code-colab-ai.vercel.app/" }],
  },
  {
    name: "TaxSavvy",
    tagline: "Personalized tax-planning platform",
    description:
      "Full-stack tax-planning platform with personalized recommendations and real-time insights, automating calculations across 20+ deduction categories. Interactive Chart.js dashboards improved decision speed by 40%.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js"],
  },
  {
    name: "Reddit Scraper",
    tagline: "Apify actor · zero-key Reddit extraction",
    description:
      "The most reliable Reddit scraper on Apify — pulls posts, comments, communities, and user profiles from public JSON endpoints with no API key. Advanced anti-bot bypass via TLS fingerprinting (curl_cffi) and session-based residential proxies delivered a 100% success rate with zero 403s across 380+ items in testing.",
    stack: ["Python", "curl_cffi", "Apify SDK", "TLS Fingerprinting", "Proxies"],
    links: [
      {
        label: "View on Apify",
        href: "https://apify.com/breezy_keypress/reddit-scraper",
      },
    ],
    featured: true,
  },
  {
    name: "AI Job Search",
    tagline: "AI job-application workflow",
    description:
      "An open-source framework that turns any AI coding assistant into a full job-application assistant. A Bun/TypeScript CLI handles portal search, dedup, LaTeX compilation, and ATS checks; the AI tool drives fit evaluation, CV + cover-letter drafting, and a drafter-reviewer pipeline. Works with any local job boards and never fabricates experience.",
    stack: ["TypeScript", "Bun", "LaTeX", "CLI", "AI Agents"],
    links: [{ label: "Live", href: "https://job-assistant-mu.vercel.app/" }],
    featured: true,
  },
];

export const education = {
  degree: "Bachelor of Technology, Information Technology",
  school: "Charusat University",
  detail: "CGPA 8.81 / 10.0",
  period: "Graduation May 2026",
};

export const certifications: string[] = [
  "DoseHACK-24 Hackathon — 2nd Runner-Up (Top 3 of 50+ teams)",
  "Google Cloud Certified Professional (GCCP) — Cloud Architecture & Services",
  "Google — Foundations of Project Management (Professional Certificate)",
  "NPTEL — Data Structures using Java (IIT-verified), Database Management Systems, Operating Systems Fundamentals",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Contact form config.
// Web3Forms is free, needs no backend and no account dashboard — get an
// access key at https://web3forms.com (enter your email, they mail you a key),
// then paste it below. Until a real key is set, the form runs in a safe
// "demo" mode that validates + shows the success state without sending.
export const contactConfig = {
  web3formsKey: "0faa2350-2a5d-40d4-965b-81c807b87f26",
  // Cloudflare Turnstile — real, free bot protection (verified server-side in
  // app/api/contact/route.ts, then forwarded to Web3Forms). The site key is
  // public (sent to the browser); the secret is NOT stored here — it's read
  // from process.env.TURNSTILE_SECRET_KEY in the API route, with the value
  // below as a dev-only fallback. Get a free key pair at
  // https://dash.cloudflare.com/?to=/:account/turnstile (create a site). The
  // defaults below are Cloudflare's always-passing TEST keys — they render the
  // widget and pass verification for local dev but give NO real protection.
  // For production: replace turnstileSiteKey with your real site key AND set
  // TURNSTILE_SECRET_KEY in your Vercel project env (never commit the secret).
  turnstileSiteKey: "0x4AAAAAAD0N6yGFyQJsh68e",
  turnstileSecretKey: "0x4AAAAAAD0N6-5Z8B5KEEgCUM6oXFgI3_g",
};

