import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const variants = {
  solid: "bg-accent text-panel hover:bg-accent-bright shadow-[0_0_0_1px_rgba(169,129,47,0.4)] hover:shadow-[0_0_24px_rgba(169,129,47,0.45)]",
  outline: "border border-line text-paper hover:border-accent hover:text-accent-bright",
  ghost: "text-paper-dim hover:text-paper",
};

export default function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
