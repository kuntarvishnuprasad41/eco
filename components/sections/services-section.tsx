"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Palette, Trees, Wrench, MessageSquare } from "lucide-react";
import type { Translations } from "@/lib/translations";

interface ServicesSectionProps {
  locale: string;
  translations: Translations;
}

export function ServicesSection({
  locale,
  translations,
}: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceIcons = [Building2, Palette, Trees, Wrench, MessageSquare];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            {translations.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.services.list.map((service, index) => {
            const Icon = serviceIcons[index] || Building2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional {service.toLowerCase()} services tailored to your
                  specific needs and vision.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
