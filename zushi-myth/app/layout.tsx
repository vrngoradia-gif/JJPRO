import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import WhatsAppFab from "@/components/WhatsAppFab";
import ChatWidget from "@/components/ChatWidget";
import LeadPopup from "@/components/LeadPopup";
import CursorGlow from "@/components/CursorGlow";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const SITE = "https://www.zushixmyth.com";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "MYTH AI × ZUSHI: design it digitally, get it made by a verified factory", template: "%s | MYTH AI × ZUSHI" },
  description: "MYTH AI creates the fashion product digitally. ZUSHI matches it to a verified factory and tracks production, quality and shipment. One line from sketch to shipment.",
  openGraph: { title: "MYTH AI × ZUSHI", description: "One line from sketch to shipment.", url: SITE, type: "website" },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: "MYTH AI × ZUSHI", url: SITE, sameAs: ["https://myth-ai.com", "https://withzushi.com", "https://linkedin.com/company/withzushi"] };
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        {/* Analytics placeholder: set NEXT_PUBLIC_GA_ID in Vercel env to enable GA4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (<>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');` }} />
        </>)}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL_ID}');fbq('track','PageView');` }} />
        )}
        {children}
        <WhatsAppFab /><ChatWidget /><LeadPopup />
      </body>
    </html>
  );
}
