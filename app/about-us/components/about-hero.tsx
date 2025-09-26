import Navbar from "@/components/shared/navbar";
import React from "react";

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
      <Navbar />
      <section className="brand-width  flex flex-col lg:flex-row items-center   mt-6 lg:h-full justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#F9FFEB] text-center  text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]">
            About Us
          </h1>
          <div className="text-justify lg:text-center text-[14px] lg:text-[20px] text-[#F9FFEB] flex flex-col gap-6 ">
            <p>
              Soole is a peer-to-peer intercity ride-sharing platform built to
              transform how Nigerians travel between cities. In a country where
              transportation costs are rising and public options remain
              unreliable, Soole offers a smarter, safer, and more affordable
              alternative connecting everyday travelers with verified private
              car owners heading in the same direction.
            </p>
            <p>
              We’re not just another ride-hailing app. Soole is a
              community-first marketplace that brings structure to Nigeria’s
              informal “soole” culture where passengers informally hitch rides
              with private drivers. By introducing verification, real-time
              tracking, and transparent pricing, we make these shared journeys
              secure and accessible for everyone.
            </p>
            <p>
              Whether you're a student heading home, a trader traveling for
              business, or a driver looking to offset fuel costs, Soole empowers
              you to travel with confidence. Our platform maps major transport
              hubs, supports price negotiation, and ensures every user is
              verified creating a trusted ecosystem where mobility meets
              opportunity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
