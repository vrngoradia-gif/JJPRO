// ---------------------------------------------------------------------------
// JJ Fund — Centralized site copy
// ---------------------------------------------------------------------------
// Copy sourced from the "Website Sitemap & Content" strategy deck (July 2026).
// Anything marked "// TODO: replace with real client content" is an open item
// flagged in the deck's "What We Need to Go Live" checklist — do not invent
// figures, logos, or tool names to fill these in.
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "JJ Fund",
  tagline: "Capital, capability, and the corridor — in one AI-native partner.",
  description:
    "JJ Fund is an AI-native venture platform connecting Western startups with Asia — part fund, part advisory, part build partner. We help founders raise capital, establish India capability centres, and scale across the corridor, while giving VCs and family offices vetted access to high-quality AI and SaaS opportunities.",
  // TODO: replace with real client content — confirm live domain
  url: "https://jjfund.com",
};

export const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "GCC", href: "/gcc" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Investors", href: "/investors" },
  { label: "Partners", href: "/partners" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  contact: {
    // TODO: replace with real client content — confirm official emails
    email: "hello@jjfund.com",
    investor: "invest@jjfund.com",
    partner: "partners@jjfund.com",
  },
  socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/jignesh1409/" }],
  sitemap: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Capital & Fundraising", href: "/what-we-do/capital-fundraising" },
    { label: "Venture Studio & Acceleration", href: "/what-we-do/venture-studio-acceleration" },
    { label: "Advisory & Expansion", href: "/what-we-do/advisory-expansion" },
    { label: "Operating Support", href: "/what-we-do/operating-support" },
    { label: "GCC Establishment", href: "/gcc" },
    { label: "AI & Automation", href: "/ai-automation" },
    { label: "Investors", href: "/investors" },
    { label: "Partners", href: "/partners" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Connect", href: "/connect" },
  ],
};

// ---------------------------------------------------------------------------
// MESSAGING KIT
// ---------------------------------------------------------------------------

export const messaging = {
  primaryLine: "Capital, capability, and the corridor — in one AI-native partner.",
  founderLine: "We help Western founders raise, build, and scale into Asia — run on AI, not spreadsheets.",
  investorLine: "Vetted AI and SaaS deal flow, tested across the West–Asia corridor.",
  gccLine: "Your India capability centre, stood up in weeks — not quarters.",
  positioning:
    "The AI-native gateway between Western startups and Asia. A fund, an advisory, and a build partner in one — we help founders raise capital, establish capability in India, and scale across the corridor, and we give investors vetted access to the AI and SaaS companies crossing it.",
  boilerplate:
    "JJ Fund is an AI-native venture platform connecting Western startups with Asia. Part fund, part advisory, part build partner, the firm helps founders raise capital, establish India capability centres, and scale across the corridor — while giving VCs and family offices vetted access to high-quality AI and SaaS opportunities. Regulated delivery is handled through a vetted network of professional partners. The firm is led by Jignesh (JJ) P Jain, a cross-border investor focused on AI and SaaS.",
  whyWeWin:
    "Every competitor sells one slice — a fund, a hiring shop, a market-entry consultancy, a community. We own the whole corridor, run it on AI, and put a single name on the outcome.",
};

export const audiences = [
  {
    key: "founder",
    label: "Founders",
    subtitle: "Western startups → Asia",
    want: "Capital, a way into Asia, and people who've done it.",
    offer: "One partner for funding, building, GCC and expansion.",
    action: { label: "Start a conversation", href: "/connect?as=founder" },
  },
  {
    key: "investor",
    label: "Investors",
    subtitle: "VCs & Family Offices",
    want: "Vetted, corridor-tested AI/SaaS deal flow.",
    offer: "Sourcing, diligence, co-investment, on-ground value creation.",
    action: { label: "Partner with us", href: "/connect?as=investor" },
  },
  {
    key: "partner",
    label: "Partners",
    subtitle: "CA · CS · legal · GCC ops",
    want: "Qualified cross-border mandates.",
    offer: "A coordinating firm that owns everything around the regulated core.",
    action: { label: "Join the network", href: "/connect?as=partner" },
  },
];

