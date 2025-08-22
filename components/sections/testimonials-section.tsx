"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  locale: string;
}
export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      content:
        "This platform has completely transformed how we handle our workflow. The intuitive design and powerful features make it a joy to use every day.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "Outstanding performance and reliability. The development team has created something truly exceptional that scales beautifully.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "The analytics and insights provided are game-changing. We've seen a 40% improvement in our campaign performance since switching.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CEO",
      content:
        "Incredible value for money. This solution has streamlined our operations and saved us countless hours every week.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Designer",
      content:
        "The user experience is phenomenal. Every interaction feels smooth and purposeful. Highly recommend to any team.",
      rating: 5,
    },
    {
      id: 6,
      name: "James Miller",
      role: "Operations Manager",
      content:
        "Robust, reliable, and feature-rich. This platform handles everything we throw at it with ease and precision.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Heading and description */}
          <div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What Our <br />
              Clients <span className="text-green-500 italic">Say</span>
            </h2>
          </div>

          {/* Right side - Auto-scrolling review cards in 2 columns */}
          <div className="grid grid-cols-2 gap-4 h-96 overflow-hidden">
            <ScrollingColumn reviews={reviews.slice(0, 3)} direction="up" />
            <ScrollingColumn reviews={reviews.slice(3, 6)} direction="down" />
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

      {/* Duplicate reviews for seamless loop */}
      {[...reviews, ...reviews].map((review, index) => (
        <div
          key={`${review.id}-${index}`}
          className="bg-card border rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-center gap-1 mb-3">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
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
