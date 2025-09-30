"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Icons } from "./icons";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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

type NavbarProps = {
  whiteBg?: boolean;
};

const Navbar = ({ whiteBg = false }: NavbarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  
  // Function to check if a link is active
  const isLinkActive = (href: string, children?: Array<{href: string}>) => {
    if (pathname === href) return true;
    if (children) {
      return children.some(child => pathname === child.href);
    }
    return false;
  };
  const mobileRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const router = useRouter();
  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center brand-width p-[30px]"
    >
      <Link ref={logoRef} href={"/"}>
        {whiteBg ? <Icons.darkLogo /> : <Icons.logo />}
      </Link>

      {/* Desktop Links */}
      <div ref={desktopLinksRef} className="hidden md:flex gap-6 items-center">
        {links.map((link) => {
          const isActive = isLinkActive(link.href, link.children);
          return (
            <div key={link.id} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className={`${
                      whiteBg ? "text-black" : "text-[#F7F7F7]"
                    } flex items-center gap-1 hover:text-[#C9EC7C] transition-colors ${
                      isActive ? "font-bold" : "font-normal"
                    }`}
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
                      {link.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.id}
                            href={child.href}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                              isChildActive ? "font-bold bg-gray-50" : "font-normal"
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className={`${
                    whiteBg ? "text-black" : "text-[#F7F7F7]"
                  } hover:text-[#C9EC7C] transition-colors ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Contact Button */}
      <button
        ref={contactButtonRef}
        onClick={() => router.push("/contact-us")}
        className="bg-[#C9EC7C] hidden md:inline-block px-3 py-2 font-medium rounded-md text-black"
      >
        Contact Us
      </button>

      {/* Mobile Menu Toggle */}
      <button
        ref={mobileToggleRef}
        className="md:hidden inline-block"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {/* {isMobileOpen ? <Icons.close /> :  */}
        {whiteBg ? <Icons.menu /> : <Icons.darkmenu />}

        {/* } */}
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          ref={mobileRef}
          className="absolute top-0 right-0 w-64 h-[464px] rounded-[8px] bg-white shadow-lg p-6 space-y-2 flex flex-col gap-6 z-50"
        >
          {links.map((link) => {
            const isActive = isLinkActive(link.href, link.children);
            return (
              <div key={link.id}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center text-black text-[14px] justify-between w-full text-left ${
                        isActive ? "font-bold" : "font-medium"
                      }`}
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
                        {link.children?.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.id}
                              href={child.href}
                              className={`text-black text-[14px] hover:text-black ${
                                isChildActive ? "font-bold" : "font-normal"
                              }`}
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-black text-[14px] hover:text-black ${
                      isActive ? "font-bold" : "font-normal"
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Contact Us button */}
          <button
            onClick={() => router.push("/contact-us")}
            className="bg-[#C9EC7C] px-3 py-2 mt-auto rounded-md font-medium text-black"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