export const corridorCities = ["New York", "San Francisco", "London", "Singapore", "Mumbai", "Bangalore"];

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    eyebrow: "WEST → ASIA · AI-NATIVE",
    title: "The corridor between Western startups and Asia — run on AI, not spreadsheets.",
    subtitle:
      "We help founders raise capital, build capability in India, and scale across Asia. And we give investors vetted access to the AI and SaaS companies crossing the corridor. One partner for capital, build, and expansion.",
    primaryCta: { label: "Start a conversation", href: "/connect" },
    secondaryCta: { label: "For investors", href: "/investors" },
  },
  corridor: {
    kicker: "The Corridor",
    body: "A strip that makes the geography instant — the West on one side, Asia on the other, and us in the middle.",
  },
  whatWeDo: {
    kicker: "What We Do",
    heading: "Four ways we move founders forward, plus our flagship.",
    body: "Capital & Fundraising, Venture Studio & Acceleration, Advisory & Expansion, Operating Support — and GCC Establishment.",
  },
  aiEdge: {
    kicker: "The AI Edge",
    heading: "Most firms in this business run on spreadsheets, calls, and gut feel.",
    body: "We run on AI and automation — so decisions are faster, analysis is deeper, and the cost comes down.",
    cta: { label: "Read how", href: "/ai-automation" },
  },
  serve: {
    kicker: "Who We Serve",
    heading: "Three doors — one partner behind each of them.",
  },
  proof: {
    kicker: "Selected Work",
    // TODO: replace with real client content — populate only once real outcomes exist
    // (teams stood up, capital arranged, companies supported). Do not launch with
    // invented figures or logos — credibility here is the whole game.
    note: "Selected outcomes — teams stood up, capital arranged, companies supported — will appear here as they're verified.",
  },
};

// ---------------------------------------------------------------------------
// WHAT WE DO
// ---------------------------------------------------------------------------

export const whatWeDoIntro = {
  eyebrow: "WHAT WE DO",
  title: "Four ways we move founders forward.",
  subtitle:
    "Each pillar stands on its own. Together, with our GCC flagship, they're the closest thing a founder crossing the corridor gets to a single accountable partner.",
};

export const services = [
  {
    slug: "capital-fundraising",
    label: "CAPITAL",
    title: "Capital & Fundraising",
    tagline: "Raise the right capital — faster.",
    summary:
      "We arrange and structure funding across debt, private equity, and alternative routes, and match founders with the investors who actually fit. AI handles sourcing and screening; our team runs the raise end to end — from narrative to close.",
    cta: { label: "Explore fundraising", href: "/what-we-do/capital-fundraising" },
    body: "What you get: a sharp investment narrative and data room, a targeted investor list (VCs, family offices, ecosystem capital), warm introductions, and hands-on support through diligence and negotiation. We tell you what your round should look like before we take it to market — and we don't promise outcomes we can't control.",
  },
  {
    slug: "venture-studio-acceleration",
    label: "BUILD",
    title: "Venture Studio & Acceleration",
    tagline: "Build it right, then scale it fast.",
    summary:
      "We work alongside founders to validate the idea, shape the venture, and stand up the team — then accelerate with structure, mentorship, and network. One continuous programme, from first principles to real traction, focused on validated, budget-disciplined expansion into Asia.",
    cta: { label: "See how we build", href: "/what-we-do/venture-studio-acceleration" },
    body: "This is the merged studio-and-accelerator: we help build what should exist, kill what shouldn't, and put a growth engine behind what works. Founders keep ownership and control; we bring the machine that gets them to market and into the region.",
  },
  {
    slug: "advisory-expansion",
    label: "ADVISORY",
    title: "Advisory & Expansion",
    tagline: "Know exactly where — and how — to grow.",
    summary:
      "Market entry, go-to-market, geography selection, and cross-border scaling. Every recommendation is backed by AI-driven market and competitive analysis, then executed on the ground with the introductions — corporates, channels, partners — that turn a plan into pipeline.",
    cta: { label: "Plan your expansion", href: "/what-we-do/advisory-expansion" },
    body: "Our advisory doesn't end at a slide deck. We hand over a decision — where to enter, how to price, which channel, what it costs — and then we help make it happen, with people on both sides of the corridor.",
  },
  {
    slug: "operating-support",
    label: "OPERATE",
    title: "Operating Support",
    tagline: "Run like a scaled company from day one.",
    summary:
      "Hands-on support across hiring, financials, operations, and marketing — with live dashboards instead of guesswork. The regulated work sits with our partner network, so you get the capability without the liability on your books.",
    cta: { label: "Get operating support", href: "/what-we-do/operating-support" },
    body: "Founders lose months to problems that are already solved elsewhere: the first key hires, the finance stack, the reporting, the first marketing motion. We bring the playbook and the people — and route anything that carries legal or compliance liability to the CA, company-secretary, and legal partners who do it for a living.",
  },
];

