"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Icons } from "../shared/icons";

const SlantPhoneSection = ({backgroundColor = "#0C1316", textColor = "#F9FFEB"} :{backgroundColor?: string, textColor?: string}) => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  };



  return (
    <div className="brand-width">
      <motion.section 
        className={`bg-[${backgroundColor}] relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px] overflow-hidden flex lg:flex-row space-y-6 md:space-y-0 flex-col justify-between w-full my-[22px] rounded-[24px] md:rounded-[32px] lg:rounded-[64px] `}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="w-full  lg:w-1/2 p-[16px] md:p-[32px] lg:p-[40px] relative flex flex-col justify-center space-y-2 md:space-y-3 lg:space-y-4"
          variants={textVariants}
        >
          <motion.h4 
            className={`text-[${textColor}] mt-8 md:mt-6 lg:mt-12 text-center lg:text-start  lg:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[32px] md:leading-[38px] lg:text-[49px] lg:leading-[56px] cursor-pointer transition-transform`}
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
          >
            Your Journey Begins with a Tap
          </motion.h4>
          <motion.p 
            className={` text-[${textColor}] font-thin text-center lg:text-start  lg:max-w-[500px] text-[12px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[24px] lg:leading-[28px]`}
            variants={textVariants}
          >
            Soole puts reliable, budget-friendly travel in your hands. Download
            now and ride smarter.
          </motion.p>
          <motion.div 
            className="flex flex-row justify-center lg:justify-start gap-4 mt-4 "
            variants={textVariants}
          >
            <motion.a 
              href="#"
              className="rounded-[12px] flex gap-2 items-center py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer transition-all duration-300 hover:bg-gray-900"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Icons.appleIcon className="size-4 md:size-8" />
              <div className="text-start">
                <h2 className="font-light text-[8px] md:text-xs text-white leading-tight">
                  Download on the
                </h2>
                <p className="font-semibold text-[11px] md:text-[14px] text-white leading-tight">
                  App Store
                </p>
              </div>
            </motion.a>

            <motion.a 
              href="https://play.google.com/store/apps/details?id=ng.soole.soole_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[12px] flex gap-2 items-center w-fit py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer transition-all duration-300 hover:bg-gray-900"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Icons.playstore className="size-4 md:size-8" />
              <div className="text-start">
                <h2 className="font-light text-[8px] md:text-xs text-white leading-tight">
                  GET IT ON
                </h2>
                <p className="font-semibold text-[11px] md:text-[14px] text-white leading-tight">
                  Google Play
                </p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="relative lg:w-1/2"
        >
          <Image
            src={"/images/new-slant.png"}
            alt="feature image"
            height={700}
            width={680}
            className=" absolute -bottom-[1%]  sm:-bottom-[120px]  lg:-bottom-[10%]  right-1 md:-right-32 lg:-right-32 cursor-pointer transition-transform"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SlantPhoneSection;
