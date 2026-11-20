// Cloudflare Pages advanced-mode worker. Serves the static export and reproduces
// the former Next.js /api/lead route (POST, JSON) so forms keep working unchanged.
// Leads go to LEAD_TO_EMAIL (default jigjn14@gmail.com) through FormSubmit.co,
// or to LEAD_WEBHOOK_URL when set.
function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

async function handleLead(request, env) {
  const body = await request.json().catch(() => null);
  if (!body || !body.email || !body.name) return json({ ok: false }, 400);
  const to = env.LEAD_TO_EMAIL || "jigjn14@gmail.com";
  const url = env.LEAD_WEBHOOK_URL || `https://formsubmit.co/ajax/${to}`;
  const payload = { ...body, _subject: `MYTH x ZUSHI ${body.source === "popup_60s" ? "popup lead" : "demo request"}: ${body.company || body.name} (${body.interest || ""})`, _replyto: body.email, _template: "table", _captcha: "false" };
  try {
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", Origin: "https://www.zushixmyth.com", Referer: "https://www.zushixmyth.com/" }, body: JSON.stringify(payload) });
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
