import AssistantWidget, { type MenuItem } from "./AssistantWidget";

const menu: MenuItem[] = [
  { label: "Get a price", answer: "Tell us the product, quantity and destination and we will come back with a quote, MOQ and lead time. You can attach drawings or samples.", cta: { label: "Send an enquiry", href: "/contact" } },
  { label: "Textiles & garments", answer: "Fashion and textile is our lead category: fabrics, garments, home textiles and custom tailored garments, sourced from India and other regions.", cta: { label: "See products", href: "/products" } },
  { label: "Paper, plastic, sugar, coffee", answer: "We supply virgin and semi-virgin paper, recycled paper and plastic items, and commodities such as sugar and coffee on request.", cta: { label: "See products", href: "/products" } },
  { label: "Launch a D2C brand in India", answer: "We help Indian D2C brands with OEM/ODM matching, white-label sourcing, product advice and supply chain.", cta: { label: "D2C and brand consulting", href: "/d2c-consulting" } },
  { label: "I'm a manufacturer", answer: "We list vetted manufacturers and OEMs. Register your interest and we will send you our compliance checklist.", cta: { label: "Partner with us", href: "/partner" } },
  { label: "Where do you ship?", answer: "We export to North America, Europe, Africa and the Middle East, and can arrange shipping to other destinations on request.", cta: { label: "Global reach", href: "/global-reach" } },
];

export default function Assistant() {
  return (
    <AssistantWidget
      brand="Phoenix Global"
      subtitle="Automated assistant"
      greeting="Hello, I'm the Phoenix Global assistant. What are you looking for?"
      whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
      whatsappText="Hello, I found you through the Phoenix Global website and would like a quote."
      menu={menu}
    />
  );
}
