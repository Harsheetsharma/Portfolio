"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Network,
  Send,
  Sparkles,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

import { CustomCursor } from "@/components/custom-cursor";
import { GitHubActivity } from "@/components/github-activity";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { SectionReveal } from "@/components/section-reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  experience,
  marqueeRows,
  metrics,
  navItems,
  principles,
  profile,
  projects,
  skillGroups,
  techStack,
  testimonials,
} from "@/data/profile";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const depth = Number(element.dataset.parallax ?? 40);
        gsap.fromTo(
          element,
          { y: depth },
          {
            y: -depth,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-kinetic]").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              end: "bottom 52%",
              scrub: 1,
            },
          },
        );
      });

      if (horizontalRef.current) {
        const track = horizontalRef.current;
        const distance = track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -Math.max(0, distance),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-pin",
            start: "top top",
            end: () => `+=${Math.max(distance, 900)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, rootRef);

    return () => context.revert();
  }, []);

  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300"
        style={{ scaleX: progress }}
      />

      <AnimateLoader loaded={loaded} />

      <div
        ref={rootRef}
        className="relative min-h-screen overflow-hidden bg-[#050509] text-white"
      >
        <div className="noise-overlay" />
        <InteractiveBackdrop />

        <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
          <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <a
              href="#top"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
            >
              HS
            </a>
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Magnetic>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-cyan-100"
              >
                <Download className="size-3.5" />
                Resume
              </a>
            </Magnetic>
          </nav>
        </header>

        <main id="top" className="relative z-10">
          <section className="relative flex min-h-screen items-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 26 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
                >
                  <Sparkles className="size-4 text-cyan-200" />
                  Backend systems / open source / product-grade APIs
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 46, filter: "blur(20px)" }}
                  animate={{
                    opacity: loaded ? 1 : 0,
                    y: loaded ? 0 : 46,
                    filter: loaded ? "blur(0px)" : "blur(20px)",
                  }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-5xl text-balance text-[clamp(3.4rem,9vw,9.4rem)] font-black leading-[0.86] tracking-normal"
                >
                  Harsheet
                  <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                    Sharma
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 24 }}
                  transition={{ delay: 0.22, duration: 0.8 }}
                  className="mt-7 flex flex-wrap items-center gap-3 text-xl text-white/72 sm:text-2xl"
                >
                  <span>Building as a</span>
                  <RoleSwitcher />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 24 }}
                  transition={{ delay: 0.36, duration: 0.8 }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-white/58"
                >
                  {profile.intro}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 24 }}
                  transition={{ delay: 0.48, duration: 0.8 }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <Magnetic>
                    <a className="button-primary" href="#projects">
                      Explore Work <ArrowUpRight className="size-4" />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      className="button-secondary"
                      href={`mailto:${profile.email}`}
                    >
                      Start a conversation <Mail className="size-4" />
                    </a>
                  </Magnetic>
                </motion.div>
              </div>

              <HeroConsole />
            </motion.div>
          </section>

          <Marquee items={marqueeRows[0]} />
          <Marquee items={marqueeRows[1]} reverse speed={42} />

          <SectionReveal
            id="about"
            className="mx-auto grid max-w-7xl gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
          >
            <div>
              <p className="eyebrow">About Me</p>
              <h2 data-kinetic className="section-title mt-5">
                Backend-first, with a taste for systems that behave when
                pressure arrives.
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="text-xl leading-9 text-white/62">
                My work sits at the intersection of APIs, data consistency,
                background processing, and operational reliability. I care about
                the invisible details: the retry that should not double-charge,
                the queue that should recover, and the database transaction that
                should stay honest.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <motion.article
                    className="panel p-5"
                    key={metric.label}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <motion.strong
                      className="block text-4xl font-black text-white"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      {metric.value}
                    </motion.strong>
                    <span className="mt-3 block text-sm leading-6 text-white/50">
                      {metric.label}
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item) => (
                <motion.article
                  key={item.title}
                  className="panel group p-6"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <item.icon className="mb-8 size-8 text-cyan-200 transition group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/52">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </SectionReveal>

          <section
            id="projects"
            className="horizontal-pin relative min-h-screen overflow-hidden py-28"
          >
            <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="eyebrow">Featured Projects</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Projects that showcase backend work with real engineering
                weight.
              </h2>
            </div>
            <div
              ref={horizontalRef}
              className="flex w-max gap-6 px-4 sm:px-6 lg:px-8"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                  key={project.title}
                />
              ))}
            </div>
          </section>

          <SectionReveal
            id="skills"
            className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
          >
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Skills</p>
                <h2 className="section-title mt-5">
                  Backend technologies focused on APIs, distributed systems,
                  performance, and reliability.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-white/52">
                Categorized by how I actually use the tools: APIs, data, systems
                behavior, and delivery.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <motion.article
                  className="panel group min-h-72 p-6"
                  key={group.title}
                  whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                >
                  <group.icon className="size-9 text-fuchsia-200" />
                  <h3 className="mt-8 text-2xl font-semibold">{group.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-white/62 transition group-hover:border-cyan-300/30 group-hover:text-white"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="panel overflow-hidden p-6 sm:p-8">
              <p className="eyebrow">Tech Stack</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {techStack.map((tech, index) => (
                  <motion.div
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5 text-center text-sm font-medium text-white/70"
                    key={tech}
                    initial={{ opacity: 0, scale: 0.86 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{
                      y: -6,
                      borderColor: "rgba(103,232,249,0.45)",
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal
            id="github"
            className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
          >
            <div className="mb-12">
              <p className="eyebrow">GitHub Activity</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Projects, contributions, and the technologies I work with
                regularly.
              </h2>
            </div>
            <GitHubActivity />
          </SectionReveal>

          <SectionReveal className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="eyebrow">Engineering Approach</p>
              <h2 className="section-title mt-5 max-w-4xl">
                I focus on building reliable backend systems with clean
                architecture, predictable behavior, and scalable APIs.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <article className="panel p-7" key={item.name}>
                  <p className="text-2xl leading-9 text-white/78">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <strong className="block text-white">{item.name}</strong>
                    <span className="mt-1 block text-sm text-white/42">
                      {item.role}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Experience</p>
                <h2 className="section-title mt-5">
                  Recent work, open-source proof, and technical trajectory.
                </h2>
              </div>
              <div className="relative">
                <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/50 to-fuchsia-300/0" />
                {experience.map((item) => (
                  <article
                    className="relative mb-8 pl-12"
                    key={`${item.title}-${item.period}`}
                  >
                    <span className="absolute left-2 top-2 size-4 rounded-full border border-cyan-200 bg-black shadow-[0_0_24px_rgba(103,232,249,0.45)]" />
                    <span className="text-sm uppercase tracking-[0.22em] text-cyan-100/60">
                      {item.period}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-fuchsia-100/60">
                      {item.company}
                    </p>
                    <p className="mt-4 leading-7 text-white/55">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal
            id="contact"
            className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
          >
            <div className="panel grid gap-10 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="section-title mt-5">
                  Let’s build something fast, observable, and dependable.
                </h2>
                <div className="mt-8 space-y-4 text-white/58">
                  <a
                    className="flex items-center gap-3 transition hover:text-white"
                    href={`mailto:${profile.email}`}
                  >
                    <Mail className="size-4" /> {profile.email}
                  </a>
                  <span className="flex items-center gap-3">
                    <MapPin className="size-4" /> {profile.location}
                  </span>
                  <div className="flex gap-3 pt-3">
                    <a
                      className="icon-link"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <GitBranch className="size-5" />
                    </a>
                    <a
                      className="icon-link"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Network className="size-5" />
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </SectionReveal>
        </main>

        <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/42 md:flex-row">
            <span>
              © 2026 Harsheet Sharma. Crafted with Next.js, GSAP, Lenis, and
              Framer Motion.
            </span>
            <a href="#top" className="transition hover:text-white">
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}

function AnimateLoader({ loaded }: { loaded: boolean }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#050509]"
      initial={false}
      animate={{ y: loaded ? "-100%" : "0%" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden={loaded}
    >
      <motion.div className="text-center" animate={{ opacity: loaded ? 0 : 1 }}>
        <div className="mx-auto mb-6 size-20 rounded-full border border-cyan-200/20 bg-cyan-200/10 shadow-[0_0_80px_rgba(103,232,249,0.35)]" />
        <p className="text-sm uppercase tracking-[0.45em] text-white/55">
          Initializing portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}

function InteractiveBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const move = (event: PointerEvent) => {
      element.style.setProperty("--mx", `${event.clientX}px`);
      element.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,20%),rgba(103,232,249,0.18),transparent_34rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div
        className="absolute left-[-12%] top-[12%] size-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        data-parallax="70"
      />
      <div
        className="absolute bottom-[18%] right-[-10%] size-[30rem] rounded-full bg-fuchsia-400/10 blur-3xl"
        data-parallax="110"
      />
    </div>
  );
}

function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % profile.roles.length);
    }, 1900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex min-w-[16rem] overflow-hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
      <motion.span
        key={profile.roles[index]}
        initial={{ y: 26, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -26, opacity: 0 }}
        transition={{ duration: 0.45 }}
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

function HeroConsole() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 48, rotateY: -12 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.65, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="panel relative overflow-hidden p-4 sm:p-6"
      data-parallax="40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-fuchsia-300/10" />
      <div className="relative rounded-3xl border border-white/10 bg-black/45 p-5">
        <div className="mb-6 flex gap-2">
          <span className="size-3 rounded-full bg-rose-400" />
          <span className="size-3 rounded-full bg-amber-300" />
          <span className="size-3 rounded-full bg-emerald-300" />
        </div>
        <div className="font-mono text-sm leading-7 text-white/64">
          <p>
            <span className="text-cyan-200">$</span> engineer.profile
            --cinematic
          </p>
          <p>
            name: <span className="text-white">{profile.name}</span>
          </p>
          <p>
            role: <span className="text-white">{profile.role}</span>
          </p>
          <p>
            focus: <span className="text-white">queues, APIs, reliability</span>
          </p>
          <p>
            location: <span className="text-white">{profile.location}</span>
          </p>
          <p>
            status:{" "}
            <span className="text-emerald-200">available immediately</span>
          </p>
        </div>
      </div>
      <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
        {metrics.slice(0, 2).map((metric) => (
          <div
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
            key={metric.label}
          >
            <strong className="text-3xl font-black">{metric.value}</strong>
            <span className="mt-2 block text-sm leading-5 text-white/45">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      className="group relative flex h-[34rem] w-[min(82vw,36rem)] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl"
      initial={{ opacity: 0, y: 80, rotate: index % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.035 }}
      transition={{ type: "spring", stiffness: 190, damping: 24 }}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-70 transition duration-500 group-hover:opacity-100",
          project.gradient,
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_18rem)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">
        <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/62">
          {project.type}
        </span>
        <h3 className="mt-8 text-4xl font-black leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-white/66">
          {project.summary}
        </p>
        <p className="mt-6 translate-y-4 text-sm leading-6 text-white/0 transition duration-500 group-hover:translate-y-0 group-hover:text-white/72">
          {project.impact}
        </p>
      </div>
      <div className="relative">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-sm text-white/72"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            className="button-primary"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            Live / repo <ArrowUpRight className="size-4" />
          </a>
          <a
            className="icon-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
          >
            <GitBranch className="size-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2400);
  }

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <label className="field">
        <span>Name</span>
        <input required name="name" autoComplete="name" />
      </label>
      <label className="field">
        <span>Email</span>
        <input required name="email" type="email" autoComplete="email" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea required name="message" rows={5} />
      </label>
      <button className="button-primary w-full justify-center" type="submit">
        {sent ? "Message staged" : "Send message"} <Send className="size-4" />
      </button>
      <p className="text-sm leading-6 text-white/42">
        This demo form keeps the interaction client-side. Connect a mail API or
        Vercel server action when deploying.
      </p>
    </form>
  );
}
