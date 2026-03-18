"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Camera, ChefHat, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Cozy Ambience",
    description: "Warm lighting, soft music, and comfortable seating that makes you feel right at home",
  },
  {
    icon: Camera,
    title: "Instagrammable Interiors",
    description: "Every corner is a photo opportunity - aesthetic design meets functionality",
  },
  {
    icon: ChefHat,
    title: "Quality Food",
    description: "Fresh ingredients, authentic recipes, and dishes crafted with passion",
  },
  {
    icon: Heart,
    title: "Friendly Service",
    description: "Our team treats every guest like family - warm welcomes and genuine smiles",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F5F1E8] to-[#E8D5B0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium">
            The Difference
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4226] mt-4 text-balance">
            Why Choose Us
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-10 h-10 text-[#C8A165] group-hover:text-[#6B4226] transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-serif text-[#6B4226] mb-3">{feature.title}</h3>
                <p className="text-[#6B4226]/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
