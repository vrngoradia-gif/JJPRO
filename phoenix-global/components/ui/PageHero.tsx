import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="grid-texture px-6 pb-16 pt-32 text-center md:px-10 md:pb-24 md:pt-40">
      <SectionReveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-paper-dim">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-10">
            <CtaButton href={cta.href}>{cta.label}</CtaButton>
          </div>
        )}
      </SectionReveal>
    </section>
  );
}

export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-accent-bright underline underline-offset-4 hover:text-accent">
      {children}
    </Link>
  );
}
