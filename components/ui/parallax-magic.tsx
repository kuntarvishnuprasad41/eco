"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress when section is in view
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Progress from 0 to 1 as the section scrolls through the viewport
      let progress = 0;

      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        // Section is in viewport
        const totalScrollDistance = sectionHeight + windowHeight;
        const scrolled = windowHeight - sectionTop;
        progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      } else if (sectionBottom < 0) {
        // Section has scrolled past
        progress = 1;
      }

      setScrollProgress(progress);

      // Apply transform to image
      const image = imageRef.current;
      const scale = Math.max(0.3, 1 - progress * 0.7); // Scale from 1 to 0.3
      const translateY = progress * 40; // Move down by 40% of container height

      image.style.transform = `scale(${scale}) translateY(${translateY}%)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-gray-900"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url('/photography-gallery-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center bottom",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Sticky Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Parallax Magic
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Watch as the background image shrinks and moves while this content
            stays perfectly in place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Get Started
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-12">
            <div className="w-32 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-75 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <p className="text-sm mt-2 opacity-70">Scroll Progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}
