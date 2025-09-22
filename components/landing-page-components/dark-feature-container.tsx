import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";

const DarkFeatureContainer = () => {
  return (
    <div className="brand-width">
      <section className="bg-[#0C1316] overflow-hidden min-h-[617px] flex md:flex-row flex-col-reverse justify-between w-full  my-[42px] rounded-[24px] md:rounded-[64px] p-[20px]  md:p-[76px]">
         <div className="w-full relative items-center justify-center">
          <Image
            src={"/image.png"}
            alt="feature image"
            height={856}
            width={425}
            className="absolute -top-[280px] sm:top-[20px] md:top-[60px] lg:top-2 right-0 bottom-0 md:-left-7 lg:left-4"
          />
        </div>
        
        <div className="w-full relative  flex flex-col justify-center space-y-2 md:space-y-4">
            <div className="absolute left-0 right-0">
                <Icons.world />
            </div>
          <h4 className="text-[#E8F1ED] mt-12  text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[49px] md:leading-[56px]">
            Ride for less with neighbors going your way.
          </h4>
          <p className="text-[#E8F1ED] text-start md:max-w-[553px] text-[14px] md:text-[20px] leading-[28px]">
          Traveling doesn’t have to be expensive. Split fuel costs with drivers going your way and keep more money in your pocket.
          </p>
        </div>
       
      </section>
    </div>
  );
};

export default DarkFeatureContainer;
