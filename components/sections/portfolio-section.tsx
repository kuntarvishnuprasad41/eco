"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Translations } from "@/lib/translations";

export function PortfolioSection({
  locale,
  translations,
}: {
  locale: string;
  translations: Translations;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

  const portfolio = translations.portfolioSection;

  return (
    <div className="relative bg-white" dir="ltr">
      <div className="text-center mb-16 pt-10">
        <h2
          className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
          dangerouslySetInnerHTML={{ __html: portfolio.title }}
        />
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          {portfolio.subtitle}
        </p>
        <Button
          variant="outline"
          className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-8"
          onClick={() => (window.location.href = `/${locale}/verticals`)}
        >
          {portfolio.button}
        </Button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {portfolio.properties.map((property, index) => (
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
                    className="w-full h-full object-cover"
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
    </div>
  );
}
