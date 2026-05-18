import {
  Blocks,
  Braces,
  Cpu,
  Database,
  GitBranch,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Harsheet Sharma",
  handle: "harsheetsharma",
  role: "Backend Engineer",
  location: "Nagpur, Maharashtra",
  email: "harshitsharma8012@gmail.com",
  phone: "+91 9960437210",
  resume: "/Harsheet-Sharma-Resume.pdf",
  github: "https://github.com/harsheetsharma",
  linkedin: "https://www.linkedin.com/in/harsheet-sharma-64f63",
  tagline: "Building reliable systems that stay calm under concurrency.",
  intro:
    "Backend-focused engineer working with TypeScript, Node.js, PostgreSQL, Redis, queues, and distributed systems. I like APIs that are observable, idempotent, and correct when traffic, retries, and partial failures show up.",
  roles: [
    "Backend Engineer",
    "Distributed Systems Builder",
    "Open Source Contributor",
    "TypeScript Specialist",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "5,000+", label: "Concurrent job simulations" },
  { value: "99%", label: "Workflow uptime target" },
  { value: "90.5%", label: "Job success rate with recovery" },
  { value: "85%", label: "Reduction in failed conflicts" },
];

export const principles = [
  {
    title: "Correctness Under Load",
    copy: "Transactions, idempotency, locks, retries, and backoff are treated as product features.",
    icon: ShieldCheck,
  },
  {
    title: "Clear System Boundaries",
    copy: "Control-plane coordination stays separate from worker execution so systems scale without becoming mysterious.",
    icon: Network,
  },
  {
    title: "Production-Minded APIs",
    copy: "Validation, observability, and predictable failure modes are designed before the happy path is called done.",
    icon: Workflow,
  },
];

export const skillGroups = [
  {
    title: "Backend",
    icon: Braces,
    skills: ["Node.js", "TypeScript", "Express", "Hono", "REST APIs", "BullMQ", "WebSockets"],
  },
  {
    title: "Data",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Prisma", "MySQL", "MongoDB", "Row locking"],
  },
  {
    title: "Systems",
    icon: Cpu,
    skills: ["Distributed systems", "Idempotency", "Fault tolerance", "Caching", "Concurrency"],
  },
  {
    title: "Tooling",
    icon: Blocks,
    skills: ["Docker", "GitHub Actions", "Linux", "Git", "Postman", "Swagger", "AWS essentials"],
  },
];

export const marqueeRows = [
  ["TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Prisma", "Docker", "GitHub Actions"],
  ["Idempotency", "Retries", "Queues", "OpenAPI", "AJV", "Transactions", "Observability", "System Design"],
];

export const projects = [
  {
    title: "OpsFlow",
    type: "Distributed workflow orchestration engine",
    summary:
      "A control-plane and worker-plane architecture for async job execution, retry orchestration, and observable background processing.",
    impact: "5,000+ concurrent simulations with resilient recovery paths.",
    stack: ["TypeScript", "Node.js", "Redis", "BullMQ", "PostgreSQL"],
    href: "https://github.com/harsheetsharma/opsflow",
    repo: "https://github.com/harsheetsharma/opsflow",
    gradient: "from-cyan-400/25 via-fuchsia-400/20 to-emerald-400/20",
  },
  {
    title: "Payment System",
    type: "Transaction-safe transfer engine",
    summary:
      "A backend-first payment product focused on row-level locking, idempotent transaction flows, and consistency under concurrent retries.",
    impact: "Validated ledger correctness across 100+ concurrent user scenarios.",
    stack: ["Node.js", "PostgreSQL", "Prisma", "Stripe", "Transactions"],
    href: "https://github.com/harsheetsharma/paytm-complete",
    repo: "https://github.com/harsheetsharma/paytm-complete",
    gradient: "from-amber-300/25 via-rose-400/20 to-cyan-300/20",
  },
  {
    title: "Open Source Contributions",
    type: "Production code in established projects",
    summary:
      "Focused contributions to Rocket.Chat and AsyncAPI across API migration, federation utilities, and mobile layout reliability.",
    impact: "Review-ready patches for mature teams and production-facing codebases.",
    stack: ["Rocket.Chat", "AsyncAPI", "TypeScript", "AJV", "API tooling"],
    href: "https://github.com/harsheetsharma",
    repo: "https://github.com/harsheetsharma",
    gradient: "from-violet-400/25 via-sky-400/20 to-lime-300/20",
  },
];

export const experience = [
  {
    period: "March 2026",
    title: "Rocket.Chat API Migration",
    company: "Open Source",
    detail:
      "Migrated the rooms.createDiscussion endpoint into the new API structure with AJV validation as part of the OpenAPI modernization effort.",
  },
  {
    period: "March 2026",
    title: "Rocket.Chat Federation",
    company: "Open Source",
    detail:
      "Extracted Matrix user ID generation into a reusable utility and resolved a review-stage bug before the contribution landed.",
  },
  {
    period: "March 2026",
    title: "AsyncAPI Studio",
    company: "Open Source",
    detail:
      "Fixed mobile overflow from unwrapped monospace strings with a clean change that passed quality gates without new issues.",
  },
  {
    period: "Education",
    title: "BCA",
    company: "RTM Nagpur University",
    detail: "Computer applications foundation with a self-directed focus on backend architecture and production systems.",
  },
];

export const testimonials = [
  {
    quote:
      "Harsheet writes like someone who has already had to debug the failure modes. His backend thinking is unusually mature.",
    name: "Engineering Review Note",
    role: "Open-source contribution feedback",
  },
  {
    quote:
      "The strongest signal is the taste for correctness: transactional APIs, queue recovery, and clean boundaries.",
    name: "Portfolio Signal",
    role: "Technical positioning",
  },
];

export const techStack = [
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "BullMQ",
  "Docker",
  "GitHub Actions",
  "GSAP",
  "Framer Motion",
  "Tailwind CSS",
];

export const githubContributionSeed = Array.from({ length: 112 }, (_, index) => ({
  id: index,
  level: (index * 7 + index.toString().charCodeAt(0)) % 5,
}));

export const githubIcon = GitBranch;
