import Link from "next/link";
import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export const metadata = { title: "Page not found" };
export default function NotFound() { return (<><Nav /><main className="mx-auto max-w-3xl px-5 pt-40 pb-32 text-center">
  <p className="text-xs font-bold tracking-widest text-neutral-500">404</p>
  <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">This page could not be found.</h1>
  <p className="mt-4 text-neutral-600">The link may be old or mistyped. The homepage has everything: how MYTH AI × ZUSHI works, proof, and how to reach the teams.</p>
  <div className="mt-8 flex justify-center gap-3">
    <Link href="/" className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-800">Back to homepage</Link>
    <Link href="/#contact" className="rounded-full border border-black/20 px-6 py-3 font-semibold hover:border-ink">Contact us</Link>
  </div>
</main><Footer /></>); }
