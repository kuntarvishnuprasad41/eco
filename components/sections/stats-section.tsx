"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatsSectionProps {
  locale: string;
}

export function StatsSection({ locale }: StatsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      highlight: "100% ",
      title: locale === "ar" ? "نهج مستدام" : "Sustainable Approach",
      description:
        locale === "ar"
          ? "جميع مشاريعنا تتبع معايير الاستدامة البيئية"
          : "Every project follows environmental sustainability standards",
    },
    {
      highlight: "200+ ",
      title: locale === "ar" ? "مشروع مكتمل" : "Projects Completed",
      description:
        locale === "ar"
          ? "مشاريع ناجحة في جميع أنحاء المنطقة"
          : "Successful projects across the region",
    },
    {
      highlight: "15+ ",
      title: locale === "ar" ? "سنوات خبرة" : "Years Experience",
      description:
        locale === "ar"
          ? "خبرة عميقة في التصميم المعماري المستدام"
          : "Deep expertise in sustainable architectural design",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-10 px-[220px] py-10 bg-[#000000]"
      ref={ref}
    >
      <div className="inline-flex items-start gap-10 flex-[0_0_auto]">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col w-[220px] items-start gap-5"
          >
            <h3 className="self-stretch mt-[-1.00px] [font-family:'Funnel_Sans',Helvetica] font-medium text-transparent text-xl tracking-[0] leading-[24.0px]">
              <span className="text-[#3dbf7e]">{stat.highlight}</span>
              <span className="text-[#ffffff]">{stat.title}</span>
            </h3>
            <p className="self-stretch [font-family:'Funnel_Sans',Helvetica] font-light text-[#ffffff] text-lg tracking-[0] leading-[25.2px]">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Optional Separator */}
      <div className="w-[990px] h-px mb-[-0.50px] bg-white/20" />
    </section>
  );
}
