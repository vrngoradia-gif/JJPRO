import { NextResponse } from "next/server";

// Enquiries are emailed to LEAD_TO_EMAIL (default jigjn14@gmail.com) through FormSubmit.co.
// FormSubmit needs a one-time activation per address: the first submission sends a
// confirmation email to it. Set LEAD_TO_EMAIL in Vercel to change the recipient.
const SITE = "Merovant";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://merovant.co";

export async function POST(req: Request) {
  const to = process.env.LEAD_TO_EMAIL || "jigjn14@gmail.com";
  const type = req.headers.get("content-type") || "";
  const out = new FormData();
  try {
    if (type.includes("application/json")) {
      const body = await req.json();
      for (const [k, v] of Object.entries(body || {})) out.append(k, String(v));
    } else {
      const fd = await req.formData();
      fd.forEach((v, k) => out.append(k, v));
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (Array.from(out.keys()).length === 0) return NextResponse.json({ ok: false }, { status: 400 });
  out.set("_subject", `${SITE} enquiry${out.get("name") ? ": " + String(out.get("name")) : ""}`);
  const reply = out.get("email");
  if (reply) out.set("_replyto", String(reply));
  out.set("_template", "table");
  out.set("_captcha", "false");
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${to}`, {
      method: "POST",
      headers: { Accept: "application/json", Origin: SITE_URL, Referer: `${SITE_URL}/` },
      body: out,
    });
    if (!r.ok) { console.error("LEAD forward failed", r.status); return NextResponse.json({ ok: false }, { status: 502 }); }
  } catch (e) {
    console.error("LEAD forward error", e);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
