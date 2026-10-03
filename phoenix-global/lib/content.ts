// Phoenix Global Corporation - site copy.
// Source: Phoenix Global sitemap v1.0 and brief. Anything marked PLACEHOLDER must be
// replaced with real details before launch. No client names, case studies or
// statistics are published here until they are verified.

export const siteMeta = {
  name: "Phoenix Global",
  legalName: "Phoenix Global Corporation",
  tagline: "Global sourcing. Local insight. Trusted delivery.",
  description:
    "Phoenix Global sources and exports textiles, fashion goods and commodities from India, China and Latin America, and helps Indian D2C brands source and white-label products.",
  url: process.env.NEXT_PUBLIC_URL_PHOENIX || "https://phoenixglobal.biz",
};

export const contactInfo = {
  // PLACEHOLDER: confirm all contact details
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@phoenixglobal.biz",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  offices: [
    { place: "India (head office)", detail: "Address to be confirmed" },
    { place: "China", detail: "Address to be confirmed" },
    { place: "Latin America", detail: "Address to be confirmed" },
  ],
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Sourcing", href: "/sourcing" },
  { label: "Products", href: "/products" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "D2C India", href: "/d2c-consulting" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  sitemap: [
    ...navLinks,
    { label: "Insights", href: "/insights" },
    { label: "Compliance & Quality", href: "/compliance" },
  ],
};

export const categories = [
  { slug: "fashion-textile", label: "Fashion & Textile", lead: true, body: "Fabrics, garments and made-ups sourced from established manufacturing clusters. Our lead category.", items: ["Woven and knit fabrics", "Ready-made garments", "Home textiles", "Custom tailored garments"] },
  { slug: "accessories-footwear", label: "Accessories & Footwear", body: "Bags, jewellery, belts and footwear to your specification.", items: ["Bags and luggage", "Jewellery and fashion accessories", "Footwear"] },
  { slug: "paper-packaging", label: "Paper, Plastic & Packaging", body: "Virgin and semi-virgin grade paper, recycled paper and recycled plastic items, and packaging.", items: ["Virgin and semi-virgin paper", "Recycled paper goods", "Recycled plastic items", "Packaging solutions"] },
  { slug: "electronics", label: "Electronics & Semiconductor Components", body: "Components and finished electronics sourced from vetted suppliers.", items: ["Components", "Batteries", "Consumer electronics"] },
  { slug: "commodities", label: "Raw Materials & Commodities", body: "Sugar, coffee and other agri and industrial commodities on request.", items: ["Sugar", "Coffee", "Other commodities on request"] },
  { slug: "custom", label: "Custom Products (OEM / ODM)", body: "Develop your own product with our manufacturing partners, from sample to bulk.", items: ["OEM and ODM", "Private label", "Custom packaging"] },
];

export const regions = [
  { name: "India", body: "Textiles, garments, home furnishings, accessories, food and commodities." },
  { name: "China", body: "Electronics, components, plastics, packaging and fast sampling for custom products." },
  { name: "Latin America", body: "Coffee, sugar and other agri commodities, plus selected raw materials." },
];

export const processSteps = [
  { title: "Enquiry", body: "Send your product, quantity, specification and destination. Attach drawings, samples or tech packs." },
  { title: "Sourcing & quote", body: "Our regional teams shortlist verified suppliers and return a price with MOQ and lead time." },
  { title: "Sampling & approval", body: "You approve samples and specifications before bulk production starts." },
  { title: "Production & quality check", body: "On-ground teams check production and run quality inspection before shipping." },
  { title: "Shipping & documents", body: "We manage packing, export documentation and freight to your destination." },
];

export const markets = ["North America", "Europe", "Africa", "Middle East"];

export const d2c = {
  services: [
    { title: "OEM / ODM matching", body: "We match your product idea with manufacturers who can build it to your specification." },
    { title: "White-label sourcing", body: "Ready products from vetted suppliers, packed and labelled under your brand." },
    { title: "Product-market fit advice", body: "Help choosing products, pricing and positioning for the Indian market." },
    { title: "Supply chain management", body: "Purchase orders, quality checks, inbound logistics and replenishment." },
  ],
  industries: ["Food and beverages", "FMCG: health, wellness and personal care", "Fashion and textile", "Emerging D2C verticals such as pet care, sustainability and Ayurveda"],
};

export const insights = {
  // PLACEHOLDER: no articles published yet
  topics: ["Sourcing best practices", "Cross-border trade updates", "D2C launch tips", "Market trends in textiles"],
};

export const compliance = {
  // PLACEHOLDER: list real certifications once confirmed
  items: [
    { title: "Certifications", body: "Certifications and registrations will be listed here once confirmed." },
    { title: "Quality control", body: "Pre-shipment inspection, sample approval and production checks by our on-ground teams." },
    { title: "Ethics & sustainability", body: "Responsible sourcing, supplier vetting and recycled-material options." },
  ],
};

export const enquiryTypes = [
  { value: "buyer", label: "Buyer / importer: request a quote" },
  { value: "sourcing", label: "Sourcing request" },
  { value: "d2c", label: "D2C or white-label (India)" },
  { value: "manufacturer", label: "Manufacturer: get listed as a vendor" },
  { value: "other", label: "Something else" },
];
