"use client";
import { steps, driver_steps } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";

type PageType = 'both' | 'rider' | 'driver';

interface GetStartStartedProps {
  page?: PageType;
}

const GetStartStarted = ({ page = 'both' }: GetStartStartedProps) => {
  // Set default activeTab based on page type
  const getDefaultTab = (): "rider" | "driver" => {
    if (page === 'driver') return 'driver';
    return 'rider';
  };

  const [activeTab, setActiveTab] = useState<"rider" | "driver">(getDefaultTab());

  // Get heading based on page type and active tab
  const getHeading = (): string => {
    if (page === 'driver') {
      return "Start Earning with Soole - Join as a Driver Today";
    } else if (page === 'rider') {
      return "Become a Soole Rider in Minutes";
    } else {
      // Landing page - dynamic based on active tab
      return activeTab === "driver" 
        ? "Start Earning with Soole - Join as a Driver Today" 
        : "Getting Started with Soole";
    }
  };

  // Determine if tabs should be shown
  const showTabs = page === 'both';

  // Get current steps to display
  const getCurrentSteps = () => {
    if (page === 'driver') return driver_steps;
    if (page === 'rider') return steps;
    return activeTab === "rider" ? steps : driver_steps;
  };

  const currentSteps = getCurrentSteps();

  return (
    <section className="brand-width flex justify-between md:flex-row flex-col-reverse ">
      <div className="w-full mt-12 md:mt-0">
        <Image
          src={"/images/steps.png"}
          width={474}
          height={774.3206176757812}
          alt="get started image"
          className="mx-auto"
        />
      </div>

      <div className="  mb-2">
        <h2 className="text-[20px] text-center md:text-start md:text-[34px] leading-[40px] font-semibold text-[#181918]">
          {getHeading()}
        </h2>

        {/* Tabs - Only show on landing page */}
        {showTabs && (
          <div className="flex mb-6 mt-4 items-center md:justify-start justify-center space-x-2">
            <button
              onClick={() => setActiveTab("rider")}
              className={`px-4 py-2 rounded-full text-xs md:text-sm ${
                activeTab === "rider"
                  ? "bg-[#C9EC7C] text-[#0C1316] border-black border"
                  : "border border-[#DEDCDA] text-black"
              }`}
            >
              Rider
            </button>
            <button
              onClick={() => setActiveTab("driver")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "driver"
                  ? "bg-[#C9EC7C] text-[#0C1316] border-black border"
                  : "border border-[#DEDCDA] text-black"
              }`}
            >
              Driver
            </button>
          </div>
        )}

        {/* Steps */}
        <div className="space-y-8">
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
                <h3 className="text-sm md:text-lg text-[#0C1316]">{step.title}</h3>
                <p className="text-[#181918B2] text-xs md:text-base mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartStarted;
