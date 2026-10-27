// Cloudflare Pages advanced-mode worker. Serves the static export and reproduces
// the former Next.js /api/lead route (POST) so forms keep working unchanged.
// Leads go to LEAD_TO_EMAIL (default jigjn14@gmail.com) through FormSubmit.co.
const SITE = "Merovant";
const SITE_URL = "https://merovant.co";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

async function handleLead(request, env) {
  const to = env.LEAD_TO_EMAIL || "jigjn14@gmail.com";
  const siteUrl = env.SITE_URL || SITE_URL;
  const type = request.headers.get("content-type") || "";
  const out = new FormData();
  try {
    if (type.includes("application/json")) {
      const body = await request.json();
      for (const [k, v] of Object.entries(body || {})) out.append(k, String(v));
    } else {
      const fd = await request.formData();
      fd.forEach((v, k) => out.append(k, v));
    }
  } catch {
    return json({ ok: false }, 400);
  }
  if (Array.from(out.keys()).length === 0) return json({ ok: false }, 400);
  out.set("_subject", `${SITE} enquiry${out.get("name") ? ": " + String(out.get("name")) : ""}`);
  const reply = out.get("email");
  if (reply) out.set("_replyto", String(reply));
  out.set("_template", "table");
  out.set("_captcha", "false");
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${to}`, {
      method: "POST",
      headers: { Accept: "application/json", Origin: siteUrl, Referer: `${siteUrl}/` },
      body: out,
    });
    if (!r.ok) { const t = await r.text().catch(() => ""); console.error("LEAD forward failed", r.status, t.slice(0, 300)); return json({ ok: false, upstream: r.status }, 502); }
    let rejected = false;
    try { const j = await r.clone().json(); if (String(j.success) === "false") rejected = true; } catch {}
    if (rejected) { console.error("LEAD upstream rejected (activation pending)"); return json({ ok: false, upstream: "activation" }, 502); }
  } catch (e) {
    console.error("LEAD forward error", e);
    return json({ ok: false }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead") {
      if (request.method !== "POST") return json({ ok: false }, 405);
      return handleLead(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
