"use client";
import Reveal from "./Reveal";
import { track } from "@/lib/track";
const frames = [
  { t: "1. Design a polo in MYTH", c: "bg-gradient-to-br from-myth/30 to-white", tag: "MYTH render" },
  { t: "2. Drop the render into ZUSHI AI", img: "https://cdn.sanity.io/images/enhe9bs4/production/e0abac19274a2dd0da65959998ff154708a07920-428x570.png?auto=format&fit=max&w=640&q=75", tag: "Photo upload" },
  { t: "3. Get matched factories", img: "https://cdn.sanity.io/images/enhe9bs4/production/c19fd5dd437143b82f8d62c9c59ba9c515dc2bc5-428x570.png?auto=format&fit=max&w=640&q=75", tag: "Matched factory list" },
];
export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-paper">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">DEMO MOMENT</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-black tracking-tight">Show it the product. It finds who can make it.</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">Design a polo in MYTH. Drop the render into ZUSHI AI. Get matched factories.</p></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {frames.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.12}>
              <button onClick={() => track("demo_video_play", { frame: i + 1 })} className="group block w-full text-left">
                <div className={`relative aspect-[3/4] overflow-hidden rounded-3xl border border-black/10 shadow-lg ${f.c || "bg-white"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {f.img && <img src={f.img} alt={f.tag} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />}
                  {!f.img && <svg viewBox="0 0 120 160" className="absolute inset-0 m-auto h-3/5"><path d="M40 20 L20 40 L30 60 L40 55 L40 140 L80 140 L80 55 L90 60 L100 40 L80 20 Q60 40 40 20Z" fill="#4F5EFF" /></svg>}
                  <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">{f.tag}</span>
                </div>
                <p className="mt-4 font-semibold">{f.t}</p>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-400">Screens from withzushi.com. A joint screen recording will replace these frames.</p>
      </div>
    </section>
  );
}
