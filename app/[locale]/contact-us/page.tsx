"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/layout/footer";

export default function EcoHomesContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
    website: "", // honeypot field
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      // bot detected
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact-ecohomes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          location: "",
          contact: "",
          message: "",
          website: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mb-60">
        <JsonLd locale={"en"} />
        <Navbar locale={"en"} text={"#000"} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-normal text-black leading-tight">
              Shape Your <br />
              Dream <br />
              <span className="text-green-500 italic font-normal">
                Space Together
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We'd love to hear from you. Whether it's a new home, a commercial
              project, or landscape design, our team is ready to bring your
              vision to life.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact
                </label>
                <Input
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows={3}
                  required
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full text-lg font-medium transition-colors"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  ❌ Oops! Something went wrong. Please try again.
                </p>
              )}

              <p className="text-xs text-gray-500 leading-relaxed">
                By pressing the submit button, I agree to Eco Homes contacting
                me by email. I also understand that any information I've shared
                in this form is subject to Eco Homes privacy policy.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Our Office */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h2 className="text-4xl font-normal text-black mb-4">Our Office</h2>
            <p className="text-lg text-gray-600">
              Eco Homes Architectural Engineering
            </p>
            <p className="text-gray-600">Al Narjes, Riyadh, Saudi Arabia</p>
          </div>
          <div className="text-right space-y-2">
            <a
              href="tel:+966508676290"
              className="text-lg text-black hover:text-green-500"
            >
              +966 50 867 6290
            </a>
            <a
              href="mailto:info@ecohomes.sa"
              className="text-gray-600 hover:text-green-500"
            >
              info@ecohomes.sa
            </a>
          </div>
        </div>
      </section>

      <Footer locale={"en"} />
    </div>
  );
}
