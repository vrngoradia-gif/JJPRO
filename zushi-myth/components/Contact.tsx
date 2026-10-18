"use client";
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";
const roles = ["Brand / Retailer", "Manufacturer / Export house", "Buying house / Agent", "Other"];
const roleFromTab: Record<string, string> = { "Brands & Retailers": roles[0], Manufacturers: roles[1], "Buying Houses": roles[2] };
const countries = ["India","United Arab Emirates","United Kingdom","Spain","Germany","Italy","France","Netherlands","Turkey","Brazil","Panama","United States","Canada","Bangladesh","Vietnam","Other"];
export default function Contact() {
  const [role, setRole] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const started = useRef(false);
  const [utm, setUtm] = useState<Record<string, string>>({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search); const u: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach((k) => { u[k] = p.get(k) || ""; });
    u.referrer = document.referrer; u.page_variant = p.get("v") || "default"; setUtm(u);
    const h = (e: Event) => setRole(roleFromTab[(e as CustomEvent).detail] || "");
    window.addEventListener("audience-tab", h); return () => window.removeEventListener("audience-tab", h);
  }, []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error();
      track("form_submit"); window.location.href = "/thank-you";
    } catch { setState("error"); }
  }
  const f = "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white";
  return (
    <section id="contact" className="py-24 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">See your next collection go from sketch to shipment.</h2>
          <p className="mt-5 text-lg text-white/70">Book a 30-minute joint demo with the MYTH and ZUSHI teams.</p>
        </div>
        <form onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; track("form_start"); } }} className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Full name" className={f} />
          <input name="email" type="email" required placeholder="Work email" className={f} />
          <input name="company" required placeholder="Company" className={f} />
          <select name="role" required value={role} onChange={(e) => setRole(e.target.value)} className={f}>
            <option value="" disabled className="text-black">Role</option>{roles.map((r) => <option key={r} className="text-black">{r}</option>)}
          </select>
          <select name="country" required defaultValue="" className={f}>
            <option value="" disabled className="text-black">Country</option>{countries.map((c) => <option key={c} className="text-black">{c}</option>)}
          </select>
          <select name="monthly_volume" defaultValue="" className={f}>
            <option value="" className="text-black">Monthly volume (optional)</option>{["<5k pcs", "5k-50k", "50k+", "Not sure"].map((v) => <option key={v} className="text-black">{v}</option>)}
          </select>
          <fieldset className="sm:col-span-2 flex flex-wrap gap-4 text-sm">
            <legend className="mb-2 text-white/60">Interested in</legend>
            {["Design & sampling (MYTH)", "Sourcing & production (ZUSHI)", "Both"].map((o, i) => <label key={o} className="flex items-center gap-2"><input type="radio" name="interest" value={o} required defaultChecked={i === 2} />{o}</label>)}
          </fieldset>
          <textarea name="message" rows={3} placeholder="Message (optional)" className={`${f} sm:col-span-2`} />
          {Object.entries(utm).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}
          <label className="sm:col-span-2 flex gap-3 text-xs text-white/60"><input type="checkbox" name="consent" required className="mt-1" />I agree to be contacted by MYTH AI and ZUSHI about this request and accept the <a href="/privacy" className="underline">privacy notice</a>.</label>
          <button disabled={state === "sending"} onClick={() => track("cta_demo_click", { location: "final" })} className="sm:col-span-2 rounded-full bg-white px-6 py-3 font-bold text-ink hover:bg-neutral-200 disabled:opacity-60">{state === "sending" ? "Sending..." : "Book a joint demo"}</button>
          {state === "error" && <p className="sm:col-span-2 text-sm text-red-300">Something went wrong. Please try again or email admin@withzushi.com.</p>}
        </form>
      </div>
    </section>
  );
}
