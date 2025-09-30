"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Icons } from "../shared/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DarkFeatureContainer = () => {
  // Refs for animation targets
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const phoneImageRef = useRef<HTMLDivElement>(null);
  const worldIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const phoneImage = phoneImageRef.current;
    const worldIcon = worldIconRef.current;

    if (!container || !content || !heading || !paragraph || !phoneImage || !worldIcon) return;

    // Set initial states
    gsap.set(container, { y: 50, opacity: 0 });
    gsap.set([heading, paragraph], { y: 30, opacity: 0 });
    gsap.set(phoneImage, { x: -50, opacity: 0 });
    gsap.set(worldIcon, { opacity: 0 });

    // Create timeline for initial load animations only
    const tl = gsap.timeline();

    // Container fade in animation
    tl.to(container, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // World icon animation
    .to(worldIcon, {
      opacity: 0.8,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    // Content animations with stagger
    .to([heading, paragraph], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.4")
    // Phone image animation (from left since it's reversed layout)
    .to(phoneImage, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");
  }, []);

  return (
    <div className="brand-width">
      <section 
        ref={containerRef}
        className="bg-[#0C1316]  min-h-[617px] sm:min-h-[450px] md:min-h-[460px]  lg:min-h-[617px] overflow-hidden  flex md:flex-row flex-col-reverse justify-between w-full  my-[42px] rounded-[24px] md:rounded-[64px] p-[20px]  md:p-[76px]"
      >
         <div 
           ref={phoneImageRef}
           className="w-full relative items-center justify-center cursor-pointer"
         >
          <Image
            src={"/image.png"}
            alt="feature image"
            height={856}
            width={425}
            className="absolute -top-[280px] sm:top-[20px] md:top-[60px] lg:top-2 right-0 bottom-0 md:-left-7 xl:left-4"
          />
        </div>
        
        <div 
          ref={contentRef}
          className="w-full relative  flex flex-col justify-center space-y-2 md:space-y-4"
        >
            <div 
              ref={worldIconRef}
              className="absolute left-0 right-0 cursor-pointer"
            >
                <Icons.world />
            </div>
          <h4 
            ref={headingRef}
            className="text-[#E8F1ED] font-funnel-display mt-12  text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[49px] md:leading-[56px] cursor-pointer transition-transform"
          >
            Ride for less with neighbors going your way.
          </h4>
          <p 
            ref={paragraphRef}
            className="text-[#E8F1ED] text-start md:max-w-[553px] text-[14px] md:text-[20px] leading-[28px]"
          >
          Traveling doesn't have to be expensive. Split fuel costs with drivers going your way and keep more money in your pocket.
          </p>
        </div>
       
      </section>
    </div>
  );
};

export default DarkFeatureContainer;
