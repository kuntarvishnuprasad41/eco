"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Translations } from "@/lib/translations";

interface HeroSectionProps {
  locale: string;
  translations: Translations;
}

export function HeroSection({ locale, translations }: HeroSectionProps) {
  const isRTL = locale === "ar";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden  "
    >
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/hero.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight font-montreal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Design Meets{" "}
            <span className="text-green-400 italic font-normal font-ivy">
              {locale === "ar" ? "الاستدامة" : "Sustainability"}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {locale === "ar"
              ? "إنشاء مساحات مدروسة تجمع بين الوظيفة والاستدامة والجمال الخالد لتحويل رؤيتك إلى واقع."
              : "Creating functional spaces that combine innovation, elegance, and eco-conscious design for a sustainable future."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base font-medium rounded-full border-0"
            >
              {locale === "ar" ? "احصل على استشارة" : "Get A Consultation"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
