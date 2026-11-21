import Link from "next/link";
import { contactInfo, footerLinks, siteMeta } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{siteMeta.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-dim">{siteMeta.description}</p>
        </div>
        <div>
          <p className="eyebrow mb-5">Pages</p>
          <ul className="space-y-3">
            {footerLinks.sitemap.map((i) => (
              <li key={i.href}><Link href={i.href} className="text-sm text-paper-dim hover:text-accent-bright">{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-paper-dim">
            <li><Link href="/contact" className="hover:text-accent-bright">Contact us via the form</Link></li>
            {contactInfo.phone && <li>{contactInfo.phone}</li>}
            {contactInfo.offices.map((o) => <li key={o.place}>{o.place}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-6 py-6 text-xs text-paper-dim md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-3 text-sm"><Link href="/privacy" className="underline underline-offset-4">Privacy notice</Link><Link href="/terms" className="underline underline-offset-4">Terms of use</Link></nav>
          <p>&copy; {new Date().getFullYear()} {siteMeta.legalName}. All rights reserved.</p>
          <p>Trade and sourcing enquiries welcome.</p>
        </div>
      </div>
    </footer>
  );
}
