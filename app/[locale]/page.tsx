import { Navbar } from '@/components/layout/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { StatsSection } from '@/components/sections/stats-section'
import { VerticalsSection } from '@/components/sections/verticals-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/layout/footer'
import { getTranslations } from '@/lib/translations'
import { JsonLd } from '@/components/seo/json-ld'

export default async function HomePage({ params }: { params: { locale: string } }) {
  const translations = await getTranslations(params.locale)
  
  return (
    <main className="min-h-screen">
      <JsonLd locale={params.locale} />
      <Navbar locale={params.locale} translations={translations} />
      <HeroSection locale={params.locale} translations={translations} />
      <AboutSection locale={params.locale} translations={translations} />
      <StatsSection locale={params.locale} />
      <VerticalsSection locale={params.locale} />
      <PortfolioSection locale={params.locale} />
      <TestimonialsSection locale={params.locale} />
      <ContactSection locale={params.locale} translations={translations} />
      <Footer locale={params.locale} />
    </main>
  )
}
