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
import type { Translations } from "@/lib/translations";
import { Footer } from "./layout/footer";

export default function AboutPage({
  locale,
  translations,
}: {
  locale: string;
  translations: Translations;
}) {
  const isRTL = locale === "ar";

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <Navbar locale={locale} text="#FFF" translations={translations} />

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
              {translations.aboutPage.hero.title}
            </h1>
            <h2 className="text-4xl md:text-6xl font-normal text-green-400 mb-8 italic">
              {translations.aboutPage.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {translations.aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                {translations.aboutPage.whoWeAre.title}
              </h2>
              {translations.aboutPage.whoWeAre.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-6 leading-relaxed">
                  {p}
                </p>
              ))}
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
          <br />
          <div>
            <h2 className="text-4xl font-normal text-gray-900 mb-6">
              {translations.aboutPage.founder.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {translations.aboutPage.founder.message}
            </p>
            <p>— {translations.aboutPage.founder.signature}</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              {translations.aboutPage.philosophy.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.aboutPage.philosophy.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {translations.aboutPage.philosophy.values.map((val, i) => {
              const Icon =
                i === 0 ? Leaf : i === 1 ? Building2 : i === 2 ? Target : Users;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-normal mb-6">
              {translations.aboutPage.mission.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {translations.aboutPage.mission.description}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal mb-6">
              {translations.aboutPage.vision.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {translations.aboutPage.vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partner */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-normal text-gray-900 mb-6">
              {translations.aboutPage.partner.title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {translations.aboutPage.partner.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-green-600 mb-4">
                {translations.aboutPage.partner.uniqueTitle}
              </h3>
              {translations.aboutPage.partner.uniquePoints.map((p, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              {translations.aboutPage.partner.stats}
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
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-br from-green-400 to-green-600">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-normal mb-2">
              {translations.aboutPage.contact.title}
            </h2>
            <h3 className="text-2xl font-normal italic text-green-100 mb-6">
              {translations.aboutPage.contact.subtitle}
            </h3>
            <p className="text-green-100 mb-8">
              {translations.aboutPage.contact.email}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-100" />
                <span className="text-green-100">
                  {translations.aboutPage.contact.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-100" />
                <span className="text-green-100">
                  {translations.aboutPage.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-100" />
                <span className="text-green-100">
                  {translations.aboutPage.contact.altEmail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer locale={locale} translations={translations} />
    </div>
  );
}
