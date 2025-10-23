"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxW({
  locale,
  translations,
}: {
  locale: { locale: string };
  translations: { [key: string]: string };
}) {
  return (
    <HeroParallax
      products={products}
      locale={locale}
      translations={translations}
    />
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://google.com",
    thumbnail: "/images/effect.png",
  },
];
