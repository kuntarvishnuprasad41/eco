"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatsSectionProps {
  locale: string
}

export function StatsSection({ locale }: StatsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      value: '100%',
      label: locale === 'ar' ? 'نهج مستدام' : 'Sustainable Approach',
      description: locale === 'ar' ? 'جميع مشاريعنا تتبع معايير الاستدامة البيئية' : 'Every project follows environmental sustainability standards'
    },
    {
      value: '200+',
      label: locale === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
      description: locale === 'ar' ? 'مشاريع ناجحة في جميع أنحاء المنطقة' : 'Successful projects across the region'
    },
    {
      value: '15+',
      label: locale === 'ar' ? 'سنوات خبرة' : 'Years Experience',
      description: locale === 'ar' ? 'خبرة عميقة في التصميم المعماري المستدام' : 'Deep expertise in sustainable architectural design'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-green-400 mb-4">
                {stat.value}
              </div>
              <h3 className="text-xl font-medium mb-3">{stat.label}</h3>
              <p className="text-gray-400 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
