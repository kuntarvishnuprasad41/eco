import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Zap, Recycle, Heart } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "@/lib/translations";
import React from "react";
import { LearnMore } from "@/components/Explore";

export default async function SustainabilityPage({
  params,
}: {
  params: { locale: string };
}) {
  const translations = await getTranslations(params.locale);
  const sustainability = translations.sustainabilityPage;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar
        locale={params.locale}
        translations={translations}
        text={"#FFF"}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${sustainability.hero.backgroundImage}')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-normal mb-6">
            {sustainability.hero.title
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {sustainability.hero.subtitle}
          </p>
          <LearnMore data={sustainability.hero.ctaText} />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="us">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              {sustainability.philosophy.title
                .split("\n")
                .map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              <span className="text-emerald-500 italic">
                {sustainability.philosophy.highlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {sustainability.philosophy.description}
            </p>
          </div>
          <div className="relative">
            <Image
              src={sustainability.philosophy.image}
              alt={sustainability.philosophy.alt}
              width={800}
              height={320}
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainability.pillars.map((pillar: any, i: number) => (
              <Card
                key={i}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(
                      { Leaf, Zap, Recycle, Heart }[pillar.icon],
                      { className: "w-8 h-8 text-emerald-600" }
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-normal mb-4">
            {sustainability.integration.title
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {sustainability.integration.items.map(
              (item: any, index: number) => {
                const colSpan = index === 0 ? "md:col-span-2" : "md:col-span-1";
                return (
                  <div
                    key={index}
                    className={`relative group cursor-pointer ${colSpan} row-span-1`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={600}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-normal mb-4">
            {sustainability.impact.title}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            {sustainability.impact.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainability.impact.stats.map((stat: any, i: number) => (
              <div key={i}>
                <div className="text-6xl font-normal mb-2">{stat.value}</div>
                <p className="text-emerald-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sustainability */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${sustainability.why.image}')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-normal mb-6">
            {sustainability.why.title}
          </h2>
          <p className="text-xl leading-relaxed">
            {sustainability.why.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            {sustainability.cta.title
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {sustainability.cta.subtitle}
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
            {sustainability.cta.buttonText}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer translations={translations} locale={params.locale} />
    </div>
  );
}
