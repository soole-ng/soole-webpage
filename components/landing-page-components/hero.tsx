"use client";
import { motion } from "framer-motion";
import Navbar from "../shared/navbar";
import { Icons } from "../shared/icons";

const Hero = () => {
  return (
      <div className="bg-[#0C1316] h-[80vh] md:h-screen relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
        <Navbar />
        <section className="brand-width h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 lg:mt-0 lg:justify-end">
          {/* Contents */}
          <div className="flex justify-center  lg:justify-end mt-4 md:mt-10 lg:mt-64    w-full flex-col space-y-20">
            <div className="flex flex-col gap-12">
              <motion.h1
                className="text-[#F9FFEB] font-source-serif text-start md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
              >
                Travel together, comfortably and safely with Soole
              </motion.h1>
              <motion.p
                className="text-[#F9FFEB] md:text-start text-start text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3 }}
              >
                Soole connects travelers heading in the same direction, making
                trips safer, more affordable, and more social.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-[16px] md:gap-[24px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
            >
              <h4 className="text-white text-center md:text-start text-base">
                Download the Soole App
              </h4>
              <div className="flex flex-row justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="rounded-[12px] flex gap-2 items-center py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer transition-all duration-300 hover:bg-neutral-900 active:scale-95"
                >
                  <Icons.appleIcon className="size-4 md:size-8" />
                  <div className="text-start">
                    <span className="block font-light text-[8px] md:text-xs text-white leading-tight">
                      Download on the
                    </span>
                    <span className="block font-semibold text-[11px] md:text-[14px] text-white leading-tight">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=ng.soole.soole_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[12px] flex gap-2 items-center py-1.5 px-3 md:px-4 md:py-2 border-[#E5E7EB] border bg-black cursor-pointer transition-all duration-300 hover:bg-neutral-900 active:scale-95"
                >
                  <Icons.playstore className="size-4 md:size-8" />
                  <div className="text-start">
                    <span className="block font-light text-[8px] md:text-xs text-white leading-tight">
                      GET IT ON
                    </span>
                    <span className="block font-semibold text-[11px] md:text-[14px] text-white leading-tight">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
