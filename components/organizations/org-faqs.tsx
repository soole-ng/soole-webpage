"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const orgFaqs = [
  {
    q: "How much does it cost to use the Soole dashboard?",
    a: "Registering your organization on the Soole platform is completely free of charge. We only take a small commission on completed passenger bookings — no upfront fees, no monthly subscriptions.",
  },
  {
    q: "How long does business verification take?",
    a: "Once you submit your business registration documents and vehicle details, verification typically takes 24–48 hours. You'll receive a confirmation notification once approved.",
  },
  {
    q: "Do I need to own the vehicles?",
    a: "Yes, vehicle registration on the platform requires valid proof of ownership or authorization documents. You can register as many vehicles as your fleet size requires.",
  },
  {
    q: "How do driver payouts work?",
    a: "Every completed trip generates booking revenue that flows directly into your organization's secure Soole wallet. You can review earnings, process driver commissions, and perform instant bank transfers from the dashboard.",
  },
  {
    q: "Can I manage multiple routes and drivers from one dashboard?",
    a: "Absolutely. The Soole Operations Dashboard lets you manage unlimited drivers, multiple vehicles, and different intercity routes all from a single login — no extra tools needed.",
  },
  {
    q: "What happens if a driver's documents expire?",
    a: "The system automatically flags drivers with expired licenses, insurance, or road-worthiness certificates and notifies you to update their documents before they can accept new trips.",
  },
];

export default function OrgFaqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="brand-width flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-[#058B42] font-bold">
            Common Questions
          </span>
          <h2 className="text-[#042011] font-funnel-display font-semibold text-[24px] md:text-[38px] lg:text-[49px]">
            Organization FAQs
          </h2>
          <p className="text-[#042011]/70 max-w-[580px] mx-auto text-sm md:text-base">
            Everything transport companies need to know before getting started with Soole.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-[800px] mx-auto w-full">
          {orgFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-neutral-200 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-[#F9FFEB]/60 transition-colors duration-200"
              >
                <span className="text-[#042011] font-semibold text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#042011]/20 flex items-center justify-center text-[#042011] transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[#042011]/70 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