// ---------------------------------------------------------------------------
// GCC ESTABLISHMENT (flagship)
// ---------------------------------------------------------------------------

export const gcc = {
  eyebrow: "FLAGSHIP · GCC",
  title: "Your India capability centre — stood up in weeks, not quarters.",
  subtitle:
    "We plan, staff, and scale your Global Capability Centre end to end: location strategy, founding team, operations, and a path to a true centre of excellence. You keep full ownership and control; we carry the execution.",
  cta: { label: "Build your GCC", href: "/connect?as=founder" },
  points: [
    {
      title: "What we do",
      body: "Location and talent strategy, founding-team hiring, operations stand-up, and scale-up into an engineering or R&D centre of excellence.",
    },
    {
      title: "The edge",
      body: "AI-driven talent matching compresses sourcing and hiring from months to weeks.",
    },
    {
      title: "Regulated work",
      body: "Entity setup, payroll, tax, and compliance are delivered by our professional partner network — never carried by us or dropped on you.",
    },
  ],
  whyWeWin:
    "This is where capital, hiring, advisory, and AI converge into one product a Western founder desperately wants and rarely gets cleanly: a real India team, fast, without the liability.",
};

// ---------------------------------------------------------------------------
// AI & AUTOMATION (USP)
// ---------------------------------------------------------------------------

export const aiAutomation = {
  eyebrow: "THE USP",
  title: "An AI-native firm in a spreadsheet industry.",
  subtitle:
    "We built the firm the other way around: AI and automation do the heavy lifting, and our people apply judgment where it counts. Faster decisions, deeper analysis, lower cost — passed on to the founders and investors we work with.",
  functionsKicker: "How we use AI & automation — by function",
  functions: [
    {
      title: "Deal sourcing",
      body: "AI screens and validates opportunities against market, traction, and risk signals — so investors see vetted deal flow, not noise.",
    },
    {
      title: "Analysis",
      body: "Automated market, geography, and competitor analysis turns weeks of research into days, and backs every expansion call with data.",
    },
    {
      title: "Capital matching",
      body: "AI matches startups to the right capital and investors to the right deals, faster.",
    },
    {
      title: "Talent & GCC",
      body: "AI-driven talent matching and automated workflows compress GCC stand-up and hiring.",
    },
    {
      title: "Operating intelligence",
      body: "Live dashboards across hiring, finance, operations, and marketing — the numbers, not the guesswork.",
    },
    {
      title: "Back office",
      body: "Automated reporting connects the firm to its professional partners, so regulated work moves without friction.",
    },
  ],
  credibility:
    "Why it's credible: this isn't a bolt-on. The firm is led by a cross-border investor focused on AI and SaaS, already building AI-native ventures. We practise what we sell — the same AI and automation we use to run the firm is what we bring to the people we work with.",
  // TODO: replace with real client content — confirm how hard to lean on named AI
  // capabilities/tools; name real tools only if they exist and are approved.
};

