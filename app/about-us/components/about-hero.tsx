"use client"

import Navbar from "@/components/shared/navbar"
import { motion } from "framer-motion"

const AboutHero = () => {
  return (
    <div
      className="bg-[#0C1316] h-[975px] md:h-screen"
      style={{
        backgroundImage: "url('/images/about-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Navbar />
      </motion.div>

      <section className="brand-width flex flex-col lg:flex-row items-center mt-6 lg:h-full justify-center">
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F9FFEB] text-center text-[32px] md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
          >
            About Us
          </motion.h1>

          <div className="text-justify lg:text-center text-[14px] lg:text-[20px] text-[#F9FFEB] flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Soole is a peer-to-peer intercity ride-sharing platform built to transform how Nigerians travel between
              cities. In a country where transportation costs are rising and public options remain unreliable, Soole
              offers a smarter, safer, and more affordable alternative connecting everyday travelers with verified
              private car owners heading in the same direction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're not just another ride-hailing app. Soole is a community-first marketplace that brings structure to
              Nigeria's informal "soole" culture where passengers informally hitch rides with private drivers. By
              introducing verification, real-time tracking, and transparent pricing, we make these shared journeys
              secure and accessible for everyone.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Whether you're a student heading home, a trader traveling for business, or a driver looking to offset fuel
              costs, Soole empowers you to travel with confidence. Our platform maps major transport hubs, supports
              price negotiation, and ensures every user is verified creating a trusted ecosystem where mobility meets
              opportunity.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutHero
