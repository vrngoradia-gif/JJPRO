import Link from "next/link";
import { footerLinks, siteMeta } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-ink-soft">
      {/* ambient gold glow, consistent with hero/CTA treatment elsewhere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {/* large monogram + CTA line */}
        <div className="flex flex-col gap-8 border-b border-line/60 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Let&apos;s build something</p>
            <p className="h-display-lg gold-gradient-text">{siteMeta.name}</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-gold/40 px-6 py-3 text-sm text-paper transition-colors hover:border-gold hover:bg-gold/10"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.95fr_0.75fr] lg:gap-8">
          <div>
            <p className="eyebrow mb-5">About</p>
            <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
              {siteMeta.description}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Sitemap</p>
            <ul className="space-y-3">
              {footerLinks.sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper-dim transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Get in Touch</p>
            <ul className="space-y-3 text-sm text-paper-dim">
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.contact.career}`}
                  className="transition-colors hover:text-gold"
                >
                  Careers — {footerLinks.contact.career}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.contact.partner}`}
                  className="transition-colors hover:text-gold"
                >
                  Partners — {footerLinks.contact.partner}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Follow</p>
            <ul className="space-y-3">
              {footerLinks.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper-dim transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line/60 pt-8 text-xs text-paper-dim/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p>
          <p>Site by JJ PRO</p>
        </div>
      </div>
    </footer>
  );
}
