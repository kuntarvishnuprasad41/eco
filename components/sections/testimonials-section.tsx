"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  locale: string
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: locale === 'ar' ? 'أحمد المالكي' : 'Ahmed Al-Malki',
      role: locale === 'ar' ? 'مالك فيلا' : 'Villa Owner',
      content: locale === 'ar' 
        ? 'فريق إيكو هومز حول رؤيتي إلى واقع يفوق التوقعات. التصميم المستدام والاهتمام بالتفاصيل كان استثنائياً.'
        : 'ECO Homes team transformed my vision into reality beyond expectations. The sustainable design and attention to detail was exceptional.',
      rating: 5,
      project: locale === 'ar' ? 'فيلا الرياض' : 'Riyadh Villa'
    },
    {
      name: locale === 'ar' ? 'سارة الأحمد' : 'Sarah Al-Ahmad',
      role: locale === 'ar' ? 'مديرة شركة' : 'Company Director',
      content: locale === 'ar'
        ? 'الاحترافية والإبداع في التصميم جعل مكتبنا الجديد مساحة ملهمة للعمل والإنتاجية.'
        : 'The professionalism and creativity in design made our new office an inspiring space for work and productivity.',
      rating: 5,
      project: locale === 'ar' ? 'مكتب تجاري' : 'Commercial Office'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What Our{' '}
            <br />
            Clients <span className="text-green-500 italic">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Quote className="h-8 w-8 text-green-500 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-green-600 text-sm font-medium">{testimonial.project}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
