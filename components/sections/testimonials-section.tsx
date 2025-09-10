"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Translations } from "@/lib/translations";

interface TestimonialsSectionProps {
  locale: string;
  translations: Translations;
}

export function TestimonialsSection({
  locale,
  translations,
}: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = translations.testimonials;

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Heading */}
          <div
            className="text-center mb-16"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(50px)",
              transition: "all 0.8s ease",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              {testimonials.title} <br />
              <span className="text-green-500 italic">
                {testimonials.highlight}
              </span>
            </h2>
          </div>

          {/* Right side - Auto-scrolling review cards */}
          <div className="grid grid-cols-2 gap-4 h-96 overflow-hidden">
            <ScrollingColumn
              reviews={testimonials.reviews.slice(0, 3)}
              direction="up"
            />
            <ScrollingColumn
              reviews={testimonials.reviews.slice(3, 6)}
              direction="down"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollingColumn({
  reviews,
  direction,
}: {
  reviews: any[];
  direction: "up" | "down";
}) {
  return (
    <div className="flex flex-col gap-4 animate-scroll-vertical group">
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-vertical {
          animation: ${direction === "up" ? "scroll-up" : "scroll-down"} 20s
            linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {[...reviews, ...reviews].map((review, index) => (
        <div
          key={`${review.id}-${index}`}
          className="bg-card border rounded-2xl p-6 shadow-sm"
        >
          <p className="text-card-foreground text-sm leading-relaxed mb-4">
            "{review.content}"
          </p>
          <div>
            <p className="font-semibold text-card-foreground text-sm">
              {review.name}
            </p>
            <p className="text-muted-foreground text-xs">{review.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
