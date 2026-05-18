"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  reverse,
  speed = 34,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const row = [...items, ...items, ...items];

  return (
    <div className="group relative flex overflow-hidden border-y border-white/10 bg-white/[0.025] py-4">
      <motion.div
        className={cn("flex min-w-max gap-4 pr-4", reverse && "flex-row-reverse")}
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {row.map((item, index) => (
          <span
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm uppercase tracking-[0.22em] text-white/70 transition duration-300 group-hover:border-cyan-300/40 group-hover:text-white"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
