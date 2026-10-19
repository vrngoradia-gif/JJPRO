import { Lockup } from "./Logo";
export default function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/30 bg-[var(--band)] text-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div><Lockup /><p className="mt-3 text-sm text-white/55">© 2026 MYTH AI &amp; ZUSHI. Contact: admin@withzushi.com</p></div>
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/70 hover:text-[#e0c88f]">
          <a href="https://myth-ai.com" target="_blank" rel="noopener">myth-ai.com</a>
          <a href="https://withzushi.com" target="_blank" rel="noopener">withzushi.com</a>
          <a href="/blog">Blog</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
          <a href="https://linkedin.com/company/withzushi" target="_blank" rel="noopener">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
