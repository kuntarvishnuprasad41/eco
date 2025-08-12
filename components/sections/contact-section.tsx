"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import type { Translations } from '@/lib/translations'

interface ContactSectionProps {
  locale: string
  translations: Translations
}

export function ContactSection({ locale, translations }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-400 to-green-600 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Shape Together{' '}
            <br />
            Your <span className="italic">Atmosphere</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
            contact@ecohomes.com
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-white/90"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Mail className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">info@ecohomes.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Phone className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <MapPin className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-300">123 Design Street, Architecture City, AC 12345</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={translations.contact.form.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={translations.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder={translations.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold group"
              >
                {translations.contact.form.submit}
                <Send className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
