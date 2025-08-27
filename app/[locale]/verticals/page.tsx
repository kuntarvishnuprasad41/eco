import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "@/lib/translations";
// import { JsonLd } from "@/components/seo/json-ld"; // Optional

export default async function Verticals({
  params,
}: {
  params: { locale: string };
}) {
  const translations = await getTranslations(params.locale);

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
            Shaping Excellence <br />
            Across Every <br />
            <span className="text-emerald-400 italic">Design Verticals</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From architectural marvels to sustainable landscapes, we create
            spaces that harmonize with nature while delivering uncompromising
            quality and innovation.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-base sm:text-lg">
            Explore Our Work
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between bg-gray-50">
        {/* Sidebar */}
        <div className="w-full lg:w-1/6 border-b lg:border-b-0 border-green-500 px-4 py-6 lg:sticky lg:top-20 self-start h-fit">
          {[
            "Architecture",
            "Interior Design ",
            "Landscape Design",
            "Engineering",
            "Consultation and Supervision",
          ].map((title, index) => (
            <div
              key={index}
              className="py-6 border-t border-green-500 first:border-t-0 text-center"
            >
              <h2 className="text-sm sm:text-md font-semibold">{title}</h2>
              <p>
                Designing timeless, sustainable structures that balance culture,
                climate, creativity, and innovation.
              </p>
            </div>
          ))}
        </div>

        {/* Verticals */}
        <div className="w-full lg:w-3/4 px-4 md:px-6 py-12 space-y-24">
          {[
            {
              title: "Innovative & Sustainable Architecture",
              text: "We design purposeful buildings that balance culture, climate, and creativity. Our architectural solutions are sustainable, functional, and timelessly crafted to inspire generations.",
              highlights: [
                "Luxury residences & villas",
                "Commercial & mixed-use developments",
                "Sustainable building design",
                "Master planning & urban design",
              ],
              outcome:
                "Spaces that inspire, adapt to modern lifestyles, and endure with elegance.",
              image: "/images/1.png",
              alt: "Modern kitchen interior",
            },
            {
              title: "Elegant Interiors That Elevate Living",
              text: "Creating interior beauty with practicality, tailored to reflect personal identity and functionality while embracing eco-conscious materials and modern aesthetics.",
              highlights: [
                "Luxury residential interiors",
                "Corporate & commercial fit-outs",
                "Lighting & spatial optimization",
                "Sustainable material selection",
              ],
              outcome:
                "Interiors that transform everyday living into refined experiences.",
              image: "/images/2.png",
              alt: "Luxurious bathroom interior",
            },
            {
              title: "Green, Serene & Smart Landscapes",
              text: "We create outdoor environments that blend nature and design, enhancing well-being while conserving resources with sustainable strategies and smart systems.",
              highlights: [
                "Gardens & courtyards",
                "Urban & commercial landscapes",
                "Native planting & green coverage",
                "Water-saving irrigation systems",
              ],
              outcome:
                "Serene, resource-efficient spaces that nurture people and the planet.",
              image: "/images/3.png",
              alt: "Modern landscape design",
            },
            {
              title: "Precision-Driven Engineering",
              text: "Our engineering solutions provide structural integrity, efficiency, and innovation. We ensure every project is reliable, safe, and built for long-term sustainability.",
              highlights: [
                "Structural & civil engineering",
                "Mechanical, electrical & plumbing (MEP)",
                "Smart building systems",
                "Sustainable energy solutions",
              ],
              outcome:
                "Future-ready infrastructure that supports modern living.",
              image: "/images/4.png",
              alt: "Modern building facade",
            },
            {
              title: "End-to-End Project Consultation",
              text: "We provide expert guidance and supervision from design to delivery, ensuring quality, timeliness, and cost-efficiency in every project.",
              highlights: [
                "Feasibility & design consultation",
                "Vendor & contractor coordination",
                "On-site supervision & quality checks",
                "Project scheduling & budget control",
              ],
              outcome: "Seamless execution and successful project delivery.",
              image: "/images/5.png",
              alt: "Project consultation interior",
            },
          ].map((section, index) => (
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
                      Key Highlights
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
                      Outcome
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
        <div className="max-w-6xl mx-auto   space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal">
            How Our Verticals Drive <br />
            <span className="text-emerald-400 italic">Sustainable Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300  mx-auto">
            Each vertical integrates eco-conscious practices, from architecture
            to engineering, ensuring reduced carbon footprint, enhanced resource
            efficiency, and sustainable living environments for future
            generations.
          </p>
        </div>
      </section>
      <Image
        src="/images/complex.png"
        alt="Sustainable building complex"
        width={1200}
        height={600}
        className="  shadow-2xl w-full h-auto object-cover scale-110"
      />

      {/* Call to Action */}
      <section className="py-20 bg-emerald-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Let's Shape Together
            <br />
            <span className="text-emerald-600 italic">Your Atmosphere</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Partner with Eco Homes to create a landmark, innovative, and
            sustainably environment that transforms your vision into reality.
            Let's build something extraordinary together.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-base sm:text-lg rounded-full">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
