"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Food Blogger",
    content: "The cozy ambience at The Cat Caffé is unmatched! Perfect spot to work, read, or just unwind with a perfectly brewed cup of coffee.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Rahul Mehta",
    role: "Regular Customer",
    content: "Amazing food and even better service! The wood-fired pizzas are to die for. This has become our family's favorite weekend hangout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Ananya Singh",
    role: "Interior Designer",
    content: "The perfect hangout spot in Ludhiana! Instagrammable interiors, great playlist, and the tiramisu is absolutely divine. 10/10 recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-[#F5F1E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-[#6B4226] text-[#F5F1E8] px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-[#C8A165] text-[#C8A165]" : "fill-[#C8A165]/50 text-[#C8A165]/50"}`}
                />
              ))}
            </div>
            <span className="font-semibold">4.2</span>
            <span className="text-[#F5F1E8]/70">|</span>
            <span className="text-sm">Loved by locals in Ludhiana</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4226] mt-4 text-balance">
            Guest Experiences
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C8A165] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-[#3D2415]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A165] text-[#C8A165]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#6B4226]/80 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A165]/30"
                />
                <div>
                  <h4 className="font-semibold text-[#6B4226]">{testimonial.name}</h4>
                  <p className="text-sm text-[#6B4226]/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
