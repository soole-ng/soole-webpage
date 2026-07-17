"use client";

import { motion } from "framer-motion";

const DriverModes = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="brand-width my-[42px] md:my-[100px]">
      <motion.div 
        className="flex flex-col gap-4 text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[#042011] font-funnel-display font-semibold text-[24px] md:text-[38px] lg:text-[49px]">
          Choose Your Driving Mode
        </h2>
        <p className="text-[#042011]/80 max-w-[650px] mx-auto text-sm md:text-lg">
          Whether you want full independence or structured fleet assignments, Soole accommodates your travel style.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mode 1: Drive for Yourself */}
        <motion.div 
          className="bg-[#0C1316] text-[#F9FFEB] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-neutral-800"
          variants={cardVariants}
          whileHover={{ y: -8 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#C9EC7C] rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C9EC7C]">Full Autonomy</span>
                <h3 className="text-xl md:text-2xl font-bold font-funnel-display">Drive for Yourself</h3>
              </div>
            </div>

            <p className="text-neutral-300 text-sm md:text-base mb-8 leading-relaxed">
              Earn on your own terms. Share seats in your personal vehicle on routes you already travel, set your own prices, and keep all profits.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#C9EC7C] mt-1 font-bold">✓</span>
                <span className="text-neutral-200 text-sm md:text-base">Set your own travel schedule and intercity routes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9EC7C] mt-1 font-bold">✓</span>
                <span className="text-neutral-200 text-sm md:text-base">Negotiate or define your passenger seat pricing directly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9EC7C] mt-1 font-bold">✓</span>
                <span className="text-neutral-200 text-sm md:text-base">Keep 100% of your listed route earnings in a secure wallet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9EC7C] mt-1 font-bold">✓</span>
                <span className="text-neutral-200 text-sm md:text-base">Drive your personal vehicle with verified travelers</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Mode 2: Drive for a Company */}
        <motion.div 
          className="bg-[#C9EC7C] text-[#0C1316] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-[#b5d66c]"
          variants={cardVariants}
          whileHover={{ y: -8 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="13" y2="13"/><line x1="9" x2="15" y1="17" y2="17"/></svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-black/60">Managed Operations</span>
                <h3 className="text-xl md:text-2xl font-bold font-funnel-display text-black">Drive for a Company</h3>
              </div>
            </div>

            <p className="text-[#0C1316]/80 text-sm md:text-base mb-8 leading-relaxed">
              Prefer structure? Join a registered transport company on the Soole platform. Drive organization-owned vehicles and get scheduled trip dispatches.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-black mt-1 font-bold">✓</span>
                <span className="text-[#0C1316]/90 text-sm md:text-base">Receive invites from approved organizations via SMS or code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black mt-1 font-bold">✓</span>
                <span className="text-[#0C1316]/90 text-sm md:text-base">Drive dedicated vehicles owned by your registered fleet company</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black mt-1 font-bold">✓</span>
                <span className="text-[#0C1316]/90 text-sm md:text-base">Receive automatic route dispatches and terminal schedules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black mt-1 font-bold">✓</span>
                <span className="text-[#0C1316]/90 text-sm md:text-base">Enjoy steady workflow and structured payroll setups</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DriverModes;
