"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import ParallaxSection from "./parallax-magic";

export const HeroParallax = ({
  products,
  locale,
  translations,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  locale: string;
  translations: {
    [key: string]: string;
  };
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.2]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
    springConfig
  );

  const backgroundImage =
    products[0]?.thumbnail || "/placeholder.svg?height=800&width=1200";

  return (
    <div
      ref={ref}
      className="h-[500vh] overflow-hidden antialiased relative z-0"
    >
      <div className="fixed top-0 left-0 right-0 z-10 h-screen flex items-center justify-center">
        <Header locale={locale} translations={translations} />
      </div>

      <motion.div
        style={{
          scale,
          translateY,
          opacity,
        }}
        className="fixed inset-0 w-full h-screen flex items-center justify-center z-0"
      >
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Hero background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>
    </div>
  );
};

export const Header = ({ locale, translations }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full text-center z-0">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
        Designing Spaces, <br />
        Shaping <span className="text-green-500 italic">Lifestyles</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        {locale === "ar"
          ? "إيكو هومز هي شركة استشارية رائدة في مجال العمارة والتصميم مقرها الرياض، المملكة العربية السعودية. نحن متخصصون في الحلول المعمارية وتصميم المناظر الطبيعية والتصميم الداخلي والهندسة التي تقدم تصاميم متكاملة ومستدامة ومبتكرة تعكس الثقافة والوظيفة والابتكار."
          : "Eco Homes is a leading architectural and design consultancy based in Riyadh, Saudi Arabia. We specialize in architecture, interior design, landscape design, and engineering solutions delivering integrated, sustainable designs that reflect culture, functionality, and innovation. From concept to completion, we bring unparalleled creativity and expertise to local projects, creating spaces that inspire and endure."}
      </p>
    </div>
  );
};
