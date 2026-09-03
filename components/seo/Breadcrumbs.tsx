import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD.
 * Pass only the trail after Home — Home is prepended automatically.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-6 pt-28 md:px-10 md:pt-32"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs text-paper-dim">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-line">/</span>}
                {isLast ? (
                  <span aria-current="page" className="text-gold">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-paper">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
