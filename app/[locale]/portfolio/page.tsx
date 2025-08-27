"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Nav } from "react-day-picker";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface PortfolioSectionProps {
  locale?: string;
}

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    location: "Riyadh",
    image: "/images/1.png",
    area: "5,500 sq.ft",
    completion: "2024",
    sustainability: "95%",
    energySavings: "30% annually",
    description:
      "A stunning residential project that seamlessly blends modern architecture with sustainable design principles.",
  },
  {
    id: 2,
    title: "Commercial Hub",
    category: "Commercial",
    location: "Dubai",
    image: "/images/1.png",
    area: "45,000 sq.ft",
    completion: "2024",
    sustainability: "92%",
    energySavings: "35% annually",
    description:
      "An innovative commercial space featuring cutting-edge sustainable technologies and inspiring work environments.",
  },
  {
    id: 3,
    title: "Landscape Retreat",
    category: "Landscape",
    location: "Abu Dhabi",
    image: "/images/1.png",
    area: "8,200 sq.ft",
    completion: "2025",
    sustainability: "98%",
    energySavings: "40% annually",
    description:
      "A harmonious integration of architecture and landscape design creating a sustainable living environment.",
  },
  {
    id: 4,
    title: "Green Office Complex",
    category: "Commercial",
    location: "Jeddah",
    image: "/images/1.png",
    area: "32,000 sq.ft",
    completion: "2024",
    sustainability: "89%",
    energySavings: "28% annually",
    description:
      "A revolutionary office complex that prioritizes employee wellbeing and environmental responsibility.",
  },
  {
    id: 5,
    title: "Urban Sanctuary",
    category: "Residential",
    location: "Doha",
    image: "/images/1.png",
    area: "5,100 sq.ft",
    completion: "2025",
    sustainability: "94%",
    energySavings: "32% annually",
    description:
      "An urban residential project that creates a peaceful sanctuary within the bustling city environment.",
  },
];

const impactStats = [
  {
    number: "200+",
    label: "Successful Projects",
    description: "Completed sustainable projects across the region",
  },
  {
    number: "30%",
    label: "Energy Reduction",
    description: "Average energy savings in our buildings",
  },
  {
    number: "40%",
    label: "Water Conservation",
    description: "Water usage reduction through smart design",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    description: "Client satisfaction rate across all projects",
  },
];

export default function PortfolioSection({
  locale = "en",
}: PortfolioSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative bg-white">
      <Navbar locale={"en"} text="#FFF" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/portfolio.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-normal mb-6"
          >
            Designing Sustainable
            <br />
            <span className="block">Spaces</span>
            <span className="text-green-400 italic font-normal">
              That Inspire
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Every project tells a story of innovation, sustainability, and
            design excellence. We create spaces that not only inspire but also
            respect our environment.
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
              Explore Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Portfolio Overview
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Eco Homes, our portfolio reflects 200+ successful projects
              across diverse sectors. Each design blends sustainability,
              cultural relevance, and modern innovation resulting in spaces that
              are functional, timeless, and environmentally conscious.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/p-overview.png"
              alt="Portfolio Overview"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Project Categories Carousel */}
      <ProjectCategoriesCarousel />
      <ProjectCategoriesCarousel />
      <ProjectCategoriesCarousel />
      <ProjectCategoriesCarousel />

      {/* Impact Statistics */}
      {/* Impact Statistics */}
      <div className="py-20 bg-green-500" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Our Impact in
              <br />
              <span className="italic">Numbers</span>
            </h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              We believe great design should not only create beautiful but also
              protect our planet. That's why every decision from planning to
              material selection is rooted in sustainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-normal text-white mb-2">
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
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Your Vision,
            <br />
            <span className="text-green-500 italic">Our Design</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Explore how Eco Homes can bring your dream project to life. Whether
            it's sustainability, innovation or beauty.
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full"
          >
            Start Project
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function ProjectCategoriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Residential Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            We create homes that balance comfort, luxury, and eco-consciousness.
            From modern villas to high-rise residences, our designs redefine
            sustainable living.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {properties.map((property, index) => (
                <div
                  key={property.id}
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
                          <h3 className="text-3xl font-normal text-gray-900 mb-2">
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
