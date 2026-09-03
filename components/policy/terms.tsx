"use client"
import React from 'react';
import { motion } from 'framer-motion';

// TypeScript types
export type TermsListItem = {
    title?: string;
    text: string;
};

export type TermsSection = {
    heading?: string;
    content?: string;
    list?: TermsListItem[];
    note?: string;
};

export type TermsData = {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: TermsSection[];
};

// Text data object
//
// Covers the clauses a ridesharing marketplace is expected to carry, written
// around what Soole actually is: a platform that introduces passengers to
// drivers already making the journey. The two positions everything else
// rests on are that Soole does not operate vehicles and does not hold
// customer funds - both are true of how the platform is built, and both
// determine what Soole can and cannot be answerable for.
//
// This is a working draft for review by a Nigerian legal practitioner before
// launch. The commercial description is accurate; the liability, indemnity
// and dispute clauses are the ones a lawyer should be asked to confirm.
export const termsData: TermsData = {
    title: "Soole's Terms of Service",
    lastUpdated: "September 2026",
    intro: `These terms are the agreement between you and Soole. They apply whenever you use the Soole app, this website, or any part of the service - as a passenger, as a driver, or on behalf of a company. By creating an account you accept them, so please read them.`,
    sections: [
        {
            heading: "1. Who we are, and what Soole is",
            content: `Soole is operated by Soole Technologies, a company registered in Nigeria. Soole is a technology platform: we introduce passengers to drivers who are already making a journey, and we handle the payment between them.`,
            list: [
                {
                    text: "We do not own vehicles, employ drivers, or operate a transport service. The journey is provided by the driver, not by Soole."
                },
                {
                    text: "Drivers use Soole independently. Nothing in these terms makes a driver an employee, agent or partner of Soole."
                },
                {
                    text: "We verify identity, licences and vehicles before anybody travels, and we act on reports. That is a safeguard, not a guarantee about any individual journey."
                }
            ]
        },
        {
            heading: "2. Who can use Soole",
            list: [
                {
                    title: "You must be 18 or over",
                    text: "Soole is not for children. A passenger under 18 may only travel accompanied by a responsible adult who has booked the seat."
                },
                {
                    title: "You must complete verification",
                    text: "Passengers verify their identity before a first booking. Drivers additionally verify a valid driver's licence and the vehicle they intend to use."
                },
                {
                    title: "One account per person",
                    text: "Your account is yours. Do not share it, sell it, or let somebody else travel on it without telling the driver who is actually coming."
                },
                {
                    title: "Companies",
                    text: "A fleet operator must be registered with the Corporate Affairs Commission and is responsible for the drivers it dispatches."
                }
            ]
        },
        {
            heading: "3. Your account",
            content: `You are responsible for what happens on your account and for keeping your sign-in details private. Tell us immediately if you think somebody else has access to it.`,
            list: [
                {
                    text: "Give us accurate information, and keep it current. Verification depends on it, and so does a driver knowing who they are carrying."
                },
                {
                    text: "You may close your account at any time. We suspend rather than delete accounts we act on, so that trip and payment records - including those of everybody who travelled with you - are not destroyed."
                }
            ]
        },
        {
            heading: "4. Booking and taking a trip",
            list: [
                {
                    title: "A booking is an agreement with the driver",
                    text: "When a driver accepts your request and payment is made, you have a seat on that journey at that price. Soole facilitates it; the journey itself is between you and the driver."
                },
                {
                    title: "The route and pickup point are as agreed",
                    text: "Both sides accepted them when the seat was booked. Neither side may change the fare during the journey."
                },
                {
                    title: "Be on time",
                    text: "A driver is not obliged to wait indefinitely, and other passengers are in the vehicle. If you cannot make it, cancel - it is free."
                }
            ]
        },
        {
            heading: "5. Fares and payment",
            content: `You are shown one price: what you will be charged. There are no fees added afterwards and no charges you were not told about before you confirmed.`,
            list: [
                {
                    title: "You pay when you book",
                    text: "The fare is taken at the time of booking and held until the journey is complete."
                },
                {
                    title: "Your prepaid balance",
                    text: "Money returned to you from a cancelled or expired trip sits in your Soole balance and can be spent on another trip, or sent to your bank on request."
                },
                {
                    title: "Soole does not hold customer funds",
                    text: "We are not a bank and do not operate a wallet you can pay money into. Money only ever enters your balance by being returned from a trip, which is what keeps Soole clear of the regulations that apply to storing money on somebody's behalf."
                },
                {
                    title: "Drivers are paid after the journey",
                    text: "A driver receives their fare once the trip is completed, to the bank account on their verified payout details."
                }
            ]
        },
        {
            heading: "6. Cancellations and refunds",
            content: `Our Cancellation Policy and Payments and Refunds Policy, both on this page, form part of these terms. In short: cancelling is free, a trip that does not run is refunded in full, and a trip you travelled on is not refundable.`
        },
        {
            heading: "7. How you must behave",
            content: `Our Community and Safety Guidelines, on this page, form part of these terms. Breaking them is breaking this agreement.`,
            list: [
                {
                    text: "Do not use Soole for anything unlawful, including transporting prohibited goods."
                },
                {
                    text: "Do not harass, threaten, discriminate against or endanger anybody using the platform."
                },
                {
                    text: "Do not attempt to interfere with the service - no scraping, no reverse engineering, no circumventing verification, no attempting to access accounts or data that are not yours."
                },
                {
                    text: "Do not use Soole to arrange payment outside the platform. It removes every protection either side has."
                }
            ]
        },
        {
            heading: "8. Suspension and termination",
            content: `We may suspend or close an account that breaks these terms, that we reasonably believe presents a risk to other users, or where we are required to by law.`,
            list: [
                {
                    text: "Where it is safe and lawful to do so, we will tell you why."
                },
                {
                    text: "Money genuinely owed to you remains yours. Suspension is not a fine."
                },
                {
                    text: "You may ask us to review a decision, and we will look at it again."
                }
            ]
        },
        {
            heading: "9. Insurance and vehicle responsibility",
            content: `Drivers are responsible for holding the vehicle insurance and licences the law requires of them, and for the roadworthiness of their vehicle. Soole verifies documents at registration; it does not provide insurance cover for journeys, and is not the insurer of any trip booked through the platform.`
        },
        {
            heading: "10. What we are and are not responsible for",
            content: `We are responsible for operating the platform with reasonable care and skill, for the accuracy of what we tell you about your money, and for meeting our obligations under Nigerian law.`,
            list: [
                {
                    text: "We are not responsible for the conduct of any user, the condition of any vehicle, or anything that happens during a journey we did not provide."
                },
                {
                    text: "We are not responsible for delays, route changes or road conditions. Arrival estimates are estimates."
                },
                {
                    text: "We do not exclude liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot lawfully be excluded."
                }
            ],
            note: "Nothing in these terms removes any right you have under Nigerian consumer protection law."
        },
        {
            heading: "11. Your responsibility to us",
            content: `If we suffer a loss because you broke these terms or the law, you are responsible for that loss - including reasonable costs. This does not apply to anything caused by us.`
        },
        {
            heading: "12. Our content and yours",
            list: [
                {
                    title: "Ours",
                    text: "The Soole name, logo, app, website and everything in them belong to us. You may use the service; you may not copy, resell or rebrand it."
                },
                {
                    title: "Yours",
                    text: "What you upload - your photograph, your documents, your messages, your ratings - stays yours. You give us permission to use it to run the service, verify you, and handle disputes. How we look after it is set out in our Privacy Policy."
                }
            ]
        },
        {
            heading: "13. Privacy",
            content: `Our Privacy Policy, on this page, explains what we collect, why, and what we do with it. It forms part of these terms.`
        },
        {
            heading: "14. Changes to these terms",
            content: `We will update these terms as the service changes. When a change materially affects you, we will tell you in the app before it takes effect. Continuing to use Soole after that means you accept the new version. The date at the top of this page is always the date of the version you are reading.`
        },
        {
            heading: "15. If something goes wrong between us",
            content: `Talk to us first. Most problems are a misunderstanding about a trip or a payment, and we would rather fix one than argue about it.`,
            list: [
                {
                    text: "Contact us through the app or using the details on this site, and tell us what happened."
                },
                {
                    text: "If we cannot resolve it between us, the dispute is subject to the laws of the Federal Republic of Nigeria and to the jurisdiction of the Nigerian courts."
                }
            ]
        },
        {
            heading: "16. General",
            list: [
                {
                    text: "If any part of these terms turns out to be unenforceable, the rest still stands."
                },
                {
                    text: "If we do not enforce something immediately, that is not us giving up the right to enforce it later."
                },
                {
                    text: "These terms, together with the policies referred to in them, are the whole agreement between you and Soole."
                }
            ]
        },
        {
            heading: "17. Contact",
            content: `Soole Technologies, No 5 Victory Close, Dawaki, Abuja FCT. Email info@soole.ng, or call 07032220043 between 8am and 10pm, seven days a week.`
        }
    ]
};

