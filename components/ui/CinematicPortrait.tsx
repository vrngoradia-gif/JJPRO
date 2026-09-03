"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { easeOut } from "@/lib/motion";

/**
 * Full-bleed hero background portrait — head-focused crop with a slow,
 * looping Ken Burns zoom/pan. Disabled in favor of a static frame when the
 * user prefers reduced motion.
 */
export default function CinematicPortrait({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.22, opacity: 0 }}
      animate={
        prefersReducedMotion
          ? { scale: 1.06, opacity: 1 }
          : { scale: [1.22, 1.05, 1.12, 1.05], opacity: 1 }
      }
      transition={{
        opacity: { duration: 1.4, ease: easeOut },
        scale: prefersReducedMotion
          ? { duration: 1.4, ease: easeOut }
          : { duration: 28, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_10%] opacity-55 grayscale"
      />
    </motion.div>
  );
}
