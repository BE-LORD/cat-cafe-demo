"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Sofa, TreePine, Instagram } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Book Wall",
    description: "Our stunning wall of open books creates a magical, Instagram-worthy ambience",
  },
  {
    icon: Sofa,
    title: "Cozy Seating",
    description: "Plush teal velvet chairs designed for hours of comfortable lounging",
  },
  {
    icon: TreePine,
    title: "Indoor & Outdoor",
    description: "Choose your vibe - intimate interiors or breezy outdoor wicker seating",
  },
  {
    icon: Instagram,
    title: "Insta-Worthy",
    description: "Every corner is designed to be photographed and shared",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F5F1E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Using Real Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image - Book Wall */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM-9Ty9sSSfzGONH2T125IILSbvuPJgEz.jpeg"
                  alt="The Cat Caffé book wall with warm lighting and teal bar stools"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B4226]/30 to-transparent" />
              </div>
              
              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden shadow-xl border-4 border-[#F5F1E8]"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%281%29-aDfDKfyQb6spTsDjjE2oOZCXh2sGWj.jpeg"
                  alt="The Cat Caffé interior with neon logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C8A165]/20 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium"
              >
                Our Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4226] mt-4 mb-6 leading-tight text-balance"
              >
                More Than Just a Café
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-[#6B4226]/70 leading-relaxed"
              >
                Step into a world where every corner tells a story, every cup is crafted with love, 
                and every moment becomes a cherished memory. The Cat Caffé is your escape from the ordinary - 
                where cozy meets aesthetic in the heart of Civil Lines, Ludhiana.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 group bg-white/50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C8A165]/10 flex items-center justify-center group-hover:bg-[#C8A165]/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#C8A165]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6B4226] mb-1">{feature.title}</h3>
                    <p className="text-[#6B4226]/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
