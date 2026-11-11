import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export const metadata = { title: "Privacy" };
const sections: [string, string[]][] = [
  ["Who we are", ["This website is operated jointly by the MYTH AI and ZUSHI teams (\"we\", \"us\"). It introduces the combined MYTH AI × ZUSHI offering and lets you request a demo or contact the teams. You can reach us about anything on this page at admin@withzushi.com."]],
  ["What we collect", ["If you fill in the contact form or the demo popup, we collect the details you enter: your name, work email, company, role, country, phone number (popup only), expected monthly volume and your message (where you choose to add them).", "If you continue to WhatsApp, your conversation there is handled by WhatsApp under its own privacy policy."]],
  ["How we use it", ["We use these details only to respond to your request, to arrange a demo, and to continue a business conversation with you about MYTH AI and ZUSHI. We do not sell your details and we do not use them for unrelated marketing."]],
  ["Who processes it for us", ["Form submissions are delivered to our team inbox through FormSubmit, a form-processing service. If site analytics are enabled, usage is measured with Google Analytics (GA4). These providers process data on our behalf and may process it outside your country, including outside the UK and EEA."]],
  ["How long we keep it", ["We keep your details for as long as we need them to handle your request and any follow-up conversation, then delete or anonymise them. You can ask us to delete them sooner."]],
  ["Your rights", ["If you are in the UK or the EEA, you can ask us for a copy of your details, ask us to correct or delete them, object to or restrict how we use them, and withdraw consent where processing is based on consent. You also have the right to complain to your local data protection authority (for example the ICO in the UK). To use any of these rights, email admin@withzushi.com."]],
  ["Changes", ["If we change this notice we will update this page. Last updated: November 2026."]],
];
export default function P() { return (<><Nav /><main className="mx-auto max-w-3xl px-5 pt-32 pb-24"><h1 className="text-4xl font-black">Privacy notice</h1>
  <p className="mt-5 text-neutral-700">This notice explains what the MYTH AI × ZUSHI website collects and why. It applies to this website only; the MYTH AI and ZUSHI platforms have their own notices.</p>
  {sections.map(([h, ps]) => (<section key={h}><h2 className="mt-10 text-2xl font-black">{h}</h2>{ps.map((t) => <p key={t} className="mt-3 leading-relaxed text-neutral-700">{t}</p>)}</section>))}
</main><Footer /></>); }
