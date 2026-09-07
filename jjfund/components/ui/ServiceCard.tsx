import Link from "next/link";

export default function ServiceCard({
  label,
  title,
  tagline,
  href,
}: {
  label: string;
  title: string;
  tagline: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="glow-border group flex flex-col justify-between rounded-2xl bg-panel/60 p-8 transition-colors hover:border-accent/60"
    >
      <div>
        <p className="eyebrow">{label}</p>
        <h3 className="font-display mt-4 text-xl text-paper">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">{tagline}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm text-accent-bright">
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
