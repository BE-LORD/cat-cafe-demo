"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const signatureItems = [
  {
    name: "Artisan Coffee",
    description: "Hand-crafted with premium beans, featuring beautiful latte art",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%282%29-ambRtovv9ZS1sgivZ12NIETR1AFWAi.jpeg",
    price: "From ₹125",
  },
  {
    name: "Signature Drinks",
    description: "Our branded specialty beverages and refreshing coolers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.04%20AM-NWlQjMle7wyvFnnbK3YuQl45M9x8YC.jpeg",
    price: "From ₹215",
  },
  {
    name: "Delicious Bites",
    description: "Crispy appetizers and snacks paired perfectly with your coffee",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%282%29-ambRtovv9ZS1sgivZ12NIETR1AFWAi.jpeg",
    price: "From ₹145",
  },
]

export function SignatureItemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-[#6B4226]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium">
            Our Specialties
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-4 text-balance">
            Signature Creations
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-pretty">
            Discover our most loved creations, each crafted with passion and the finest ingredients
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B4226]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Price Tag */}
                <motion.div
                  className="absolute top-4 right-4 bg-[#C8A165] text-[#3D2415] px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.price}
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-white group-hover:text-[#C8A165] transition-colors duration-300">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
