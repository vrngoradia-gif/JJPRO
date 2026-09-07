"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteMeta, services, solutions } from "@/lib/content";
import Logomark from "@/components/ui/Logomark";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const dropdowns: Record<string, { label: string; href: string; description?: string }[]> = {
  "/services": [
    { label: "Overview", href: "/services" },
    ...services.paths.map((p) => ({ label: p.name, href: p.href, description: p.label })),
  ],
  "/solutions": [
    { label: "Overview", href: "/solutions" },
    ...solutions.verticals.map((v) => ({ label: v.name, href: `/solutions/${v.slug}` })),
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false
  );

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/60 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Logomark size={30} />
          <span className="font-display text-lg tracking-wide text-paper">
            {siteMeta.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            const items = dropdowns[link.href];
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => items && setHovered(link.href)}
                onMouseLeave={() => items && setHovered(null)}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors ${
                    active ? "text-accent-bright" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {items && hovered === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-line bg-panel/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-paper-dim transition-colors hover:bg-ink-soft hover:text-paper"
                        >
                          <span className="block text-paper">{item.label}</span>
                          {item.description && (
                            <span className="block text-xs text-paper-dim/70">{item.description}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-accent/50 px-5 py-2 text-sm text-accent-bright transition-colors hover:bg-accent hover:text-panel"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line/60 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 text-lg ${
                    pathname === link.href ? "text-accent-bright" : "text-paper-dim"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 rounded-full border border-accent/50 px-5 py-3 text-center text-sm text-accent-bright"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
