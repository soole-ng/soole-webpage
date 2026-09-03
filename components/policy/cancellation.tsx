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
    intro: `Plans change, vehicles break down, and roads close. This explains what happens when a trip does not run: who can cancel, when, and what happens to the money. It sits alongside our Payments and Refunds policy, which covers how the money itself moves.`,
    sections: [
        {
            heading: "Cancelling as a passenger",
            content: `You can cancel a seat at any point before you are picked up. There is no cancellation fee, and no penalty for cancelling.`,
            list: [
                {
                    title: "Before the driver sets off",
                    text: "Cancel from the trip screen. Your seat is released back to the driver immediately, so somebody else can take it."
                },
                {
                    title: "After the driver has started the trip",
                    text: "You can still cancel if you have not been picked up. The driver is told straight away so they are not waiting for you."
                },
                {
                    title: "Once you have been picked up",
                    text: "The journey has begun and the seat cannot be cancelled. If something goes wrong during the trip, report it - see our community guidelines below."
                }
            ],
            note: "We ask for a reason when you cancel. It is not a test - it tells us whether a driver is repeatedly unresponsive or repeatedly not matching their profile, which is something we act on."
        },
        {
            heading: "Cancelling as a driver",
            content: `A driver can cancel a trip they have posted, and is asked for a reason. Every passenger who has booked is notified immediately, and every seat is refunded in full.`,
            list: [
                {
                    text: "Vehicle breakdown, medical emergency, a blocked route or weather are all recognised reasons, and none of them count against you."
                },
                {
                    text: "Cancelling repeatedly without good reason is treated differently. Passengers plan journeys around a posted trip, and a driver who cancels habitually is not offering a service."
                },
                {
                    text: "A driver cannot cancel a passenger who is already aboard."
                }
            ],
            note: "Drivers are never charged for cancelling. What a driver loses is the trip; what we watch is the pattern."
        },
        {
            heading: "Trips that expire",
            content: `A trip that is never started expires on its own. Nobody has to do anything, and every passenger who paid is refunded exactly as if it had been cancelled - a trip that quietly never happened and a trip that was called off are the same thing from your side.`
        },
        {
            heading: "What happens to your money",
            content: `A cancelled or expired trip releases your fare back to you in full - every seat you booked, plus our commission. You are not charged for a journey you did not take.`,
            list: [
                {
                    title: "It goes to your prepaid balance first",
                    text: "The money returns to your Soole balance, where it is immediately available to book another trip. For most people that is the useful outcome: they are still trying to travel."
                },
                {
                    title: "Or to your bank, if you ask",
                    text: "Request a refund from the trip and we send it to your bank account. You will get a notification when it has been paid."
                }
            ],
            note: "If you already spent the released balance on another trip, that money is genuinely on that other trip and cannot also come back to your bank. The app tells you this before you fill in any bank details, not after."
        },
        {
            heading: "When a refund is not available",
            content: `There are exactly three situations, and the app tells you which one applies rather than simply refusing:`,
            list: [
                {
                    title: "You travelled",
                    text: "You confirmed your pickup and took the journey. There is nothing to refund. If something went wrong on the way, report the trip - that is a different process, and cancelling is not it."
                },
                {
                    title: "The trip is still going ahead",
                    text: "Refunds are for trips that did not happen. A trip that has not been cancelled and has not expired is still a trip you have a seat on."
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

            <div className="brand-width pb-16 md:pb-24">
                <div className="space-y-10 md:space-y-14">
                    {cancellationPolicyData.sections.map((section, index) => (
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

export default SooleCancellationPolicy;
