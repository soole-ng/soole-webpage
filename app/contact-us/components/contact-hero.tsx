"use client"
import { Icons } from "@/components/shared/icons";
import Navbar from "@/components/shared/navbar";
import { socialLinks } from "@/utils/constants";
import { Mail, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
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

  const heroContentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 0.4
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className=" bg-white lg:min-h-[530px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar whiteBg />
      <motion.section 
        className="brand-width flex-col  flex  md:flex-row  items-center   mt-6  justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col gap-6"
          variants={heroContentVariants}
        >
          <motion.h1 
            className="text-black text-center md:text-start   text-[27px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Need Help with Soole?
          </motion.h1>
          <motion.p 
            className=" text-center md:text-start  text-[14px] lg:text-[20px] text-[#777777]"
            variants={heroContentVariants}
          >
            Have a question or need support? Our team <br /> is here to
            help—reach out anytime.
          </motion.p>
        </motion.div>

        <motion.div variants={imageVariants}>
          <Icons.continents className="size-[200px] md:size-[408px]" />
        </motion.div>
      </motion.section>

    <motion.div 
      className="brand-width grid grid-cols-1 md:grid-cols-4 w-full gap-6"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Social Links */}
      <motion.div 
        className="flex flex-col gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3"
        variants={cardVariants}
        whileHover="hover"
      >
        <h3 className="text-black text-sm md:text-base lg:text-lg font-medium">Follow Us</h3>
        <motion.div 
          className="flex items-center space-x-3"
          variants={containerVariants}
        >
          {socialLinks.map((s, index) => (
            <motion.div
              key={s.label}
              variants={socialIconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={s.href}
                aria-label={s.label}
                className="flex items-center justify-center text-[#333] hover:text-black transition-colors"
              >
                <span className="sr-only">{s.label}</span>
                {s.label === "facebook" && <Icons.facebook className="w-5 h-5" />}
                {s.label === "instagram" && <Icons.instagram className="w-5 h-5" />}
                {s.label === "twitter" && <Icons.twitter className="w-5 h-5" />}
                {s.label === "linkedin" && <Icons.linkedin className="w-5 h-5" />}
                {s.label === "youtube" && <Icons.youtube className="w-5 h-5" />}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Phone */}
      <motion.div 
        className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.2 }}
        >
          <Icons.contactPhone className="w-6 h-6 text-black" />
        </motion.div>
        <a
          href="tel:07032220043"
          className="text-black text-sm md:text-base lg:text-lg font-medium hover:underline"
        >
          07032220043
        </a>
      </motion.div>

      {/* Address */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-center gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icons.location className="w-6 h-6 text-black" />
        </motion.div>
        <address className="not-italic text-black text-sm md:text-base lg:text-lg leading-snug">
          No 5, Victory Close, Dawaki, <br /> Abuja FCT
        </address>
      </motion.div>

      {/* Email */}
      <motion.div 
        className="flex items-center gap-3 px-4 py-3"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div
          whileHover={{ rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Mail className="w-6 h-6 text-black" />
        </motion.div>
        <a
          href="mailto:info@soole.ng"
          className="text-[#333] text-sm md:text-base lg:text-lg hover:underline"
        >
          info@soole.ng
        </a>
      </motion.div>
    </motion.div>

    </motion.div>
  );
};

export default ContactHero;