// ---------------------------------------------------------------------------
// INVESTORS
// ---------------------------------------------------------------------------

export const investors = {
  eyebrow: "FOR INVESTORS",
  title: "Corridor-tested AI and SaaS deal flow.",
  subtitle:
    "We source, evaluate, and help scale the companies crossing the West–Asia corridor — so VCs and family offices see vetted opportunities, not noise. Co-invest alongside us, or use us as your on-ground diligence and value-creation layer in Asia.",
  cta: { label: "Partner with us", href: "/connect?as=investor" },
  body: "Mirrors how the founder already works publicly: helping VCs and family offices source, evaluate, and scale AI/SaaS investments. Give investors a clear reason and a clean path to engage — deal flow, co-investment, or on-ground support.",
};

// ---------------------------------------------------------------------------
// PARTNERS
// ---------------------------------------------------------------------------

export const partners = {
  eyebrow: "PARTNER NETWORK",
  title: "Deliver the regulated work. Grow with the corridor.",
  subtitle:
    "We bring CA firms, company secretaries, lawyers, compliance specialists, and GCC operators qualified cross-border mandates — and a coordinating partner who owns everything around the regulated core.",
  cta: { label: "Join the network", href: "/connect?as=partner" },
  body: "This page does two jobs: it recruits the professional network that delivers accounting, tax, legal, and compliance, and it reassures founders that the regulated work is in expert hands — not ours.",
  network: ["CA firms", "Company secretaries", "Lawyers", "Compliance specialists", "GCC operators"],
};

// ---------------------------------------------------------------------------
// ABOUT & FOUNDER
// ---------------------------------------------------------------------------

export const about = {
  eyebrow: "ABOUT",
  title: "We built the partner we wished existed.",
  subtitle:
    "A fund, an advisory, and a build partner for founders crossing between the West and Asia — because the corridor deserved one accountable team, not ten disconnected vendors.",
  founder: {
    name: "Jignesh (JJ) P Jain",
    // His live LinkedIn headline — used verbatim as the anchor line.
    anchorLine:
      "Venture Partner · Cross-Border Investor — helping VCs & family offices source, evaluate, and scale AI/SaaS investments.",
    aiDna:
      "Already building AI-native ventures (AI-powered design / Design-as-a-Service), which makes the firm's AI-first claim lived, not marketed.",
    presence: "Mumbai-based global operator — the West ↔ Asia bridge, in person.",
    linkedin: "https://www.linkedin.com/in/jignesh1409/",
  },
};

// ---------------------------------------------------------------------------
// INSIGHTS
// ---------------------------------------------------------------------------

export const insights = {
  eyebrow: "INSIGHTS",
  title: "Signal, not noise.",
  subtitle:
    "Data-led perspectives on building across the corridor — hiring, GCCs, capital, and AI adoption — written to be read by founders and cited by the AI engines they now ask first. This is also the engine of our search and AI-search visibility.",
  // TODO: replace with real client content — no posts published yet.
};

// ---------------------------------------------------------------------------
// CONNECT
// ---------------------------------------------------------------------------

export const connect = {
  eyebrow: "CONNECT",
  title: "Tell us which side of the corridor you're on.",
  subtitle:
    "One short form and a call booking, routed by audience — founder, investor, or partner — so every enquiry lands in the right conversation.",
  audienceOptions: [
    { value: "founder", label: "Founder" },
    { value: "investor", label: "Investor" },
    { value: "partner", label: "Partner" },
  ],
  form: {
    heading: "Send a message",
    submitLabel: "Send message",
    successMessage: "Thanks — we'll route this to the right conversation shortly.",
    errorMessage: "Something went wrong. Please try again.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
    },
  },
  directEmail: {
    heading: "Prefer email?",
    // TODO: replace with real client content — confirm official emails
    founder: "hello@jjfund.com",
    investor: "invest@jjfund.com",
    partner: "partners@jjfund.com",
  },
};
