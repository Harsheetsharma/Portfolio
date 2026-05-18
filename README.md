# Harsheet Sharma Portfolio

This is my personal portfolio website built with React, TypeScript, Vite, and `pnpm`.

This project basically shows my backend-focused engineering depth of knowledge, highlighting distributed systems work, open-source contributions, technical skills, and featured projects in a clean one-page layout with lightweight animations.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- lucide-react icons
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Useful Commands

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Project Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ Harsheet-Sharma-Resume.pdf
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ custom-cursor.tsx
│  │  ├─ github-activity.tsx
│  │  ├─ magnetic.tsx
│  │  ├─ marquee.tsx
│  │  ├─ portfolio-experience.tsx
│  │  ├─ section-reveal.tsx
│  │  └─ smooth-scroll.tsx
│  ├─ data/
│  │  └─ profile.ts
│  ├─ hooks/
│  │  └─ use-prefers-reduced-motion.ts
│  └─ lib/
│     └─ utils.ts
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
└─ tsconfig.json
```

## Editing Content

```text
src/data/profile.ts
```

for updating:

- Name, role, resume, social links, contact details
- Navigation
- Metrics
- Skills
- Projects
- Experience timeline
- Testimonials
- Tech stack

## GitHub Integration

The GitHub section fetches public repositories from:

```text
https://api.github.com/users/harsheetsharma/repos?sort=updated&per_page=6
```

No token is required for basic public data. For heavier production traffic, add a small server route with a GitHub token and caching.

<!-- ## Vercel Deployment

Recommended Vercel settings:

- Framework preset: `Next.js`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `.next`
- Node version: latest stable LTS

Then deploy:

```bash
vercel
```

Or connect the GitHub repository in the Vercel dashboard and keep the defaults. -->

## Verification

Verified locally:

```bash
pnpm typecheck
pnpm build
```
