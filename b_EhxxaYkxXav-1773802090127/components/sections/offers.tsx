"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Percent, Gift, Sparkles } from "lucide-react"

const offers = [
  {
    icon: Clock,
    title: "Happy Hours",
    time: "4 PM - 7 PM",
    description: "20% off on all beverages",
    highlight: "Daily",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Percent,
    title: "Combo Deal",
    time: "All Day",
    description: "Coffee + Snack combo at ₹249",
    highlight: "Save ₹80",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Gift,
    title: "Birthday Special",
    time: "Show ID",
    description: "Free dessert on your birthday!",
    highlight: "Celebrate",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Weekend Brunch",
    time: "Sat-Sun, 10 AM - 2 PM",
    description: "Unlimited coffee with any meal",
    highlight: "Weekends",
    color: "from-violet-500 to-purple-500",
  },
]

export function OffersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-[#F5F1E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium">
            Special Deals
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#6B4226] mt-4 text-balance">
            Offers & Combos
          </h2>
          <p className="text-[#6B4226]/70 mt-4 max-w-2xl mx-auto">
            Enjoy exclusive offers and save more on your favorites
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Highlight Badge */}
                <span className={`inline-block bg-gradient-to-r ${offer.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  {offer.highlight}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#6B4226] mb-1">{offer.title}</h3>
                <p className="text-[#C8A165] text-sm font-medium mb-2">{offer.time}</p>
                <p className="text-[#6B4226]/70 text-sm">{offer.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
