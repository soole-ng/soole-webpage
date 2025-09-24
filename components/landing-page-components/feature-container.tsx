import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";

const FeatureContainer = () => {
  return (
    <div className="brand-width">
      <section className="bg-[#C9EC7C] min-h-[617px] sm:min-h-[450px] md:min-h-[460px]  lg:min-h-[617px] overflow-hidden flex md:flex-row flex-col justify-between w-full  my-[22px] rounded-[24px] lg:rounded-[64px] p-[20px] md:p-[60px]  lg:p-[76px]">
        <div
          className="w-full relative flex flex-col justify-center space-y-2 md:space-y-4"
        >
            <div className="absolute left-0 -top-12 md:-top-30 right-0 z-10">
                {/* <Icons.topBgBig /> */}
                <Image src={"/Vector.svg"} alt="bg" width={439} height={439} />
            </div>
          <h4 className="text-[#0C1316] mt-12 text-center md:text-start md:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[38px] md:leading-[35px] lg:text-[49px] lg:leading-[56px]">
            Heading out? Someone nearby might be going your way too.
          </h4>
          <p className="text-[#0C1316] text-center md:text-start md:max-w-[553px] text-[14px] lg:text-[20px] leading-[28px]">
            With Soole, you share the ride and share the cost — making every
            journey lighter on your pocket.
          </p>

          <div className="hidden md:flex absolute -bottom-20 left-0 right-0 mx-auto">
            <Icons.car />
          </div>
        </div>
        <div className="w-full relative items-center justify-center">
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
