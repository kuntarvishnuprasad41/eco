"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Translations } from "@/lib/translations";

interface ContactSectionProps {
  locale: string;
  translations: Translations;
}

export function ContactSection({ locale, translations }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contact = translations.contactSection;

  return (
    <section className="bg-gray-50 py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-normal text-black mb-4">
              {contact.title}
            </h2>
            <div className="space-y-2 text-gray-600">
              <p className="text-lg">{contact.company}</p>
              <p>{contact.address}</p>
            </div>
          </div>
          <div className="text-right space-y-2">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-lg text-black hover:text-green-500 transition-colors block"
              dir="ltr"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-600 hover:text-green-500 transition-colors block"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
