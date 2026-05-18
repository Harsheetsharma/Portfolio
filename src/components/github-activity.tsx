"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { githubContributionSeed, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  commit_count: number;
};

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const featuredRepos = [
    "distributed-job-queue",
    "realtime-chat",
    "payment-engine",
  ];
  useEffect(() => {
    let mounted = true;

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${profile.handle}/repos?per_page=100`,
          { next: { revalidate: 3600 } },
        );
        if (!response.ok) throw new Error("GitHub request failed");
        const data = (await response.json()) as GitHubRepo[];

        const filteredRepo = data
          .filter((repo) => !repo.fork)
          .filter((repo) => !repo.name.includes(".github"));

        const reposWithCommits = await Promise.all(
          filteredRepo.map(async (repo) => {
            try {
              const commitsRes = await fetch(
                `https://api.github.com/repos/${profile.handle}/${repo.name}/commits?per_page=1`,
              );
              const linkHeader = commitsRes.headers.get("Link");

              let commitCount = 1;

              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);

                if (match) {
                  commitCount = parseInt(match[1], 10);
                }
              }

              return {
                ...repo,
                commitCount,
              };
            } catch {
              return {
                ...repo,
                commitCount: 0,
              };
            }
          }),
        );

        const sorted = reposWithCommits
          .sort((a, b) => (b.commitCount ?? 0) - (a.commitCount ?? 0))
          .slice(0, 6);

        if (mounted)
          setRepos(
            // data
            //   .filter((repo) => !repo.name.includes(".github"))
            //   .filter((repo) => !repo.fork)
            //   .slice(0, 6),
            sorted,
          );
      } catch {
        if (mounted) setRepos([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadRepos();
    return () => {
      mounted = false;
    };
  }, []);

  const languageTotals = useMemo(() => {
    const totals = repos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) return acc;
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});
    return Object.entries(totals).sort((a, b) => b[1] - a[1]);
  }, [repos]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="panel relative overflow-hidden p-6">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Live GitHub Pulse</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Contribution Field
            </h3>
          </div>
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
            dynamic
          </span>
        </div>

        <div
          className="grid grid-cols-14 gap-1.5"
          aria-label="Contribution-style activity graph"
        >
          {githubContributionSeed.map((cell) => (
            <motion.span
              key={cell.id}
              className={cn(
                "aspect-square rounded-[4px] border border-white/[0.03]",
                cell.level === 0 && "bg-white/[0.035]",
                cell.level === 1 && "bg-cyan-400/20",
                cell.level === 2 && "bg-cyan-300/35",
                cell.level === 3 && "bg-emerald-300/45",
                cell.level === 4 &&
                  "bg-fuchsia-300/55 shadow-[0_0_18px_rgba(217,70,239,0.18)]",
              )}
              whileHover={{ scale: 1.8, zIndex: 5 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
            />
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {languageTotals.length ? (
            languageTotals.map(([language, count]) => (
              <div key={language}>
                <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.22em] text-white/45">
                  <span>{language}</span>
                  <span>{count}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(100, count * 28)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm leading-6 text-white/50">
              GitHub language mix appears here when the public API responds.
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="panel h-32 animate-pulse bg-white/[0.04]"
                  key={index}
                />
              ))
            : repos.map((repo, index) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="panel group block p-5 transition duration-300 hover:border-cyan-300/35 hover:bg-white/[0.075]"
                  key={repo.id}
                  initial={{ opacity: 0, x: 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {repo.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/55">
                        {repo.description ??
                          "Latest public repository from Harsheet's GitHub profile."}
                      </p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-white/35 transition group-hover:text-cyan-200" />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/45">
                    {repo.language && (
                      <span className="rounded-full bg-white/10 px-3 py-1">
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5" /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="size-3.5" /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
