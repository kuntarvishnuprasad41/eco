import { Home, Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  locale: string
}

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ECO Homes</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {locale === 'ar' 
                ? 'شركة متعددة التخصصات تقدم حلول معمارية مبتكرة ومستدامة.'
                : 'A multidisciplinary firm offering innovative and sustainable architectural solutions.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li><a href={`/${locale}#home`} className="text-gray-300 hover:text-white transition-colors">{locale === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
              <li><a href={`/${locale}#about`} className="text-gray-300 hover:text-white transition-colors">{locale === 'ar' ? 'من نحن' : 'About'}</a></li>
              <li><a href={`/${locale}#services`} className="text-gray-300 hover:text-white transition-colors">{locale === 'ar' ? 'الخدمات' : 'Services'}</a></li>
              <li><a href={`/${locale}#contact`} className="text-gray-300 hover:text-white transition-colors">{locale === 'ar' ? 'اتصل بنا' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@ecohomes.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Design Street, Architecture City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ECO Homes. {locale === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
