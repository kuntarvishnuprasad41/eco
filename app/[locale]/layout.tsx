import type { Metadata } from "next";
import localFont from "next/font/local";

import { Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-default",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generateSEOMetadata(params.locale);
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${neueMontreal.variable} ${notoSansArabic.variable}`}
    >
      <body
        className={`${isRTL ? "font-arabic" : "font-montreal"} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