const SooleTerms = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, staggerChildren: 0.2 }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    const slugify = (text: string) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    return (
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
                    {termsData.title}
                </motion.h1>
                <motion.p
                    className="mt-3 text-sm text-[#25373F]/70"
                    variants={textVariants}
                >
                    Last updated: {termsData.lastUpdated}
                </motion.p>
                <motion.p
                    className="mt-6 text-[#25373F] text-base md:text-lg leading-[1.7] max-w-[820px]"
                    variants={textVariants}
                >
                    {termsData.intro}
                </motion.p>
            </motion.section>

            <div className="brand-width pb-16 md:pb-24">
                <div className="space-y-10 md:space-y-14">
                    {termsData.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            id={section.heading ? slugify(section.heading) : undefined}
                            className="space-y-4 scroll-mt-24"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {section.heading && (
                                <motion.h2
                                    className="text-[20px] md:text-[26px] font-bold text-[#042011]"
                                    variants={textVariants}
                                >
                                    {section.heading}
                                </motion.h2>
                            )}
                            {section.content && (
                                <motion.p
                                    className="text-[#25373F] text-base md:text-lg leading-[1.75] max-w-[820px]"
                                    variants={textVariants}
                                >
                                    {section.content}
                                </motion.p>
                            )}
                            {section.list && (
                                <motion.ul className="space-y-3 max-w-[820px]" variants={sectionVariants}>
                                    {section.list.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            className="flex gap-3 text-[#25373F] text-base md:text-lg leading-[1.7]"
                                            variants={listItemVariants}
                                        >
                                            <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-[#058B42] shrink-0" />
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

export default SooleTerms;
