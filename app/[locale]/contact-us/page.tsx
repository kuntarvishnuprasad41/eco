"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EcoHomesContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center py-4">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-8 h-8 rounded-full border-2 border-green-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-green-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-green-500"></div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-light">البيوت الايكولوجية</div>
                <div className="text-xs">ECO HOMES</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-700">
            <div className="flex justify-center space-x-8 py-4">
              <a
                href="#"
                className="text-sm hover:text-green-500 transition-colors"
              >
                OUR VERTICALS
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-500 transition-colors"
              >
                SUSTAINABILITY
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-500 transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-500 transition-colors"
              >
                PORTFOLIO
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-500 transition-colors"
              >
                CONSULT US
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight">
                Shape Your
                <br />
                Dream
                <br />
                <span className="text-green-500 italic font-light">
                  Space Together
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We'd love to hear from you. Whether it's a new home, a commercial
              project, or landscape design, our team is ready to bring your
              vision to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact
                </label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Enter your contact number"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0 resize-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full text-lg font-medium transition-colors"
              >
                Submit
              </Button>

              <p className="text-xs text-gray-500 leading-relaxed">
                By pressing the submit button, I agree to Eco Homes contacting
                me by email. I also understand that any information I've shared
                in this form is subject to Eco Homes privacy policy.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Our Office Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-light text-black mb-4">
                Our Office
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="text-lg">Eco Homes Architectural Engineering</p>
                <p>Al Narjes, Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <a
                href="tel:+966508676290"
                className="text-lg text-black hover:text-green-500 transition-colors block"
              >
                +966 50 867 6290
              </a>
              <a
                href="mailto:info@ecohomes.sa"
                className="text-gray-600 hover:text-green-500 transition-colors block"
              >
                info@ecohomes.sa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2">
                  <div className="text-sm font-light">البيوت الايكولوجية</div>
                  <div className="text-xs">ECO HOMES</div>
                </div>
              </div>

              <p className="text-sm max-w-xs leading-relaxed">
                We are Workplace Design & Build specialists with 5 years of
                experience – Riyadh | 2020
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <a
                href="#"
                className="block text-sm hover:text-gray-200 transition-colors"
              >
                OUR VERTICALS
              </a>
              <a
                href="#"
                className="block text-sm hover:text-gray-200 transition-colors"
              >
                SUSTAINABILITY
              </a>
              <a
                href="#"
                className="block text-sm hover:text-gray-200 transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="block text-sm hover:text-gray-200 transition-colors"
              >
                PORTFOLIO
              </a>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-green-400">
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <span className="text-sm">ig</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <span className="text-sm">x</span>
              </a>
            </div>

            <div className="flex space-x-8 text-xs">
              <a href="#" className="hover:text-gray-200 transition-colors">
                Privacy policy
              </a>
              <span>© Eco Homes 2025. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
