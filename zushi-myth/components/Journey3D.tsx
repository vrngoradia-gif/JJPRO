"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion, useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { track } from "@/lib/track";

type Stop = { owner: "MYTH" | "HANDOFF" | "ZUSHI"; title: string; sub: string; get: string[]; img?: string; soon?: boolean };
const stops: Stop[] = [
  { owner: "MYTH", title: "Design the collection", sub: "MYTH", get: ["Text or image to design", "Collection Lab"], img: "/img/design.jpg" },
  { owner: "MYTH", title: "Digital sample and visuals", sub: "MYTH Studio", get: ["AI product photos, models and video", "No physical sample"], img: "/img/fabric.jpg" },
  { owner: "MYTH", title: "Factory-ready files", sub: "MYTH PLM", get: ["Tech pack and BOM", "Vector/TIFF and colour separation"], img: "/img/fabric-roll.jpg" },
  { owner: "HANDOFF", title: "Send to ZUSHI", sub: "Handoff", get: ["The tech pack becomes an RFQ"], soon: true },
  { owner: "ZUSHI", title: "Match verified factories", sub: "ZUSHI AI", get: ["Fit on product, MOQ, price and timeline", "Trade checks by Dun & Bradstreet"], img: "/img/factory.jpg" },
  { owner: "ZUSHI", title: "Quote, book a slot, order", sub: "ZUSHI", get: ["Compare quotes on price, MOQ and lead time", "Lock a production window"], img: "/img/factory.jpg" },
  { owner: "ZUSHI", title: "Track production and QC", sub: "ZUSHI", get: ["Stage tracking and delay alerts", "AI quality check"], img: "/img/fabric-roll.jpg" },
  { owner: "ZUSHI", title: "Ship and release payment", sub: "ZUSHI", get: ["Shipment tracking, documents and insurance", "Escrow by milestone"], img: "/img/ship.jpg" },
];
const N = stops.length;
const ownerCls = { MYTH: "text-myth border-myth/40", ZUSHI: "text-zushi border-zushi/40", HANDOFF: "text-ink border-ink/30" } as const;
const ownerLabel = { MYTH: "MYTH", ZUSHI: "ZUSHI", HANDOFF: "MYTH to ZUSHI" } as const;

function Card({ s, i, p }: { s: Stop; i: number; p: MotionValue<number> }) {
  const d = useTransform(p, (v) => i - v * (N - 1));
  const transform = useTransform(d, (x) => {
    const a = Math.abs(x);
    return `translate3d(${x * 270}px, ${-Math.min(a, 3) * 14}px, ${-a * 220}px) rotateY(${Math.max(-1.2, Math.min(1.2, x)) * -34}deg) scale(${1 - Math.min(a, 2) * 0.06})`;
  });
  const opacity = useTransform(d, (x) => Math.max(0, 1 - Math.abs(x) * 0.75));
  const accent = s.owner === "MYTH" ? "#4f5eff" : s.owner === "ZUSHI" ? "#a3141f" : "#c9a96a";
  return (
    <motion.div style={{ transform, opacity, borderColor: accent }} className="absolute left-1/2 top-1/2 -ml-[130px] -mt-[170px] h-[340px] w-[260px] overflow-hidden border-2 bg-[#fbf6ec] shadow-[0_40px_60px_-30px_rgba(40,25,10,.45)] will-change-transform md:-ml-[150px] md:-mt-[190px] md:h-[380px] md:w-[300px]">
      {s.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.img} alt="" loading="lazy" className="h-[64%] w-full object-cover" />
      ) : (
        <div className="flex h-[64%] w-full flex-col items-center justify-center gap-3 border-b border-dashed border-ink/25 bg-[#ecdad2]">
          <span className="font-sans text-xs font-semibold tracking-widest text-ink/60">TECH PACK</span><span className="text-3xl">→</span><span className="font-sans text-xs font-semibold tracking-widest text-ink/60">RFQ</span>
        </div>
      )}
      <div className="p-4">
        <p className="font-sans text-[10px] font-bold tracking-widest" style={{ color: accent }}>{String(i + 1).padStart(2, "0")} · {s.sub.toUpperCase()}</p>
        <p className="mt-1 font-serif text-xl leading-tight text-ink">{s.title}</p>
        {s.soon && <span className="mt-2 inline-block bg-ink px-2 py-0.5 font-sans text-[10px] font-semibold text-white">Coming soon</span>}
      </div>
    </motion.div>
  );
}

