"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divide, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { motion, AnimatePresence } from "framer-motion";
import type { Translations } from "@/lib/translations";
import Image from "next/image";

interface NavbarProps {
  locale: string;
  translations?: Translations;
  text: string;
}

export function Navbar({ locale, translations, text }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isRTL = locale === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: `/${locale}/verticals`,
      label: locale === "ar" ? "خدماتنا" : "OUR VERTICALS",
    },
    {
      href: `/${locale}/sustainability`,
      label: locale === "ar" ? "الاستدامة" : "SUSTAINABILITY",
    },
    {
      href: `/${locale}/about`,
      label: locale === "ar" ? "من نحن" : "ABOUT US",
    },
    {
      href: `/${locale}/portfolio`,
      label: locale === "ar" ? "أعمالنا" : "PORTFOLIO",
    },
    {
      href: `/${locale}/contact-us`,
      label: locale === "ar" ? "اتصل بنا" : "CONTACT US",
    },
  ];

  // Helper to detect if current page is contact-us
  const isContactPage =
    pathname.endsWith("/contact-us/") || pathname.endsWith("/contact-us");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo section */}
        {scrolled ? (
          <>
            {/* Desktop Layout */}
            <div
              className={`hidden md:flex items-center justify-between transition-all duration-300 ${
                scrolled ? "py-2" : "py-4"
              }`}
            >
              {/* Logo */}
              <Link className="flex-shrink-0" href={"/"}>
                <Image
                  alt="Eco Homes"
                  src="/icons/logo.svg"
                  height={scrolled ? 40 : 60} // Shrinks logo when scrolled
                  width={scrolled ? 120 : 180}
                  className="transition-all duration-300"
                />
              </Link>

              {/* Nav Links + Language Switcher */}
              <div className="flex items-center space-x-8 rtl:space-x-reverse">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-[#3ebf7e] transition-colors duration-200 font-medium text-black ${
                      scrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <LanguageSwitcher currentLocale={locale} scrolled={scrolled} />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link className="flex justify-center py-4" href={"/"}>
              <Image
                alt="Eco Homes"
                src="/icons/logo.svg"
                height={150}
                width={150}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8 rtl:space-x-reverse pb-4 ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#3ebf7e] transition-colors duration-200 font-medium ${
                    // If current page is contact-us, use original logic
                    isContactPage
                      ? scrolled
                        ? "text-white"
                        : `text-[${text}]`
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher currentLocale={locale} scrolled={scrolled} />
            </div>
          </>
        )}

        {/* Mobile menu button */}
        {scrolled && (
          <div className="flex items-center justify-between py-2 md:hidden">
            <Link href="/" className="flex-shrink-0">
              <Image
                alt="Eco Homes"
                src="/icons/logo.svg"
                height={40}
                width={120}
                className="transition-all duration-300"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-[#999999] hover:text-[#3ebf7e] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <LanguageSwitcher
                    currentLocale={locale}
                    scrolled={scrolled}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
