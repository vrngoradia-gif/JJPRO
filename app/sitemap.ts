import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";
import { blogPosts } from "@/lib/blog";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/what-we-do", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/consulting", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about-us/coaching", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact/partner", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = routes.map((route) => ({
    url: `${siteMeta.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteMeta.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
