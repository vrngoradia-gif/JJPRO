// ---------------------------------------------------------------------------
// JJ PRO — Blog content
// ---------------------------------------------------------------------------
// Structured post content lives here (not raw MDX) so it stays consistent
// with the rest of the site's centralized-content pattern. Each post's first
// section is a question-phrased heading followed by a 40-60 word direct
// answer paragraph, written for featured-snippet / AEO eligibility.
// ---------------------------------------------------------------------------

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: string;
  author: { name: string; role: string };
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cross-border-fundraise-checklist",
    title: "How to Prepare for a Cross-Border Fundraise",
    description:
      "A practical checklist for founders raising capital across geographies — narrative, structure, compliance and investor targeting for a cross-border round.",
    excerpt:
      "Raising from investors outside your home market changes what 'ready' means. Here's the checklist we use before any cross-border raise.",
    publishedAt: "2026-01-14",
    tags: ["Fundraising", "Cross-Border", "GTM"],
    readingTime: "6 min read",
    author: { name: "Jignesh P Jain", role: "Founder, JJ PRO" },
    blocks: [
      {
        type: "heading",
        text: "What is a cross-border fundraise?",
      },
      {
        type: "paragraph",
        text: "A cross-border fundraise is a capital raise in which a startup seeks investment from investors based outside its home country, or plans to expand operations into new markets using that capital. It requires additional preparation around legal structure, currency, compliance and narrative that a domestic-only raise doesn't.",
      },
      {
        type: "paragraph",
        text: "Most founders underestimate how much a cross-border raise changes the fundamentals of fundraising — not just who you pitch, but how you structure the company, present your numbers, and sequence the conversation.",
      },
      {
        type: "heading",
        text: "1. Get your legal and holding structure right first",
      },
      {
        type: "paragraph",
        text: "Before any outreach, confirm whether your existing entity can receive foreign investment cleanly, or whether you need a holding company in a more investor-familiar jurisdiction. This is the single most common reason cross-border term sheets stall after a verbal yes.",
      },
      {
        type: "heading",
        text: "2. Rebuild your narrative for an unfamiliar market",
      },
      {
        type: "paragraph",
        text: "Investors outside your home market won't share your assumptions about market size, regulatory context or customer behavior. Your deck needs to teach the market before it pitches the company — otherwise every follow-up meeting starts from zero.",
      },
      {
        type: "list",
        items: [
          "Lead with market context, not just company traction",
          "Translate local metrics into benchmarks investors already recognize",
          "Address regulatory and currency risk directly, don't wait to be asked",
          "Show why this market, why now — not just why your company",
        ],
      },
      {
        type: "heading",
        text: "3. Target investors who already invest cross-border",
      },
      {
        type: "paragraph",
        text: "Generalist funds without a cross-border thesis will spend your entire process getting comfortable with the concept before evaluating the company. Prioritize investors and funds with an existing track record writing checks into your target geography.",
      },
      {
        type: "heading",
        text: "4. Prepare for a longer, multi-timezone process",
      },
      {
        type: "paragraph",
        text: "Cross-border rounds routinely take longer than domestic ones — legal review, currency considerations and scheduling across time zones all add friction. Build this into your runway planning rather than assuming the same timeline as a local raise.",
      },
      {
        type: "quote",
        text: "The founders who close cross-border rounds fastest are the ones who treat the market explanation as part of the pitch, not a prerequisite to it.",
      },
      {
        type: "heading",
        text: "How JJ PRO helps",
      },
      {
        type: "paragraph",
        text: "JJ PRO has supported founders preparing cross-border raises through mentor and advisory roles across multiple international startup programs. If you're preparing to raise outside your home market, a short intro call is the fastest way to find out where your gaps are.",
      },
    ],
  },
  {
    slug: "seed-stage-pitch-deck-investors-look-for",
    title: "What Investors Actually Look for in a Seed-Stage Pitch Deck",
    description:
      "The slides investors actually pay attention to at seed stage — and the common pitch deck mistakes that quietly kill first meetings.",
    excerpt:
      "Most seed decks fail before slide five. Here's what investors are actually scanning for, and how to structure a deck around it.",
    publishedAt: "2025-11-03",
    tags: ["Fundraising", "Pitch Deck"],
    readingTime: "5 min read",
    author: { name: "Jignesh P Jain", role: "Founder, JJ PRO" },
    blocks: [
      {
        type: "heading",
        text: "What do investors look for in a seed-stage pitch deck?",
      },
      {
        type: "paragraph",
        text: "At seed stage, investors primarily look for a clear problem, a credible founder-market fit, early evidence of demand, and a realistic view of what the capital will prove next. They are evaluating conviction and clarity more than polish or completeness.",
      },
      {
        type: "heading",
        text: "The slides that actually get read",
      },
      {
        type: "paragraph",
        text: "Most investors skim a first-look deck in under four minutes. In practice, four slides carry almost all of the decision weight: the problem, the team, the traction (or earliest signal of demand), and the ask.",
      },
      {
        type: "list",
        items: [
          "Problem — stated in one sentence a stranger could repeat back",
          "Team — why you, specifically, are positioned to solve this",
          "Traction or signal — whatever early evidence you have, framed honestly",
          "The ask — how much, and precisely what it will prove or unlock",
        ],
      },
      {
        type: "heading",
        text: "Common mistakes that quietly kill first meetings",
      },
      {
        type: "paragraph",
        text: "The most common failure isn't a weak business — it's a deck that makes a strong business hard to evaluate quickly. Overloaded market-size slides, vague competitive positioning and unclear asks are the three most frequent reasons a first meeting doesn't convert to a second.",
      },
      {
        type: "heading",
        text: "How much detail should a seed deck include?",
      },
      {
        type: "paragraph",
        text: "Less than founders expect. A seed deck should raise informed questions, not answer every possible one — save the depth for the data room and follow-up conversation. Ten to fourteen slides is typically enough for a first-look deck.",
      },
      {
        type: "quote",
        text: "A pitch deck's job isn't to prove you're right. It's to earn the next thirty minutes of an investor's time.",
      },
      {
        type: "heading",
        text: "Getting deck feedback before you send it",
      },
      {
        type: "paragraph",
        text: "JJ PRO's fundraising support includes a fundraise readiness audit and pitch deck build for founders preparing to raise — get in touch if you'd like a second set of eyes before your deck goes out.",
      },
    ],
  },
  {
    slug: "gtm-market-entry-prioritization",
    title: "GTM Playbook: How to Prioritize Your Next Market Entry",
    description:
      "A framework for deciding which market to enter next when expanding a startup cross-border — beyond just market size.",
    excerpt:
      "Market size is the wrong first filter for market entry. Here's the framework we use to prioritize where to expand next.",
    publishedAt: "2025-08-19",
    tags: ["GTM", "Cross-Border", "Market Entry"],
    readingTime: "6 min read",
    author: { name: "Jignesh P Jain", role: "Founder, JJ PRO" },
    blocks: [
      {
        type: "heading",
        text: "How should a startup prioritize its next market to enter?",
      },
      {
        type: "paragraph",
        text: "A startup should prioritize its next market based on regulatory friction, channel accessibility and founder or team proximity to that market — not purely on market size. A smaller market you can enter and win quickly often outperforms a larger one that takes years to unlock.",
      },
      {
        type: "heading",
        text: "Why market size alone is a poor filter",
      },
      {
        type: "paragraph",
        text: "Total addressable market is easy to calculate and easy to overweight. It says nothing about how hard the market is to enter, how long the sales or regulatory cycle runs, or whether your product needs meaningful localization before it's viable there.",
      },
      {
        type: "heading",
        text: "A four-factor framework for market prioritization",
      },
      {
        type: "list",
        items: [
          "Regulatory friction — licensing, data residency, compliance timelines",
          "Channel accessibility — can you reach customers without building distribution from zero",
          "Localization cost — language, currency, payment rails, cultural fit",
          "Team proximity — existing network, language ability or on-ground presence",
        ],
      },
      {
        type: "paragraph",
        text: "Score each candidate market against these four factors before layering in size and growth rate. Markets that score well across all four are usually faster and cheaper to win, even if their headline size is smaller.",
      },
      {
        type: "heading",
        text: "Sequencing matters as much as selection",
      },
      {
        type: "paragraph",
        text: "The order you enter markets in shapes how much each subsequent entry costs. Entering an easier market first builds playbooks, references and operational muscle that make the next, harder market cheaper to unlock — sequencing is a strategy decision, not a scheduling one.",
      },
      {
        type: "quote",
        text: "The best market to enter next is rarely the biggest one. It's the one where your existing advantages compound fastest.",
      },
      {
        type: "heading",
        text: "Building your market entry playbook",
      },
      {
        type: "paragraph",
        text: "JJ PRO's GTM — Cross Border practice builds market prioritization, localization and channel strategy for founders expanding into new geographies. If you're weighing which market to enter next, a short call can help you pressure-test the shortlist.",
      },
    ],
  },
  {
    slug: "brand-positioning-startups-get-wrong",
    title: "Brand Positioning 101: Why Most Startups Get It Wrong",
    description:
      "The most common brand positioning mistake early-stage startups make, and a simple framework to fix it before it costs you fundraising or GTM momentum.",
    excerpt:
      "Most early-stage brand problems aren't design problems — they're positioning problems. Here's the mistake we see most often.",
    publishedAt: "2025-05-27",
    tags: ["Brand Strategy", "Positioning"],
    readingTime: "5 min read",
    author: { name: "Jignesh P Jain", role: "Founder, JJ PRO" },
    blocks: [
      {
        type: "heading",
        text: "What is brand positioning, and why does it matter for startups?",
      },
      {
        type: "paragraph",
        text: "Brand positioning is the specific space a company claims in a customer's mind relative to alternatives — what it does, for whom, and why it's different. For startups, clear positioning directly affects fundraising, hiring and go-to-market efficiency, because it determines whether your story is easy to repeat.",
      },
      {
        type: "heading",
        text: "The most common mistake: positioning by feature list",
      },
      {
        type: "paragraph",
        text: "Early-stage founders default to describing what their product does — its features — rather than the specific problem it solves and for whom. A feature list can't be repeated by someone else; a sharp position can. That repeatability is what actually drives word-of-mouth, investor recall and hiring conviction.",
      },
      {
        type: "heading",
        text: "A simple test for whether your positioning works",
      },
      {
        type: "paragraph",
        text: "Ask a teammate, investor or early customer to describe your company in one sentence without looking at your website. If the answers vary wildly — or default to a feature description — your positioning isn't landing yet, regardless of how strong the underlying product is.",
      },
      {
        type: "list",
        items: [
          "Who is this for, specifically — not 'everyone who has this problem'",
          "What alternative are they using today, and why is it insufficient",
          "What's the one thing you want repeated back, word for word",
          "Does your pricing and packaging reinforce that position, or contradict it",
        ],
      },
      {
        type: "heading",
        text: "Positioning before identity, not after",
      },
      {
        type: "paragraph",
        text: "A common sequencing mistake is investing in visual identity — logo, colors, website — before positioning is settled. Identity should express a position that's already been decided; when it's done first, most companies end up redesigning within a year once the real position emerges.",
      },
      {
        type: "quote",
        text: "If your positioning statement could apply to three of your competitors, it isn't positioning yet — it's a category description.",
      },
      {
        type: "heading",
        text: "Fixing positioning before it costs you momentum",
      },
      {
        type: "paragraph",
        text: "JJ PRO's brand strategy practice builds positioning, messaging architecture and identity direction for founders who need their story to be as sharp as their product. Get in touch if your positioning is due for a stress test.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}
