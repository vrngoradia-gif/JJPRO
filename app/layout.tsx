import type { Metadata } from "next";
import { Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics/Analytics";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import Assistant from "@/components/chat/Assistant";
import NetworkStrip from "@/components/network/NetworkStrip";
import PageTransition from "@/components/layout/PageTransition";
import JsonLd from "@/components/seo/JsonLd";
import { siteMeta } from "@/lib/content";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";

const noto = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} — ${siteMeta.tagline}`,
    template: `%s — ${siteMeta.name}`,
  },
  description: siteMeta.description,
  alternates: { canonical: "/" },
  authors: [{ name: "Jignesh P Jain", url: siteMeta.url }],
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
    <html lang="en" className={`${noto.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <JsonLd data={[organizationSchema(), personSchema(), websiteSchema()]} />
        <div className="grain-overlay" />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <NetworkStrip current="jjpro" />
          <Footer />
          <Assistant />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
