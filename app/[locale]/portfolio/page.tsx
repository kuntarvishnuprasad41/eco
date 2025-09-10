// app/[locale]/portfolio/page.tsx
import { notFound } from "next/navigation";

import { getTranslations, type Translations } from "@/lib/translations";
import PortfolioSection from "@/components/Portfolio";

interface PortfolioPageProps {
  params: { locale: string };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = params;

  let translations: Translations;
  try {
    translations = await getTranslations(locale);
  } catch (err) {
    console.error("Error loading translations:", err);
    return notFound();
  }

  // Ensure portfolioPage exists
  if (!translations.portfolioPage) {
    return notFound();
  }

  return <PortfolioSection translations={translations} locale={locale} />;
}
