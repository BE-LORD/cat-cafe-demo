"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, MessageCircle, MapPin } from "lucide-react"

const actions = [
  {
    icon: Phone,
    label: "Call Now",
    href: "tel:+919876543210",
    description: "Speak directly with us",
    color: "bg-[#6B4226]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20reserve%20a%20table%20at%20The%20Cat%20Caff%C3%A9",
    description: "Quick chat booking",
    color: "bg-[#25D366]",
  },
  {
    icon: MapPin,
    label: "Get Directions",
    href: "https://www.google.com/maps/dir/?api=1&destination=The+Cat+Caffe+Civil+Lines+Ludhiana",
    description: "Find your way to us",
    color: "bg-[#4285F4]",
  },
]

export function ReservationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reservation" className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background with real café image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%281%29-aDfDKfyQb6spTsDjjE2oOZCXh2sGWj.jpeg')`,
          }}
        />
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#6B4226]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A165]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A165]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C8A165] text-[#3D2415] text-sm tracking-[0.2em] uppercase px-6 py-2 rounded-full font-bold mb-6">
            Reserve Your Spot
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight text-balance drop-shadow-lg"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
        >
          Book Your Table Now
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto text-pretty drop-shadow-md"
        >
          Secure your perfect spot for an unforgettable experience. Walk-ins welcome, but reservations recommended for weekends.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center gap-4 ${action.color} text-white px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg">{action.label}</span>
                  <span className="block text-sm text-white/80">{action.description}</span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Opening Hours Reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-white/70 text-sm"
        >
          Open Daily: 10:00 AM - 11:00 PM | Civil Lines, Ludhiana
        </motion.p>
      </div>
    </section>
  )
}
