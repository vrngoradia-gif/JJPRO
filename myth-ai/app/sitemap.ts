import type { MetadataRoute } from "next";
import { siteMeta, platform, solutions, blogPosts } from "@/lib/content";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/platform", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/daas", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/aaaas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/solutions", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/academie", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/resources/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = routes.map((route) => ({
    url: `${siteMeta.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const platformRoutes = platform.products.map((product) => ({
    url: `${siteMeta.url}/platform/${product.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const solutionRoutes = solutions.verticals.map((vertical) => ({
    url: `${siteMeta.url}/solutions/${vertical.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteMeta.url}/resources/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...platformRoutes, ...solutionRoutes, ...postRoutes];
}
