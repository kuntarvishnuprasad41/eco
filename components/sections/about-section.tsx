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

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div className={locale === "ar" ? "lg:order-2" : ""}>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Designing Spaces, <br />
              Shaping <span className="text-green-500 italic">Lifestyles</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {locale === "ar"
                ? "إيكو هومز هي شركة استشارية رائدة في مجال العمارة والتصميم مقرها الرياض، المملكة العربية السعودية. نحن متخصصون في الحلول المعمارية وتصميم المناظر الطبيعية والتصميم الداخلي والهندسة التي تقدم تصاميم متكاملة ومستدامة ومبتكرة تعكس الثقافة والوظيفة والابتكار."
                : "Eco Homes is a leading architectural and design consultancy based in Riyadh, Saudi Arabia. We specialize in architecture, interior design, landscape design, and engineering solutions delivering integrated, sustainable designs that reflect culture, functionality, and innovation. From concept to completion, we bring unparalleled creativity and expertise to local projects, creating spaces that inspire and endure."}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={locale === "ar" ? "lg:order-1" : ""}
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800&text=Modern+Architecture+with+Autumn+Trees"
                alt="Modern Architecture"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
