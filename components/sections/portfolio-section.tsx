"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PortfolioSectionProps {
  locale: string
}

export function PortfolioSection({ locale }: PortfolioSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImage, setCurrentImage] = useState(0)

  const project = {
    title: locale === 'ar' ? 'فيلا عصرية' : 'Modern Villa',
    location: locale === 'ar' ? 'الرياض' : 'Riyadh',
    area: '450',
    completion: '2023',
    sustainabilityScore: '95%',
    energyRating: locale === 'ar' ? 'ممتاز' : 'Excellent',
    images: [
      '/placeholder.svg?height=600&width=800&text=Modern+Villa+Interior+1',
      '/placeholder.svg?height=600&width=800&text=Modern+Villa+Interior+2',
      '/placeholder.svg?height=600&width=800&text=Modern+Villa+Interior+3'
    ]
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Showcasing{' '}
            <br />
            Our <span className="text-green-500 italic">Works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            {locale === 'ar' 
              ? 'اكتشف مجموعة مختارة من مشاريعنا المتميزة التي تجمع بين الابتكار والاستدامة والجمال الخالد.'
              : 'Discover a curated selection of our standout projects that blend innovation, sustainability, and timeless beauty in every detail.'
            }
          </p>
          <Button 
            variant="outline" 
            className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-8"
          >
            {locale === 'ar' ? 'عرض المحفظة' : 'View Portfolio'}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.images[currentImage] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImage + 1}`}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">{project.title}</h3>
              <p className="text-green-600 text-lg mb-8">{project.location}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    {locale === 'ar' ? 'المساحة' : 'Area'}
                  </div>
                  <div className="text-2xl font-light text-gray-900">{project.area} m²</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    {locale === 'ar' ? 'الإنجاز' : 'Completion'}
                  </div>
                  <div className="text-2xl font-light text-gray-900">{project.completion}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    {locale === 'ar' ? 'نقاط الاستدامة' : 'Sustainability Score'}
                  </div>
                  <div className="text-2xl font-light text-green-600">{project.sustainabilityScore}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    {locale === 'ar' ? 'تصنيف الطاقة' : 'Energy Rating'}
                  </div>
                  <div className="text-2xl font-light text-green-600">{project.energyRating}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
