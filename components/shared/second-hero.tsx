"use client"
import React from "react";
import Navbar from "../shared/navbar";
import { Icons } from "./icons";
import { motion } from "framer-motion";

interface ISecondHero {
  backgroundImage?: string;
  mainText?: string;
  subText?: string;
}

const SecondHero = ({backgroundImage, mainText, subText}: ISecondHero) => {
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
    <div
      className="bg-[#0C1316] h-[90vh] md:h-screen"
      style={{
        backgroundImage: `url('${backgroundImage || "/images/second-hero.png"}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
             Download App Now
            </motion.h4>
           <motion.div 
             className="flex flex-row justify-center lg:justify-start gap-4"
             variants={containerVariants}
           >
                       <motion.div 
                         className="rounded-[12px] flex gap-2 items-center  py-1 px-2 md:px-3 md:py-2 border-[#E5E7EB] border  bg-black cursor-pointer"
                         variants={buttonVariants}
                         whileHover="hover"
                         whileTap={{ scale: 0.95 }}
                       >
                         <Icons.appleIcon className="size-4 md:size-8" />
                         <div>
                           <h2 className="font-light text-[7.7px] md:text-xs text-white">
                             Coming soon on
                           </h2>
                           <p className="font-semibold text-[11px] md:text-[14px] text-white">
                             App Store
                           </p>
                         </div>
                       </motion.div>
           
                       <motion.div 
                         className="rounded-[12px] flex gap-2 items-center w-fit px-3 border-[#E5E7EB] border  bg-black cursor-pointer"
                         variants={buttonVariants}
                         whileHover="hover"
                         whileTap={{ scale: 0.95 }}
                       >
                         <Icons.playstore className="size-4 md:size-8" />
                         <div>
                           <h2 className="font-light text-[7.7px] md:text-xs text-white">
                             Coming soon on
                           </h2>
                           <p className="font-semibold text-[11px] md:text-[14px] text-white">
                             Play Store
                           </p>
                         </div>
                       </motion.div>
                     </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SecondHero;
