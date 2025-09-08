import type { Metadata } from "next";

export async function generateMetadata(locale: string): Promise<Metadata> {
  const isArabic = locale === "ar";

  const title = isArabic
    ? "إيكو هومز - حيث يلتقي التصميم بالاستدامة"
    : "ECO Homes - Where Design Meets Sustainability";

  const description = isArabic
    ? "شركة متعددة التخصصات تقدم خدمات التصميم المعماري وتصميم المناظر الطبيعية والديكور الداخلي. هدفنا هو إنشاء مساحات مدروسة تجمع بين الوظيفة والاستدامة."
    : "ECO Homes is a multidisciplinary firm offering architecture, landscape, and interior design services. Our goal is to create functional spaces that balance functionality and sustainability.";

  return {
    title,
    description,
    keywords: isArabic
      ? "تصميم معماري, تصميم داخلي, تصميم مناظر طبيعية, استدامة, بناء أخضر"
      : "architecture, interior design, landscape design, sustainability, green building, eco-friendly",
    authors: [{ name: "ECO Homes" }],
    creator: "ECO Homes",
    publisher: "ECO Homes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://ecohomes.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "ECO Homes",
      images: [
        {
          url: "/eco-friendly-house.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/eco-friendly-house.png"],
      creator: "@ecohomes",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
