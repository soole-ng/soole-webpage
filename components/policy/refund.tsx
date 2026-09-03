"use client"
import React from 'react';
import { motion } from 'framer-motion';

// TypeScript types
export type RefundPolicyListItem = {
  title?: string;
  text: string;
};

export type RefundPolicySection = {
  heading?: string;
  content?: string;
  list?: RefundPolicyListItem[];
  note?: string;
};

export type RefundPolicyData = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: RefundPolicySection[];
};

// Text data object
export const refundPolicyData: RefundPolicyData = {
  title: "Soole's Payments and Refunds Policy",
  lastUpdated: "September 2026",
  intro: `This policy explains what happens to your money on Soole: what you pay, when the driver receives it, what happens when a trip does not run, and how to get your money back. It describes exactly how the platform behaves today, not how we intend it to behave. If anything here does not match what you experience in the app, that is a fault on our side and we want to hear about it.`,
  sections: [
    {
      heading: "What you pay for a trip",
      content: `One price per seat, shown to you in full before you confirm anything.`,
      list: [
        {
          title: "The price you see is the price you pay",
          text: "Nothing is added at checkout, and nothing is charged afterwards. The amount shown on the trip is the amount that leaves your account."
        },
        {
          title: "No booking fees or service charges",
          text: "There is no separate fee on top of the fare, and no charge for using the app."
        },
        {
          title: "Per seat",
          text: "Booking more than one seat multiplies that price by the number of seats, and the total is shown before you confirm."
        }
      ],
      note: "Whatever you paid is what comes back if the trip does not run - see 'What a refund is worth' below."
    },
    {
      heading: "Your Prepaid Balance",
      content: `Money you have paid for a trip that has not yet been travelled sits in your Prepaid Balance. It is held for that trip and is not spent until the trip actually happens.

Soole is not a wallet, and your Prepaid Balance is not a store of value. There is no way to add money to it, and we do not accept deposits. Money only ever enters it by paying for a specific trip, and it only ever leaves by that trip running, by being spent on another trip, or by being refunded to your bank account.`,
      list: [
        {
          title: "Held for a trip",
          text: "While a trip is upcoming, the fare for it is committed to that trip. It is not available to spend elsewhere, because it is already promised."
        },
        {
          title: "Released when a trip does not run",
          text: "If your trip is cancelled or expires, the fare stops being held and becomes credit you can either put towards another trip immediately or ask to have refunded."
        },
        {
          title: "No top-ups",
          text: "Adding money directly is deliberately not offered. We do not hold customer funds as a balance, and we do not intend to."
        }
      ]
    },
    {
      heading: "When the driver actually gets paid",
      content: `A driver is not paid because you booked. A driver is paid because you travelled, and only you can confirm that you did.`,
      list: [
        {
          title: "At the start of your trip",
          text: "When you confirm in the app that you have been picked up, a first portion of the fare is released to the driver."
        },
        {
          title: "At the end of your trip",
          text: "When you confirm you have reached your destination, the remainder is released."
        },
        {
          title: "If you never confirm",
          text: "Nothing is released. If you did not travel, the driver is not paid for you, and your fare stays where it is until the situation is resolved."
        }
      ],
      note: "This is the single most important protection in the system, and it is deliberate: your money does not move to anybody else until you say the journey happened."
    },
    {
      heading: "When a trip does not happen",
      content: `Trips fall through. A driver cancels, or the departure time passes and the trip was never started. In both cases the outcome for you is the same, because from where you are standing they are the same event.`,
      list: [
        {
          title: "Cancelled trips",
          text: "The fare stops being held and returns to your Prepaid Balance straight away."
        },
        {
          title: "Expired trips",
          text: "A trip that was never started is closed automatically after its departure time has passed. The fare is released the same way, and we notify you."
        },
        {
          title: "Your choice from there",
          text: "Put the money towards another trip, or ask for it back. Both options stay open - nothing expires and nothing is forfeited."
        }
      ]
    },
    {
      heading: "What a refund is worth",
      content: `A refund returns the full amount you paid for that trip. Not a part of it, and nothing deducted for handling it.

We keep nothing from a trip that did not happen.`,
      note: "If you are ever refunded less than you paid, that is an error and not a policy. Report it and we will correct it."
    },
    {
      heading: "How to request a refund",
      content: `Open the trip in the app and choose Request Refund. You will be asked for the account the money should go to.`,
      list: [
        {
          title: "Your bank details",
          text: "Choose your bank and enter your account number. We check the account with our payment provider and show you the account name that comes back, so you can confirm it is yours before submitting."
        },
        {
          title: "Banks we can send to",
          text: "The list only shows banks we are able to transfer to. If yours is missing, contact support rather than using a different account."
        },
        {
          title: "What happens next",
          text: "Your request appears as Request Sent, then Paying out once the transfer has been sent, then Paid once our provider confirms the money reached your account. You are notified at each step."
        }
      ]
    },
    {
      heading: "When a refund cannot be paid",
      content: `There are situations where we will not pay a refund, and we would rather set them out plainly than refuse you without explanation.`,
      list: [
        {
          title: "The trip still might happen",
          text: "Refunds are for trips that did not run. A trip that has not been cancelled and has not expired is not refundable, because it may still take place."
        },
        {
          title: "The money is committed to another trip",
          text: "If your Prepaid Balance is holding the fare for a trip you have not travelled yet, that money is promised to it. You can request a refund once that trip is finished, or cancel it first."
        },
        {
          title: "The credit has already been spent",
          text: "Requesting a refund does not freeze the money - you can still spend it. If you book another trip with it while your request is queued, there is no longer anything to refund. We will tell you this happened, and what balance you have left."
        },
        {
          title: "A refund has already been paid",
          text: "One trip, one refund. Once it is paid, that trip is settled."
        }
      ],
      note: "The app tells you which of these applies before you fill in any bank details, rather than after."
    },
    {
      heading: "If you did not travel and nobody confirmed it",
      content: `Sometimes a trip ends without anybody confirming what happened - a passenger who was never collected, or a driver who could not close the trip. We do not decide these silently.`,
      list: [
        {
          title: "Either side can report it",
          text: "The passenger or the driver can report the trip from the app. The trip's details are attached automatically, so there is nothing to write out."
        },
        {
          title: "We settle it manually",
          text: "Our team resolves it directly, which frees the fare so it can be refunded and lets the driver close their trip."
        },
        {
          title: "Nobody is paid in the meantime",
          text: "While it is unresolved, the driver is not paid for that passenger and the fare stays held. Nothing is quietly assumed in either direction."
        }
      ]
    },
    {
      heading: "How long a refund takes",
      content: `We review refund requests manually, because sending money is not something we automate away from human eyes.

Once the transfer has been sent, arrival depends on your bank. If your status reads Paid and the money has not appeared, allow a short while for your bank and then contact us.`
    },
    {
      heading: "Reported and suspended accounts",
      content: `An account that is reported or suspected of being compromised can be deactivated. Deactivation blocks access to the app and ends any active sessions.`,
      list: [
        {
          title: "Nothing is deleted",
          text: "Your trips, bookings and payment records remain intact. Deactivation is reversible and can be undone if a report turns out to be mistaken."
        },
        {
          title: "Money is not forfeited",
          text: "Being deactivated does not take your money. Any balance you are owed remains owed to you, and can be refunded to your bank account."
        }
      ]
    },
    {
      heading: "Getting in touch",
      content: `If something about a payment or a refund does not look right, tell us. Report the trip from the app, or reach us through the contact details on this site.

We would rather hear about a problem with your money early than have you wait and hope it resolves itself.`
    }
  ]
};


const SooleRefundPolicy = () => {
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
                    {refundPolicyData.title}
                </motion.h1>
                <motion.p
                    className="mt-3 text-sm text-[#25373F]/60"
                    variants={textVariants}
                >
                    Last updated: {refundPolicyData.lastUpdated}
                </motion.p>
                <motion.p
                    className="mt-6 text-base md:text-lg leading-[170%] text-[#25373F] max-w-[760px]"
                    variants={textVariants}
                >
                    {refundPolicyData.intro}
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
                        {refundPolicyData.sections.map((section, idx) => (
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
                    {refundPolicyData.sections.map((section, idx) => (
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

export default SooleRefundPolicy;
