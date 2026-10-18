import type { Metadata } from "next";
import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
import { posts } from "@/lib/blogs";
export const metadata: Metadata = { title: "Insights", description: "Guides on apparel sourcing, materials, AI design and the production lifecycle.", alternates: { canonical: "/blog" } };
export default function Blog() {
  const clusters = ["Sourcing", "Materials", "Design", "Lifecycle"] as const;
  return (<><Nav /><main className="mx-auto max-w-5xl px-5 pt-32 pb-24">
    <h1 className="text-5xl font-black tracking-tight">Insights</h1>
    <p className="mt-4 text-lg text-neutral-600">Guides on apparel sourcing, materials, AI design and the production lifecycle.</p>
    {clusters.map((c) => (<section key={c} className="mt-14"><h2 className="text-xs font-bold tracking-widest text-neutral-500">{c.toUpperCase()}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">{posts.filter((p) => p.cluster === c).map((p) => (
        <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-black/10 p-6 hover:border-black/40"><h3 className="font-bold">{p.title}</h3><p className="mt-2 text-sm text-neutral-600">{p.description}</p></a>))}</div></section>))}
  </main><Footer /></>);
}
