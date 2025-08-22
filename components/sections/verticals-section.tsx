"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VerticalsSectionProps {
  locale: string;
}

export function VerticalsSection({ locale }: VerticalsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const verticals = [
    {
      title: locale === "ar" ? "العمارة" : "Architecture",
      image: "/images/verticals.png",
      description:
        locale === "ar"
          ? "تصاميم معمارية مبتكرة ومستدامة"
          : "Innovative and sustainable architectural designs",
    },
    {
      title: locale === "ar" ? "التصميم الداخلي" : "Interior Design",
      image: "/images/verticals.png",
      description:
        locale === "ar"
          ? "مساحات داخلية أنيقة ووظيفية"
          : "Elegant and functional interior spaces",
    },
    {
      title: locale === "ar" ? "تصميم المناظر الطبيعية" : "Landscape Design",
      image: "/images/verticals.png",
      description:
        locale === "ar"
          ? "مناظر طبيعية مستدامة وجميلة"
          : "Sustainable and beautiful landscapes",
    },
    {
      title: locale === "ar" ? "الهندسة" : "Engineering",
      image: "/images/verticals.png",
      description:
        locale === "ar"
          ? "حلول هندسية متطورة وموثوقة"
          : "Advanced and reliable engineering solutions",
    },
  ];

  return (
    <section id="verticals" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {locale === "ar" ? "خدماتنا" : "Our verticals"}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {locale === "ar"
              ? "خدمات تصميم وهندسة شاملة تحول رؤيتك إلى واقع مع الحفاظ على أعلى معايير الجودة."
              : "Comprehensive design and engineering services that transform your vision into reality with the highest quality standards."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-100">
                <img
                  src={vertical.image || "/placeholder.svg"}
                  alt={vertical.title}
                  className="w-full h-full bg-none"
                />
                <div className="absolute inset-0  group-hover:bg-black/40 rounded-t-[40px] transition-colors duration-300"></div>

                {/* Text on bottom-left */}
                <div className="absolute bottom-0 left-0 p-4 text-black z-10">
                  <h3 className="text-lg font-semibold">{vertical.title}</h3>
                  {/* <p className="text-sm">{vertical.description}</p> */}
                </div>
              </div>
              {/* <h3 className="text-xl font-medium text-gray-900 mb-2">
                {vertical.title}
              </h3> */}
              {/* <p className="text-gray-600">{vertical.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
