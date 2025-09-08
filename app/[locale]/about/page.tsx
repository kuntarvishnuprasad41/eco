import { Navbar } from "@/components/layout/navbar";
import {
  Building2,
  Leaf,
  Target,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Nav } from "react-day-picker";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar locale="en" text="#FFF" />

      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('/images/about.png')`,
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-normal text-white mb-6">
              Designing With Intention,
            </h1>
            <h2 className="text-4xl md:text-6xl font-normal text-green-400 mb-8 italic">
              Building With Precision
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              At Eco Homes, we create great design, goes beyond aesthetics—it
              embraces lifestyles, respects nature, and shapes the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Eco Homes is a multidisciplinary design and consulting firm
                based in Riyadh, Saudi Arabia, specializing in architecture,
                interior design, landscape design, engineering, and
                construction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a commitment to sustainability and innovation, we create
                spaces that are functional, functional, and timeless. Our
                projects reflect cultural identity while embracing international
                expertise through our network of global creative partners.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/s1.png"
                alt="Modern Architecture"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We design with a clear purpose merging innovation, culture, and
              sustainability to shape spaces that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                Every design integrates eco-conscious solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Functionality
              </h3>
              <p className="text-gray-600 text-sm">
                Spaces built for real lifestyles, not just aesthetics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Precision
              </h3>
              <p className="text-gray-600 text-sm">
                Attention to detail from concept to execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Culture
              </h3>
              <p className="text-gray-600 text-sm">
                Designs that respect context, tradition, and local identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-normal mb-6">Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To craft sustainable, innovative, and high-quality design
                solutions that improve daily living while reducing environmental
                impact.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-normal mb-6">Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become the leading design and consulting firm in the
                region—where architecture, sustainability, and modern living
                meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                Your Trusted Partner for
                <br />
                Sustainable, World-Class Design
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Choosing Eco Homes means more than hiring a design firm; it's
                partnering with a team blending creativity, sustainability, and
                precision engineering. Our approach combines global expertise
                with cultural relevance, ensuring every project is impactful,
                sustainable, and future-ready.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-green-600 mb-4">
                  What Sets Us Apart?
                </h3>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Multidisciplinary Expertise Under One Roof
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Designs Rooted in Sustainability and Innovation
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    A Global Perspective with Local Cultural Touch
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Proven Experience with Measurable Results
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                With 200+ projects delivered, we consistently achieve tangible
                outcomes like 30% energy savings, 40% water conservation, and
                50% less construction waste per project.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/s2.png"
                alt="Sustainable Modern House"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-400 to-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-normal mb-2">
                Let's Shape Together
              </h2>
              <h3 className="text-2xl font-normal italic text-green-100 mb-6">
                Your Atmosphere
              </h3>
              <p className="text-green-100 mb-8">contact@ecohomes.com</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-100" />
                  <span className="text-green-100">Riyadh, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-100" />
                  <span className="text-green-100">+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-100" />
                  <span className="text-green-100">info@ecohomes.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-normal text-white mb-6">
                Contact Us
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-normal mb-4">ECO</div>
              <p className="text-gray-400 text-sm">
                We are Workspace Design & Build Specialists with 200+ projects
                delivered across Saudi Arabia.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">OUR VERTICALS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">SUSTAINABILITY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Green Building
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Energy Efficiency
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Eco Materials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
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

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Privacy Policy | © Eco Homes 2024. All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
