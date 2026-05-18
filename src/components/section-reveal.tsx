"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionRevealProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
};

export function SectionReveal({ children, className, ...props }: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 72, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
