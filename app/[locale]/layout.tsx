import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata";

const neueMontreal = localFont({
  src: [
    {
      path: "../../publichttps://ecohomes.sa/fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../publichttps://ecohomes.sa/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../publichttps://ecohomes.sa/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../publichttps://ecohomes.sa/fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-default",
  display: "swap",
});

const ivyOraDisplay = localFont({
  src: [
    {
      path: "../../publichttps://ecohomes.sa/fonts/IvyOraDisplay/IvyOraDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../publichttps://ecohomes.sa/fonts/IvyOraDisplay/IvyOraDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../publichttps://ecohomes.sa/fonts/IvyOraDisplay/IvyOraDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ivyora-display",
  display: "swap",
  fallback: ["serif"],
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

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${neueMontreal.variable} ${ivyOraDisplay.variable}`}
    >
      <head>
        <link rel="icon" href="https://ecohomes.sa/icons/logo.svg" />
      </head>
      <body
        className={`${isRTL ? "font-arabic" : "font-montreal"} antialiased`}
      >
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
