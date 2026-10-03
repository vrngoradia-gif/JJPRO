"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useIsLowEndDevice } from "@/lib/useMediaQuery";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/**
 * Wraps the R3F hero scene with:
 * - SSR-safe dynamic import (Three.js never blocks server rendering / SEO)
 * - IntersectionObserver so the canvas only mounts once it's near the viewport
 * - A static gradient fallback for reduced-motion or low-end devices
 */
export default function SceneCanvas({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isLowEndDevice = useIsLowEndDevice();
  const canRender3D = !prefersReducedMotion && !isLowEndDevice;

  useEffect(() => {
    if (!canRender3D) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [canRender3D]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {canRender3D ? (
        inView && (
          <div className="absolute inset-0">
            <HeroScene />
          </div>
        )
      ) : (
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_45%,rgba(214,51,108,0.28),transparent_60%)]" />
      )}
    </div>
  );
}
