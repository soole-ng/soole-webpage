"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Icons } from "../shared/icons"

const FeatureContainer = () => {
  return (
    <div className="brand-width">
      <section className="bg-[#C9EC7C] min-h-[617px] sm:min-h-[450px] md:min-h-[460px]  lg:min-h-[617px] overflow-hidden flex md:flex-row flex-col justify-between w-full  my-[22px] rounded-[24px] lg:rounded-[64px] p-[20px] md:p-[60px]  lg:p-[76px]">
        <div className="w-full relative flex flex-col justify-center space-y-2 md:space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="absolute left-0 -top-12 md:-top-30 right-0 z-10"
          >
            <Image src={"/Vector.svg"} alt="bg" width={439} height={439} />
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-[#0C1316] font-funnel-display mt-12 text-center md:text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[38px] md:leading-[35px] lg:text-[49px] lg:leading-[56px] cursor-pointer transition-transform"
          >
            Heading out? Someone nearby might be going your way too.
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="text-[#0C1316] text-center md:text-start md:max-w-[553px] text-[14px] lg:text-[20px] leading-[28px]"
          >
            With Soole, you share the ride and share the cost — making every journey lighter on your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="hidden md:flex absolute -bottom-20 left-0 right-0 mx-auto"
          >
            <Icons.car />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="w-full relative items-center justify-center cursor-pointer"
        >
          <Image
            src={"/image.png"}
            alt="feature image"
            height={856}
            width={425}
            className="absolute -bottom-[20px] sm:-bottom-[25%] sm:-right-[5%]  -lg:bottom-0 "
          />
        </motion.div>
      </section>
    </div>
  )
}

export default FeatureContainer