function Floor({ p }: { p: MotionValue<number> }) {
  const pos = useTransform(p, (v) => `0px ${v * 900}px`);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-[-30%] bottom-0 h-[55%] [transform:perspective(700px)_rotateX(64deg)] [transform-origin:50%_100%]">
      <motion.div style={{ backgroundPosition: pos }} className="h-full w-full [background-image:linear-gradient(to_right,rgba(163,126,60,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,126,60,.35)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  );
}

export default function Journey3D() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(p, "change", (v) => { const k = Math.min(N - 1, Math.max(0, Math.round(v * (N - 1)))); setActive((a) => (a === k ? a : k)); });
  const mx = useMotionValue(0); const rot = useSpring(mx, { stiffness: 60, damping: 20 });
  const worldRot = useTransform(rot, (v) => `rotateY(${v * 5}deg)`);
  useEffect(() => { track("journey3d_view"); }, []);
  const jump = (i: number) => {
    const el = wrap.current; if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (i / (N - 1)) * (el.offsetHeight - window.innerHeight), behavior: "smooth" });
    track("journey3d_jump", { stop: i + 1 });
  };
  const s = stops[active];
  const head = (
    <div className="mx-auto max-w-7xl px-5">
      <p className="text-xs font-bold tracking-widest text-neutral-500">THE FULL JOURNEY</p>
      <h2 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">From sketch to delivered order, in one line.</h2>
    </div>
  );
  if (reduce) {
    return (
      <section id="how-it-works" className="py-24">{head}
        <ol className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {stops.map((x, i) => (
            <li key={x.title} className={`border bg-[#fbf6ec] p-5 ${ownerCls[x.owner]}`}>
              <p className="font-sans text-[10px] font-bold tracking-widest">{String(i + 1).padStart(2, "0")} · {ownerLabel[x.owner]}</p>
              <p className="mt-2 font-serif text-xl text-ink">{x.title}</p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">{x.get.map((g) => <li key={g}>{g}</li>)}</ul>
              {x.soon && <span className="mt-3 inline-block bg-ink px-2 py-0.5 text-[10px] font-semibold text-white">Coming soon</span>}
            </li>
          ))}
        </ol>
      </section>
    );
  }
  return (
    <section id="how-it-works" ref={wrap} className="relative" style={{ height: `${N * 75 + 100}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-20 md:pt-24" onPointerMove={(e) => mx.set((e.clientX / window.innerWidth - 0.5) * 2)}>
        {head}
        <div className="relative mt-2 flex-1 md:mt-0">
          <Floor p={p} />
          <div className="absolute inset-0 [perspective:1100px]">
            <motion.div style={{ transform: worldRot }} className="absolute inset-0 [transform-style:preserve-3d] md:right-[34%]">
              {stops.map((x, i) => <Card key={x.title} s={x} i={i} p={p} />)}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-7xl justify-end px-5 pb-16 md:inset-y-0 md:items-center md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                className="pointer-events-auto w-full border border-black/10 bg-[#fbf6ec]/92 p-5 backdrop-blur md:w-[34%] md:p-7">
                <span className={`inline-block border px-2 py-0.5 font-sans text-[10px] font-bold tracking-widest ${ownerCls[s.owner]}`}>{ownerLabel[s.owner]}</span>
                <p className="mt-3 font-serif text-2xl text-ink md:text-3xl">{s.title}</p>
                <p className="mt-3 font-sans text-xs font-bold tracking-widest text-gold-dark" style={{ color: "#8a6a2a" }}>WHAT YOU GET</p>
                <ul className="mt-2 space-y-1.5 text-sm text-neutral-700 md:text-base">{s.get.map((g) => <li key={g} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#c9a96a]" />{g}</li>)}</ul>
                {s.soon && <span className="mt-3 inline-block bg-ink px-2 py-0.5 font-sans text-[10px] font-semibold text-white">Coming soon</span>}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute inset-x-0 bottom-3 z-20 mx-auto flex max-w-7xl items-center gap-2 px-5">
            <span className="font-sans text-xs font-semibold tabular-nums text-neutral-600">{String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}</span>
            <div role="tablist" aria-label="Journey stops" className="flex flex-1 items-center gap-1.5">
              {stops.map((x, i) => (
                <button key={x.title} role="tab" aria-selected={i === active} aria-label={`Go to stop ${i + 1}: ${x.title}`} onClick={() => jump(i)}
                  className={`h-2 flex-1 transition-all ${i === active ? "bg-ink" : i < active ? "bg-[#c9a96a]" : "bg-black/15 hover:bg-black/30"}`} />
              ))}
            </div>
            <span className="hidden font-sans text-xs text-neutral-500 sm:inline">Scroll or click a stop</span>
          </div>
        </div>
      </div>
    </section>
  );
}
