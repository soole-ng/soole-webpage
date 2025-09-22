import React from "react";
import { Icons } from "./icons";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Products",
    dropdown: true,
    href: "/products",
  },
  {
    id: 2,
    name: "About Us",

    href: "/about",
  },
  {
    id: 3,
    name: "FAQ",

    href: "/faq",
  },
  {
    id: 4,
    name: "Privacy Policy",

    href: "/privacy",
  },
];
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center brand-width p-4">
      <div>
        <Icons.logo />
      </div>

      <div className="hidden md:flex gap-3 items-center">
        {links.map((link) => (
          <Link key={link.id} className="text-[#F7F7F7]" href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <button className="bg-[#C9EC7C] md:inline-block hidden px-3 py-2 font-medium rounded-[6.13px] text-[#0C1316]">
        Contact us
      </button>

      <button className="md:hidden inline-block">
        <Icons.menu />
      </button>
    </nav>
  );
};

export default Navbar;
