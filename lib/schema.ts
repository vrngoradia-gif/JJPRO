// ---------------------------------------------------------------------------
// JJ PRO — JSON-LD structured data builders
// ---------------------------------------------------------------------------
// Centralized schema.org builders for SEO (rich results), AEO (FAQ/HowTo
// eligibility) and GEO (entity clarity + E-E-A-T signals for AI answer
// engines). Consumed via <JsonLd data={...} /> — see components/seo/JsonLd.tsx.
// ---------------------------------------------------------------------------

import { siteMeta, footerLinks } from "@/lib/content";

const SITE_URL = siteMeta.url;

// Real, publicly-verifiable profile facts (sourced from LinkedIn) used to
// ground the Person entity for GEO/E-E-A-T purposes.
export const person = {
  name: "Jignesh P Jain",
  jobTitle: "Startup, GTM & Fundraising Consultant",
  url: SITE_URL,
  image: `${SITE_URL}/jignesh-jain.jpg`,
  linkedin: "https://www.linkedin.com/in/jignesh1409/",
  location: "Mumbai, Maharashtra, India",
  sameAs: [
    "https://www.linkedin.com/in/jignesh1409/",
  ],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteMeta.name,
    url: SITE_URL,
    // TODO: replace with a dedicated square logo file once available
    logo: `${SITE_URL}/opengraph-image`,
    description: siteMeta.description,
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: person.name,
    },
    email: footerLinks.contact.email,
    sameAs: person.sameAs,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    image: person.image,
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: siteMeta.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: person.sameAs,
    knowsAbout: [
      "Startup Fundraising",
      "Go-To-Market Strategy",
      "Brand Strategy",
      "Business Transformation",
      "Cross-Border Expansion",
      "Startup Mentoring",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteMeta.name,
    description: siteMeta.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };
}

export type BreadcrumbItem = { name: string; href: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
};

export function blogPostingSchema(post: BlogPostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en",
    keywords: post.tags.join(", "),
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };
}

export function blogCollectionSchema(posts: BlogPostMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog#collection`,
    name: "JJ PRO Blog — Fundraising, GTM & Brand Strategy Insights",
    description:
      "Insights on startup fundraising, go-to-market strategy and brand building from JJ PRO.",
    url: `${SITE_URL}/blog`,
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };
}
