import Nav from "@/components/Nav"; import Footer from "@/components/Footer";
export const metadata = { title: "Terms" };
const sections: [string, string[]][] = [
  ["About this website", ["This website is operated jointly by the MYTH AI and ZUSHI teams. It describes the combined MYTH AI × ZUSHI offering: digital product creation by MYTH AI and factory matching, production tracking and shipment by ZUSHI. By using this website you accept these terms."]],
  ["Information, not an offer", ["Content on this site is general information about the two platforms and how they work together. It is not an offer, a quote or a contract. Any engagement, pricing, escrow arrangement and service levels are agreed separately in writing with MYTH AI or ZUSHI."]],
  ["Your submissions", ["When you send us a design reference, brief or message through the contact form, you confirm you have the right to share it. You keep ownership of your designs and materials. We use what you send only to respond, as described in our privacy notice."]],
  ["Our content", ["The text, visuals and branding on this site belong to MYTH AI and ZUSHI or their licensors. Product screenshots are illustrative. You may share the link; you may not copy the site's content for your own commercial use without permission."]],
  ["No warranties", ["The site is provided as is. We work to keep it accurate and available but do not warrant that it is complete, error-free or uninterrupted. To the extent permitted by law, we are not liable for decisions made based on this site's content."]],
  ["External sites", ["Links to myth-ai.com, withzushi.com, LinkedIn and WhatsApp lead to sites with their own terms and privacy notices."]],
  ["Governing law", ["These terms are governed by the laws of India. Contact for any question about these terms: admin@withzushi.com. Last updated: November 2026."]],
];
export default function T() { return (<><Nav /><main className="mx-auto max-w-3xl px-5 pt-32 pb-24"><h1 className="text-4xl font-black">Terms of use</h1>
  {sections.map(([h, ps]) => (<section key={h}><h2 className="mt-10 text-2xl font-black">{h}</h2>{ps.map((t) => <p key={t} className="mt-3 leading-relaxed text-neutral-700">{t}</p>)}</section>))}
</main><Footer /></>); }
