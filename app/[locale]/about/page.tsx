import AboutPage from "@/components/AboutPage";
import en from "@/public/locales/en/data.json";
import ar from "@/public/locales/ar/data.json";

export default function Page({ params: { locale } }) {
  const translations = locale === "ar" ? ar : en;

  return <AboutPage locale={locale} translations={translations} />;
}
