// Cross-links between the four sites. Set the NEXT_PUBLIC_URL_* env vars in Vercel
// once final domains are live. Until then these fall back to the planned domains.
export type SiteKey = "jjpro" | "jjfund" | "myth" | "phoenix";

export const network: { key: SiteKey; name: string; url: string; blurb: string }[] = [
  {
    key: "jjpro",
    name: "JJ PRO",
    url: process.env.NEXT_PUBLIC_URL_JJPRO || "https://www.jjpro.in",
    blurb: "Startup coaching, fundraising and go-to-market advisory with Jignesh P Jain.",
  },
  {
    key: "jjfund",
    name: "Avenor Nexus - Venture Studio",
    url: process.env.NEXT_PUBLIC_URL_JJFUND || "https://www.avenornexus.com",
    blurb: "Capital, venture building and India capability centres for founders crossing West to Asia.",
  },
  {
    key: "myth",
    name: "MYTH AI India",
    url: process.env.NEXT_PUBLIC_URL_MYTH || "https://myth-ai.com/in",
    blurb: "AI design studio for textile prints, 3D garments and fashion collections.",
  },
];
