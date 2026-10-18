"use client";
import { useEffect, useRef } from "react";
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0, x = 0, y = 0;
    const m = (e: MouseEvent) => { x = e.clientX; y = e.clientY; if (!raf) raf = requestAnimationFrame(() => { raf = 0; if (ref.current) ref.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`; }); };
    window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[400px] w-[400px] rounded-full opacity-[0.16] mix-blend-screen md:block" style={{ background: "radial-gradient(circle, #c9a96a 0%, transparent 65%)" }} />;
}
