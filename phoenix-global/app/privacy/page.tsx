export const metadata = { title: "Privacy notice", alternates: { canonical: "/privacy" } };
const sections: [string, string[]][] = [
  [
    "About this notice",
    [
      "This notice explains how enquiry details submitted on the Merovant website are handled. It covers the website enquiry forms, not separate services you may access through external links."
    ]
  ],
  [
    "Information you submit",
    [
      "The form sends the fields you complete, such as your name, email, company, contact details and message, together with the enquiry context shown on that form. Please do not include sensitive personal information."
    ]
  ],
  [
    "Purpose and delivery",
    [
      "The information is collected so the company team can respond to your enquiry and follow up on your request. FormSubmit processes form submissions for delivery to the designated enquiry inbox. The form-processing service and email provider handle the information as part of that delivery."
    ]
  ],
  [
    "Sharing",
    [
      "Enquiries are for the company team and are not shared with independent partners or other companies. This does not exclude the service providers used to process and deliver the form, as described above."
    ]
  ],
  [
    "Retention",
    [
      "The company keeps enquiry records for one year. For questions about retention or a request concerning your data, use the privacy contact below."
    ]
  ],
  [
    "Privacy contact and grievances",
    [
      "For privacy questions, grievances, or requests to access, correct or delete enquiry information, email jigjn14@gmail.com. Please identify the website and the email address used for your enquiry."
    ]
  ],
  [
    "External services",
    [
      "If you follow a link to WhatsApp, a booking service, a partner or another website, that service has its own privacy policy and terms. Information you provide there is handled under those policies."
    ]
  ]
];
export default function PrivacyPage() {
  return (<><main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
    <h1 className="text-4xl font-bold">Privacy notice</h1>
    <p className="mt-4 text-sm text-paper-dim">Updated 20 November 2026</p>
    {sections.map(([heading, paragraphs]) => <section key={heading} className="mt-10"><h2 className="text-2xl font-bold">{heading}</h2>{paragraphs.map(text => <p key={text} className="mt-4 text-base leading-relaxed text-paper-dim">{text}</p>)}</section>)}
    <p className="mt-8 text-base text-paper-dim"><a href="mailto:jigjn14@gmail.com" className="underline underline-offset-4">Email the privacy contact</a></p>
  </main></>);
}
