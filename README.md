# Harsheet Sharma Portfolio

A personal portfolio website built with React, TypeScript, Vite, and `pnpm`.

This project presents Harsheet Sharma as a backend-focused engineer, highlighting distributed systems work, open-source contributions, technical skills, and featured projects in a clean one-page layout with lightweight animations.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- pnpm

## Features

- Responsive one-page portfolio
- Lightweight motion with reduced-motion support
- Resume download button
- Sections for hero, about, featured projects, open source, skills, and contact
- Fast static build suitable for free hosting

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

## Project Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ Harsheet-Sharma-Resume.pdf
├─ src/
│  ├─ App.tsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Where To Edit Content

Most of the portfolio content is centralized inside [src/App.tsx](./src/App.tsx).

Update these areas there:

- `impactMetrics` for the top stat cards
- `featuredProjects` for showcased project content
- `openSourceTimeline` for contribution history
- `skillGroups` for grouped technical skills
- `engineeringFocus` for the right-side hero highlights

## Styling

- Global design tokens and typography live in [src/index.css](./src/index.css)
- Section and component styling lives in [src/App.css](./src/App.css)

The visual direction is intentionally polished but restrained, with subtle motion instead of heavy animation.

## Resume

The downloadable resume is stored at:

[`public/Harsheet-Sharma-Resume.pdf`](./public/Harsheet-Sharma-Resume.pdf)

Replace that file if you want to update the resume without changing the component code.

## Deployment

This is a static frontend project, so it can be deployed for free on platforms like:

- Vercel
- Netlify
- GitHub Pages

For most platforms, the build settings are:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`

## Notes

- The project uses `pnpm` as requested.
- The site was built as a separate app so the existing `frontend` project in the repository remains untouched.
- The production build has already been verified successfully.
