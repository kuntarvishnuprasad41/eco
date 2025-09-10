"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Translations } from "@/lib/translations";

interface AboutSectionProps {
  locale: string;
  translations: Translations;
}

export function AboutSection({ locale, translations }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isRTL = locale === "ar";

  return (
    <section
      id="about"
      className="py-20 bg-white"
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="flex-col justify-center content-center items-center w-full">
          {/* Text Content */}
          <div className="flex justify-center items-center w-full">
            <motion.div
              className={isRTL ? "lg:order-2 text-right" : ""}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                {translations.about.title} <br />
                <span className="text-green-500 italic">
                  {translations.about.highlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {translations.about.description}
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={isRTL ? "lg:order-1" : ""}
          >
            <div className="relative rounded-2xl">
              <img
                src="/images/ab.png"
                alt="Modern Architecture"
                className="rounded-2xl shadow-2xl h-auto -mb-24"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
