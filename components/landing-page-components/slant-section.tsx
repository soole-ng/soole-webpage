"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Icons } from "../shared/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SlantPhoneSection = ({backgroundColor = "#0C1316", textColor = "#F9FFEB"} :{backgroundColor?: string, textColor?: string}) => {
  // Refs for animation targets
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const phoneImageRef = useRef<HTMLImageElement>(null);
  const appStoreButtonRef = useRef<HTMLDivElement>(null);
  const playStoreButtonRef = useRef<HTMLDivElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const phoneImage = phoneImageRef.current;
    const appStoreButton = appStoreButtonRef.current;
    const playStoreButton = playStoreButtonRef.current;
    const buttonsContainer = buttonsContainerRef.current;

    if (!container || !content || !heading || !paragraph || !phoneImage) return;

    // Set initial states
    gsap.set(container, { y: 50, opacity: 0 });
    gsap.set([heading, paragraph], { y: 30, opacity: 0 });
    gsap.set(phoneImage, { x: 50, opacity: 0 });
    gsap.set([appStoreButton, playStoreButton], { y: 20, opacity: 0 });

    // Create timeline for initial load animations only
    const tl = gsap.timeline();

    // Container fade in animation
    tl.to(container, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // Content animations with stagger
    .to([heading, paragraph], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.6")
    // Phone image entrance
    .to(phoneImage, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    // App store buttons staggered entrance
    .to([appStoreButton, playStoreButton], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");
  }, []);

  return (
    <div className="brand-width">
      <section 
        ref={containerRef}
        className={`bg-[${backgroundColor}] relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px] overflow-hidden flex lg:flex-row space-y-6 md:space-y-0 flex-col justify-between w-full my-[22px] rounded-[24px] md:rounded-[32px] lg:rounded-[64px] `}
      >
        <div 
          ref={contentRef}
          className="w-full  lg:w-1/2 p-[16px] md:p-[32px] lg:p-[40px] relative flex flex-col justify-center space-y-2 md:space-y-3 lg:space-y-4"
        >
          <h4 
            ref={headingRef}
            className={`text-[${textColor}] mt-8 md:mt-6 lg:mt-12 text-center lg:text-start  lg:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[32px] md:leading-[38px] lg:text-[49px] lg:leading-[56px] cursor-pointer transition-transform`}
          >
            Your Journey Begins with a Tap
          </h4>
          <p 
            ref={paragraphRef}
            className={` text-[${textColor}] font-thin text-center lg:text-start  lg:max-w-[500px] text-[12px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[24px] lg:leading-[28px]`}
          >
            Soole puts reliable, budget-friendly travel in your hands. Download
            now and ride smarter.
          </p>
          <div 
            ref={buttonsContainerRef}
            className="flex flex-row justify-center lg:justify-start gap-4 mt-4 "
          >
            <div 
              ref={appStoreButtonRef}
              className="rounded-[12px] flex gap-2 items-center  py-1 px-2 md:px-3 md:py-2 border-[#E5E7EB] border  bg-black cursor-pointer transition-all duration-300 hover:bg-gray-900"
            >
              <Icons.appleIcon className="size-4 md:size-8" />
              <div>
                <h2 className="font-light text-[7.7px] md:text-xs text-white">
                  Coming soon on
                </h2>
                <p className="font-semibold text-[11px] md:text-[14px] text-white">
                  App Store
                </p>
              </div>
            </div>

            <div 
              ref={playStoreButtonRef}
              className="rounded-[12px] flex gap-2 items-center w-fit px-3 border-[#E5E7EB] border  bg-black cursor-pointer transition-all duration-300 hover:bg-gray-900"
            >
              <Icons.playstore className="size-4 md:size-8" />
              <div>
                <h2 className="font-light text-[7.7px] md:text-xs text-white">
                  Coming soon on
                </h2>
                <p className="font-semibold text-[11px] md:text-[14px] text-white">
                  Play Store
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          ref={phoneImageRef}
          src={"/images/new-slant.png"}
          alt="feature image"
          height={700}
          width={680}
          // fill
          className=" absolute -bottom-[1%]  sm:-bottom-[120px]  lg:-bottom-[10%]  right-1 md:-right-32 lg:-right-32 cursor-pointer transition-transform"
        />
      </section>
    </div>
  );
};

export default SlantPhoneSection;
