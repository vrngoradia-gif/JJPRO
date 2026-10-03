import Script from "next/script";

/**
 * Enable-ready analytics. Everything is OFF until the matching env var is set
 * in Vercel (Project > Settings > Environment Variables) and the site is redeployed.
 *
 *   NEXT_PUBLIC_GA_ID               Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_LINKEDIN_PARTNER_ID LinkedIn Insight Tag partner ID (numeric)
 *   NEXT_PUBLIC_CLARITY_ID          Microsoft Clarity project ID (heatmaps, session replay)
 *
 * No ID is hard-coded. Add a cookie banner before enabling these if you have EU/UK visitors.
 */
export default function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const li = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;
  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}</Script>
        </>
      )}
      {li && (
        <Script id="linkedin-insight" strategy="afterInteractive">{`_linkedin_partner_id="${li}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s)})(window.lintrk);`}</Script>
      )}
      {clarity && (
        <Script id="ms-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}</Script>
      )}
    </>
  );
}
