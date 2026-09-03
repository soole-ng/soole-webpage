"use client"
import React from 'react';
import { motion } from 'framer-motion';

// TypeScript types
export type CommunityGuidelineListItem = {
    title?: string;
    text: string;
};

export type CommunityGuidelineSection = {
    heading?: string;
    content?: string;
    list?: CommunityGuidelineListItem[];
    note?: string;
};

export type CommunityGuidelinesData = {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: CommunityGuidelineSection[];
};

// Text data object
//
// Every safety feature described here exists and works today - verification
// before booking, SOS with location, emergency contacts, trip sharing, speed
// alerts, reporting, account suspension. Nothing below is aspirational; a
// safety page that describes protections a rider does not actually have is
// worse than no page.
export const communityGuidelinesData: CommunityGuidelinesData = {
    title: "Soole's Community and Safety Guidelines",
    lastUpdated: "September 2026",
    intro: `Soole puts strangers in a car together for several hours. That works because almost everybody behaves well, and because the few who do not can be identified and removed. These are the rules we hold everyone to, and the tools we give you when something goes wrong.`,
    sections: [
        {
            heading: "Everyone is verified before they can travel",
            content: `You cannot book a seat or carry a passenger on Soole until your identity has been verified. This is not optional and there is no guest mode.`,
            list: [
                {
                    title: "Passengers",
                    text: "Verified against a national identity number before a first booking."
                },
                {
                    title: "Drivers",
                    text: "Verified identity, plus a driver's licence and the vehicle itself - registration documents and photographs of the car, reviewed by our team before the vehicle carries anyone."
                },
                {
                    title: "Companies",
                    text: "Fleet operators are checked against their CAC registration before their drivers can be dispatched."
                }
            ],
            note: "The person beside you went through the same checks you did. That is the point of requiring them."
        },
        {
            heading: "What we expect from everyone",
            list: [
                {
                    title: "Be who you say you are",
                    text: "Travel under your own account. Do not book a seat for somebody else to take without telling the driver - the manifest is what a driver relies on, and in an emergency it is what we rely on."
                },
                {
                    title: "Treat people decently",
                    text: "No harassment, no discrimination, no unwanted physical contact, no abusive language. This applies in the vehicle and in the in-app chat."
                },
                {
                    title: "Keep the trip as agreed",
                    text: "The route, the pickup point and the price are what both sides accepted when the seat was booked. Renegotiating the fare mid-journey is not allowed."
                },
                {
                    title: "Turn up, or say you are not coming",
                    text: "A no-show costs a driver a seat they could have sold and delays everybody else in the vehicle. Cancelling is free - use it."
                }
            ]
        },
        {
            heading: "What we expect from drivers",
            list: [
                {
                    title: "Drive the vehicle you registered",
                    text: "Passengers get in based on the car, colour and plate shown in the app. Arriving in a different vehicle is grounds for a passenger to cancel and report you."
                },
                {
                    title: "Drive within the limits",
                    text: "Speed is monitored during trips. Fleet operators set a limit for their vehicles and are alerted the moment it is exceeded."
                },
                {
                    title: "No alcohol, no drugs",
                    text: "Immediate and permanent removal. There is no warning for this one."
                },
                {
                    title: "Carry the passengers you accepted",
                    text: "Refusing somebody at the pickup point on the basis of who they are is discrimination, and is treated as such."
                }
            ]
        },
        {
            heading: "Safety tools you have during a trip",
            content: `These are in the app and available while a journey is running:`,
            list: [
                {
                    title: "SOS",
                    text: "Sends an alert with your exact location to our team. Use it if you feel unsafe. This is the one thing on Soole that always reaches us by SMS as well as in-app, because it has to work when the app cannot."
                },
                {
                    title: "Emergency contacts",
                    text: "Add the people who should be told if you trigger an SOS. They are notified with your location."
                },
                {
                    title: "Share your trip",
                    text: "Send anyone a link and they can follow the vehicle live - the driver, the car, the route and the arrival time - without installing anything. Use it for long journeys and night travel."
                },
                {
                    title: "In-app chat",
                    text: "Message the driver without exchanging phone numbers. Keeping the conversation in the app also means there is a record if something is disputed later."
                }
            ],
            note: "In a genuine emergency, call the Nigeria Police on 112 or 199 first. SOS reaches us; it does not reach the police."
        },
        {
            heading: "Reporting somebody",
            content: `Every trip can be reported from its own screen, during or after the journey. You do not need the other person's agreement, and they are not told who reported them.`,
            list: [
                {
                    text: "The trip details - route, driver, vehicle, fare - are attached automatically, so you only have to describe what happened."
                },
                {
                    text: "Reports are reviewed by our team, not handled automatically. A single report does not remove anyone, and a pattern of them does."
                },
                {
                    text: "Reporting a trip is separate from asking for a refund. Doing one does not do the other, and you can do both."
                }
            ]
        },
        {
            heading: "What happens to an account we act on",
            content: `An account that breaks these rules is suspended: they cannot sign in, and any session already open stops working immediately.`,
            list: [
                {
                    text: "We suspend rather than delete. Deleting an account destroys its trips, bookings and payment records - including the evidence in the report itself, and including the history of everyone who travelled with them."
                },
                {
                    text: "A suspension can be lifted if a report turns out to be wrong. A deletion cannot be undone, which is why we do not use it as a punishment."
                },
                {
                    text: "Money already owed to a suspended account is still theirs. Suspension is not a fine."
                }
            ]
        },
        {
            heading: "Talk to us",
            content: `If something happened on a trip and you are not sure whether it is worth reporting, report it. We would rather read something minor than miss a pattern. Support is in the app, and our contact details are on this site.`
        }
    ]
};

const SooleCommunityGuidelines = () => {
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
                    Community
                </motion.span>
                <motion.h1
                    className="text-[28px] md:text-[44px] lg:text-[52px] font-bold text-[#042011] leading-tight max-w-[820px]"
                    variants={titleVariants}
                >
                    {communityGuidelinesData.title}
                </motion.h1>
                <motion.p
                    className="mt-3 text-sm text-[#25373F]/70"
                    variants={textVariants}
                >
                    Last updated: {communityGuidelinesData.lastUpdated}
                </motion.p>
                <motion.p
                    className="mt-6 text-[#25373F] text-base md:text-lg leading-[1.7] max-w-[820px]"
                    variants={textVariants}
                >
                    {communityGuidelinesData.intro}
                </motion.p>
            </motion.section>

            <div className="brand-width pb-16 md:pb-24">
                <div className="space-y-10 md:space-y-14">
                    {communityGuidelinesData.sections.map((section, index) => (
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

export default SooleCommunityGuidelines;
