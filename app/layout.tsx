import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
import JsonLd from "@/components/seo/JsonLd";
import { siteMeta } from "@/lib/content";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";

const fraunces = Fraunces({
  variable: "--font-fraunces",
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
  authors: [{ name: "Jignesh P Jain", url: siteMeta.url }],
  creator: "Jignesh P Jain",
  publisher: siteMeta.name,
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <JsonLd data={[organizationSchema(), personSchema(), websiteSchema()]} />
        <div className="grain-overlay" />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
