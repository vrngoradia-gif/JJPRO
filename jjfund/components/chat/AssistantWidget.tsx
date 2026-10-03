"use client";

import { useEffect, useRef, useState } from "react";

export type MenuItem = {
  label: string;
  answer: string;
  cta?: { label: string; href: string };
};

export type Option = { label: string; value: string };
export type Step = { id: string; question: string; options?: Option[]; freeText?: boolean; placeholder?: string };

export type Questionnaire = {
  intro: string;
  first: Step;
  branches: Record<string, Step[]>;
  doneMessage: string;
  contactHref: string;
};

type Msg = { from: "bot" | "user"; text: string };

export type AssistantProps = {
  brand: string;
  subtitle: string;
  greeting: string;
  whatsappNumber?: string;
  whatsappText: string;
  menu: MenuItem[];
  questionnaire?: Questionnaire;
  formspreeId?: string;
};

export function whatsappLink(number: string | undefined, text: string) {
  const clean = (number ?? "").replace(/[^0-9]/g, "");
  const q = encodeURIComponent(text);
  return clean ? `https://wa.me/${clean}?text=${q}` : `https://api.whatsapp.com/send?text=${q}`;
}

const WA_ICON = (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" fill="currentColor">
    <path d="M16.02 3C9.39 3 4 8.33 4 14.9c0 2.1.56 4.15 1.62 5.95L4 29l8.35-2.14a12.1 12.1 0 0 0 3.67.57C22.65 27.43 28 22.1 28 15.53 28 8.95 22.65 3 16.02 3Zm0 21.93c-1.12 0-2.22-.3-3.18-.86l-.23-.13-4.95 1.27 1.32-4.76-.15-.24a9.1 9.1 0 0 1-1.4-4.86c0-5.03 4.15-9.12 9.25-9.12 5.1 0 9.25 4.09 9.25 9.12 0 5.04-4.15 9.58-9.9 9.58Zm5.1-6.86c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.33.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.5-.86-2.06-.23-.54-.46-.47-.63-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37 0 1.4 1.03 2.75 1.17 2.94.14.19 2 3.1 4.9 4.27.69.3 1.23.47 1.65.6.7.22 1.33.19 1.83.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.54-.33Z" />
  </svg>
);

