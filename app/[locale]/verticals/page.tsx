import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Leaf,
  Building,
  Palette,
  TreePine,
  Cog,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { getTranslations } from "@/lib/translations";
import { JsonLd } from "@/components/seo/json-ld";

export default async function Verticals({
  params,
}: {
  params: { locale: string };
}) {
  const translations = await getTranslations(params.locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <JsonLd locale={params.locale} /> */}
      <Navbar locale={params.locale} translations={translations} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainable-glass-wood-building.png"
            alt="Modern sustainable architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Shaping Excellence
            <br />
            Across Every
            <br />
            <span className="text-emerald-400 italic">Design Verticals</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From architectural marvels to sustainable landscapes, we create
            spaces that harmonize with nature while delivering uncompromising
            quality and innovation.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Explore Our Work
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <div className="w-screen flex justify-around bg-gray-50 w-screen">
        <div>
          {" "}
          <div className="w-full  text-black">
            {/* Section 1 */}
            <div className="h-40 flex items-center justify-center">
              <h2 className="text-md font-semibold">Section 1</h2>
            </div>
            <div className="border-t border-green-500" />

            {/* Section 2 */}
            <div className="h-40 flex items-center justify-center">
              <h2 className="text-md font-semibold">Section 2</h2>
            </div>
            <div className="border-t border-green-500" />

            {/* Section 3 */}
            <div className="h-40 flex items-center justify-center">
              <h2 className="text-md font-semibold">Section 3</h2>
            </div>
            <div className="border-t border-green-500" />

            {/* Section 4 */}
            <div className="h-40 flex items-center justify-center">
              <h2 className="text-md font-semibold">Section 4</h2>
            </div>
            <div className="border-t border-green-500" />

            {/* Section 5 */}
            <div className="h-40 flex items-center justify-center">
              <h2 className="text-md font-semibold">Section 5</h2>
            </div>
          </div>
        </div>
        <section id="services" className="py-20 bg-gray-50  ">
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              {/* Architecture */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Building className="w-8 h-8 text-emerald-500 mr-3" />
                      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Architecture
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Innovative & Sustainable
                      <br />
                      Architecture
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Designing structures that seamlessly blend cutting-edge
                      aesthetics with environmental responsibility. Our
                      architectural solutions prioritize energy efficiency,
                      natural materials, and harmonious integration with the
                      surrounding landscape.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-4">
                        Key Highlights:
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            LEED certified sustainable designs
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Optimized natural lighting and ventilation
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Renewable energy integration
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Smart building automation systems
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="/sustainable-building-exterior.png"
                      alt="Sustainable architecture"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Interior Design */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-4">
                      <Palette className="w-8 h-8 text-emerald-500 mr-3" />
                      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Interior Design
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Elegant Interiors That
                      <br />
                      Elevate Living
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Creating sophisticated interior spaces that reflect your
                      personality while maintaining eco-consciousness. Our
                      designs combine luxury with sustainability, using natural
                      materials and energy-efficient solutions.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-4">
                        Key Highlights:
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Eco-friendly material selection
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Biophilic design principles
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Lighting & spatial optimization
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Sustainable material sourcing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:order-1 relative">
                    <Image
                      src="/modern-natural-interior.png"
                      alt="Elegant interior design"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Landscape Design */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <TreePine className="w-8 h-8 text-emerald-500 mr-3" />
                      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Landscape Design
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Green, Serene & Smart
                      <br />
                      Landscapes
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Designing outdoor spaces that enhance natural beauty while
                      promoting biodiversity. Our landscape solutions integrate
                      native plants, water conservation systems, and sustainable
                      maintenance practices.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-4">
                        Key Highlights:
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Native plant ecosystems
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Rainwater harvesting systems
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Permeable hardscape solutions
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Smart irrigation systems
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="/sustainable-landscape.png"
                      alt="Sustainable landscape design"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Engineering */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-4">
                      <Cog className="w-8 h-8 text-emerald-500 mr-3" />
                      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Engineering
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Precision-Driven
                      <br />
                      Engineering
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Delivering technical excellence through innovative
                      engineering solutions. We ensure every project is
                      meticulously planned, structurally sound, and built for
                      long-term sustainability.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-4">
                        Key Highlights:
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Structural & civil engineering
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            MEP systems optimization
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Smart building systems
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Seismic & environmental analysis
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:order-1 relative">
                    <Image
                      src="/engineering-blueprints.png"
                      alt="Engineering solutions"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project Consultation */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Users className="w-8 h-8 text-emerald-500 mr-3" />
                      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Project Consultation
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      End-to-End Project
                      <br />
                      Consultation
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Guiding you through every phase of your project from
                      initial design to delivery. Our comprehensive consultation
                      services ensure seamless execution and exceptional results
                      that exceed expectations.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-4">
                        Key Highlights:
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Master planning & feasibility studies
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Design development & quality control
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Project scheduling & budget control
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">
                            Post-completion support
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="/placeholder-gsoh8.png"
                      alt="Project consultation"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sustainability Impact Section */}
      <section id="sustainability" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Verticals Drive
              <br />
              <span className="text-emerald-400 italic">
                Sustainable Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each vertical integrates eco-conscious practices, from
              architecture to engineering, ensuring reduced carbon footprint,
              enhanced resource efficiency, and sustainable living environments
              for future generations.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/sustainable-building-complex.png"
              alt="Sustainable building complex"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Shape Together
            <br />
            <span className="text-emerald-600 italic">Your Transformers</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Partner with Eco Homes to create a landmark, innovative, and
            sustainably environment that transforms your vision into reality.
            Let's build something extraordinary together.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ECO</span>
                <span className="text-sm text-gray-400">VERTICALS</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                We are the premier Design & Build company in India, specializing
                in sustainable architecture, innovative interiors, and
                eco-conscious landscapes.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                OUR SERVICES
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Landscape
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                COMPANY
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Eco Verticals. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
