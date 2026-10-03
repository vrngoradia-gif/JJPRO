import type { MetadataRoute } from "next";
import { siteMeta, footerLinks } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [{ url: siteMeta.url, lastModified, priority: 1 }, ...footerLinks.sitemap.map((l) => ({ url: `${siteMeta.url}${l.href}`, lastModified, priority: 0.7 }))];
}
