import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "@/lib/translations";
import Explore from "@/components/Explore";
import StartProjects from "@/components/StartProjects";

export default async function Verticals({
  params,
}: {
  params: { locale: string };
}) {
  const translations = await getTranslations(params.locale);
  const verticals = translations.verticals;

  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <Navbar locale={params.locale} translations={translations} text="#FFF" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-cover bg-[url('/images/vertical.png')] px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainable-glass-wood-building.png"
            alt="Modern sustainable architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[url('/images/v1.png')] bg-cover" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 leading-tight">
            {verticals.hero.title.split("\n").map((line, i) => (
              <span
                key={i}
                className={i === 2 ? "text-emerald-400 italic block " : "block"}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {verticals.hero.subtitle}
          </p>
          <Explore />
        </div>
      </section>

      {/* Main Content Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between bg-gray-50">
        {/* Sidebar */}
        <div className="w-full lg:w-1/6 border-b lg:border-b-0 border-green-500 px-4 py-6 lg:sticky lg:top-20 self-start h-fit">
          {verticals.sidebar.map((item, index) => (
            <div
              key={index}
              className="py-6 border-t border-green-500 first:border-t-0 text-center"
            >
              <h2 className="text-lg sm:text-md font-semibold">
                {item.title?.toUpperCase()}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Verticals */}
        <div
          className="w-full lg:w-3/4 px-4 md:px-6 py-12 space-y-24"
          id="works"
        >
          {verticals.sections.map((section, index) => (
            <section key={index} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full h-auto"
                />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-emerald-600 font-semibold text-lg mb-4">
                      {verticals.keyHighlightsTitle}
                    </h3>
                    <div className="space-y-3">
                      {section.highlights.map((point, i) => (
                        <div className="flex items-center gap-3" key={i}>
                          <Check className="w-5 h-5 text-emerald-600" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-emerald-600 font-semibold text-lg mb-2">
                      {verticals.outcomeTitle}
                    </h3>
                    <p className="text-gray-600 italic">{section.outcome}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Sustainability Section */}
      <section className="py-20 bg-black text-white px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal">
            {verticals.sustainability.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mx-auto">
            {verticals.sustainability.text}
          </p>
        </div>
      </section>

      <Image
        src="/images/complex.png"
        alt="Sustainable building complex"
        width={1200}
        height={600}
        className="shadow-2xl w-full h-auto object-cover scale-110"
      />

      {/* Call to Action */}
      <section className="py-20 bg-emerald-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            {verticals.cta.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            {verticals.cta.text}
          </p>
          <StartProjects />
        </div>
      </section>

      {/* Footer */}
      <Footer translations={translations} locale={params.locale} />
    </div>
  );
}
