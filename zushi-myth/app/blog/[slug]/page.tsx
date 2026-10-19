import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
import { posts, getPost, clusterCta } from "@/lib/blogs";
export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug); if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { title: p.title, description: p.description, type: "article" } };
}
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug); if (!p) notFound();
  const cta = clusterCta[p.cluster];
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.description, author: { "@type": "Organization", name: "MYTH AI × ZUSHI" }, publisher: { "@type": "Organization", name: "MYTH AI × ZUSHI" }, mainEntityOfPage: `https://www.zushixmyth.com/blog/${p.slug}` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  const Cta = ({ where }: { where: string }) => (
    <aside className="my-10 rounded-3xl bg-ink p-8 text-white"><p className="text-xs font-bold tracking-widest text-white/50">{p.cluster.toUpperCase()}</p>
      <h2 className="mt-2 text-2xl font-black">{cta.head}</h2><p className="mt-2 text-white/70">{cta.text}</p>
      <a href={`/?utm_source=blog&utm_medium=cta&utm_campaign=${p.slug}&utm_content=${where}#contact`} className="mt-5 inline-block rounded-full bg-white px-6 py-3 font-bold text-ink">Book a joint demo</a></aside>);
  return (<><Nav /><main className="mx-auto max-w-3xl px-5 pt-32 pb-24">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <a href="/blog" className="text-sm text-neutral-500">← All insights</a>
    <p className="mt-6 text-xs font-bold tracking-widest text-neutral-400">{p.cluster.toUpperCase()}</p>
    <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight">{p.title}</h1>
    <p className="mt-6 rounded-2xl bg-paper p-6 text-lg font-medium">{p.answer}</p>
    {p.sections.map((s, i) => (<section key={s.h}><h2 className="mt-10 text-2xl font-black">{s.h}</h2>{s.p.map((t) => <p key={t} className="mt-4 leading-relaxed text-neutral-700">{t}</p>)}{i === 0 && <Cta where="mid" />}</section>))}
    <h2 className="mt-12 text-2xl font-black">FAQ</h2>
    {p.faqs.map((f) => (<div key={f.q} className="mt-4"><h3 className="font-bold">{f.q}</h3><p className="mt-1 text-neutral-700">{f.a}</p></div>))}
    <Cta where="end" />
  </main><Footer /></>);
}
