"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { Translations } from "@/lib/translations";

interface ContactSectionProps {
  locale: string;
  translations: Translations;
}

export function ContactSection({ locale, translations }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-light text-black mb-4">Our Office</h2>
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
  );
}
