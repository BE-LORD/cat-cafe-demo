"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OnlineOrderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="order" className="py-20 lg:py-28 bg-gradient-to-br from-[#6B4226] via-[#8B5A2B] to-[#6B4226] relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block bg-[#C8A165] text-[#3D2415] px-6 py-2 rounded-full text-sm font-bold mb-6"
          >
            DELIVERY AVAILABLE
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 text-balance">
            Order Your Favorites
            <span className="block text-[#C8A165]">At Home</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Craving our signature coffee or delicious food? Get it delivered right to your doorstep!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Zomato Button */}
            <motion.a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#E23744] hover:bg-[#CB2D3E] text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.292.292-.614.34-.893.34-.386 0-.705-.166-.705-.166l-3.294-1.933-3.294 1.933s-.32.166-.706.166c-.28 0-.6-.048-.892-.34-.292-.293-.34-.614-.34-.893 0-.385.166-.705.166-.705l1.932-3.294-1.932-3.293s-.166-.32-.166-.706c0-.28.048-.6.34-.893.293-.292.614-.34.893-.34.385 0 .705.166.705.166l3.294 1.932 3.294-1.932s.32-.166.705-.166c.28 0 .6.048.893.34.292.293.34.614.34.893 0 .386-.166.706-.166.706l-1.933 3.293 1.933 3.294s.166.32.166.705c0 .28-.048.6-.34.893z"/>
                </svg>
                Order on Zomato
                <ExternalLink className="w-5 h-5" />
              </Button>
            </motion.a>

            {/* Swiggy Button */}
            <motion.a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#FC8019] hover:bg-[#E5720F] text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.94 16.94c-.83.83-1.92 1.24-3.02 1.24-1.09 0-2.18-.41-3.02-1.24-1.66-1.66-1.66-4.37 0-6.03.83-.83 1.92-1.24 3.02-1.24 1.09 0 2.18.41 3.02 1.24 1.66 1.66 1.66 4.37 0 6.03zm-1.42-4.61c-.44-.44-1.02-.68-1.6-.68-.58 0-1.16.24-1.6.68-.88.88-.88 2.32 0 3.2.44.44 1.02.68 1.6.68.58 0 1.16-.24 1.6-.68.88-.88.88-2.32 0-3.2z"/>
                </svg>
                Order on Swiggy
                <ExternalLink className="w-5 h-5" />
              </Button>
            </motion.a>
          </div>

          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Free delivery on orders above ₹299
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              30-40 mins delivery
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
