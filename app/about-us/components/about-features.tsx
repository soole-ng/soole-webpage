"use client"
import { aboutfeatures } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const AboutFeatures = () => {
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className='brand-width '
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div 
          className='flex flex-col mx-auto justify-center items-center max-w-[712px] text-center gap-4'
          variants={headerVariants}
        >
            <motion.h4 
              className='text-[24px] md:text-[52px] font-medium'
              variants={headerVariants}
            >
              What Sets Us <motion.span 
                className='text-[#3861BF]'
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Apart
              </motion.span>
            </motion.h4>
            <motion.p 
              className='text-[#77877E] font-light text-sm md:text-[20px]'
              variants={headerVariants}
            >
              Soole isn't just another ride-sharing app it's a community-first solution to Nigeria's intercity transport challenges. Here's what makes us different
            </motion.p>
        </motion.div>

        <motion.div 
          className='mt-20 grid grid-cols-1 overflow-hidden place-content-center  place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 '
          variants={gridVariants}
        >
            {aboutfeatures.map((feature, index) => (
                <motion.div 
                  key={feature.imageUrl} 
                  className={`bg-[${feature.backgroundColor}] flex flex-col justify-center items-center mb-12 max-w-[386px] min-h-[404.79998779296875px] mt-20 relative p-[23px] md:p-[33px] rounded-[14.26px] md:rounded-[20px] cursor-pointer`}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                    <motion.div 
                      className='absolute bottom-[50%]'
                      variants={imageVariants}
                    >
                        <Image
                            src={feature.imageUrl}
                            width={300}
                            height={300}
                            alt='about feature'
                        />
                    </motion.div>
                    <motion.div 
                      className='mt-[200px]'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                        <h5 style={{ color: feature.textColor || '#FFFFFF' }} className='text-[14.26px] font-semibold md:text-[20px] text-center'>{feature.section}</h5>
                        <p style={{ color: feature.textColor || '#FFFFFF' }} className='text-[11.41px] text-center md:text-[16px] mt-2'>{feature.text}</p>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    </motion.section>
  )
}

export default AboutFeatures
