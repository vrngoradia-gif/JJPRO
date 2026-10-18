import { NextResponse } from "next/server";
// Leads are emailed to LEAD_TO_EMAIL (default jigjn14@gmail.com) through FormSubmit.co.
// FormSubmit needs a one-time activation: the first submission sends a confirmation email
// to that address; click "Activate" once and later leads arrive normally.
// To use another service (Formspree, CRM, Zapier), set LEAD_WEBHOOK_URL in Vercel env.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !body.email || !body.name) return NextResponse.json({ ok: false }, { status: 400 });
  const to = process.env.LEAD_TO_EMAIL || "jigjn14@gmail.com";
  const url = process.env.LEAD_WEBHOOK_URL || `https://formsubmit.co/ajax/${to}`;
  const payload = { ...body, _subject: `MYTH x ZUSHI demo request: ${body.company || ""} (${body.interest || ""})`, _replyto: body.email, _template: "table", _captcha: "false" };
  try {
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
    if (!r.ok) { console.error("LEAD forward failed", r.status, JSON.stringify(body)); return NextResponse.json({ ok: false }, { status: 502 }); }
  } catch (e) { console.error("LEAD forward error", e, JSON.stringify(body)); return NextResponse.json({ ok: false }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
