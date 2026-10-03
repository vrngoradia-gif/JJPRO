import AssistantWidget, { type MenuItem } from "./AssistantWidget";

const menu: MenuItem[] = [
  { label: "What does JJ PRO do?", answer: "JJ PRO helps founders with brand strategy, consulting, fundraising and cross-border go-to-market. Jignesh also works with VCs and family offices on AI and SaaS deal flow.", cta: { label: "See what we do", href: "/what-we-do" } },
  { label: "I'm raising capital", answer: "Fundraising support covers your story, data room, investor targeting and introductions. Book a call to talk through your round.", cta: { label: "Book a call", href: "/contact" } },
  { label: "Startup coaching", answer: "Ongoing coaching and mentoring for founders, accelerators and early teams, from validation to scale to fundraise.", cta: { label: "About coaching", href: "/about-us/coaching" } },
  { label: "I'm an investor or partner", answer: "We work with investors, accelerators, incubators and operators. Tell us how you would like to collaborate.", cta: { label: "Partner with us", href: "/contact/partner" } },
  { label: "Book a meeting", answer: "You can book an intro call or send a message on the contact page.", cta: { label: "Open contact page", href: "/contact" } },
];

export default function Assistant() {
  return (
    <AssistantWidget
      brand="JJ PRO"
      subtitle="Automated assistant"
      greeting="Hi, I'm the JJ PRO assistant. What can I help with?"
      whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
      whatsappText="Hi, I found you through the JJ PRO website and would like to talk."
      menu={menu}
    />
  );
}
