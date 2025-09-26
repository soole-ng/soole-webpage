import Navbar from "@/components/shared/navbar";
import { Search } from "lucide-react";
import React from "react";

const FaqHero = () => {
  return (
    <div
      className="bg-[#0C1316] h-[383px] lg:h-[530px]"
      style={{
        backgroundImage: "url('/images/about-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <section className="brand-width  flex flex-col  items-center   mt-6  justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#F9FFEB] text-center  text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]">
            Ask us anything
          </h1>
           <p className=" w-full text-justify  lg:text-center text-[14px] lg:text-[20px] text-[#F9FFEB]">
              Got questions about using Soole? We’ve answered the most common
              ones below.
            </p>

         
        </div>

         <div className="flex mt-20 relative w-full max-w-[1040px] py-3 px-2 items-center bg-white rounded-[8px] ">
            <Search />
            <input type="text" placeholder="Type your question here..." className="px-4 w-full outline-none border-none " />
          </div>
      </section>
    </div>
  );
};

export default FaqHero;
