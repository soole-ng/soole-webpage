"use client";
import React, { useState, useRef, useEffect } from "react";
import { Icons } from "./icons";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Products",
    dropdown: true,
    children: [
      {
        id: 1,
        name: "Riders",
        href: "/riders",
      },
      {
        id: 2,
        name: "Drivers",
        href: "/drivers",
      },
    ],
    href: "/products",
  },
  {
    id: 2,
    name: "About Us",

    href: "/about-us",
  },
  {
    id: 3,
    name: "FAQ",

    href: "/faq",
  },
  {
    id: 4,
    name: "Privacy Policy",

    href: "/privacy-policy",
  },
];
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center brand-width p-4">
      <Link href={'/'}>
        <Icons.logo />
      </Link>

      <div className="hidden md:flex gap-3 items-center">
        {links.map((link) => (
          <div key={link.id} className="relative" ref={link.dropdown ? dropdownRef : null}>
            {link.dropdown ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className="text-[#F7F7F7] flex items-center gap-1 hover:text-[#C9EC7C] transition-colors"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {link.children?.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0C1316] transition-colors"
                        onClick={closeDropdown}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link className="text-[#F7F7F7] hover:text-[#C9EC7C] transition-colors" href={link.href}>
                {link.name}
              </Link>
            )}
          </div>
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
