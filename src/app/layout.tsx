import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

import "@/app/globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://harsheet-sharma.vercel.app"),
  title: {
    default: `${profile.name} - Backend Engineer`,
    template: `%s - ${profile.name}`,
  },
  description:
    "Premium interactive portfolio for Harsheet Sharma, a backend engineer focused on TypeScript, Node.js, PostgreSQL, Redis, distributed systems, and open source.",
  keywords: [
    "Harsheet Sharma",
    "Backend Engineer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: "https://harsheet-sharma.vercel.app",
    title: `${profile.name} - Backend Engineer`,
    description:
      "Cinematic, interactive portfolio showcasing backend systems, open-source work, and production-minded engineering.",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Backend Engineer`,
    description:
      "Cinematic, interactive portfolio showcasing backend systems and open-source contributions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050509",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
