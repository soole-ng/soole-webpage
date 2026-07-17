"use client";
import { steps, driver_steps, org_steps } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageType = 'both' | 'rider' | 'driver' | 'organization';

interface GetStartStartedProps {
  page?: PageType;
}

type ActiveTab = "rider" | "driver" | "organization";

const tabConfig = [
  {
    id: "rider" as ActiveTab,
    label: "Rider",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0112 0v2" />
      </svg>
    ),
  },
  {
    id: "driver" as ActiveTab,
    label: "Driver",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "organization" as ActiveTab,
    label: "Organization",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
];

const GetStartStarted = ({ page = 'both' }: GetStartStartedProps) => {
  const getDefaultTab = (): ActiveTab => {
    if (page === 'driver') return 'driver';
    if (page === 'organization') return 'organization';
    return 'rider';
  };

  const [activeTab, setActiveTab] = useState<ActiveTab>(getDefaultTab());

  const getHeading = (): string => {
    if (page === 'driver') return "Start Earning with Soole - Join as a Driver Today";
    if (page === 'rider') return "Become a Soole Rider in Minutes";
    if (page === 'organization') return "Getting Started as an Organization";
    // Landing page - dynamic based on active tab
    if (activeTab === "driver") return "Start Earning with Soole - Join as a Driver Today";
    if (activeTab === "organization") return "Getting Started as an Organization";
    return "Getting Started with Soole";
  };

  const showTabs = page === 'both';

  const getCurrentSteps = () => {
    if (page === 'driver') return driver_steps;
    if (page === 'rider') return steps;
    if (page === 'organization') return org_steps;
    if (activeTab === "driver") return driver_steps;
    if (activeTab === "organization") return org_steps;
    return steps;
  };

  const currentSteps = getCurrentSteps();

  return (
    <section className="brand-width flex justify-between md:flex-row flex-col-reverse gap-8">
      <div className="w-full mt-12 md:mt-0">
        <Image
          src={"/images/steps.png"}
          width={474}
          height={774.3206176757812}
          alt="get started image"
          className="mx-auto"
        />
      </div>

      <div className="mb-2">
        <h2 className="text-[20px] text-center md:text-start md:text-[34px] leading-[40px] font-semibold text-[#181918]">
          {getHeading()}
        </h2>

        {/* Tabs - Only show on landing page */}
        {showTabs && (
          <div className="flex mb-6 mt-5 items-center md:justify-start justify-center gap-2 flex-wrap">
            {tabConfig.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-300
                    ${isActive
                      ? "bg-[#C9EC7C] text-black border-black border"
                      : "border border-[#DEDCDA] text-black hover:border-[#181918]/40"
                    }
                  `}
                >
                  {/* Icon */}
                  <span className="transition-colors duration-200 text-[#181918]/60">
                    {tab.icon}
                  </span>
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-8"
          >
            {currentSteps.map((step, index) => (
              <div className="grid grid-cols-[auto_1fr] items-stretch gap-4" key={index}>
                <div className="flex flex-col items-center">
                  <div className="pb-2">
                    <h2 className="text-lg font-bold text-[25.32px]">{`0${index + 1}`}</h2>
                  </div>
                  {index !== currentSteps.length - 1 && (
                    <div className="flex-1 w-px border-l-2 border-dashed border-[#058B42]" />
                  )}
                </div>

                <div>
                  <h3 className="text-sm md:text-lg text-black">{step.title}</h3>
                  <p className="text-[#181918B2] text-xs md:text-base mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GetStartStarted;
