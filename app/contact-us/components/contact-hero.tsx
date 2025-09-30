import { Icons } from "@/components/shared/icons";
import Navbar from "@/components/shared/navbar";
import { socialLinks } from "@/utils/constants";
import { Mail, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactHero = () => {
  return (
    <div className=" bg-white lg:min-h-[530px]">
      <Navbar whiteBg />
      <section className="brand-width flex-col  flex  md:flex-row  items-center   mt-6  justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-black text-center md:text-start   text-[27px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]">
            Need Help with Soole?
          </h1>
          <p className=" text-center md:text-start  text-[14px] lg:text-[20px] text-[#777777]">
            Have a question or need support? Our team <br /> is here to
            help—reach out anytime.
          </p>
        </div>

        <Icons.continents className="size-[200px] md:size-[408px]" />
      </section>

    <div className="brand-width grid grid-cols-1 md:grid-cols-4 w-full gap-6">
  {/* Social Links */}
  <div className="flex flex-col gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3">
    <h3 className="text-black text-sm md:text-base lg:text-lg font-medium">Follow Us</h3>
    <div className="flex items-center space-x-3">
      {socialLinks.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="flex items-center justify-center text-[#333] hover:text-black transition-colors"
        >
          <span className="sr-only">{s.label}</span>
          {s.label === "facebook" && <Icons.facebook className="w-5 h-5" />}
          {s.label === "instagram" && <Icons.instagram className="w-5 h-5" />}
          {s.label === "twitter" && <Icons.twitter className="w-5 h-5" />}
          {s.label === "linkedin" && <Icons.linkedin className="w-5 h-5" />}
          {s.label === "youtube" && <Icons.youtube className="w-5 h-5" />}
        </Link>
      ))}
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3">
    <Icons.contactPhone className="w-6 h-6 text-black" />
    <a
      href="tel:07032220043"
      className="text-black text-sm md:text-base lg:text-lg font-medium hover:underline"
    >
      07032220043
    </a>
  </div>

  {/* Address */}
  <div className="flex flex-col md:flex-row md:items-center gap-3 border-b md:border-b-0 md:border-r border-[#C2C2C2] px-4 py-3">
    <Icons.location className="w-6 h-6 text-black" />
    <address className="not-italic text-black text-sm md:text-base lg:text-lg leading-snug">
      No 5, Victory Close, Dawaki, <br /> Abuja FCT
    </address>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3 px-4 py-3">
    <Mail className="w-6 h-6 text-black" />
    <a
      href="mailto:info@soole.ng"
      className="text-[#333] text-sm md:text-base lg:text-lg hover:underline"
    >
      info@soole.ng
    </a>
  </div>
</div>

    </div>
  );
};

export default ContactHero;
