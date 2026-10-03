// ---------------------------------------------------------------------------
// JJ PRO — Centralized site copy
// ---------------------------------------------------------------------------
// Every string of placeholder content lives here so it can be swapped for
// real client copy (bio, numbers, quotes, logos) without touching component
// code. Anything with a "// TODO: replace with real client content" comment
// MUST be reviewed with the client before launch.
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "JJ PRO",
  tagline: "Strategy. Capital. Growth.",
  // TODO: replace with real client content — confirm final positioning line
  description:
    "JJ PRO partners with ambitious founders on brand strategy, fundraising, GTM and business transformation — turning early conviction into category leadership.",
  url: "https://jjpro.in",
};

export const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Consulting", href: "/consulting" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  contact: {
    // TODO: replace with real client content — confirm official emails
    email: "hello@jjpro.in",
    career: "careers@jjpro.in",
    partner: "partners@jjpro.in",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jignesh1409/" },
  ],
  sitemap: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Consulting", href: "/consulting" },
    { label: "About Us", href: "/about-us" },
    { label: "Coaching", href: "/about-us/coaching" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Partner With Us", href: "/contact/partner" },
  ],
};

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    eyebrow: "JJ PRO — Growth & Fundraising Consultancy",
    // TODO: replace with real client content
    title: "Capital, strategy and go-to-market for founders and investors building across borders.",
    subtitle:
      "Jignesh P Jain advises founders on brand, fundraising and cross-border growth, and helps VCs and family offices source and scale AI and SaaS investments.",
    primaryCta: { label: "Start a Conversation", href: "/contact" },
    secondaryCta: { label: "See What We Do", href: "/what-we-do" },
  },
  intro: {
    kicker: "The Practice",
    // TODO: replace with real client content
    heading: "Boutique consulting, built for founders who move fast.",
    body: "JJ PRO sits at the intersection of brand, capital and operations — helping early and growth-stage teams sharpen their story, structure their business and raise the capital to scale it.",
  },
  services: [
    {
      title: "Brand Strategy",
      // TODO: replace with real client content
      description:
        "Positioning, narrative and identity systems that make ambitious companies impossible to ignore.",
      href: "/what-we-do",
    },
    {
      title: "Consulting",
      description:
        "Hands-on business transformation, tech acceleration and D2C strategy for teams scaling past their first plateau.",
      href: "/consulting",
    },
    {
      title: "Fundraising",
      description:
        "End-to-end fundraise support — from narrative and data room to investor introductions and close.",
      href: "/what-we-do",
    },
    {
      title: "GTM — Cross Border",
      description:
        "Go-to-market playbooks for founders expanding into new geographies, built on real market entry experience.",
      href: "/what-we-do",
    },
  ],
  about: {
    kicker: "Who We Are",
    heading: "Led by Jignesh P Jain — mentor to founders across global startup programs.",
    body: "JJ PRO is the practice of Jignesh, a Mumbai-based startup, GTM and fundraising consultant who mentors founders through international accelerator and incubation programs including Skolkovo, the Wadhwani Foundation and OIC International.",
    cta: { label: "Meet Jignesh", href: "/about-us" },
  },
  stats: [] as { value: number; suffix: string; prefix?: string; label: string }[], // Add only verified numbers
  clients: {
    kicker: "Trusted by builders",
    // TODO: replace with real client logos
    logos: [] as string[], // Add real client logos or names (with consent)
  },
  testimonials: [] as { quote: string; name: string; role: string }[], // Add real, approved testimonials only
  cta: {
    kicker: "Ready when you are",
    heading: "Let's build the next chapter of your company.",
    button: { label: "Get in Touch", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// WHAT WE DO
// ---------------------------------------------------------------------------

export const whatWeDo = {
  hero: {
    eyebrow: "What We Do",
    title: "Four disciplines. One outcome: durable growth.",
    subtitle:
      "We work across brand, capital and market entry — engaging wherever founders need the most leverage.",
  },
  pillars: [
    {
      title: "Brand Strategy",
      // TODO: replace with real client content
      summary:
        "We build the narrative, positioning and visual identity that make a company's ambition legible to customers, employees and investors alike.",
      points: [
        "Positioning & category definition",
        "Messaging architecture & pitch narrative",
        "Visual identity direction",
        "Brand guidelines & rollout",
      ],
    },
    {
      title: "Consulting",
      summary:
        "Operational and strategic advisory for founders scaling past their first plateau — see the Consulting page for the full breakdown.",
      points: [
        "Business transformation",
        "Virtual tech acceleration",
        "D2C consulting",
        "Org & process design",
      ],
      href: "/consulting",
    },
    {
      title: "Fundraising",
      summary:
        "We prepare founders for every stage of a raise — narrative, data room, investor targeting, and negotiation support through close.",
      points: [
        "Fundraise readiness audit",
        "Pitch deck & data room build",
        "Investor targeting & intros",
        "Term sheet & close support",
      ],
    },
    {
      title: "GTM — Cross Border",
      summary:
        "Market entry playbooks built on direct experience launching and scaling companies across multiple geographies.",
      points: [
        "Market prioritization",
        "Localization & regulatory mapping",
        "Channel & partnership strategy",
        "Launch sequencing",
      ],
    },
  ],
  cta: {
    heading: "Not sure where to start?",
    body: "Tell us where your company is today — we'll map the fastest path forward.",
    button: { label: "Book a Call", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// CONSULTING
// ---------------------------------------------------------------------------

export const consulting = {
  hero: {
    eyebrow: "Consulting",
    title: "Operational depth for founders scaling past the first plateau.",
    subtitle:
      "Three focused practices, each designed to remove a specific bottleneck standing between you and your next stage of growth.",
  },
  practices: [
    {
      title: "Business Transformation",
      // TODO: replace with real client content
      summary:
        "We diagnose where structure, process or leadership is capping growth — then rebuild the operating model to match your next stage of scale.",
      points: [
        "Operating model & org design audit",
        "Process re-engineering",
        "Leadership & team structuring",
        "Change management support",
      ],
    },
    {
      title: "Virtual Tech Acceleration",
      summary:
        "Fractional technology leadership and architecture review to help lean teams ship faster without over-hiring too early.",
      points: [
        "Tech stack & architecture review",
        "Fractional CTO advisory",
        "Vendor & build-vs-buy decisions",
        "Roadmap & delivery cadence design",
      ],
    },
    {
      title: "D2C Consulting",
      summary:
        "Playbooks for direct-to-consumer brands on unit economics, channel mix and retention — built from hands-on operating experience.",
      points: [
        "Unit economics & contribution margin audit",
        "Channel mix & performance marketing strategy",
        "Retention & LTV programs",
        "Supply chain & fulfillment strategy",
      ],
    },
  ],
  cta: {
    heading: "Bring us your hardest operating problem.",
    button: { label: "Talk to Us", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// ABOUT US
// ---------------------------------------------------------------------------

export const aboutUs = {
  hero: {
    eyebrow: "About Us",
    title: "Who Am I",
    subtitle:
      "Jignesh P Jain is a Mumbai-based startup, GTM and fundraising consultant, and a mentor to founders across international accelerator and incubation programs.",
  },
  bio: {
    paragraphs: [
      "Jignesh founded JJ PRO to work directly with founders on brand strategy, fundraising, GTM and business transformation — bringing an operator's view of what makes a company both fundable and durable.",
      "He is also a Venture Partner and Chapter Director (Mumbai) at VNTR.vc, a global investor network, and works with VCs and family offices to source, evaluate and scale AI and SaaS investments. Alongside his consulting practice, Jignesh mentors founders through international startup programs including Skolkovo (Russia), T3 Vakfı (Turkey), the Wadhwani Foundation, IYESF, OIC International (Kazan, Tatarstan) and the Atal Incubation Centre at BIMTECH — giving him direct, ongoing exposure to founders building across very different markets.",
      "Today, JJ PRO is the vehicle for that experience: a boutique practice built to give founders direct access to strategic, capital and operational expertise without the overhead of a large firm.",
    ],
  },
  highlights: [] as { label: string; value: string }[],
  coachingCta: {
    kicker: "Beyond Advisory",
    heading: "Startup Coaching & Mentoring",
    body: "For founders who want ongoing, hands-on guidance rather than a single engagement — explore JJ PRO's coaching program.",
    button: { label: "Explore Coaching", href: "/about-us/coaching" },
  },
};

// ---------------------------------------------------------------------------
// ABOUT US / COACHING
// ---------------------------------------------------------------------------

export const coaching = {
  hero: {
    eyebrow: "Startup Coaching & Mentoring",
    title: "Ongoing guidance for founders in the arena.",
    subtitle:
      "A structured coaching relationship for founders who want a consistent thinking partner — not a one-off engagement.",
  },
  format: {
    kicker: "How It Works",
    // TODO: replace with real client content — confirm program structure
    heading: "A rhythm built around your decisions, not a fixed curriculum.",
    body: "Coaching engagements are structured around regular 1:1 sessions, async support between calls, and access for urgent strategic decisions — fundraising, hiring, pivots, and everything in between.",
  },
  pillars: [
    {
      title: "1:1 Strategy Sessions",
      description: "Recurring calls focused on your highest-leverage decisions each cycle.",
    },
    {
      title: "Fundraising & Board Support",
      description: "Direct support preparing for raises, board meetings and investor updates.",
    },
    {
      title: "On-Call Access",
      description: "Async access between sessions for time-sensitive strategic questions.",
    },
    {
      title: "Network Introductions",
      description: "Warm introductions to relevant investors, operators and partners as needed.",
    },
  ],
  whoFor: [
    "Pre-seed to Series A founders navigating their first fundraise",
    "First-time CEOs building their leadership muscle",
    "Founders expanding into new markets or business lines",
  ],
  cta: {
    heading: "Coaching cohorts are limited — let's talk about fit.",
    button: { label: "Apply for Coaching", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------

export const contact = {
  hero: {
    eyebrow: "Contact Us",
    title: "Let's talk about what's next.",
    subtitle:
      "Tell us a bit about your company and what you're working on — we'll follow up to find the right next step.",
  },
  form: {
    // TODO: replace NEXT_PUBLIC_FORMSPREE_ID in .env with the real Formspree endpoint ID
    heading: "Send a Message",
    fields: {
      name: "Full Name",
      email: "Email",
      company: "Company",
      message: "Tell us about your company & what you need",
    },
    submitLabel: "Send Message",
    successMessage: "Thanks — we'll be in touch within 1–2 business days.",
    errorMessage: "Something went wrong. Please try again or email us directly.",
  },
  calendly: {
    heading: "Prefer to Book Directly?",
    body: "Grab a slot on the calendar for a 30-minute intro call.",
    // TODO: replace NEXT_PUBLIC_CALENDLY_URL in .env with the real Calendly link
  },
  directEmail: {
    heading: "Or Reach Out Directly",
    // TODO: replace with real client content — confirm official emails
    general: "hello@jjpro.in",
    career: "careers@jjpro.in",
  },
  partnerCta: {
    kicker: "Are You an Investor, Agency or Operator?",
    heading: "Partner With Us",
    body: "JJ PRO collaborates with a network of investors, agencies and operators to serve founders better.",
    button: { label: "Explore Partnership", href: "/contact/partner" },
  },
};

// ---------------------------------------------------------------------------
// CONTACT / PARTNER
// ---------------------------------------------------------------------------

export const partner = {
  hero: {
    eyebrow: "Partner With Us",
    title: "Build the founder ecosystem with JJ PRO.",
    subtitle:
      "We work alongside investors, agencies and independent operators who share a commitment to founder success.",
  },
  types: [
    {
      title: "Investors & Funds",
      // TODO: replace with real client content
      description:
        "Co-invest, share deal flow, or bring JJ PRO in as an operating partner for portfolio companies that need brand, GTM or fundraising support.",
    },
    {
      title: "Agencies & Service Providers",
      description:
        "Referral partnerships for complementary services — design, legal, finance and technology — serving the same founder audience.",
    },
    {
      title: "Independent Operators & Advisors",
      description:
        "Collaborate on specific engagements where deep functional expertise — product, growth, finance — complements JJ PRO's core practice.",
    },
  ],
  form: {
    heading: "Tell Us About the Partnership",
    fields: {
      name: "Full Name",
      email: "Email",
      organization: "Organization",
      partnershipType: "Type of Partnership",
      message: "Tell us more",
    },
    submitLabel: "Submit",
  },
};

// ---------------------------------------------------------------------------
// FAQs (AEO) — question-phrased headings, 40-60 word direct-answer paragraphs
// ---------------------------------------------------------------------------

export const faqs = {
  home: [
    {
      question: "What does JJ PRO do?",
      answer:
        "JJ PRO is the boutique consulting practice of Jignesh P Jain, focused on brand strategy, business transformation, fundraising and cross-border go-to-market. The practice works directly with founders to sharpen their story, structure their business and prepare for growth or capital raises.",
    },
    {
      question: "Who does JJ PRO work with?",
      answer:
        "JJ PRO primarily works with early to growth-stage startup founders — from first-time founders preparing a seed raise to teams expanding into new markets. Engagements are also open to investors, agencies and operators through JJ PRO's partner program.",
    },
    {
      question: "How does a JJ PRO engagement start?",
      answer:
        "Most engagements start with a short intro call to understand where your company is today and what you need most — brand, fundraising, operations or market entry. From there, JJ PRO scopes a focused engagement around your specific goals.",
    },
    {
      question: "Does JJ PRO work with international or cross-border startups?",
      answer:
        "Yes. Jignesh has advised founders and startups across multiple countries through mentor roles at international accelerator and incubation programs, including Skolkovo (Russia), T3 Vakfı (Turkey), Wadhwani Foundation and OIC International (Kazan, Tatarstan), among others.",
    },
  ],
  whatWeDo: [
    {
      question: "What services does JJ PRO offer?",
      answer:
        "JJ PRO offers four core services: brand strategy (positioning, narrative and identity), consulting (business transformation, tech acceleration and D2C strategy), fundraising (narrative, data room and investor support) and cross-border GTM (market entry playbooks).",
    },
    {
      question: "What is included in fundraising support?",
      answer:
        "Fundraising support covers the full raise process — a fundraise readiness audit, pitch deck and data room build, investor targeting and warm introductions, and support through term sheet negotiation and close, tailored to your stage and geography.",
    },
    {
      question: "What is GTM — Cross Border?",
      answer:
        "GTM — Cross Border is JJ PRO's market entry practice: prioritizing which geography to enter next, mapping localization and regulatory requirements, building channel and partnership strategy, and sequencing the launch — drawn from direct multi-country advisory experience.",
    },
    {
      question: "How is brand strategy different from consulting?",
      answer:
        "Brand strategy focuses on how a company is perceived — its positioning, narrative and identity. Consulting focuses on how a company operates — its structure, processes and technology. Many engagements combine both, since a strong story needs an operation that can back it up.",
    },
  ],
  consulting: [
    {
      question: "What is business transformation consulting?",
      answer:
        "Business transformation consulting diagnoses where structure, process or leadership is capping a company's growth, then rebuilds the operating model to match its next stage — covering org design, process re-engineering and change management support.",
    },
    {
      question: "What is virtual tech acceleration?",
      answer:
        "Virtual tech acceleration is fractional technology leadership for lean teams — a tech stack and architecture review, fractional CTO advisory, build-vs-buy guidance and roadmap design — so startups can ship faster without over-hiring too early.",
    },
    {
      question: "Who is D2C consulting for?",
      answer:
        "D2C consulting is built for direct-to-consumer brands working on unit economics, channel mix and retention. It covers contribution margin audits, performance marketing strategy, LTV programs and supply chain and fulfillment strategy for scaling operators.",
    },
  ],
  contact: [
    {
      question: "How do I get in touch with JJ PRO?",
      answer:
        "You can reach JJ PRO by filling out the contact form on this page, emailing hello@jjpro.in directly, or booking a free 30-minute intro call on the calendar below — whichever is fastest for you.",
    },
    {
      question: "Can I book a call directly instead of filling out a form?",
      answer:
        "Yes. The Contact page includes an embedded calendar where you can book a free 30-minute intro call directly — no need to wait for a reply to a form submission first.",
    },
    {
      question: "How quickly does JJ PRO respond to messages?",
      answer:
        "JJ PRO aims to respond to contact form submissions and emails within 1–2 business days. For faster contact, booking a slot directly on the calendar is the quickest way to get time on the calendar.",
    },
    {
      question: "I'm an investor or agency — should I use the contact form?",
      answer:
        "If you're an investor, agency or independent operator interested in a partnership rather than a client engagement, use the dedicated Partner With Us page instead, which routes your inquiry appropriately.",
    },
  ],
};
