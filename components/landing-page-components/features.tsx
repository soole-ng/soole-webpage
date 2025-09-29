"use client"
import { features } from '@/utils/constants'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icons } from '../shared/icons'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = featureCardsRef.current;

    // Set initial states - cards start from below and invisible
    gsap.set(cards, {
      y: 60,
      opacity: 0,
    });

    // Create scroll-triggered animation
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, // 0.2s delay between each card
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%", // Start when top of features section is 80% from top of viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={featuresRef} className='brand-width  my:[42px] md:my-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]'>
      {features.map((feature, index) => (
        <div 
          key={feature.id} 
          ref={(el) => { featureCardsRef.current[index] = el; }}
          className='flex-col max-w-[394.3333435058594px] gap-4 flex'
        >
          <div className='flex items-center gap-4 '>
            <Icons.badge className='size-8 md:size-12' />
            <h3 className='text-[18.5px] text-[#042011] font-semibold md:text-[25px]'>{feature.heading}</h3>
          </div>
          <p className='text-[#042011] md:text-[20px] text-justify '>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features