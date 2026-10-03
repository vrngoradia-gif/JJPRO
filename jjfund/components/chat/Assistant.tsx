import AssistantWidget, { type Questionnaire } from "./AssistantWidget";

const questionnaire: Questionnaire = {
  intro: "A few quick questions so the right person can reply. It takes about a minute.",
  first: {
    id: "who",
    question: "Which best describes you?",
    options: [
      { label: "Founder", value: "founder" },
      { label: "Investor (VC / family office)", value: "investor" },
      { label: "Partner (CA, CS, legal, GCC ops)", value: "partner" },
    ],
  },
  branches: {
    founder: [
      { id: "stage", question: "What stage is your company at?", options: [
        { label: "Idea / pre-seed", value: "pre-seed" }, { label: "Seed", value: "seed" },
        { label: "Series A or later", value: "series-a-plus" }, { label: "Profitable / scaling", value: "scaling" } ] },
      { id: "need", question: "What do you need most?", options: [
        { label: "Raise capital", value: "capital" }, { label: "Set up a GCC in India", value: "gcc" },
        { label: "Expand into Asia", value: "expansion" }, { label: "Build with the venture studio", value: "studio" } ] },
      { id: "when", question: "How soon do you want to start?", options: [
        { label: "This month", value: "now" }, { label: "In 1 to 3 months", value: "soon" }, { label: "Just exploring", value: "exploring" } ] },
      { id: "contact", question: "Your name, company and best email or phone?", freeText: true, placeholder: "Name, company, email or phone" },
    ],
    investor: [
      { id: "type", question: "What type of investor are you?", options: [
        { label: "VC fund", value: "vc" }, { label: "Family office", value: "fo" }, { label: "Angel / syndicate", value: "angel" } ] },
      { id: "focus", question: "What are you looking for?", options: [
        { label: "AI and SaaS deal flow", value: "deals" }, { label: "Co-investment", value: "co-invest" },
        { label: "On-ground diligence in Asia", value: "diligence" } ] },
      { id: "contact", question: "Your name, firm and best email or phone?", freeText: true, placeholder: "Name, firm, email or phone" },
    ],
    partner: [
      { id: "role", question: "What do you do?", options: [
        { label: "CA / accounting", value: "ca" }, { label: "Company secretary", value: "cs" },
        { label: "Legal / compliance", value: "legal" }, { label: "GCC operator", value: "gcc-ops" } ] },
      { id: "region", question: "Which regions do you cover?", freeText: true, placeholder: "e.g. Mumbai, Bangalore, Singapore" },
      { id: "contact", question: "Your name, firm and best email or phone?", freeText: true, placeholder: "Name, firm, email or phone" },
    ],
  },
  doneMessage: "Thanks. Send these answers to the team below, or open the contact page.",
  contactHref: "/connect",
};

export default function Assistant() {
  return (
    <AssistantWidget
      brand="JJ Fund"
      subtitle="Quick questionnaire"
      greeting="Hi, I'm the JJ Fund assistant."
      whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
      whatsappText="Hi, I found you through the JJ Fund website and would like to talk."
      menu={[]}
      questionnaire={questionnaire}
      formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID}
    />
  );
}
