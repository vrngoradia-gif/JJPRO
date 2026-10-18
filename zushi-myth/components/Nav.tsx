"use client";
import { useEffect, useState } from "react";
import { Lockup } from "./Logo";
import { track } from "@/lib/track";
const links = [["How it works", "#how-it-works"], ["For you", "#for-you"], ["Proof", "#proof"], ["FAQ", "#faq"], ["Blog", "/blog"]];
export default function Nav() {
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSmall(window.scrollY > 40);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header id="top" className={`fixed inset-x-0 top-0 z-50 transition-all bg-[#0a0c16]/95 text-white backdrop-blur border-b border-white/10 ${small ? "py-2" : "py-3.5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="/" aria-label="MYTH AI x ZUSHI home" className="whitespace-nowrap"><Lockup className="!text-sm sm:!text-lg !gap-1.5 sm:!gap-2 whitespace-nowrap" /></a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([l, h]) => <a key={h} href={h.startsWith("#") ? "/" + h : h} className="text-white/70 hover:text-[#e0c88f]">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#contact" onClick={() => track("cta_demo_click", { location: "nav" })} className="whitespace-nowrap rounded-full bg-[#c9a96a] px-3 py-2 text-xs font-semibold text-[#0a0c16] hover:bg-[#e0c88f] sm:px-4 sm:text-sm"><span className="sm:hidden">Book demo</span><span className="hidden sm:inline">Book a joint demo</span></a>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-5 bg-white mb-1" /><span className="block h-0.5 w-5 bg-white mb-1" /><span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>
      {open && <div className="md:hidden bg-[#0a0c16] border-t border-white/10 px-5 py-3 flex flex-col gap-3 text-sm">{links.map(([l, h]) => <a key={h} href={h.startsWith("#") ? "/" + h : h} onClick={() => setOpen(false)}>{l}</a>)}</div>}
    </header>
  );
}
