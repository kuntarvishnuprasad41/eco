"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Translations } from "@/lib/translations";

interface PortfolioSectionProps {
  locale?: string;
  translations?: Translations;
}

export default function PortfolioSection({
  locale = "en",
  translations,
}: PortfolioSectionProps) {
  const t = translations?.portfolioPage;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(
    () => setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const safeText = (text?: string, fallback = "") => text || fallback;

  return (
    <div className="relative bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Navbar locale={locale} text="#FFF" translations={translations} />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${safeText(t?.hero?.backgroundImage)})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light mb-6 "
          >
            {safeText(t?.hero?.title) + " "}
            <span className="text-green-400 italic font-light">
              {safeText(t?.hero?.subtitle)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            {safeText(t?.hero?.description)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full"
            >
              {safeText(t?.hero?.ctaText)}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              {safeText(t?.overview?.title)}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {safeText(t?.overview?.description)}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={safeText(t?.overview?.image)}
              alt={safeText(t?.overview?.alt)}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Project Categories Carousel */}
      {t?.carousel && <ProjectCategoriesCarousel carousel={t.carousel} />}
      {t?.carousel1 && <ProjectCategoriesCarousel carousel={t.carousel1} />}
      {t?.carousel2 && <ProjectCategoriesCarousel carousel={t.carousel2} />}

      {/* Impact Statistics */}
      <div className="py-20 bg-green-500" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              {safeText(t?.impact?.title)}
              <br />
              <span className="italic">{safeText(t?.impact?.subtitle)}</span>
            </h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              {safeText(t?.impact?.description)}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t?.impactStats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-light text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-green-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-green-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {safeText(t?.cta?.title)}
            <br />
            <span className="text-green-500 italic">
              {safeText(t?.cta?.subtitle)}
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {safeText(t?.cta?.description)}
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full"
          >
            {safeText(t?.cta?.buttonText)}
          </Button>
        </div>
      </div>

      <Footer translations={translations} locale={locale} />
    </div>
  );
}

// Carousel component
interface ProjectCategoriesCarouselProps {
  carousel: Translations["portfolioPage"]["carousel"];
}

export function ProjectCategoriesCarousel({
  carousel,
}: ProjectCategoriesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(
    () => setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-20 bg-gray-50" dir="ltr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {carousel.sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            {carousel.sectionDescription}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {carousel.properties.map((property, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 px-4 transition-all duration-500",
                    selectedIndex !== index && "blur-sm opacity-60 scale-95"
                  )}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-6">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {property.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-light text-gray-900 mb-2">
                            {property.title}
                          </h3>
                          <p className="text-gray-600 text-lg mb-4">
                            {property.location}
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {property.description}
                          </p>
                        </div>
                      </div>

                      {selectedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200 pt-6"
                        >
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Area</p>
                              <p className="text-lg font-semibold text-green-600">
                                {property.area}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">
                                Completion
                              </p>
                              <p className="text-lg font-semibold text-green-600">
                                {property.completion}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">
                                Sustainability
                              </p>
                              <p className="text-lg font-semibold text-green-600">
                                {property.sustainability}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">
                                Energy Savings
                              </p>
                              <p className="text-lg font-semibold text-green-600">
                                {property.energySavings}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === selectedIndex
                    ? "bg-green-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
