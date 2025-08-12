"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { motion, AnimatePresence } from 'framer-motion'
import type { Translations } from '@/lib/translations'

interface NavbarProps {
  locale: string
  translations: Translations
}

export function Navbar({ locale, translations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isRTL = locale === 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}#verticals`, label: locale === 'ar' ? 'خدماتنا' : 'OUR VERTICALS' },
    { href: `/${locale}#sustainability`, label: locale === 'ar' ? 'الاستدامة' : 'SUSTAINABILITY' },
    { href: `/${locale}#about`, label: locale === 'ar' ? 'من نحن' : 'ABOUT US' },
    { href: `/${locale}#portfolio`, label: locale === 'ar' ? 'أعمالنا' : 'PORTFOLIO' },
    { href: `/${locale}#contact`, label: locale === 'ar' ? 'اتصل بنا' : 'CONTACT US' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 rtl:space-x-reverse">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold gradient-text">ECO Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher currentLocale={locale} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
