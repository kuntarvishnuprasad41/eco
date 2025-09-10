"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/layout/footer";
import type { Translations } from "@/lib/translations";

interface EcoHomesContactProps {
  locale?: string;
  translations?: Translations;
}

export default function EcoHomesContact({
  locale = "en",
  translations,
}: EcoHomesContactProps) {
  const t = translations?.contactPage;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // bot detected
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
      } else throw new Error("Failed to submit");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-60">
        <JsonLd locale={locale} />
        <Navbar
          locale={locale}
          text={locale === "ar" ? "#FFF" : "#000"}
          translations={translations}
        />
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-normal text-black leading-tight">
              {t?.hero?.title}
              <br />
              <span className="text-green-500 italic font-normal">
                {t?.hero?.subtitle}
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              {t?.hero?.description}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  {t?.form?.name}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t?.form?.name}
                  required
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.form?.email}
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t?.form?.email}
                  required
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.form?.location}
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={t?.form?.location}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.form?.contact}
                </label>
                <Input
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder={t?.form?.contact}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-green-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.form?.message}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t?.form?.message}
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
                {status === "loading" ? t?.form?.submitting : t?.form?.submit}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  {t?.form?.successMessage}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  {t?.form?.errorMessage}
                </p>
              )}
              <p className="text-xs text-gray-500 leading-relaxed">
                {t?.form?.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Office */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h2 className="text-4xl font-normal text-black mb-4">
              {t?.office?.title}
            </h2>
            <p className="text-lg text-gray-600">{t?.office?.companyName}</p>
            <p className="text-gray-600">{t?.office?.address}</p>
          </div>
          <div className="text-right space-y-2">
            <a
              href={`tel:${t?.office?.phone}`}
              className="text-lg text-black hover:text-green-500"
            >
              {t?.office?.phone}
            </a>
            <a
              href={`mailto:${t?.office?.email}`}
              className="text-gray-600 hover:text-green-500"
            >
              {t?.office?.email}
            </a>
          </div>
        </div>
      </section>

      <Footer locale={locale} translations={translations} />
    </div>
  );
}
