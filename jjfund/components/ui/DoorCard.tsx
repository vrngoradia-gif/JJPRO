import Link from "next/link";

export default function DoorCard({
  label,
  subtitle,
  want,
  offer,
  action,
}: {
  label: string;
  subtitle: string;
  want: string;
  offer: string;
  action: { label: string; href: string };
}) {
  return (
    <div className="glow-border flex flex-col rounded-2xl bg-panel/60 p-8">
      <p className="eyebrow">{subtitle}</p>
      <h3 className="font-display mt-3 text-2xl text-paper">{label}</h3>
      <dl className="mt-6 space-y-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-widest text-paper-dim">They want</dt>
          <dd className="mt-1 text-paper">{want}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-paper-dim">We offer</dt>
          <dd className="mt-1 text-paper">{offer}</dd>
        </div>
      </dl>
      <Link
        href={action.href}
        className="mt-8 inline-flex items-center gap-2 text-sm text-accent-bright hover:text-accent"
      >
        {action.label}
        <span>→</span>
      </Link>
    </div>
  );
}
