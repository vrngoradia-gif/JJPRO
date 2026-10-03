"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroOrb = dynamic(() => import("./HeroOrb"), { ssr: false });

/** Loads the 3D orb only on desktop-width screens, when motion is allowed, after the page is idle. */
export default function HeroOrbLoader() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ok = window.matchMedia("(min-width: 900px)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    // Wait a beat so the hero text paints first, then pull in the 3D chunk.
    const id = window.setTimeout(() => setOn(true), 600);
    return () => clearTimeout(id);
  }, []);
  if (!on) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute right-0 top-[12%] hidden h-[58%] w-[40%] md:block">
      <HeroOrb />
    </div>
  );
}
