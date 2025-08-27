"use client";

import { useEffect, useRef, useState } from "react";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;

      // Scroll progress within the section only
      const scrollYInside = Math.min(Math.max(-rect.top, 0), containerHeight);
      const progress = scrollYInside / containerHeight;

      const newScale = 1 - progress * 0.5; // From 1 to 0.5
      setScale(Math.max(newScale, 0.5));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] overflow-hidden bg-black"
    >
      {/* Image that scales within section and is pinned to bottom */}
      <div
        className="absolute bottom-0 left-1/2 w-full h-full z-0"
        style={{
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "bottom center",
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/images/1.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Sticky text content */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl text-balance">
            Experience the Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Discover breathtaking landscapes and unforgettable moments as you
            scroll through our immersive parallax experience.
          </p>
        </div>
      </div>
    </div>
  );
}
