"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function CustomCursor() {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 420, damping: 38 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 38 });

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event: PointerEvent) => {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea, [data-cursor='magnetic']")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [cursorX, cursorY, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-9 rounded-full border border-white/50 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.75 : 1, opacity: active ? 0.75 : 1 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
    />
  );
}
