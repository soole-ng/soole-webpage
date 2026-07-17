"use client"
import React from "react";
import Image from "next/image";
import Navbar from "../shared/navbar";
import { Icons } from "./icons";
import { motion } from "framer-motion";

interface ISecondHero {
  backgroundImage?: string;
  mainText?: string;
  subText?: string;
  isOrganization?: boolean;
}

const SecondHero = ({backgroundImage, mainText, subText, isOrganization = false}: ISecondHero) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const downloadSectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
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

  return (
    <div className="bg-[#0C1316] h-[90vh] md:h-screen relative overflow-hidden">
      {/* next/image instead of a CSS background-image - lets Next serve a
          resized/compressed/format-negotiated version instead of whatever
          full-resolution file was dropped in public/images (one of these,
          soole-organization.png, was 1.8MB served as-is). Painted first so
          it sits behind the gradient overlay and page content below, same
          as the old background-image did. */}
      <Image
        src={backgroundImage || "/images/second-hero.png"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {isOrganization && (
        <div className="absolute inset-0 bg-black/65" />
      )}
      <div className="relative z-10">
      <Navbar />
      <motion.section
        className="brand-width h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 lg:mt-0 lg:justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contents */}
        <motion.div
          className="flex  md:justify-center   w-full flex-col space-y-20"
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col gap-12"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-[#F9FFEB] text-center md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
              variants={titleVariants}
              whileHover={{ scale: 1.02 }}
            >
              {mainText || "Safe and comfortable travel across Nigeria's Cities"}
            </motion.h1>
            <motion.p 
              className="text-[#F9FFEB] md:text-start text-center text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]"
              variants={textVariants}
            >
              {subText || "Connect with verified drivers, share affordable rides, and travel safely between cities. Soole brings structure, trust, and convenience to Nigeria's informal transport culture making every journey easier, greener, and more reliable."}
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-[12px]"
            variants={downloadSectionVariants}
          >
            <motion.h4 
              className="text-white text-center md:text-start text-base"
              variants={textVariants}
            >
             {isOrganization ? "Manage Your Operations" : "Download App Now"}
            </motion.h4>
           <motion.div 
             className="flex flex-row justify-center lg:justify-start gap-4 flex-wrap"
             variants={containerVariants}
           >
             {isOrganization ? (
               <>
                 <motion.a 
                   href="https://dashboard.soole.ng/login"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-[#C9EC7C] text-[#0C1316] font-semibold px-6 py-3 rounded-[32px] text-sm md:text-base hover:bg-[#b5d66c] transition-all duration-300 active:scale-95 text-center flex items-center justify-center"
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap={{ scale: 0.95 }}
                 >
                   Access Dashboard
                 </motion.a>
                 <motion.a 
                   href="https://dashboard.soole.ng/signup"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="border-[#E5E7EB] border text-white font-semibold px-6 py-3 rounded-[32px] text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 active:scale-95 text-center flex items-center justify-center"
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap={{ scale: 0.95 }}
                 >
                   Register Organization
                 </motion.a>
               </>
             ) : (
               <>
                        <motion.a 
                          href="#"
                          className="rounded-[12px] flex gap-2 items-center py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer"
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
                          className="rounded-[12px] flex gap-2 items-center w-fit py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer"
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
               </>
             )}
           </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      </div>
    </div>
  );
};

export default SecondHero;