export default function AssistantWidget(props: AssistantProps) {
  const { brand, subtitle, greeting, whatsappNumber, whatsappText, menu, questionnaire, formspreeId } = props;
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: greeting }]);
  const [stage, setStage] = useState<"menu" | "q" | "done">(questionnaire ? "q" : "menu");
  const [answers, setAnswers] = useState<{ q: string; a: string }[]>([]);
  const [queue, setQueue] = useState<Step[] | null>(null);
  const [current, setCurrent] = useState<Step | null>(questionnaire ? questionnaire.first : null);
  const [free, setFree] = useState("");
  const [sent, setSent] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const endRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (open && questionnaire && !started.current) {
      started.current = true;
      setMsgs((m) => [...m, { from: "bot", text: questionnaire.intro }, { from: "bot", text: questionnaire.first.question }]);
    }
  }, [open, questionnaire]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, stage, sent]);

  const wa = whatsappLink(whatsappNumber, whatsappText);

  function pickMenu(item: MenuItem) {
    setMsgs((m) => [...m, { from: "user", text: item.label }, { from: "bot", text: item.answer }]);
    setLastCta(item.cta ?? null);
  }
  const [lastCta, setLastCta] = useState<{ label: string; href: string } | null>(null);

  function summary(list: { q: string; a: string }[]) {
    return list.map((x) => `${x.q}: ${x.a}`).join("\n");
  }

  function advance(step: Step, label: string, value: string) {
    if (!questionnaire) return;
    const next = [...answers, { q: step.question, a: label }];
    setAnswers(next);
    setMsgs((m) => [...m, { from: "user", text: label }]);
    let q = queue;
    if (!q) {
      q = questionnaire.branches[value] ?? [];
      setQueue(q);
    }
    const idx = next.length - 1; // first answer consumed branch selection
    const upcoming = q[idx];
    if (upcoming) {
      setCurrent(upcoming);
      setMsgs((m) => [...m, { from: "bot", text: upcoming.question }]);
    } else {
      setCurrent(null);
      setStage("done");
      setMsgs((m) => [...m, { from: "bot", text: questionnaire.doneMessage }]);
    }
  }

  async function submitLead() {
    const text = summary(answers);
    if (!formspreeId) {
      setSent("fail");
      return;
    }
    setSent("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ source: `${brand} assistant`, summary: text }),
      });
      setSent(res.ok ? "ok" : "fail");
    } catch {
      setSent("fail");
    }
  }

  const css = {
    fab: {
      position: "fixed" as const, right: 20, zIndex: 60, width: 54, height: 54, borderRadius: 999, border: 0,
      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,.35)", transition: "transform .2s",
    },
    panel: {
      position: "fixed" as const, right: 20, bottom: 154, zIndex: 60, width: 340, maxWidth: "calc(100vw - 40px)",
      maxHeight: "min(560px, calc(100vh - 180px))", display: "flex", flexDirection: "column" as const, overflow: "hidden",
      background: "var(--aw-bg)", color: "var(--aw-fg)", border: "1px solid var(--aw-line)", borderRadius: 18,
      boxShadow: "0 24px 70px rgba(0,0,0,.45)", fontFamily: "var(--aw-font, inherit)", fontSize: 14,
    },
    bubble: (bot: boolean) => ({
      alignSelf: bot ? ("flex-start" as const) : ("flex-end" as const), maxWidth: "88%", padding: "9px 13px", borderRadius: 14,
      background: bot ? "var(--aw-soft)" : "var(--aw-accent)", color: bot ? "var(--aw-fg)" : "var(--aw-accent-fg)",
      whiteSpace: "pre-wrap" as const, lineHeight: 1.45,
    }),
    chip: {
      border: "1px solid var(--aw-line)", background: "transparent", color: "var(--aw-fg)", borderRadius: 999, padding: "7px 13px",
      cursor: "pointer", fontSize: 13, fontFamily: "inherit",
    },
    link: {
      display: "inline-block", marginTop: 4, padding: "9px 14px", borderRadius: 999, background: "var(--aw-accent)",
      color: "var(--aw-accent-fg)", textDecoration: "none", fontWeight: 600, fontSize: 13, textAlign: "center" as const,
    },
  };

  return (
    <>
      <a href={wa} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"
        style={{ ...css.fab, bottom: 86, background: "#25D366", color: "#fff" }}>{WA_ICON}</a>
      <button type="button" aria-label={open ? "Close assistant" : "Open assistant"} aria-expanded={open} onClick={() => setOpen((o) => !o)}
        style={{ ...css.fab, bottom: 20, background: "var(--aw-accent)", color: "var(--aw-accent-fg)" }}>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>
        )}
      </button>
      {open && (
        <div role="dialog" aria-label={`${brand} assistant`} style={css.panel}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--aw-line)", background: "var(--aw-soft)" }}>
            <div style={{ fontWeight: 600 }}>{brand}</div>
            <div style={{ fontSize: 12, color: "var(--aw-dim)" }}>{subtitle}</div>
          </div>
          <div style={{ padding: 14, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            {msgs.map((m, i) => <div key={i} style={css.bubble(m.from === "bot")}>{m.text}</div>)}

            {stage === "menu" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {menu.map((item) => <button key={item.label} type="button" style={css.chip} onClick={() => pickMenu(item)}>{item.label}</button>)}
              </div>
            )}
            {stage === "menu" && lastCta && <a href={lastCta.href} style={css.link}>{lastCta.label}</a>}

            {stage === "q" && current && current.options && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {current.options.map((o) => <button key={o.value} type="button" style={css.chip} onClick={() => advance(current, o.label, o.value)}>{o.label}</button>)}
              </div>
            )}
            {stage === "q" && current && current.freeText && (
              <form onSubmit={(e) => { e.preventDefault(); if (free.trim()) { advance(current, free.trim(), free.trim()); setFree(""); } }} style={{ display: "flex", gap: 8 }}>
                <input value={free} onChange={(e) => setFree(e.target.value)} placeholder={current.placeholder ?? "Type your answer"} aria-label="Your answer"
                  style={{ flex: 1, minWidth: 0, padding: "9px 12px", borderRadius: 999, border: "1px solid var(--aw-line)", background: "transparent", color: "var(--aw-fg)", fontFamily: "inherit" }} />
                <button type="submit" style={{ ...css.chip, background: "var(--aw-accent)", color: "var(--aw-accent-fg)", borderColor: "transparent" }}>Send</button>
              </form>
            )}

            {stage === "done" && questionnaire && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href={whatsappLink(whatsappNumber, `${whatsappText}\n\n${summary(answers)}`)} target="_blank" rel="noreferrer" style={css.link}>Send these answers on WhatsApp</a>
                {formspreeId && sent !== "ok" && (
                  <button type="button" onClick={submitLead} disabled={sent === "sending"} style={{ ...css.chip, textAlign: "center" }}>
                    {sent === "sending" ? "Sending..." : "Send to the team by email"}
                  </button>
                )}
                {sent === "ok" && <div style={css.bubble(true)}>Sent. The team will reply to you.</div>}
                {sent === "fail" && formspreeId && <div style={css.bubble(true)}>That did not go through. Please use WhatsApp or the contact page.</div>}
                <a href={questionnaire.contactHref} style={{ ...css.chip, textDecoration: "none", textAlign: "center" }}>Open the contact page</a>
              </div>
            )}
          </div>
          <div style={{ padding: "10px 14px", borderTop: "1px solid var(--aw-line)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--aw-dim)" }}>
            <span>Automated assistant</span>
            <a href={wa} target="_blank" rel="noreferrer" style={{ color: "var(--aw-fg)" }}>Talk to a person on WhatsApp</a>
          </div>
        </div>
      )}
    </>
  );
}
