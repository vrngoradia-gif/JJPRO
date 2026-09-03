"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { easeOut } from "@/lib/motion";

/**
 * Portrait frame with a scroll-triggered curtain reveal and a subtle
 * pointer-tracked 3D tilt (desktop only, respects reduced motion).
 */
export default function TiltPortrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: easeOut }}
      className="group relative aspect-[661/1098] w-full overflow-hidden rounded-2xl border border-line/70 bg-panel"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 40vw, 90vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/10" />
    </motion.div>
  );
}
