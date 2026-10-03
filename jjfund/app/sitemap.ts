import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";

const paths = ["/", "/what-we-do", "/what-we-do/capital-fundraising", "/what-we-do/venture-studio-acceleration", "/what-we-do/advisory-expansion", "/what-we-do/operating-support", "/gcc", "/ai-automation", "/investors", "/partners", "/insights", "/about", "/connect"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((p) => ({ url: `${siteMeta.url}${p}`, lastModified, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : p === "/gcc" ? 0.9 : 0.7 }));
}
