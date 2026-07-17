"use client"
import React from 'react';
import { motion } from 'framer-motion';

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
  lastUpdated: string;
  intro: string;
  sections: PrivacyPolicySection[];
};

// Text data object
export const privacyPolicyData: PrivacyPolicyData = {
  title: "Soole's Privacy Policy",
  lastUpdated: "July 2026",
  intro: `Soole values your privacy. In line with internationally recognized data protection standards and Nigerian regulatory frameworks, Soole is committed to safeguarding the personal information of all users, drivers, passengers, and partners. This privacy statement outlines how we collect, use, store, and share your data when you use our platform.`,
  sections: [
    {
      heading: "What personal data does Soole collect?",
      content: `Personal data refers to all information about an identifiable person that Soole may retain in association with an individual. We collect and process the following data only for service provision, improving your experience with Soole, processing purchases, and customizing our service to your preferences.`,
      list: [
        {
          title: "Account information",
          text: "Includes your name, phone number, email address, password, and verification documents (e.g., NIN, driver's license)."
        },
        {
          title: "Profile information",
          text: "Covers your profile photo, gender, emergency contact, union affiliation (if applicable), and travel preferences."
        },
        {
          title: "Trip & location data",
          text: "We collect pickup and drop-off points, GPS tracking during rides, offline location logs (synced when network returns), and trip history."
        },
        {
          title: "Payment information",
          text: "Includes wallet balances, transaction records, and bank account details for driver payouts. We do not store full card details."
        },
        {
          title: "Device & usage data",
          text: "Covers device type, operating system, app usage patterns, crash reports, and SOS alerts (timestamp, location, optional audio)."
        },
        {
          title: "Driver & vehicle data",
          text: "For verified drivers, we collect car registration documents, plate numbers, and union membership details."
        }
      ]
    },
    {
      heading: "How is the data collected used?",
      content: `Unless ordered by an account owner or as required for legal, safety, or security reasons, our staff do not access messaging, call, or trip content, specifically audio, files, and messages. All data collected is used as follows:`,
      list: [
        { title: "To provide services", text: "Matching passengers with drivers, verifying identities, and enabling secure trip tracking." },
        { title: "To improve the platform", text: "Analyzing usage patterns to enhance features, performance, and user experience." },
        { title: "To process payments", text: "Facilitating wallet top-ups, fare payments, and driver earnings." },
        { title: "To communicate with you", text: "Sending trip updates, support messages, and service notifications." },
        { title: "To promote safety", text: "Enabling SOS alerts, emergency contact notifications, and admin review of flagged trips." },
        { title: "To comply with legal obligations", text: "Sharing data with unions and government agencies for planning, tax, and regulatory purposes." }
      ]
    },
    {
      heading: "Who can see and share your data on Soole?",
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
      heading: "Retention of data",
      content: `Soole retains personal data only as long as necessary to provide services and meet legal requirements. Retention periods are based on:`,
      list: [
        { text: "The duration of your active account" },
        { text: "Legal obligations (e.g., tax records, flagged trips)" },
        { text: "Safety reviews and dispute resolution timelines" }
      ],
      note: "You may request deletion of your account and associated data at any time."
    },
    {
      heading: "International transfer",
      content: `Your data may be processed or stored outside Nigeria through our technology partners. We ensure that such transfers comply with applicable data protection laws and include appropriate safeguards.\n\nBy using Soole, you consent to this transfer and processing arrangement.`
    },
    {
      heading: "Your rights",
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
      heading: "Privacy policy updates",
      content: `We may update this privacy statement periodically. Changes will be posted on this page and communicated via the app. Continued use of Soole after updates means you accept the revised policy.`
    }
  ]
};

const SoolePrivacyPolicy = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    const slugify = (text: string) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    return(
        <div className="bg-[#FAFCF7]">
            <motion.section
                className="brand-width pt-10 pb-6 md:pt-16 md:pb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    className="inline-block text-xs font-bold uppercase tracking-widest text-[#058B42] mb-3"
                    variants={textVariants}
                >
                    Legal
                </motion.span>
                <motion.h1
                    className="text-[28px] md:text-[44px] lg:text-[52px] font-bold text-[#042011] leading-tight max-w-[820px]"
                    variants={titleVariants}
                >
                    {privacyPolicyData.title}
                </motion.h1>
                <motion.p
                    className="mt-3 text-sm text-[#25373F]/60"
                    variants={textVariants}
                >
                    Last updated: {privacyPolicyData.lastUpdated}
                </motion.p>
                <motion.p
                    className="mt-6 text-base md:text-lg leading-[170%] text-[#25373F] max-w-[760px]"
                    variants={textVariants}
                >
                    {privacyPolicyData.intro}
                </motion.p>
            </motion.section>

            <div className="brand-width pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
                {/* Table of contents */}
                <motion.nav
                    className="hidden lg:block sticky top-24 self-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-[#042011]/50 mb-4">
                        On this page
                    </p>
                    <ul className="flex flex-col gap-3 border-l border-[#E5EFDB]">
                        {privacyPolicyData.sections.map((section, idx) => (
                            section.heading && (
                                <li key={idx}>
                                    <a
                                        href={`#${slugify(section.heading)}`}
                                        className="block pl-4 -ml-px border-l-2 border-transparent hover:border-[#058B42] text-sm text-[#25373F]/70 hover:text-[#058B42] transition-colors duration-200"
                                    >
                                        {section.heading}
                                    </a>
                                </li>
                            )
                        ))}
                    </ul>
                </motion.nav>

                {/* Sections */}
                <div className="flex flex-col divide-y divide-[#E5EFDB]">
                    {privacyPolicyData.sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            id={section.heading ? slugify(section.heading) : undefined}
                            className="py-8 first:pt-0 scroll-mt-24"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {section.heading && (
                                <motion.h2
                                    className="flex items-start gap-3 text-[20px] md:text-[26px] text-[#042011] font-semibold mb-3"
                                    variants={textVariants}
                                >
                                    <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-[#F9FFEB] border border-[#C9EC7C]/60 text-[#058B42] text-sm flex items-center justify-center">
                                        {idx + 1}
                                    </span>
                                    {section.heading}
                                </motion.h2>
                            )}
                            {section.content && (
                                <motion.p
                                    className="mb-4 pl-10 text-[#25373F] text-base md:text-lg leading-[170%] whitespace-pre-line"
                                    variants={textVariants}
                                >
                                    {section.content}
                                </motion.p>
                            )}
                            {section.list && (
                                <motion.ul
                                    className="pl-10 flex flex-col gap-2 mb-4"
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {section.list.map((item, itemIdx) => (
                                        <motion.li
                                            key={itemIdx}
                                            className="flex gap-2.5 text-[#25373F] text-base leading-relaxed"
                                            variants={listItemVariants}
                                        >
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#058B42] flex-shrink-0" />
                                            <span>
                                                {item.title ? (
                                                    <>
                                                        <span className="font-semibold text-[#042011]">{item.title}:</span> {item.text}
                                                    </>
                                                ) : (
                                                    item.text
                                                )}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                            {section.note && (
                                <motion.p
                                    className="ml-10 pl-4 border-l-2 border-[#C9EC7C] italic text-[#25373F]/80 text-sm md:text-base"
                                    variants={textVariants}
                                >
                                    {section.note}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SoolePrivacyPolicy;
