import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics/Analytics";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Assistant from "@/components/chat/Assistant";
import NetworkStrip from "@/components/network/NetworkStrip";
import PageTransition from "@/components/layout/PageTransition";
import { siteMeta } from "@/lib/content";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} — ${siteMeta.tagline}`,
    template: `%s — ${siteMeta.name}`,
  },
  description: siteMeta.description,
  alternates: { canonical: "/" },
  authors: [{ name: "Jignesh P Jain" }],
  creator: "Jignesh P Jain",
  publisher: siteMeta.name,
  // Search engine ownership verification (off until the env vars are set; see .env.example)
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <NetworkStrip current="jjfund" />
        <Footer />
        <Assistant />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [ { "@type": "Organization", name: siteMeta.name, url: siteMeta.url, description: siteMeta.description, founder: { "@type": "Person", name: "Jignesh P Jain", sameAs: ["https://www.linkedin.com/in/jignesh1409/"] } }, { "@type": "WebSite", name: siteMeta.name, url: siteMeta.url } ] }) }} />
        <Analytics />
      </body>
    </html>
  );
}
