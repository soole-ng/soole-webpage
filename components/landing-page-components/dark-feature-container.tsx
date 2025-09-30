"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Icons } from "../shared/icons"

const DarkFeatureContainer = () => {
  return (
    <div className="brand-width">
      <section className="bg-[#0C1316] min-h-[617px] sm:min-h-[450px] md:min-h-[460px] lg:min-h-[617px] overflow-hidden flex md:flex-row flex-col-reverse justify-between w-full my-[42px] rounded-[24px] md:rounded-[64px] p-[20px] md:p-[76px]">
        <motion.div
          className="w-full relative items-center justify-center cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.4 }}
        >
          <Image
            src={"/image.png"}
            alt="feature image"
            height={856}
            width={425}
            className="absolute -top-[280px] sm:top-[20px] md:top-[60px] lg:top-2 right-0 bottom-0 md:-left-7 xl:left-4"
          />
        </motion.div>

        <div className="w-full relative flex flex-col justify-center space-y-2 md:space-y-4">
          <motion.div
            className="absolute left-0 right-0 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <Icons.world />
          </motion.div>
          <motion.h4
            className="text-[#E8F1ED] font-funnel-display mt-12 text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[49px] md:leading-[56px] cursor-pointer transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Ride for less with neighbors going your way.
          </motion.h4>
          <motion.p
            className="text-[#E8F1ED] text-start md:max-w-[553px] text-[14px] md:text-[20px] leading-[28px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Traveling doesn't have to be expensive. Split fuel costs with drivers going your way and keep more money in
            your pocket.
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default DarkFeatureContainer
