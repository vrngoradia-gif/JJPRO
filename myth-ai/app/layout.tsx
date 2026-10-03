import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import NetworkStrip from "@/components/network/NetworkStrip";
import WhatsAppFab from "@/components/chat/WhatsAppFab";
import ChatWidget from "@/components/chat/ChatWidget";
import { contact, siteMeta } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  publisher: siteMeta.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [ { "@type": "Organization", name: siteMeta.name, url: siteMeta.url, description: siteMeta.description, email: contact.email, address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" } }, { "@type": "WebSite", name: siteMeta.name, url: siteMeta.url } ] }) }} />
        <NetworkStrip current="myth" />
        <Footer />
        <WhatsAppFab />
        <ChatWidget />
      </body>
    </html>
  );
}
