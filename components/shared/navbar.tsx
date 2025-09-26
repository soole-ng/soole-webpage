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
      { id: 1, name: "Rider", href: "/riders" },
      { id: 2, name: "Driver", href: "/drivers" },
    ],
    href: "/products",
  },
  { id: 2, name: "About Us", href: "/about-us" },
  { id: 3, name: "FAQ", href: "/faq" },
  { id: 4, name: "Privacy Policy", href: "/privacy-policy" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const mobileRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center brand-width p-4">
      <Link href={"/"}>
        <Icons.logo />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <div key={link.id} className="relative">
            {link.dropdown ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className="text-[#F7F7F7] flex items-center gap-1 hover:text-[#C9EC7C] transition-colors"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {link.children?.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                className="text-[#F7F7F7] hover:text-[#C9EC7C] transition-colors"
                href={link.href}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <button className="bg-[#C9EC7C] hidden md:inline-block px-3 py-2 font-medium rounded-md text-[#0C1316]">
        Contact Us
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden inline-block"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <Icons.close /> : <Icons.menu />}
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          ref={mobileRef}
          className="absolute top-0 right-0 w-64 h-[464px] rounded-[8px] bg-white shadow-lg p-6 space-y-2 flex flex-col gap-6 z-50"
        >
          {links.map((link) => (
            <div key={link.id}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-[#0C1316] text-[14px] justify-between w-full text-left font-medium"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-4 flex flex-col gap-2">
                      {link.children?.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="text-[#0C1316] text-[14px] hover:text-black"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-[#0C1316] text-[14px] hover:text-black"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Contact Us button */}
          <button className="bg-[#C9EC7C] px-3 py-2 mt-auto rounded-md font-medium text-[#0C1316]">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
