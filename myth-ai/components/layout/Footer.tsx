import Link from "next/link";
import { siteMeta, contact, footerLinks } from "@/lib/content";
import Logomark from "@/components/ui/Logomark";

const columns = [
  { label: "Services", items: footerLinks.services },
  { label: "Platform", items: footerLinks.platform },
  { label: "Solutions", items: footerLinks.solutions },
  { label: "Company", items: footerLinks.company },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-ink-soft">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-line/60 pb-16 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Let&rsquo;s accelerate</p>
            <h2 className="h-display-lg accent-gradient-text">Your next collection is already late.</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-panel transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_24px_rgba(169,129,47,0.45)]"
          >
            Book a 30-min Demo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr]">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logomark size={28} />
              <span className="font-display text-base tracking-wide text-paper">{siteMeta.shortName}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-paper-dim">{siteMeta.tagline}</p>
            <p className="mt-5 text-sm text-paper-dim">{contact.office}</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M3 6.5h18v11H3z" strokeLinejoin="round" />
                  <path d="m3 7 9 6.5L21 7" strokeLinejoin="round" />
                </svg>
                {contact.email}
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.35c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.22-8.26 8.22Z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.label}>
              <p className="eyebrow mb-5">{col.label}</p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-paper-dim transition-colors hover:text-paper"
                    >
                      {item.label.replace(/^\d+\.\s*/, "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line/60 pt-8 text-xs text-paper-dim/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p>
          <p>Design as a Service · Agentic AI as a Service</p>
        </div>
      </div>
    </footer>
  );
}
