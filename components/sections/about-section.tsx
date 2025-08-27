"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Translations } from "@/lib/translations";

interface AboutSectionProps {
  locale: string;
  translations?: Translations;
}

export function AboutSection({ locale, translations }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="  flex-col justify-center content-center items-center w-full">
          {/* Text Content */}
          <div className="flex justify-center items-center w-[60%] ">
            <motion.div className={locale === "ar" ? "lg:order-2" : ""}>
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                Designing Spaces, <br />
                Shaping{" "}
                <span className="text-green-500 italic">Lifestyles</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {locale === "ar"
                  ? "إيكو هومز هي شركة استشارية رائدة في مجال العمارة والتصميم مقرها الرياض، المملكة العربية السعودية. نحن متخصصون في الحلول المعمارية وتصميم المناظر الطبيعية والتصميم الداخلي والهندسة التي تقدم تصاميم متكاملة ومستدامة ومبتكرة تعكس الثقافة والوظيفة والابتكار."
                  : "Eco Homes is a leading architectural and design consultancy based in Riyadh, Saudi Arabia. We specialize in architecture, interior design, landscape design, and engineering solutions delivering integrated, sustainable designs that reflect culture, functionality, and innovation. From concept to completion, we bring unparalleled creativity and expertise to local projects, creating spaces that inspire and endure."}
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={locale === "ar" ? "lg:order-1" : ""}
          >
            <div className="relative rounded-2xl">
              <img
                src="/images/ab.png"
                alt="Modern Architecture"
                className="rounded-2xl shadow-2xl  h-auto -mb-24"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";
// import type { Translations } from "@/lib/translations";

// interface AboutSectionProps {
//   locale: string;
//   translations: Translations;
// }

// export function AboutSection({ locale, translations }: AboutSectionProps) {
//   const ref = useRef(null);

//   // track scroll progress for this section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Transform ranges
//   const rawScale = useTransform(scrollYProgress, [0, 0.6], [15, 2]);
//   const rawY = useTransform(scrollYProgress, [0, 1], ["90%", "140%"]);

//   // Smooth them using spring
//   const scale = useSpring(rawScale, {
//     stiffness: 120, // lower = smoother
//     damping: 20, // higher = less "bounce"
//   });

//   const y = useSpring(rawY, {
//     stiffness: 120,
//     damping: 20,
//   });

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"
//     >
//       {/* Text Block (always centered) */}
//       <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10 mb-24">
//         <div className="max-w-3xl">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
//             Designing Spaces, <br />
//             Shaping <span className="text-green-500 italic">Lifestyles</span>
//           </h2>
//           <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
//             {locale === "ar"
//               ? "إيكو هومز هي شركة استشارية رائدة في مجال العمارة والتصميم مقرها الرياض، المملكة العربية السعودية. نحن متخصصون في الحلول المعمارية وتصميم المناظر الطبيعية والتصميم الداخلي والهندسة التي تقدم تصاميم متكاملة ومستدامة ومبتكرة تعكس الثقافة والوظيفة والابتكار."
//               : "Eco Homes is a leading architectural and design consultancy based in Riyadh, Saudi Arabia. We specialize in architecture, interior design, landscape design, and engineering solutions delivering integrated, sustainable designs that reflect culture, functionality, and innovation. From concept to completion, we bring unparalleled creativity and expertise to local projects, creating spaces that inspire and endure."}
//           </p>
//         </div>
//       </div>

//       {/* Animated Image */}
//       <motion.div style={{ scale, y }} className="relative -z-10">
//         <img
//           src="/images/ab.png"
//           alt="Modern Architecture"
//           className="rounded-2xl shadow-2xl max-w-[400px] w-full h-auto"
//         />
//       </motion.div>
//     </section>
//   );
// }
