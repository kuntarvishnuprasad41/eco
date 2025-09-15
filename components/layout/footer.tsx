"use client";

import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/lib/translations";

interface FooterProps {
  locale: string;
  translations: Translations;
}

export function Footer({ locale, translations }: FooterProps) {
  const footer = translations.footerSection;
  const contact = translations.contactSection;

  // Mapping for social SVGs based on name in JSON
  const socialIcons: Record<string, JSX.Element> = {
    tiktok: (
      <svg className="w-7 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.162 2c1.396 0 2.527 1.14 2.527 2.527v.128c.627.25 1.223.397 1.757.453v2.474c-.693.066-1.507-.048-2.39-.343v5.779c0 2.53-2.053 4.583-4.583 4.583S4.89 15.548 4.89 13.018c0-2.37 1.83-4.303 4.163-4.51v2.506a2.034 2.034 0 0 0-1.64 1.983c0 1.123.912 2.035 2.035 2.035s2.035-.912 2.035-2.035V2h1.679z" />
      </svg>
    ),
    x: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  };

  return (
    <footer className="bg-[#3EBF7E] text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left side - Logo and description */}
          <div className="flex-1 max-w-md text-center lg:text-left">
            <Image
              src="/icons/logo-w.svg"
              alt="Eco Homes"
              width={150}
              height={50}
              className="mx-auto lg:mx-0 mb-4"
            />

            <p className="text-black text-sm text-justify">
              {footer.description} {locale != "ar" ? "Riyadh" : "الرياض"} |{" "}
              {new Date().getFullYear()}
            </p>
          </div>

          {/* our office */}
          <div className="flex-1 text-center space-y-2">
            <h3 className="text-lg font-semibold">{contact.title}</h3>
            <p className="text-sm">{contact.company}</p>
            <br />
            <p className="text-sm">{contact.address}</p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="block text-sm text-black hover:text-white transition-colors"
              dir="ltr"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="block text-sm text-black hover:text-white transition-colors"
            >
              {contact.email}
            </a>
          </div>

          {/* Right side - Navigation and Social */}
          <div className="flex flex-col items-center gap-8">
            {/* Navigation Menu */}
            <nav className="flex flex-col items-center gap-4">
              {footer.navigation.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-black hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {footer.socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="text-black hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.name.toLowerCase()]}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 text-center sm:text-left">
              <p className="text-black text-sm">{footer.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
