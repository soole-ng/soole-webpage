"use client";
import Navbar from "@/components/shared/navbar";
import { Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const FaqHero = () => {
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

  const searchVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div
      className="bg-[#0C1316] h-[383px] lg:h-[530px]"
    
    >
      <Navbar />
      <motion.section 
        className="brand-width  flex flex-col  items-center   mt-6  justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-[#F9FFEB] text-center  text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
            variants={titleVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Ask us anything
          </motion.h1>
          <motion.p 
            className=" w-full text-justify  lg:text-center text-[14px] lg:text-[20px] text-[#F9FFEB]"
            variants={textVariants}
          >
            Got questions about using Soole? We've answered the most common
            ones below.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex mt-20 relative w-full max-w-[1040px] py-3 px-2 items-center bg-white rounded-[8px]"
          variants={searchVariants}
          whileHover="hover"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Search />
          </motion.div>
          <motion.input 
            type="text" 
            placeholder="Type your question here..." 
            className="px-4 w-full outline-none border-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            whileFocus={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FaqHero;
