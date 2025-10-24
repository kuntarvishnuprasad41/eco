interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const isArabic = locale === "ar";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ECO Homes",
    url: `https://ecohomes.sa/${locale}`,
    logo: "https://ecohomes.sa/logo.png",
    description: isArabic
      ? "شركة متعددة التخصصات تقدم خدمات التصميم المعماري وتصميم المناظر الطبيعية والديكور الداخلي"
      : "A multidisciplinary firm offering architecture, landscape, and interior design services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Design Street",
      addressLocality: "Architecture City",
      addressRegion: "AC",
      postalCode: "12345",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@ecohomes.sa",
    },
    sameAs: [
      "https://facebook.com/ecohomes",
      "https://twitter.com/ecohomes",
      "https://linkedin.com/company/ecohomes",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ECO Homes",
    url: `https://ecohomes.sa/${locale}`,
    description: isArabic
      ? "حلول معمارية وداخلية وهندسية مبتكرة مصممة خصيصًا لرؤيتك"
      : "Innovative architectural, interior, and engineering solutions tailored to your vision",
    inLanguage: locale === "ar" ? "ar" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `https://ecohomes.sa/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
