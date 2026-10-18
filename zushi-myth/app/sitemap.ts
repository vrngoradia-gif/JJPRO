import type { MetadataRoute } from "next";
import { posts } from "@/lib/blogs";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://zushixmyth.com";
  return [{ url: b, priority: 1 }, { url: `${b}/blog`, priority: 0.8 }, ...posts.map((p) => ({ url: `${b}/blog/${p.slug}`, priority: 0.6 })), { url: `${b}/privacy` }, { url: `${b}/terms` }];
}
