"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Wraps the hero: content drifts up and fades slightly as you scroll past. Static under reduced motion. */
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);
  return (
    <div ref={ref} className="relative z-10 w-full">
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}
