"use client"
import React from 'react';
import { motion } from 'framer-motion';

// TypeScript types
export type CancellationPolicyListItem = {
    title?: string;
    text: string;
};

export type CancellationPolicySection = {
    heading?: string;
    content?: string;
    list?: CancellationPolicyListItem[];
    note?: string;
};

export type CancellationPolicyData = {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: CancellationPolicySection[];
};

// Text data object
//
// Describes what the platform actually does. Every rule below is enforced in
// code - the eligibility text a passenger sees in the app is generated from
// the same checks - so this is a description, not an intention.
export const cancellationPolicyData: CancellationPolicyData = {
    title: "Soole's Cancellation Policy",
    lastUpdated: "September 2026",
    intro: `Soole is not a taxi you hail and drop. A driver posts a journey they are making, passengers book seats on it, and everybody plans around that. Because of this, a seat cannot simply be handed back on a whim - a passenger who books and disappears costs the driver a seat they could have sold and delays everyone else in the vehicle. This explains when a booking can be cancelled, what to do before then, and what happens to your money.`,
    sections: [
        {
            heading: "The two-hour rule",
            content: `A booked seat cannot be cancelled in the app until two hours after the trip was due to start and it still has not happened. Until that point the trip is treated as going ahead, because in almost every case it is - a driver running late is still coming.`,
            list: [
                {
                    title: "Before the two hours are up",
                    text: "The cancel option is not available. If your plans have changed or something is wrong, use Report Ride on the trip screen or contact support, and we will look at it with you."
                },
                {
                    title: "Once two hours have passed and the trip has not run",
                    text: "You can cancel and request your money back yourself, from the trip screen."
                }
            ],
            note: "The same two hours applies on our side: a trip that has not started two hours after its departure time expires on its own, and everybody who paid is refunded without having to ask."
        },
        {
            heading: "If you can no longer travel",
            content: `Tell us rather than simply not turning up. Use Report Ride on the trip, or contact support directly - the details are on this site and in the app.`,
            list: [
                {
                    text: "We look at these individually. A passenger whose circumstances genuinely changed and a passenger who books seats and abandons them are not the same, and a fixed rule cannot tell them apart."
                },
                {
                    text: "Telling the driver through the in-app chat is a courtesy that costs you nothing and saves them waiting. It is not a substitute for reporting it to us."
                }
            ]
        },
        {
            heading: "Once you have been picked up",
            content: `The journey has begun and the seat cannot be cancelled at all - not by you, and not after you arrive. A completed journey and a trip that never ran must stay distinguishable, or a driver could be denied payment for work they actually did.`,
            note: "If something went wrong on the journey, report the trip. That is settled by a person looking at what happened, which is the right process for it - and you can report a trip whether or not any money is in question."
        },
        {
            heading: "Cancelling as a driver",
            content: `A driver can cancel a trip they have posted, and is asked why. Every passenger who booked is notified immediately, and every seat is refunded in full without anybody having to ask.`,
            list: [
                {
                    text: "Vehicle breakdown, medical emergency, a blocked route and weather are all recognised reasons. Things go wrong; that is understood."
                },
                {
                    text: "Cancelling habitually is different. Passengers plan journeys around a posted trip, and a driver who repeatedly calls them off is not offering a service."
                },
                {
                    text: "A driver cannot cancel a passenger who is already aboard."
                }
            ],
            note: "Drivers are not charged for cancelling. What a driver loses is the trip; what we pay attention to is the pattern."
        },
        {
            heading: "Trips that expire",
            content: `A trip that has not started two hours after its departure time expires automatically. Nobody has to do anything. Every passenger who paid is refunded exactly as if the driver had cancelled it - a trip that quietly never happened and a trip that was called off are the same thing from your side.`
        },
        {
            heading: "What happens to your money",
            content: `A cancelled or expired trip releases your fare back to you in full - every seat you booked, plus our commission. You are not charged for a journey you did not take.`,
            list: [
                {
                    title: "It goes to your prepaid balance first",
                    text: "The money returns to your Soole balance, where it is immediately available to book another trip. For most people that is the useful outcome: they are still trying to get somewhere."
                },
                {
                    title: "Or to your bank, if you ask",
                    text: "Request a refund from the trip and we send it to your bank account. You are notified once it has been paid."
                }
            ],
            note: "If you already spent the released balance on another trip, that money is genuinely on that other trip and cannot also come back to your bank. The app tells you this before you choose a bank and type an account number, not after."
        },
        {
            heading: "When a refund is not available",
            content: `There are exactly three situations, and the app tells you which one applies rather than simply refusing:`,
            list: [
                {
                    title: "You travelled",
                    text: "You confirmed your pickup and took the journey. There is nothing to refund. If something went wrong on the way, report the trip."
                },
                {
                    title: "The trip is still going ahead",
                    text: "Refunds are for trips that did not happen. A trip that has not been cancelled and has not expired is still a trip you hold a seat on."
                },
                {
                    title: "It has already been refunded",
                    text: "The money has been sent to your bank, or a request is already in flight. You will be told which."
                }
            ]
        },
        {
            heading: "If we get it wrong",
            content: `If a refund does not arrive, or the app says something that does not match what happened to you, tell us. A payout that leaves our side and does not reach your bank is our problem to chase, not yours - contact us and we will find it.`
        }
    ]
};

const SooleCancellationPolicy = () => {
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
                    {cancellationPolicyData.title}
                </motion.h1>
                <motion.p
                    className="mt-3 text-sm text-[#25373F]/70"
                    variants={textVariants}
                >
                    Last updated: {cancellationPolicyData.lastUpdated}
                </motion.p>
                <motion.p
                    className="mt-6 text-[#25373F] text-base md:text-lg leading-[1.7] max-w-[820px]"
                    variants={textVariants}
                >
                    {cancellationPolicyData.intro}
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
                        {cancellationPolicyData.sections.map((section, idx) => (
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
                    {cancellationPolicyData.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            id={section.heading ? slugify(section.heading) : undefined}
                            className="py-8 first:pt-0 space-y-4 scroll-mt-24"
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

export default SooleCancellationPolicy;
