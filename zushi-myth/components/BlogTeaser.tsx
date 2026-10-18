import Reveal from "./Reveal";
import { posts } from "@/lib/blogs";
export default function BlogTeaser() {
  return (
    <section id="insights" className="py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">INSIGHTS</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Guides for fashion brands, buying houses and factories.</h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <a href={`/blog/${p.slug}`} className="block h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-bold tracking-widest text-neutral-400">{p.cluster.toUpperCase()}</p>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <a href="/blog" className="mt-8 inline-block font-semibold underline underline-offset-4">All 20 guides →</a>
      </div>
    </section>
  );
}
