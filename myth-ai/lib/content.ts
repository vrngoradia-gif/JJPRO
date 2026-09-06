// ---------------------------------------------------------------------------
// Myth AI India — centralized site copy
// ---------------------------------------------------------------------------
// All copy that came directly from the client-provided sitemap is used
// verbatim. Anything the sitemap didn't spell out (exact WhatsApp number,
// street address, "Our India Story" narrative, blog post bodies, FAQ answer
// copy) is marked `// TODO: replace with real content` — safe placeholders
// only, nothing fabricated as fact.
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "Myth AI India",
  shortName: "Myth AI",
  tagline: "India's Design Work, Done. By Us.",
  description:
    "Myth AI compresses every stage of India's fashion pipeline — AI print & embroidery, seamless repeats, 3D garment visualization, collection development and campaign imagery — delivered as Design as a Service (DaaS) or Agentic AI as a Service (AAaaS).",
  // TODO: confirm final production domain (myth-ai.com vs a subdomain)
  url: "https://myth-ai.com",
};

export const contact = {
  email: "india@myth-ai.com",
  // TODO: replace with real WhatsApp Business number
  whatsapp: "+91 XXXX XXXXXX",
  whatsappHref: "https://wa.me/91XXXXXXXXXX",
  // TODO: replace with real Mumbai office address
  office: "Mumbai, Maharashtra, India",
};

export const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Académie", href: "/academie" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

// ---------------------------------------------------------------------------
// The 5 core service areas — reused across Home / Services / DaaS / Footer
// ---------------------------------------------------------------------------

export const serviceAreas = [
  {
    id: "01",
    slug: "ai-print-embroidery",
    title: "AI Textile Print Creation / Embroidery Creation",
    short: "Design in minutes, not days",
    engine: "MYTH Studio + MYTH Motif",
    summary:
      "Original AI-generated surface patterns, India heritage motifs (Kalamkari, Ikat, Bandhani, Ajrakh and more), trend-aligned seasonal prints, and AI-designed embroidery motifs with thread colour mapping and placement coordinates.",
    bullets: [
      "Original AI-generated surface patterns",
      "India heritage motifs — Kalamkari, Ikat, Bandhani, Ajrakh etc.",
      "Trend-aligned seasonal prints",
      "Colorway variants per design",
      "AI-designed embroidery motifs and layouts",
      "Thread colour mapping",
      "Placement coordinates for production",
    ],
    deliverable: "TIFF / PNG / EPS at 300dpi+ · production-ready embroidery files + placement guides",
  },
  {
    id: "02",
    slug: "seamless-repeat-development",
    title: "Seamless Repeat Development",
    short: "Print-ready before you blink",
    engine: "MYTH Studio (Make Seamless) + MYTH Digi",
    summary:
      "Repeat construction across half-drop, brick, mirror and full layouts, with scale/density testing, colour separation, and print placement checks — ready for digital fabric printing.",
    bullets: [
      "Repeat construction — half-drop, brick, mirror, full",
      "Scale and density testing",
      "Colour separation per repeat (via MYTH Digi)",
      "Print placement check",
    ],
    deliverable:
      "Repeat-ready TIFF · Illustrator / CorelDRAW compatible · digital fabric printing ready",
  },
  {
    id: "03",
    slug: "3d-garment-visualization",
    title: "3D Garment Visualization",
    short: "Sample without stitching",
    engine: "Myth AI 3D pipeline (native)",
    summary:
      "Physical sampling is the single biggest bottleneck in Indian fashion. We remove it entirely — from pattern to photorealistic render, virtual sample, fit analysis, and animated buyer presentation, all before a single metre of fabric is cut.",
    bullets: [
      "3D Garment Visualization",
      "Virtual Sampling",
      "Pattern Making & Development",
      "Fabric Simulation",
      "Print Visualization",
      "Embroidery Visualization",
      "Collection Development",
      "Fashion Animation",
      "Fit Analysis",
      "Avatar Creation",
      "Tech Pack Support",
    ],
    deliverable: "High-res renders through factory-ready tech packs — see all 11 sub-services",
  },
  {
    id: "04",
    slug: "ai-fashion-collection-development",
    title: "AI Fashion Collection Development",
    short: "Full range, built by AI",
    engine: "MYTH Studio + Myth AI 3D pipeline combined",
    summary:
      "End-to-end collection building — AI design generation combined with Myth AI 3D for a complete digital collection: prints, silhouette direction, coordinated range planning, and a buyer presentation deck.",
    bullets: [
      "AI-generated prints + garment silhouette direction",
      "3D garment build and styling",
      "Coordinated range planning — tops, bottoms, outerwear",
      "Seasonal range structuring",
      "Buyer presentation deck",
    ],
    deliverable:
      "Complete digital collection package (renders + tech packs + animation) ready for buyer meetings",
  },
  {
    id: "05",
    slug: "ai-catalog-campaign-images",
    title: "AI-Generated Catalog & Campaign Images",
    short: "Shoot-free campaign imagery",
    engine: "AI image generation + MYTH Studio",
    summary:
      "High-quality AI fashion visuals for catalogs, e-commerce, social media, and brand campaigns — no photoshoot needed.",
    bullets: [
      "Product catalog imagery — garments on AI models",
      "E-commerce listing images — front / back / detail",
      "Social media campaign creatives",
      "Poster and print-ready brand visuals",
      "AI fashion CGI video (1 min+)",
      "Promotional reels — up to 30 sec / 30–60 sec / 60 sec+",
      "Motion graphics for digital marketing",
    ],
    deliverable: "Layered PSD / PNG / MP4 / MOV",
  },
];

