"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WaButton } from "./WhatsAppFab";
import Reveal from "./Reveal";
function Img({ src, alt, tone, contain = false }: { src: string; alt: string; tone: "myth" | "zushi"; contain?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} data-tilt className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 shadow-2xl ${tone === "myth" ? "border-myth/40" : "border-zushi/40"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img style={contain ? undefined : { y, scale: 1.2 }} src={src} alt={alt} loading="lazy" className={contain ? "h-full w-full bg-white object-contain" : "h-full w-full object-cover"} />
      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold">Illustrative</span>
    </div>
  );
}
export default function Split() {
  return (
    <section id="design-sourcing" className="overflow-hidden bg-paper py-24">
      <div className="mx-auto max-w-7xl space-y-28 px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal><Img src="/img/a-mannequin.jpg" alt="design studio with a shirt on a dress form" tone="myth" /></Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-bold tracking-widest text-myth">MYTH AI · DESIGN AS A SERVICE</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Don&apos;t have a design team? Rent one.</h2>
            <p className="mt-5 text-lg text-neutral-600">MYTH can create collections, patterns and colourways from a trend, a sketch or a photo, and prepare the files a factory needs. You review and decide; nothing is cut until you approve.</p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              {["Collections from a trend, sketch or photo", "Patterns, prints and colourways", "Digital samples and product visuals", "Tech pack handed to ZUSHI"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-myth" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-ink px-6 py-3 font-semibold text-white">Start a design brief</a><WaButton location="design_split" label="Ask on WhatsApp" /></div>
          </Reveal>
        </div>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="lg:order-2"><div className="grid grid-cols-2 gap-4"><div className="pt-10"><Img src="/img/z-rolls.jpg" alt="rolls of fabric in a textile warehouse" tone="zushi" /></div><Img src="/img/fabric.jpg" alt="fabric swatches and trims" tone="zushi" /></div></Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <p className="text-xs font-bold tracking-widest text-zushi">ZUSHI · MATERIAL SOURCING</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Fabric and trims, sourced with the product.</h2>
            <p className="mt-5 text-lg text-neutral-600">Materials are specified once in the tech pack and sourced through ZUSHI&apos;s verified factory network, so the factory quote covers the garment and the material it needs.</p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              {["Fabric, trims and packaging specified in the tech pack", "Quotes compared on price, MOQ and lead time", "Verified manufacturers, with trade checks by Dun & Bradstreet", "Pricing quoted per order"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zushi" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-ink px-6 py-3 font-semibold text-white">Request a sourcing quote</a></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
