import React from "react";
import Navbar from "../shared/navbar";

const Hero = () => {
  return (
    <div
      className="bg-[#0C1316] h-[90vh] md:h-screen"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <section className="brand-width  h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">
        {/* Contents */}
        <div className="flex  md:justify-end md:h-1/5 w-full flex-col space-y-20">
          <div className="flex flex-col gap-12">
            <h1 className="text-[#F9FFEB] text-center md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]">
              Travel together, comfortably and safely with Soole
            </h1>
            <p className="text-[#F9FFEB] md:text-start text-center text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]">
              Soole connects travelers heading in the same direction, making
              trips safer, more affordable, and more social.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <h4 className="text-white text-center md:text-start text-base">
              Join 200+ early users already on the waitlist to get first access.
            </h4>
            <div className="bg-[#1F2528] w-full max-w-[458px] rounded-[32px] #B3B5B4 flex items-center p-2 text-sm  md:p-2">
              <input
                className="px-2 md:px-3 flex-1  text-xs md:text-[14px] outline-none text-[#B3B5B4] "
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-white w-fit md:px-3 px-2 py-1 md:py-2 font-medium  text-[#042011] text-xs md:text-[14px]  rounded-[32px]">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
