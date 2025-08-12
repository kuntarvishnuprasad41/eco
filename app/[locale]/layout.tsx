import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import '../globals.css'
import { generateMetadata as generateSEOMetadata } from '@/components/seo/metadata'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap'
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return generateSEOMetadata(params.locale)
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isRTL = locale === 'ar'
  
  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${inter.variable} ${notoSansArabic.variable}`}>
      <body className={`${isRTL ? 'font-arabic' : 'font-inter'} antialiased`}>
        {children}
      </body>
    </html>
  )
}
