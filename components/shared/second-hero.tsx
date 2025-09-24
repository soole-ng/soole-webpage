import React from "react";
import Navbar from "../shared/navbar";
import { Icons } from "./icons";

interface ISecondHero {
  backgroundImage?: string;
  mainText?: string;
  subText?: string;
}

const SecondHero = ({backgroundImage, mainText, subText}: ISecondHero) => {
  return (
    <div
      className="bg-[#0C1316] h-[90vh] md:h-screen"
      style={{
        backgroundImage: `url('${backgroundImage || "/images/second-hero.png"}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <section className="brand-width h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 lg:mt-0 lg:justify-center">
        {/* Contents */}
        <div className="flex  md:justify-center   w-full flex-col space-y-20">
          <div className="flex flex-col gap-12">
            <h1 className="text-[#F9FFEB] text-center md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]">
              Safe and comfortable travel across Nigeria’s Cities
            </h1>
            <p className="text-[#F9FFEB] md:text-start text-center text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]">
             Connect with verified drivers, share affordable rides, and travel safely between cities. Soole brings structure, trust, and convenience to Nigeria’s informal transport culture making every journey easier, greener, and more reliable.
            </p>
          </div>

          <div className="flex flex-col gap-[12px] ">
            <h4 className="text-white text-center md:text-start text-base">
             Download App Now
            </h4>
           <div className="flex flex-row justify-center lg:justify-start gap-4  ">
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
        </div>
      </section>
    </div>
  );
};

export default SecondHero;
