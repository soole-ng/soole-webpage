"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OrganizationPreview = () => {
  return (
    <div className="brand-width my-[42px] md:my-[100px]">
      <section className="bg-[#0C1316] relative overflow-hidden rounded-[24px] md:rounded-[48px] lg:rounded-[64px] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 justify-between items-center border border-neutral-800">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-wider text-[#C9EC7C] font-semibold">For Transport Companies</span>
            <h2 className="text-[#F9FFEB] font-funnel-display font-semibold text-[24px] md:text-[36px] lg:text-[49px] leading-tight">
              Manage Your Fleet with the Organizational Dashboard
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Take full control of your transportation business. Soole empowers transport organizations to register vehicles, approve drivers, dispatch intercity trips, and track operations in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 text-neutral-300"
          >
            <div className="flex gap-2 items-start text-xs md:text-sm">
              <span className="text-[#C9EC7C]">✓</span>
              <span>Real-time Live Map tracking</span>
            </div>
            <div className="flex gap-2 items-start text-xs md:text-sm">
              <span className="text-[#C9EC7C]">✓</span>
              <span>Driver dispatch & scheduling</span>
            </div>
            <div className="flex gap-2 items-start text-xs md:text-sm">
              <span className="text-[#C9EC7C]">✓</span>
              <span>Instant payouts & finance</span>
            </div>
            <div className="flex gap-2 items-start text-xs md:text-sm">
              <span className="text-[#C9EC7C]">✓</span>
              <span>Role-based team access</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 flex-wrap mt-2"
          >
            <Link
              href="/organizations"
              className="bg-[#C9EC7C] text-black font-semibold px-6 py-3 rounded-[32px] text-sm md:text-base hover:bg-[#b5d66c] transition-all duration-300 active:scale-95 text-center"
            >
              Learn More
            </Link>
            <a
              href="https://dashboard.soole.ng/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#E5E7EB] text-white font-semibold px-6 py-3 rounded-[32px] text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 active:scale-95 text-center"
            >
              Access Dashboard
            </a>
          </motion.div>
        </div>

        {/* Right Preview Image */}
        <motion.div
          className="w-full lg:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl group cursor-pointer max-w-full">
            <Image
              src="/images/dashboard-mockup.png"
              alt="Soole Organizational Dashboard Preview"
              width={800}
              height={500}
              className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default OrganizationPreview;
