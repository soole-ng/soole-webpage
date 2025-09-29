"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Icons } from "../shared/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FeatureContainer = () => {
  // Refs for animation targets
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const phoneImageRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const vectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const phoneImage = phoneImageRef.current;
    const car = carRef.current;
    const vector = vectorRef.current;

    if (!container || !content || !heading || !paragraph || !phoneImage) return;

    // Set initial states
    gsap.set(container, { y: 50, opacity: 0 });
    gsap.set([heading, paragraph], { y: 30, opacity: 0 });
    gsap.set(phoneImage, { x: 50, opacity: 0 });
    gsap.set(vector, { opacity: 0 });
    if (car) gsap.set(car, { x: -50, opacity: 0 });

    // Create timeline for initial load animations only
    const tl = gsap.timeline();

    // Container fade in animation
    tl.to(container, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // Vector background animation
    .to(vector, {
      opacity: 0.6,
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
    // Phone image animation
    .to(phoneImage, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    // Car animation (if exists) - single animation, no loop
    if (car) {
      tl.to(car, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
    }
  }, []);

  return (
    <div className="brand-width">
      <section 
        ref={containerRef}
        className="bg-[#C9EC7C] min-h-[617px] sm:min-h-[450px] md:min-h-[460px]  lg:min-h-[617px] overflow-hidden flex md:flex-row flex-col justify-between w-full  my-[22px] rounded-[24px] lg:rounded-[64px] p-[20px] md:p-[60px]  lg:p-[76px]"
      >
        <div
          ref={contentRef}
          className="w-full relative flex flex-col justify-center space-y-2 md:space-y-4"
        >
            <div 
              ref={vectorRef}
              className="absolute left-0 -top-12 md:-top-30 right-0 z-10"
            >
                {/* <Icons.topBgBig /> */}
                <Image src={"/Vector.svg"} alt="bg" width={439} height={439} />
            </div>
          <h4 
            ref={headingRef}
            className="text-[#0C1316] mt-12 text-center md:text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[38px] md:leading-[35px] lg:text-[49px] lg:leading-[56px] cursor-pointer transition-transform"
          >
            Heading out? Someone nearby might be going your way too.
          </h4>
          <p 
            ref={paragraphRef}
            className="text-[#0C1316] text-center md:text-start md:max-w-[553px] text-[14px] lg:text-[20px] leading-[28px]"
          >
            With Soole, you share the ride and share the cost — making every
            journey lighter on your pocket.
          </p>

          <div 
            ref={carRef}
            className="hidden md:flex absolute -bottom-20 left-0 right-0 mx-auto"
          >
            <Icons.car />
          </div>
        </div>
        <div 
          ref={phoneImageRef}
          className="w-full relative items-center justify-center cursor-pointer"
        >
          <Image
            src={"/image.png"}
            alt="feature image"
            height={856}
            width={425}
            className="absolute -bottom-[20px] sm:-bottom-[25%] sm:-right-[5%]  -lg:bottom-0 "
          />
        </div>
      </section>
    </div>
  );
};

export default FeatureContainer;
