"use client";
import { track } from "@/lib/track";
import { WaButton } from "./WhatsAppFab";
export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[var(--band)]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/ship.jpg" alt="" loading="lazy" className="kb absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-luminosity" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center text-white">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">Ready to see it on your product?</h2>
        <p className="mt-4 max-w-xl text-lg text-white/85">Bring a sketch, a photo or a tech pack. We&apos;ll show you the line from design to delivery.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" onClick={() => track("cta_demo_click", { location: "banner" })} className="rounded-full bg-[var(--gold)] px-6 py-3 font-bold text-ink">Book a joint demo</a>
          <WaButton location="banner" />
        </div>
      </div>
    </section>
  );
}
