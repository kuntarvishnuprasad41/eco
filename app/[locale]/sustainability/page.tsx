import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Zap, Recycle, Heart } from "lucide-react";

const sustainabilityItems = [
  {
    title: "Architecture",
    image: "/images/s1.png",
    alt: "Sustainable Architecture",
    description:
      "Designing buildings with sustainable materials, efficient layouts, and renewable energy integration.",
  },
  {
    title: "Interior Design",
    image: "/images/s2.png",
    alt: "Interior Design",
    description:
      "Creating beautiful interiors using eco-friendly materials and energy-efficient solutions.",
  },
  {
    title: "Landscape Design",
    image: "/images/s3.png",
    alt: "Landscape Design",
    description:
      "Designing outdoor spaces with native plants and sustainable water management systems.",
  },
  {
    title: "Engineering",
    image: "/images/s4.png",
    alt: "Engineering",
    description:
      "Implementing advanced sustainable technologies and energy-efficient building systems.",
  },
  {
    title: "Consultation",
    image: "/images/s5.png",
    alt: "Consultation",
    description:
      "Providing expert guidance on sustainable building practices and green certifications.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar locale={"en"} text={"#FFF"} />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/sustainability.png')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-normal mb-6">
            Sustainability at the
            <br />
            Heart of
            <br />
            <span className="text-emerald-400 italic">Every Design</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            At Eco Homes, sustainability isn't just an option, it's our
            foundation. Every project, plan and environment we create is rooted
            in sustainability.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Our Sustainability Philosophy */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              Our Sustainability
              <br />
              <span className="text-emerald-500 italic">Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe great design should not only elevate lifestyles but
              also protect our planet. That's why every decision from planning
              to material selection is rooted in sustainability.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/s.png"
              alt="Sustainable architecture with green glass ceiling"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Green Innovation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Using innovative and recycled materials to ensure sustainable
                  building, lower carbon footprint, and reduced environmental
                  impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Energy Efficiency
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Maximizing natural light, airflow, and renewable energy
                  systems to reduce energy use and environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Resource Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Implementing smart technologies to conserve water and energy,
                  optimize resources, and deliver sustainable living solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Healthy Living
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Promoting healthier, natural environments that boost
                  well-being, comfort, and environmental health, enhancing
                  sustainable lifestyles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Integrate Sustainability */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-normal mb-4">
            How We Integrate
            <br />
            <span className="text-emerald-400 italic">Sustainability</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {sustainabilityItems.map((item, index) => {
              // Custom spans for the first two items
              let colSpan = "col-span-1";
              if (index === 0) colSpan = "md:col-span-2"; // Wider card
              if (index === 1) colSpan = "md:col-span-1"; // Regular next to wide card

              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${colSpan} row-span-1`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
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
            })}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="py-20 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-normal mb-4">
            Our Impact in
            <br />
            <span className="italic">Numbers</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            We believe great design should not only elevate lifestyles but also
            protect our planet. That's why every decision from planning to
            material selection is rooted in sustainability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-6xl font-normal mb-2">200+</div>
              <p className="text-emerald-100">
                Sustainable projects completed with innovative eco-friendly
                solutions
              </p>
            </div>
            <div>
              <div className="text-6xl font-normal mb-2">30%</div>
              <p className="text-emerald-100">
                Average energy reduction achieved through our sustainable
                designs
              </p>
            </div>
            <div>
              <div className="text-6xl font-normal mb-2">40%</div>
              <p className="text-emerald-100">
                Reduction in construction waste through efficient planning
              </p>
            </div>
            <div>
              <div className="text-6xl font-normal mb-2">95%</div>
              <p className="text-emerald-100">
                Client satisfaction rate with our sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sustainability Matters */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/sustainable-wooden-building.png')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-normal mb-6">
            Why Sustainability Matters to Us
          </h2>
          <p className="text-xl leading-relaxed">
            Sustainability is not a trend in our responsibility. By adopting
            innovative, eco-friendly design, we create living and working spaces
            that not only enhance your lifestyle but also preserve our planet
            for future generations.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            Let's Build a<br />
            <span className="text-emerald-500 italic">
              Greener Tomorrow Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join Eco Homes in shaping a cleaner, more sustainable, including and
            future today. Together, we can create spaces that nurture both
            people and the planet.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer translations={} />
    </div>
  );
}
