"use client"
import React from 'react';

// TypeScript types
export type PrivacyPolicyListItem = {
  title?: string;
  text: string;
};

export type PrivacyPolicySection = {
  heading?: string;
  content?: string;
  list?: PrivacyPolicyListItem[];
  note?: string;
};

export type PrivacyPolicyData = {
  title: string;
  intro: string;
  sections: PrivacyPolicySection[];
};

// Text data object
export const privacyPolicyData: PrivacyPolicyData = {
  title: "Soole’s Privacy policy Statement",
  intro: `Soole Values Your Privacy. In Line With Internationally Recognized Data Protection Standards And Nigerian Regulatory Frameworks, Soole Is Committed To Safeguarding The Personal Information Of All Users—Drivers, Riders, And Partners. This Privacy Statement Outlines How We Collect, Use, Store, And Share Your Data When You Use Our Platform.`,
  sections: [
    {
      heading: "What Personal Data does SOOLE collect?",
      content: `In this context, personal data refers to all information about an identifiable person or any data that SOOLE may retain as associated with an individual. We collect and process the following data only for service provision, improving user experience with Soole, processing user purchases, and customized service to the user’s preference.`,
      list: [
        {
          title: "Account information",
          text: "Includes your name, phone number, email address, password, and verification documents (e.g., NIN, driver’s license)."
        },
        {
          title: "Profile Information",
          text: "Covers your profile photo, gender, emergency contact, union affiliation (if applicable), and travel preferences."
        },
        {
          title: "Trip & Location Data",
          text: "We collect pickup and drop-off points, GPS tracking during rides, offline location logs (synced when network returns), and trip history."
        },
        {
          title: "Payment Information",
          text: "Includes wallet balances, transaction records, and bank account details for driver payouts. We do not store full card details."
        },
        {
          title: "Device & Usage Data",
          text: "Covers device type, operating system, app usage patterns, crash reports, and SOS alerts (timestamp, location, optional audio)."
        },
        {
          title: "Driver & Vehicle Data",
          text: "For verified drivers, we collect car registration documents, plate numbers, and union membership details."
        }
      ]
    },
    {
      heading: "How the Data collected is used?",
      content: `Unless ordered by an account owner or as required for legal, safety, or security reasons, our workers do not access meetings, webinars, or messaging content - specifically, audio, video, files, and messages. All data collected is used as below:`,
      list: [
        { title: "To provide services", text: "Matching riders with drivers, verifying identities, and enabling secure trip tracking." },
        { title: "To improve the platform", text: "Analyzing usage patterns to enhance features, performance, and user experience." },
        { title: "To process payments", text: "Facilitating wallet top-ups, fare payments, and driver earnings." },
        { title: "To communicate with you", text: "Sending trip updates, support messages, and service notifications." },
        { title: "To promote safety", text: "Enabling SOS alerts, emergency contact notifications, and admin review of flagged trips." },
        { title: "To comply with legal obligations", text: "Sharing data with unions and government agencies for planning, tax, and regulatory purposes." }
      ]
    },
    {
      heading: "Who can see and share your Data on Soole?",
      content: "Your data is accessible only to:",
      list: [
        { text: "You (the account owner)" },
        { text: "Verified drivers and passengers matched for a trip" },
        { text: "Emergency contacts (in case of SOS alerts)" },
        { text: "Transport unions and government agencies (for compliance)" },
        { text: "Technology partners (e.g., payment processors, KYC providers) under strict confidentiality agreements" }
      ],
      note: "We do not sell your data to third parties."
    },
    {
      heading: "Retention of Data",
      content: `Soole Retains Personal Data Only As Long As Necessary To Provide Services And Meet Legal Requirements. Retention Periods Are Based On:`,
      list: [
        { text: "Duration Of Your Active Account" },
        { text: "Legal Obligations (E.g., Tax Records, Flagged Trips)" },
        { text: "Safety Reviews And Dispute Resolution Timelines" }
      ],
      note: "You May Request Deletion Of Your Account And Associated Data At Any Time."
    },
    {
      heading: "International Transfer",
      content: `Your data may be processed or stored outside Nigeria through our technology partners. We ensure that such transfers comply with applicable data protection laws and include appropriate safeguards.\n\nBy using Soole, you consent to this transfer and processing arrangement.`
    },
    {
      heading: "Your Rights",
      content: "As a Soole user, you have the right to:",
      list: [
        { text: "Access and update your personal information" },
        { text: "Request deletion of your account and data" },
        { text: "Withdraw consent for specific data uses" },
        { text: "Object to certain types of processing" },
        { text: "File a complaint with a regulatory authority" }
      ],
      note: "To exercise these rights, contact us via the details below."
    },
    {
      heading: "Privacy Policy Update",
      content: `We may update this Privacy Statement periodically. Changes will be posted on this page and communicated via the app. Continued use of Soole after updates means you accept the revised policy.`
    }
  ]
};

const SoolePrivacyPolicy = () => {
    return(
        <section className="brand-width my-8 mb-[50px] md:mb-[190px]">
    <h1 className="text-[24px] lg:text-[36px] lg:text-start text-center font-bold text-[#25373F] mb-4">{privacyPolicyData.title}</h1>
    <p className="mb-8 text-[20px] leading-[150%]">{privacyPolicyData.intro}</p>
    {privacyPolicyData.sections.map((section, idx) => (
      <div key={idx} className="mb-8">
        {section.heading && (
          <h2 className="text-[28px] text-[#25373F]  font-medium mb-2">{section.heading}</h2>
        )}
        {section.content && (
          <p className="mb-4 text-[#25373F] text-[20px] whitespace-pre-line">{section.content}</p>
        )}
        {section.list && (
          <ul className="list-disc list-inside mb-4 pl-3">
            {section.list.map((item, itemIdx) => (
              <li key={itemIdx} className="mb-1 text-[#25373F] text-lg">
                {item.title ? (
                  <span>
                    <span className="font-semibold">{item.title}:</span> {item.text}
                  </span>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        )}
        {section.note && (
          <p className="italic text-[#25373F]">{section.note}</p>
        )}
      </div>
    ))}
  </section>
    )
}

export default SoolePrivacyPolicy;