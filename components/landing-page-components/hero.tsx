"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../shared/navbar";

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const waitlistTextRef = useRef<HTMLHeadingElement>(null);
  const emailFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states - elements start from below and invisible
    gsap.set([titleRef.current, descriptionRef.current, waitlistTextRef.current, emailFormRef.current], {
      y: 50,
      opacity: 0,
    });

    // Animate elements in sequence with slight stagger
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(descriptionRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6") // Start 0.6s before previous animation ends
    .to(waitlistTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6")
    .to(emailFormRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6");
  }, []);

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
      <section className="brand-width h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 lg:mt-0 lg:justify-center">
        {/* Contents */}
        <div ref={heroContentRef} className="flex  md:justify-center   w-full flex-col space-y-20">
          <div className="flex flex-col gap-12">
            <h1 
              ref={titleRef}
              className="text-[#F9FFEB] font-source-serif text-center md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
            >
              Travel together, comfortably and safely with Soole
            </h1>
            <p 
              ref={descriptionRef}
              className="text-[#F9FFEB] md:text-start text-center text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]"
            >
              Soole connects travelers heading in the same direction, making
              trips safer, more affordable, and more social.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <h4 
              ref={waitlistTextRef}
              className="text-white text-center md:text-start text-base"
            >
              Join 200+ early users already on the waitlist to get first access.
            </h4>
            <div 
              ref={emailFormRef}
              className="bg-[#1F2528] w-full max-w-[458px] rounded-[32px] #B3B5B4 flex items-center p-2 text-sm  md:p-2"
            >
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
