"use client";
import React from "react";
import Link from "next/link";
import { Icons } from "./icons";
import {
  companyLinks,
  contactDetails,
  moreLinks,
  socialLinks,
} from "@/utils/constants";
import { IceCream, LocateIcon, LocationEditIcon, Mail, PinIcon } from "lucide-react";
import Image from "next/image";

export default function Footer({hideFooter = false}: {hideFooter?: boolean}) {
  return (
    <section className="relative">
      <div className="brand-width my-12 flex lg:flex-row flex-col  justify-between ">
        {
          !hideFooter && (
            <h6 className="max-w-[300px] lg:max-w-[600px] mb-[150px] sm:mb-0 text-[22.25px] leading-[25.25px] lg:leading-[70px] lg:text-[50px]">
          Experience Nigeria’s first affordable intercity travel platform,
          designed with local solutions for local challenges
        </h6>
          )
        }
      </div>
      <footer className="bg-[#0e1414] relative py-12">
        {/* Footer illustration image */}

        <div className="w-full relative ">
          <Image
            src={"/images/footer.png"}
            alt="footer image"
            height={707.6474609375}
            width={524}
            className="absolute -top-[200px] sm:-top-[250px] md:-top-[300px] lg:-top-[350px] right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[524px] h-auto object-contain"
          />
        </div>
        <div className="brand-width mt-12 md:mt-2 ">
          <div className="md:flex md:items-start md:space-x-12">
            <div className="">
              <h2 className="font-serif  text-[20.57px] max-w-[186px] lg:max-w-[613px] lg:text-[61px] leading-tight text-emerald-50">
                Save up to 50% on your travel costs get ready to go!
              </h2>

              <div className="bg-[#1F2528] mt-4 w-full max-w-[458px] rounded-[32px] #B3B5B4 flex items-center p-2.5 text-sm  md:p-2">
                <input
                  className="px-2 md:px-3 flex-1  text-xs md:text-[14px] outline-none text-[#B3B5B4] "
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="bg-white w-fit md:px-3 px-3 py-2 md:py-2 font-medium  text-[#042011] text-xs md:text-[14px]  rounded-[32px]">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* <div className="mt-8 md:mt-0 md:flex-1" /> */}
          </div>
        </div>

        {/* Main footer columns */}
        <div className=" border-[#1b2626]">
          <div className="max-w-7xl mx-auto px-6 py-14 text-sm text-[#FFFFFF">
            <div className="grid grid-cols-1  md:grid-cols-6 lg:grid-cols-12 gap-8">
              <div className="md:col-span-6">
                <Icons.logo />
                <p className="mt-6 text-sm text-justify leading-[150%] text-[#FFFFFF] max-w-[441px]">
                  Soole is a peer-to-peer intercity ride-sharing platform that
                  connects travelers with verified private drivers heading in
                  the same direction. We offer a safer, more affordable, and
                  eco-friendly way to travel across Nigeria—bringing structure
                  to informal transport while building a trusted community of
                  riders and drivers.
                </p>

                <p className="mt-6 text-sm text-[#FFFFFF]">
                  Travel smart. Travel safe. Travel together.
                </p>

                <div className="mt-8 lg:inline hidden max-w-xs opacity-20">
                  <svg
                    viewBox="0 0 200 60"
                    className="w-full text-emerald-800"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M10 40c15-20 35-20 55-20s35 0 50 10 40 10 55 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-emerald-50 mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((ln) => (
                    <li key={ln.label}>
                      <Link
                        href={ln.href}
                        className="text-[#FFFFFF] hover:text-white"
                      >
                        {ln.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-emerald-50 mb-4">
                  More Links
                </h3>
                <ul className="space-y-3">
                  {moreLinks.map((ln) => (
                    <li key={ln.label}>
                      <Link
                        href={ln.href}
                        className="text-[#FFFFFF] hover:text-white"
                      >
                        {ln.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm text-[#FFFFFF] mb-4">Contact Details</h3>
                <ul className="space-y-4 text-[#FFFFFF]">
                  {contactDetails.map((c) => (
                    <li key={c.type} className="flex items-start gap-2 ">
                      {c.type === "location" && <Icons.pin  />}
                      {c.type === "phone" && <Icons.phone />}
                      {c.type === "email" && <Icons.mail />}

                      <div>
                        {c.href ? (
                          <Link href={c.href} className="hover:underline">
                            {c.label}
                          </Link>
                        ) : (
                          <span>{c.label}</span>
                        )}

                        {c.meta && (
                          <div className="text-xs text-white">{c.meta}</div>
                        )}
                    </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-[#172121] pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="text-xs text-white">
                Copyright © {new Date().getFullYear()} Soole | All Rights
                Reserved
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center    text-xs text-[#FFFFFF transition"
                  >
                    <span className="sr-only">{s.label}</span>
                    {s.label === 'facebook' && <Icons.facebook />}
                    {s.label === 'instagram' && <Icons.instagram />}
                    {s.label === 'twitter' && <Icons.twitter />}
                    {s.label === 'linkedin' && <Icons.linkedin />}
                    {s.label === 'youtube' && <Icons.youtube />}

                    
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
