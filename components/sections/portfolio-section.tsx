"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VerticalsSectionProps {
  locale: string;
}

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Riyadh",
    image: "/images/villa.png",
    area: "5,500 sq.ft",
    completion: "2024",
    sustainability: "95%",
    energySavings: "30% annually",
  },
  {
    id: 2,
    title: "Eco Residence",
    location: "Dubai",
    image: "/images/car1.png",
    area: "4,200 sq.ft",
    completion: "2024",
    sustainability: "92%",
    energySavings: "35% annually",
  },
  {
    id: 3,
    title: "Smart Home",
    location: "Abu Dhabi",
    image: "/images/car2.png",
    area: "6,800 sq.ft",
    completion: "2025",
    sustainability: "98%",
    energySavings: "40% annually",
  },
  {
    id: 4,
    title: "Green Oasis",
    location: "Jeddah",
    image: "/images/car3.png",
    area: "3,900 sq.ft",
    completion: "2024",
    sustainability: "89%",
    energySavings: "28% annually",
  },
  {
    id: 5,
    title: "Urban Sanctuary",
    location: "Doha",
    image: "/images/us.png",
    area: "5,100 sq.ft",
    completion: "2025",
    sustainability: "94%",
    energySavings: "32% annually",
  },
];

export function PortfolioSection({ locale }: VerticalsSectionProps) {
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
      <div className="text-center mb-16 pt-10">
        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
          Showcasing <br />
          Our <span className="text-green-500 italic">Works</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          {locale === "ar"
            ? "اكتشف مجموعة مختارة من مشاريعنا المتميزة التي تجمع بين الابتكار والاستدامة والجمال الخالد."
            : "Discover a curated selection of our standout projects that blend innovation, sustainability, and timeless beauty in every detail."}
        </p>
        <Button
          variant="outline"
          className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-8"
          onClick={() => {
            window.location.href = `/${locale}/verticals`;
          }}
        >
          {locale === "ar" ? "عرض المحفظة" : "View Portfolio"}
        </Button>
      </div>

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
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg ">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover relative z-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-normal text-foreground mb-1">
                        {property.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {property.location}
                      </p>
                    </div>
                  </div>

                  {selectedIndex === index && (
                    <div className="border-t border-border pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Area
                          </p>
                          <p className="text-lg font-semibold text-green-600">
                            {property.area}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Completion
                          </p>
                          <p className="text-lg font-semibold text-green-600">
                            {property.completion}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Sustainability Score
                          </p>
                          <p className="text-lg font-semibold text-green-600">
                            {property.sustainability}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Energy Savings
                          </p>
                          <p className="text-lg font-semibold text-green-600">
                            {property.energySavings}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
