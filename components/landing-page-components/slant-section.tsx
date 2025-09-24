import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";

const SlantPhoneSection = ({backgroundColor = "#0C1316", textColor = "#F9FFEB"} :{backgroundColor?: string, textColor?: string}) => {
  return (
    <div className="brand-width">
      <section className={`bg-[${backgroundColor}] relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px] overflow-hidden flex lg:flex-row space-y-6 md:space-y-0 flex-col justify-between w-full my-[22px] rounded-[24px] md:rounded-[32px] lg:rounded-[64px] `}>
        <div className="w-full  lg:w-1/2 p-[16px] md:p-[32px] lg:p-[40px] relative flex flex-col justify-center space-y-2 md:space-y-3 lg:space-y-4">
          <h4 className={`text-[${textColor}] mt-8 md:mt-6 lg:mt-12 text-center lg:text-start  lg:max-w-[553px] font-semibold text-[24px] leading-[31.94px] md:text-[32px] md:leading-[38px] lg:text-[49px] lg:leading-[56px]`}>
            Your Journey Begins with a Tap
          </h4>
          <p className={` text-[${textColor}] font-thin text-center lg:text-start  lg:max-w-[500px] text-[12px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[24px] lg:leading-[28px]`}>
            Soole puts reliable, budget-friendly travel in your hands. Download
            now and ride smarter.
          </p>
          <div className="flex flex-row justify-center lg:justify-start gap-4 mt-4 ">
            <div className="rounded-[12px] flex gap-2 items-center  py-1 px-2 md:px-3 md:py-2 border-[#E5E7EB] border  bg-black">
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

            <div className="rounded-[12px] flex gap-2 items-center w-fit px-3 border-[#E5E7EB] border  bg-black">
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
          src={"/images/new-slant.png"}
          alt="feature image"
          height={700}
          width={680}
          // fill
          className=" absolute -bottom-[1%]  sm:-bottom-[120px]  lg:-bottom-[10%]  right-1 md:-right-32 lg:-right-32  "
        />
      </section>
    </div>
  );
};

export default SlantPhoneSection;
