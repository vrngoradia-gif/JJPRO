"use client";
import { useEffect } from "react";
export default function TiltInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) return;
    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>("[data-tilt],[data-parallax]").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`); el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
        el.style.setProperty("--px", `${(x * -14).toFixed(1)}px`); el.style.setProperty("--py", `${(y * -14).toFixed(1)}px`);
      };
      const leave = () => { ["--rx", "--ry", "--px", "--py"].forEach((k) => el.style.setProperty(k, "0")); };
      el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
      cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
    });
    return () => cleanups.forEach((c) => c());
  }, []);
  return null;
}
