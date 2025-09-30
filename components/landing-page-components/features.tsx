"use client";
import { features } from "@/utils/constants";
import React, { useEffect, useRef } from "react";
import { Icons } from "../shared/icons";

const Features = () => {
  return (
    <div className="brand-width  my:[42px] md:my-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className="flex-col max-w-[394.3333435058594px] gap-4 flex"
        >
          <div className="flex items-center gap-4 ">
            <Icons.badge className="size-8 md:size-12" />
            <h3 className="text-[18.5px] text-[#042011] font-funnel-display font-semibold md:text-[25px]">
              {feature.heading}
            </h3>
          </div>
          <p className="text-[#042011] md:text-[20px] text-justify ">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
