"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, Clock } from "lucide-react"
import { InteractiveMap } from "@/components/ui/interactive-map"

const contactInfo = [
  {
    icon: Clock,
    label: "Opening Hours",
    value: "10:00 AM – 11:00 PM",
    subvalue: "Open all days",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@thecatcaffe.com",
    href: "mailto:hello@thecatcaffe.com",
  },
]

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="py-24 lg:py-32 bg-gradient-to-br from-[#3D2415] via-[#6B4226] to-[#3D2415]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full bg-[#6B4226]/50 border border-[#C8A165]/30">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-6 text-balance">
            Visit Our Café
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-pretty">
            Located in the heart of Civil Lines, Ludhiana - your cozy escape awaits. Visit us at our exact location below.
          </p>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <InteractiveMap />
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const isLink = !!item.href

              const content = (
                <div className={`flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${isLink ? 'cursor-pointer' : ''}`}>
                  <div className="w-14 h-14 bg-[#C8A165]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A165]/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#C8A165]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-white/60 uppercase tracking-wider font-medium">
                      {item.label}
                    </span>
                    <p className="text-lg font-bold text-white mt-2 group-hover:text-[#C8A165] transition-colors duration-300">
                      {item.value}
                    </p>
                    {item.subvalue && (
                      <p className="text-sm text-white/60 mt-1">{item.subvalue}</p>
                    )}
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {isLink ? (
                    <a
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Parking and Amenities Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#C8A165]/10 border border-[#C8A165]/30 rounded-xl p-6 hover:bg-[#C8A165]/15 transition-all duration-300">
              <h3 className="text-white font-bold text-lg mb-3">What to Expect</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Cozy book wall café with warm ambiance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Outdoor seating with natural light
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Free WiFi and comfortable seating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Pet-friendly environment
                </li>
              </ul>
            </div>

            <div className="bg-[#C8A165]/10 border border-[#C8A165]/30 rounded-xl p-6 hover:bg-[#C8A165]/15 transition-all duration-300">
              <h3 className="text-white font-bold text-lg mb-3">Quick Access</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Easy street parking available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  15-20 mins from city center
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Near popular shopping district
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A165]"></span>
                  Accessible by public transport
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
