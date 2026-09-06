import Link from "next/link";
import { siteMeta, contact, footerLinks } from "@/lib/content";

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
            <p className="eyebrow mb-5">{siteMeta.shortName}</p>
            <p className="max-w-xs text-sm text-paper-dim">{siteMeta.tagline}</p>
            <p className="mt-4 text-sm text-paper-dim">{contact.office}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 inline-block text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {contact.email}
            </a>
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
                      {item.label}
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