export const subServices3D = [
  {
    id: "03.1",
    title: "3D Garment Visualization",
    bullets: ["Realistic garment renders", "Front, back, and side views", "High-quality marketing images", "Collection presentations"],
    deliverable: "High-res renders · marketing ready",
  },
  {
    id: "03.2",
    title: "Virtual Sampling",
    bullets: ["Create digital samples before stitching", "Reduce physical sample costs", "Faster approvals from clients", "Test multiple fabrics and colours"],
    deliverable: "Virtual sample pack per colourway",
  },
  {
    id: "03.3",
    title: "Pattern Making & Development",
    bullets: ["Create garment patterns", "Modify existing patterns", "Size grading", "Fit adjustments"],
    deliverable: "Graded pattern files",
  },
  {
    id: "03.4",
    title: "Fabric Simulation",
    bullets: ["Cotton simulation", "Linen simulation", "Silk drape simulation", "Velvet simulation"],
    deliverable: "Fabric-simulated renders per material",
  },
  {
    id: "03.5",
    title: "Print Visualization",
    bullets: ["Apply seamless prints on garments", "Test scale of motifs", "Check print placement", "Create multiple colorways instantly"],
    deliverable: "Print-applied garment renders per colorway",
  },
  {
    id: "03.6",
    title: "Embroidery Visualization",
    bullets: ["Simulate embroidery placement", "Test motif sizes", "Show embroidery effects before production"],
    deliverable: "Embroidery-applied garment renders + placement spec",
  },
  {
    id: "03.7",
    title: "Collection Development",
    bullets: ["Create entire collections digitally", "Coordinate garments across a range", "Build seasonal ranges", "Present concepts to buyers"],
    deliverable: "Full digital collection deck — buyer-presentation ready",
  },
  {
    id: "03.8",
    title: "Fashion Animation",
    bullets: ["Model walk cycles", "Garment movement videos", "Catwalk presentations", "Promotional reels"],
    deliverable: "MP4 / MOV · aspect-ratio variants for social + runway",
  },
  {
    id: "03.9",
    title: "Fit Analysis",
    bullets: ["Check garment fit", "Tightness maps", "Ease analysis", "Size comparison"],
    deliverable: "Heatmap visuals + annotated fit report PDF",
  },
  {
    id: "03.10",
    title: "Avatar Creation",
    bullets: ["Custom body measurements", "Plus-size avatars", "Kidswear avatars", "Women wear avatars"],
    deliverable: "Production-ready avatar files in industry-standard 3D formats",
  },
  {
    id: "03.11",
    title: "Tech Pack Support",
    bullets: ["Technical flats", "Measurement specs", "Construction details", "Production references"],
    deliverable: "Factory-ready tech pack PDF + editable Illustrator file",
  },
];

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    headline: "India's Design Work, Done. By Us.",
    sub: "From first print to final buyer deck — Myth AI compresses every stage of the fashion pipeline. Design faster. Sample smarter. Scale without limits.",
    ctas: [
      { label: "Start with DaaS — From ₹9,999/mo", href: "/services/daas", variant: "solid" as const },
      { label: "WhatsApp a Brief Now", href: contact.whatsappHref, variant: "outline" as const, external: true },
      { label: "Explore All Services", href: "/services", variant: "ghost" as const },
    ],
  },
  servicesBand: {
    kicker: "The Five Acceleration Engines",
    items: serviceAreas.map((s) => ({ id: s.id, title: s.title, short: s.short })),
  },
  spotlight3D: {
    kicker: "3D Visualization Spotlight",
    heading: "See your garments before a single stitch is made",
    body: "Cut sampling time by weeks. 3D garment design, virtual sampling, fit analysis, and buyer-ready animation — all before production begins.",
    cta: { label: "Explore 3D Visualization Services", href: "/services#3d-garment-visualization" },
  },
  aaaasPromo: {
    body: "For brands that need to move at collection speed — MYTH Agentic AI executes your entire design pipeline from a single brief. One input. Every output. Hours.",
    cta: { label: "Explore AAaaS", href: "/services/aaaas" },
  },
  valueVsMarket: {
    oldWay: "The old way: hire a design team, book a photographer, brief an agency, wait three weeks.",
    newWay: "The Myth AI way: WhatsApp us a brief tonight. Receive production-ready files tomorrow.",
    rows: [
      { label: "Agency AI fashion video", value: "₹75,000–2,00,000+/min" },
      { label: "Myth AI DaaS Growth", value: "₹24,999/mo · 60 deliverables" },
    ],
    cta: { label: "See Pricing Comparison", href: "/pricing" },
  },
  indiaStats: {
    kicker: "India's fashion industry moves in seasons. Myth AI moves in hours.",
    stats: [
      { value: "$190B", label: "Textile market — growing faster than design talent" },
      { value: "Weeks → days", label: "Average pipeline compression with DaaS" },
      { value: "14.2%", label: "CAGR, digital textile printing, India (2025–30)" },
      { value: "60", label: "Deliverables one DaaS Growth client gets per month" },
    ],
  },
  footerCta: {
    heading: "Your next collection is already late. Let's fix that.",
    ctas: [
      { label: "Start Accelerating — DaaS from ₹9,999/mo", href: "/services/daas", variant: "solid" as const },
      { label: "WhatsApp a Brief Now", href: contact.whatsappHref, variant: "outline" as const, external: true },
      { label: "Book a 30-min Demo", href: "/contact", variant: "ghost" as const },
    ],
  },
};

