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
      name: "Abdullah Al-Qahtani",
      role: "Riyadh",
      content:
        "Eco Homes transformed our villa into a sustainable, modern sanctuary. Their attention to detail and commitment to eco-friendly design exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Salam Al-Dosari",
      role: "Jeddah",
      content:
        "Their designs blend elegance with sustainability—truly elevating the way we live and work",
      rating: 5,
    },
    {
      id: 3,
      name: "Fahad",
      role: "Dammam",
      content:
        "From Concept to completion, Eco Homes delivered exceptional service and innovative solutions that perfectly matched our vision.",
      rating: 5,
    },
    {
      id: 4,
      name: "Nasser Al-Shehri",
      role: "Jeddah",
      content:
        "Working with Eco Homes was a game-changer. Their expertise in sustainable architecture helped us create a home that is both beautiful and environmentally responsible.",
      rating: 5,
    },
    {
      id: 5,
      name: "Laila",
      role: "Riyadh",
      content:
        "The Eco Homes team brought our dream home to life with their innovative designs and sustainable practices. We couldn't be happier with the results!",
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
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
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
    <div className="flex flex-col gap-4 animate-scroll-vertical group ">
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
