"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { track } from "@/lib/track";
import { WaButton } from "./WhatsAppFab";
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-8, 8]), { stiffness: 120, damping: 18 });
  function move(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  return (
    <section ref={ref} id="hero" className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-myth" /> MYTH AI <span className="text-neutral-400">×</span> <span className="h-2 w-2 rounded-full bg-zushi" /> ZUSHI
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[2.6rem] leading-[1.04] sm:text-6xl xl:text-7xl ">
            Design it digitally. <em className="gold-em">Get it made</em> by a verified factory.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg text-neutral-600">
            MYTH creates the product, sample and visuals without a physical sample. ZUSHI matches it to a verified manufacturer and tracks production, quality and shipment until it lands.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" onClick={() => track("cta_demo_click", { location: "hero" })} className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-800">Book a joint demo</a>
            <WaButton location="hero" label="WhatsApp us" />
            <a href="#how-it-works" className="rounded-full border border-black/15 bg-white px-6 py-3 font-semibold hover:border-black/40">See how it works</a>
          </motion.div>
          <p className="mt-6 text-sm text-neutral-500">Designers still decide. The platforms remove the waiting.</p>
        </div>
        <div className="relative" onMouseMove={move} onMouseLeave={() => { mx.set(0); my.set(0); }} style={{ perspective: 1200 }}>
          <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="floaty card-light rounded-3xl border border-myth/30 bg-white p-4 shadow-2xl">
              <p className="text-[10px] font-bold tracking-widest text-myth">MYTH STUDIO</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="relative mt-3 aspect-[3/4] overflow-hidden rounded-2xl"><img src="/img/design.jpg" alt="digital apparel design" className="h-full w-full object-cover" />
                <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold">Design studio</span></div>
              <p className="mt-3 text-xs text-neutral-500">Stock photo, Unsplash</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="floaty card-light flex flex-col rounded-3xl border border-zushi/30 bg-white p-4 shadow-2xl" style={{ animationDelay: "1.2s" }}>
              <p className="text-[10px] font-bold tracking-widest text-zushi">ZUSHI ORDER TRACKING</p>
              <ul className="mt-3 space-y-3 text-xs">
                {[["RFQ sent", 100], ["Factory matched", 100], ["Production", 62], ["Quality check", 20], ["Shipment", 0]].map(([l, p]) => (
                  <li key={l as string}>
                    <div className="flex justify-between font-medium"><span>{l}</span><span className="text-neutral-400">{p}%</span></div>
                    <div className="mt-1 h-2 rounded-full bg-neutral-100"><motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} transition={{ delay: 0.9, duration: 1.1 }} className="h-2 rounded-full bg-zushi" /></div>
                  </li>
                ))}
              </ul>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/factory.jpg" alt="apparel factory floor" className="mt-4 hidden h-24 w-full rounded-xl object-cover sm:block" />
              <p className="mt-auto pt-3 text-xs text-neutral-500">Order tracking view. Stock photo, Unsplash.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