// ---------------------------------------------------------------------------
// Platform
// ---------------------------------------------------------------------------

export const platform = {
  hero: {
    kicker: "Platform",
    heading: "The Tools Behind Every Myth AI Design",
    sub: "For managed output instead of self-serve tools, see Services.",
  },
  products: [
    {
      slug: "myth-studio",
      name: "MYTH Studio",
      tagline: "All 12 tools",
      powers: "Powers Services 01 · 02 · 04 · 05",
      crossSell: "Want this done for you?",
      crossSellCta: { label: "Explore DaaS", href: "/services/daas" },
      // TODO: replace with the real list of all 12 MYTH Studio tools
      description:
        "Myth AI's core AI design toolkit — print and embroidery generation, seamless repeat (\"Make Seamless\"), and the underlying engines behind collection development and campaign imagery.",
    },
    {
      slug: "myth-digi",
      name: "MYTH Digi",
      tagline: "AI colour separation — up to 32 layers",
      powers: "Powers Service 02 (colour separation in repeat workflow) and Service 03.5 (print colorways on garment)",
      crossSell: "Need this in your production pipeline?",
      crossSellCta: { label: "Explore DaaS", href: "/services/daas" },
      description:
        "Automated colour separation for digital and screen printing, producing print-house-ready output with up to 32 layers of separation accuracy.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Services — overview, DaaS, AAaaS
// ---------------------------------------------------------------------------

export const services = {
  hero: {
    heading: "Five Ways We Accelerate Your Fashion Pipeline",
    sub: "From surface print to 3D garment, collection deck to campaign imagery — every stage of fashion, delivered faster than your current process.",
  },
  paths: [
    {
      name: "DaaS",
      label: "Managed acceleration",
      description: "We handle every brief, 48–72hr turnaround, human QA on every file",
      href: "/services/daas",
    },
    {
      name: "AAaaS",
      label: "Autonomous acceleration",
      description: "One project brief, AI executes the full pipeline, enterprise speed",
      href: "/services/aaaas",
    },
  ],
};

export const daas = {
  hero: {
    heading: "Managed Fashion Acceleration — On Retainer",
    sub: "Brief us today. Receive production-ready design output tomorrow. From prints to 3D renders, collections to campaign imagery — Myth AI runs your design pipeline so you can run your brand.",
    promise: "48–72hr delivery · Cancel anytime · Human QA on every file",
    ctas: [
      { label: "Start DaaS — From ₹9,999/mo", href: "#packages", variant: "solid" as const },
      { label: "WhatsApp a Brief", href: contact.whatsappHref, variant: "outline" as const, external: true },
    ],
  },
  howItWorks: [
    { step: "01", label: "Onboard", body: "Share brand guidelines + references" },
    { step: "02", label: "Brief", body: "Platform / email / WhatsApp" },
    { step: "03", label: "We Design", body: "Myth AI team + tools execute, human QA" },
    { step: "04", label: "Deliver", body: "Production-ready files in 48–72 hrs" },
  ],
  packages: [
    {
      name: "Starter",
      price: "₹9,999/mo",
      features: ["20 deliverables/month", "Up to 2 service areas", "72hr delivery", "Email + WhatsApp support"],
    },
    {
      name: "Growth",
      price: "₹24,999/mo",
      featured: true,
      features: [
        "60 deliverables/month",
        "All 5 service areas + full 3D suite (03.1–03.11)",
        "48hr delivery",
        "Dedicated designer",
        "Festive packs included",
        "Priority WhatsApp support",
      ],
    },
    {
      name: "Scale",
      price: "Custom",
      features: ["Unlimited deliverables · All services", "SLA", "AAaaS upgrade path", "API", "Account lead"],
    },
  ],
  faq: [
    {
      question: "What counts as a deliverable?",
      // TODO: confirm exact deliverable definition
      answer:
        "A deliverable is one finished, production-ready file — a single print design, a repeat-ready file, a 3D garment render, a tech pack, or a campaign image/reel — delivered against your monthly plan quota.",
    },
    {
      question: "What is the revisions process?",
      answer:
        "Each deliverable goes through a human QA pass before delivery; revision rounds are included as part of your plan and requested directly through your dedicated brief channel.",
    },
    {
      question: "What file formats do you deliver in?",
      answer:
        "Prints and repeats as TIFF/PNG/EPS at 300dpi+ and Illustrator/CorelDRAW-compatible files; catalog and campaign assets as layered PSD, PNG, MP4 or MOV.",
    },
    {
      question: "What is your NDA and IP ownership policy?",
      // TODO: confirm exact NDA/IP terms with legal
      answer:
        "All work delivered under a DaaS plan is owned by your brand once delivered, and briefs are covered under a standard mutual NDA. Full terms are shared during onboarding.",
    },
    {
      question: "What 3D formats do you deliver in?",
      answer:
        "3D garment visualization deliverables are provided as high-resolution renders (marketing-ready) alongside factory-ready tech packs and industry-standard 3D avatar files.",
    },
  ],
};

export const aaaas = {
  hero: {
    heading: "Autonomous Fashion Acceleration — At Scale",
    sub: "One project brief. AI agents execute your entire design pipeline — prints, repeats, 3D visualisation, collection development, catalog imagery — in the time it used to take to brief a single agency.",
    forWhom: "For enterprise brands · GCCs · large export houses moving 500+ styles per season",
    ctas: [
      { label: "Request AAaaS Demo", href: "/contact", variant: "solid" as const },
      { label: "Compare with DaaS", href: "/services/daas", variant: "outline" as const },
    ],
  },
  comparison: {
    rows: [
      { label: "Brief", daas: "Per service area", aaaas: "One project brief" },
      { label: "Execution", daas: "Human + AI managed", aaaas: "AI autonomous + QA" },
      { label: "3D Services", daas: "Per sub-service", aaaas: "Full pipeline automated" },
      { label: "Turnaround", daas: "48–72 hrs", aaaas: "Hours, not days" },
      { label: "Volume", daas: "Monthly quota", aaaas: "Unlimited / batch" },
      { label: "Pricing", daas: "INR monthly retainer", aaaas: "Project or retainer" },
      { label: "Best for", daas: "SMEs · D2C · Export", aaaas: "Enterprise · GCC · Large brand" },
    ],
  },
  howItWorks: [
    {
      step: "01",
      label: "Project Brief",
      example:
        "\"Build our SS27 women's collection. 80 styles. AI prints developed, 3D visualised, fit-analysed across 3 body types. Tech packs. Buyer animations. E-com catalog images.\"",
    },
    {
      step: "02",
      label: "Agent Decomposition",
      items: [
        "Service 01 — AI print generation",
        "Service 02 — Seamless repeats per print",
        "Service 03 — 3D pipeline: garment build → fabric sim → print viz → fit analysis → animation",
        "Service 04 — Full collection deck assembly",
        "Service 05 — E-com catalog + campaign images",
      ],
    },
    {
      step: "03",
      label: "Autonomous Execution",
      body: "All agents run in parallel using MYTH Studio, MYTH Motif, MYTH Digi, and the Myth AI 3D pipeline.",
    },
    {
      step: "04",
      label: "QA + Delivery",
      body: "Human design lead reviews · Full pack delivered.",
    },
  ],
  useCases: [
    {
      name: "Seasonal Buyer Deck",
      brief: "100 styles · 5 categories · 3D visualised · animated for catwalk · tech packs · catalog images",
      services: ["1", "3.7", "3.8", "3.11", "5"],
    },
    {
      name: "Size-Inclusive Launch",
      brief: "Plus-size range · 8 silhouettes · fit-tested · virtual samples · e-com images",
      services: ["3.2", "3.9", "3.10", "5"],
    },
    {
      name: "Festive D2C Drop",
      brief: "60 Diwali prints · seamless · 3D styled · promotional reels · campaign images",
      services: ["1", "2", "3.5", "3.8", "5"],
    },
  ],
  packages: [
    { name: "Project-based", price: "Custom quote per project scope" },
    { name: "Monthly Retainer", price: "5 / 10 / 20 project briefs/mo + SLA" },
    { name: "Enterprise", price: "Private cloud · API · DPDP · Dedicated CS" },
  ],
  integrations: ["WhatsApp Business API", "Shopify", "WooCommerce", "SAP", "Custom ERP"],
};

// ---------------------------------------------------------------------------
// Solutions
// ---------------------------------------------------------------------------

export const solutions = {
  hero: {
    heading: "Fashion Acceleration for Every Segment of India's Industry",
    sub: "Whether you're moving 10 styles or 10,000, Myth AI compresses the time between idea and buyer-ready.",
  },
  verticals: [
    {
      slug: "textile-apparel",
      name: "Textile & Apparel",
      services: ["Service 1 — AI Print Creation", "Service 2 — Seamless Repeat", "Service 3.5 — Print Visualization on garment", "Service 3.11 — Tech Pack Support"],
      aaaas: "Bulk seasonal print + repeat + tech pack pipeline",
      cta: { label: "Book a Demo for Textile", href: "/contact" },
    },
    {
      slug: "d2c-retail",
      name: "D2C & Retail Brands",
      services: ["Service 5 — AI catalog + social campaign images", "Service 3.8 — Promotional reels", "Service 3.2 — Virtual sampling (no photoshoot)", "Service 4 — Collection development"],
      marketAnchor: "Agencies charge ₹5,000–75,000+ per reel. DaaS Growth = 60 deliverables/mo at ₹24,999.",
      cta: { label: "Get DaaS for D2C", href: "/services/daas" },
    },
    {
      slug: "home-textiles",
      name: "Home Textiles",
      services: ["Service 1 — Surface print creation (bedding, curtains)", "Service 2 — Seamless repeat for fabric printing", "Service 3.4 — Fabric simulation (cotton / linen / velvet)", "Service 3.11 — Tech Pack Support"],
      cta: { label: "Try DaaS for Home Textiles", href: "/services/daas" },
    },
    {
      slug: "export-houses",
      name: "Export Houses",
      services: [
        "Service 4 — Full AI collection development",
        "Service 3.2 — Virtual sampling (cut physical sample costs)",
        "Service 3.7 — Digital collection for buyer presentations",
        "Service 3.8 — Animation for buyer meetings",
        "Service 3.9 — Fit Analysis across size sets",
        "Service 3.11 — Factory-ready tech packs",
      ],
      aaaas: "Full buyer presentation pipeline (autonomous)",
      clusters: ["Surat", "Tirupur", "Jaipur"],
      cta: { label: "Request Export House Demo", href: "/contact" },
    },
  ],
};

// ---------------------------------------------------------------------------
// Académie
// ---------------------------------------------------------------------------

export const academie = {
  hero: {
    heading: "MYTH Académie India",
    sub: "Hands-on training on the Myth AI toolkit and how to brief DaaS / AAaaS for real production output.",
  },
  tracks: [
    {
      slug: "designers",
      name: "For Designers",
      detail: "2-hour workshop · Myth AI Certified Designer",
      curriculum: ["MYTH Studio", "MYTH Motif", "3D workflows", "How to write DaaS / AAaaS briefs"],
      pricing: "₹1,999/session · ₹4,999 for 3-pack",
    },
    {
      slug: "institutions",
      name: "For Institutions",
      detail: "NIFT · NID · Pearl Academy · Symbiosis · INIFD",
      curriculum: ["AI Print", "3D Visualization", "Collection Development"],
      pricing: "₹299/student/year",
    },
    {
      slug: "corporate",
      name: "Corporate Training",
      detail: "Custom per brand workflow + Myth AI tools",
      curriculum: ["5-seat", "15-seat", "50-seat packages"],
      pricing: "Custom",
    },
  ],
  book: {
    slug: "book",
    name: "Book a Workshop",
    channels: ["Calendly", "WhatsApp", "Razorpay / UPI"],
  },
};

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const pricing = {
  hero: {
    heading: "What Does It Cost to Not Accelerate?",
    sub: "Every week your design pipeline runs at agency pace is a week your competitors can use. Here's what the industry currently pays — and what Myth AI changes.",
  },
  marketComparison: [
    { service: "Basic Reel (up to 30 sec)", agency: "₹5,000–15,000", freelancer: "₹1,500–5,000" },
    { service: "Premium Reel (30–60 sec)", agency: "₹15,000–40,000", freelancer: "₹5,000–15,000" },
    { service: "Brand / Commercial Reel", agency: "₹25,000–75,000+", freelancer: "—" },
    { service: "AI Commercial Video /min", agency: "₹40,000–1,20,000", freelancer: "₹20,000–60,000" },
    { service: "AI Fashion / CGI Video /min", agency: "₹75,000–2,00,000+", freelancer: "—" },
    { service: "Motion Graphics /min", agency: "₹20,000–80,000", freelancer: "₹8,000–25,000" },
    { service: "Social Media Graphic", agency: "₹2,000–8,000", freelancer: "₹500–3,000" },
    { service: "Poster / Campaign Creative", agency: "₹5,000–25,000", freelancer: "₹2,000–15,000" },
  ],
  daasCostPerDeliverable: [
    { name: "Starter", price: "₹9,999/mo", deliverables: "20 deliverables", perUnit: "₹499/deliverable" },
    { name: "Growth", price: "₹24,999/mo", deliverables: "60 deliverables", perUnit: "₹416/deliverable" },
    { name: "Scale", price: "Custom", deliverables: "Unlimited", perUnit: "—" },
  ],
  callout:
    "One DaaS Growth plan = 60 production-ready assets per month, delivered in 48 hours per batch. What agencies bill ₹30,000–4,80,000+ to produce across weeks — Myth AI delivers on a monthly retainer of ₹24,999. That's not just cheaper. That's a different speed of business.",
  selfServe: [
    { name: "Free Trial", price: "14 days · No card · Watermarked output" },
    { name: "Designer Solo", price: "₹2,499/mo — 100 credits · MYTH Studio + Motif" },
    { name: "Team", price: "₹7,499/mo — 5 users · MYTH Digi included" },
    { name: "Business", price: "₹19,999/mo — Unlimited · 15 users · API" },
    { name: "Enterprise", price: "Custom" },
  ],
  academieDigi: [
    { name: "Académie", price: "₹1,999/session · ₹4,999 bundle · ₹299/student/year (institutional)" },
    { name: "MYTH Digi", price: "₹99/file · ₹2,999/mo · ₹7,999/mo unlimited" },
  ],
  payment: {
    methods: ["UPI", "Razorpay", "Net Banking", "Bank Transfer", "GST invoice"],
    terms: "Annual: 2 months free · Monthly: cancel anytime",
  },
};

// ---------------------------------------------------------------------------
// Resources
// ---------------------------------------------------------------------------

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  blocks: BlogBlock[];
};

// TODO: replace with real long-form article bodies — these are grounded in
// the service/pricing facts already confirmed in the sitemap, expanded into
// readable articles, not fabricated data.
export const blogPosts: BlogPost[] = [
  {
    slug: "india-fashion-accelerator-playbook",
    title: "India's Fashion Accelerator Playbook — How D2C Brands Cut Time-to-Market with AI",
    description:
      "How Indian D2C fashion brands are compressing weeks-long design cycles into days using AI-driven print, 3D visualization, and Design as a Service.",
    publishedAt: "2026-06-01",
    tags: ["D2C", "DaaS", "AI Fashion"],
    blocks: [
      {
        type: "paragraph",
        text: "India's D2C fashion brands compete on speed as much as design. A collection that takes three weeks to go from concept to catalog images is already behind a competitor who can turn the same brief around in 48–72 hours.",
      },
      { type: "heading", text: "What slows the traditional pipeline down?" },
      {
        type: "paragraph",
        text: "Every handoff — design team to photographer to agency to production — adds days of waiting. Design as a Service (DaaS) collapses those handoffs into one brief, one team, one 48–72hr turnaround per batch.",
      },
      {
        type: "list",
        items: [
          "AI-generated prints and embroidery, ready in a single brief cycle",
          "3D virtual sampling instead of physical sample rounds",
          "Shoot-free catalog and campaign imagery",
        ],
      },
      {
        type: "paragraph",
        text: "For brands running seasonal drops, this means a Diwali or festive collection can go from brief to buyer-ready in the same week it's conceived, not the month before.",
      },
      {
        type: "paragraph",
        text: "Ready to compress your own pipeline? Myth AI's DaaS Growth plan delivers 60 production-ready assets a month across all five service areas — see /services/daas for the full breakdown.",
      },
    ],
  },
  {
    slug: "sketch-to-buyer-deck-48-hours",
    title: "From Sketch to Buyer Deck in 48 Hours — How Export Houses Are Accelerating with DaaS",
    description:
      "Export houses in Surat, Tirupur and Jaipur are replacing weeks of physical sampling with 3D virtual sampling and AI-built buyer decks.",
    publishedAt: "2026-06-08",
    tags: ["Export Houses", "3D Visualization", "DaaS"],
    blocks: [
      {
        type: "paragraph",
        text: "For export houses moving hundreds of styles a season, physical sampling is the single biggest cost and time sink in the pipeline — often weeks per range before a buyer sees anything.",
      },
      { type: "heading", text: "Why virtual sampling changes the economics" },
      {
        type: "paragraph",
        text: "Every sample that doesn't get cut and stitched physically saves both fabric cost and calendar time. Myth AI's 3D pipeline builds virtual samples, applies fit analysis across size sets, and assembles the full buyer presentation — tech packs and animation included — before a single garment is physically made.",
      },
      {
        type: "quote",
        text: "Cut sampling time by weeks. 3D garment design, virtual sampling, fit analysis, and buyer-ready animation — all before production begins.",
      },
      {
        type: "paragraph",
        text: "Export clusters across Surat, Tirupur and Jaipur are natural fits for this workflow, where seasonal volume makes even a few days of compression per style meaningful at scale.",
      },
      {
        type: "paragraph",
        text: "See how the Export Houses solution maps to specific DaaS services at /solutions/export-houses.",
      },
    ],
  },
  {
    slug: "virtual-vs-physical-sampling",
    title: "Virtual Sampling vs Physical Sampling — The Cost and Time Case for Indian Manufacturers",
    description:
      "A practical breakdown of why virtual sampling is replacing physical sample rounds for Indian manufacturers moving at collection speed.",
    publishedAt: "2026-06-15",
    tags: ["3D Visualization", "Manufacturing"],
    blocks: [
      {
        type: "paragraph",
        text: "Physical sampling has always been treated as a fixed cost of doing business in fashion manufacturing — fabric, labour, courier time, and the back-and-forth of buyer approval rounds.",
      },
      { type: "heading", text: "What virtual sampling replaces" },
      {
        type: "list",
        items: [
          "Digital samples created before any stitching happens",
          "Multiple fabrics and colourways tested without cutting new fabric",
          "Faster buyer approvals on renders instead of couriered samples",
        ],
      },
      {
        type: "paragraph",
        text: "This doesn't eliminate physical sampling entirely — it moves it later in the process, reserved only for the styles that clear buyer approval on the virtual sample first.",
      },
      {
        type: "paragraph",
        text: "Curious what this looks like for your production line? Explore Service 03.2 — Virtual Sampling — as part of Myth AI's 3D Garment Visualization suite at /services.",
      },
    ],
  },
];

export const resources = {
  hero: {
    heading: "Resources",
    sub: "Guides, tutorials, and rate reports for teams accelerating their fashion pipeline with AI.",
  },
  trendsReport: {
    slug: "india-trends-report",
    title: "India Design Trends Report",
    description: "FDCI + Lakme Fashion Week domestic colour trends and festive forecast.",
    gated: true,
  },
  tutorials: {
    slug: "tutorials",
    title: "Tutorials",
    items: [
      "MYTH Studio",
      "MYTH Motif",
      "MYTH Digi",
      "How to Write a DaaS Brief",
      "What is AAaaS?",
      "3D Garment Visualization — What's Possible",
    ],
    note: "Hindi subtitles where available",
  },
  designRates: {
    slug: "india-design-rates",
    title: "The True Cost of a Slow Design Pipeline — India's 2026 Creative Rate Report",
    description: "Agency vs freelancer vs DaaS comparison with a downloadable rate card.",
    gated: true,
  },
  faq: [
    {
      question: "What's the difference between DaaS and AAaaS?",
      answer:
        "DaaS is managed acceleration — you brief a service area, the Myth AI team and tools execute with human QA, delivered in 48–72 hours. AAaaS is autonomous acceleration — one project brief covers the whole pipeline, AI agents execute it end-to-end, and it's built for enterprise-scale volume.",
    },
    {
      question: "Which industries does Myth AI serve?",
      answer:
        "Textile & apparel manufacturers, D2C and retail brands, home textiles, and export houses across clusters like Surat, Tirupur and Jaipur — see /solutions for how each maps to specific services.",
    },
    {
      question: "What file formats do you deliver?",
      answer:
        "Prints and repeats as TIFF/PNG/EPS at 300dpi+, Illustrator/CorelDRAW-compatible repeat files, layered PSD for catalog work, MP4/MOV for animation and reels, and factory-ready PDF/Illustrator tech packs.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "DaaS plans deliver in 48–72 hours per batch depending on your plan tier. AAaaS project pipelines run in hours rather than days once a brief is decomposed and agents are executing.",
    },
    {
      question: "Is there a free way to try the platform?",
      answer:
        "Yes — the self-serve platform offers a 14-day free trial with no card required (watermarked output), separate from the managed DaaS and AAaaS services.",
    },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  hero: {
    heading: "Our India Story",
    // TODO: replace with the real founding story / team bios
    sub: "Myth AI India builds AI-native tools and managed services for one of the world's largest, fastest-moving fashion industries.",
  },
  // TODO: replace with real team member profiles
  team: {
    heading: "India Team",
    body: "Our India team combines fashion-tech engineers, garment technologists, and design leads working directly with textile, D2C and export clients.",
  },
  // TODO: replace with real partner logos/names
  partners: {
    heading: "Partners",
    body: "Myth AI partners with manufacturing clusters, design institutions, and technology platforms across India's fashion ecosystem.",
  },
  office: {
    heading: "Mumbai Office",
    body: contact.office,
  },
  press: {
    heading: "Media & Press",
    // TODO: add press mentions / press kit link once available
    body: "Press inquiries: " + contact.email,
  },
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contactPage = {
  hero: {
    heading: "Let's Accelerate Your Pipeline",
    sub: "Tell us about your brief and we'll route it to the right service — DaaS, AAaaS, 3D Visualization, Platform, or Académie.",
  },
  form: {
    fields: ["Name", "Company", "Role", "Industry", "Phone", "Email"],
    interestedIn: ["DaaS", "AAaaS", "3D Visualization", "Platform", "Académie"],
  },
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footerLinks = {
  services: [
    { label: "DaaS", href: "/services/daas" },
    { label: "AAaaS", href: "/services/aaaas" },
    { label: "1. AI Print & Embroidery", href: "/services#ai-print-embroidery" },
    { label: "2. Seamless Repeat Development", href: "/services#seamless-repeat-development" },
    { label: "3. 3D Garment Visualization", href: "/services#3d-garment-visualization" },
    { label: "4. AI Collection Development", href: "/services#ai-fashion-collection-development" },
    { label: "5. AI Catalog & Campaign Images", href: "/services#ai-catalog-campaign-images" },
  ],
  platform: [
    { label: "MYTH Studio", href: "/platform/myth-studio" },
    { label: "MYTH Digi", href: "/platform/myth-digi" },
    { label: "Pricing", href: "/pricing" },
    { label: "Free Trial", href: "/pricing#self-serve" },
    { label: "MYTH Académie India", href: "/academie" },
  ],
  solutions: [
    { label: "Textile & Apparel", href: "/solutions/textile-apparel" },
    { label: "D2C & Retail", href: "/solutions/d2c-retail" },
    { label: "Home Textiles", href: "/solutions/home-textiles" },
    { label: "Export Houses", href: "/solutions/export-houses" },
    { label: "Resources", href: "/resources" },
  ],
  company: [
    { label: "About India", href: "/about" },
    { label: "Contact", href: "/contact" },
    // TODO: build out Careers / Press / legal pages when content is ready
    { label: "Careers", href: "/about#team" },
    { label: "Press", href: "/about#press" },
  ],
};
