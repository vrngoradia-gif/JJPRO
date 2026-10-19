"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const FRAMES = [0, 45, 90, 135, 180, 225, 270, 315];
const STAGES = [
  { owner: "MYTH", title: "Design", line: "Text or image to design" },
  { owner: "MYTH", title: "Digital sample", line: "No physical sample" },
  { owner: "MYTH", title: "Tech pack", line: "Tech pack and BOM" },
  { owner: "ZUSHI", title: "Production and QC", line: "Stage tracking and AI quality check" },
  { owner: "ZUSHI", title: "Shipment", line: "Tracking, documents and insurance" },
] as const;
const POS = ["lg:left-[-6%] lg:top-[8%]", "lg:left-[-12%] lg:top-[34%]", "lg:left-[-6%] lg:top-[60%]", "lg:right-[2%] lg:top-[18%]", "lg:right-[0%] lg:top-[50%]"];
const DEPTH = [60, 90, 50, 80, 100];

export default function HeroGarment() {
  const reduce = useReducedMotion();
  const [angle, setAngle] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const st = useRef({ angle: 0, hover: false, drag: false, lastX: 0, scrollBoost: 0 });
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    let raf = 0, last = performance.now(), lastSet = 0;
    const onScroll = () => { st.current.scrollBoost = Math.min(window.scrollY, 900) * 0.35; };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const tick = (t: number) => {
      const dt = Math.min(t - last, 50) / 1000; last = t;
      if (!st.current.hover && !st.current.drag) st.current.angle = (st.current.angle + dt * 16) % 360;
      if (t - lastSet > 33) { lastSet = t; setAngle((((st.current.angle + st.current.scrollBoost) % 360) + 360) % 360); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, [reduce]);

  const frame = Math.round(angle / 45) % 8;
  const active = Math.min(4, Math.floor((angle / 360) * 5));

  function onMove(e: React.PointerEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
    if (e.pointerType === "mouse") { st.current.hover = true; setTilt({ x: (0.5 - ny) * 10, y: (nx - 0.5) * 14 }); }
    if (st.current.drag || e.pointerType === "mouse") {
      if (st.current.drag) { st.current.angle = (st.current.angle - (e.clientX - st.current.lastX) * 0.9 + 360) % 360; st.current.lastX = e.clientX; }
      else st.current.angle = (nx * 360 - st.current.scrollBoost + 720) % 360;
    }
  }
  function leave() { st.current.hover = false; st.current.drag = false; setTilt({ x: 0, y: 0 }); }

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-[min(34rem,calc((100svh-8rem)*0.8))]">
      <div ref={stage} className="relative aspect-[4/5] touch-pan-y select-none" style={{ perspective: 1400 }}
        onPointerMove={onMove} onPointerLeave={leave}
        onPointerDown={(e) => { if (e.pointerType !== "mouse") { st.current.drag = true; st.current.lastX = e.clientX; } }}
        onPointerUp={() => { st.current.drag = false; }}>
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform .25s ease-out" }}>
          {/* floor ring */}
          <div className="absolute bottom-[3%] left-1/2 h-[16%] w-[86%] -translate-x-1/2 rounded-[50%] border border-[var(--gold)]/60" style={{ transform: "translateZ(-40px) rotateX(70deg)", background: "radial-gradient(closest-side, rgba(10,12,22,.22), transparent 70%)" }} />
          <div className="absolute bottom-[5%] left-1/2 h-[12%] w-[62%] -translate-x-1/2 rounded-[50%] border border-[var(--gold)]/40" style={{ transform: "translateZ(-30px) rotateX(70deg)" }} />
          {/* garment turntable */}
          <div className="absolute inset-x-[6%] top-0 bottom-[6%] overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#efe6d6] shadow-[0_40px_80px_-30px_rgba(10,12,22,.45)]" style={{ transform: "translateZ(30px)" }}>
            {FRAMES.map((f, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={f} src={`/img/jacket-${f}.jpg`} alt={i === 0 ? "Chore jacket on a mannequin, rotating 360 degrees" : ""} aria-hidden={i !== 0} loading={i < 2 ? "eager" : "lazy"} decoding="async"
                className="absolute inset-0 h-full w-full object-cover" style={{ opacity: frame === i ? 1 : 0, transition: "opacity .12s linear" }} />
            ))}
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold">Illustrative</span>
            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tabular-nums">{Math.round(angle)}°</span>
          </div>
          {/* stage chips (orbit on desktop) */}
          {STAGES.map((s, i) => {
            const on = i === active;
            return (
              <div key={s.title} className={`pointer-events-none absolute hidden w-[15rem] lg:block ${POS[i]}`} style={{ transform: `translateZ(${DEPTH[i] + (on ? 40 : 0)}px)`, transition: "transform .4s" }}>
                <div className={`border bg-[#fbf6ec] p-3 shadow-xl transition ${on ? (s.owner === "MYTH" ? "border-myth" : "border-zushi") : "border-black/10 opacity-80"}`}>
                  <p className={`text-[10px] font-bold tracking-widest ${s.owner === "MYTH" ? "text-myth" : "text-zushi"}`}>0{i + 1} · {s.owner}</p>
                  <p className="mt-1 font-serif text-lg leading-tight text-ink">{s.title}</p>
                  <p className="mt-1 text-xs text-neutral-600">{s.line}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* stage pills (mobile and tablet) */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
        {STAGES.map((s, i) => (
          <span key={s.title} className={`border px-2.5 py-1 text-[11px] font-semibold transition ${i === active ? (s.owner === "MYTH" ? "border-myth bg-myth text-white" : "border-zushi bg-zushi text-white") : "border-black/15 bg-[#fbf6ec] text-neutral-600"}`}>{i + 1}. {s.title}</span>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-neutral-500 lg:hidden">{STAGES[active].line}</p>
    </div>
  );
}
