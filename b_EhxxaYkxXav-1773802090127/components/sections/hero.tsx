"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-particles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Filters and Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Base background image with optimized properties */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed will-change-transform"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%281%29-TdyS6C3DTUb5VriblEg1krxtxMfP3o.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.95) contrast(1.15) saturate(0.9) blur(0.5px)',
          }}
        />

        {/* Dark overlay for text readability - Primary layer */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Gradient overlay - Secondary layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6B4226]/35 via-[#3D2415]/20 to-[#6B4226]/55" />

        {/* Radial highlight overlay - Creates depth effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(200, 161, 101, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Vignette effect - darkens edges */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%282%29-tF4GlweMmxFB8lQHSRo7Kr7Uz1gCQi.jpeg"
              alt="The Cat Caffé Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-[#C8A165]/40 object-cover transition-transform duration-300 hover:scale-105"
              loading="eager"
              decoding="async"
            />
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 rounded-full bg-[#C8A165]/20 blur-2xl -z-10 scale-125" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 leading-tight text-balance"
          style={{ 
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
          }}
        >
          The Cat Caffé
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-[#C8A165] font-light">
            & Ristorant
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/95 mb-4 font-light tracking-wide"
          style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)' }}
        >
          Where Coffee Meets Comfort
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)' }}
        >
          A cozy café experience with handcrafted coffee, delicious food, and relaxing vibes in the heart of Ludhiana.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg"
            className="bg-[#C8A165] hover:bg-[#B8914F] text-[#3D2415] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-0"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
          <Button 
            size="lg"
            className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-[#6B4226] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Table
          </Button>
          <Button 
            size="lg"
            className="bg-[#EF4444] hover:bg-[#DC2626] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-0"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Order Now
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/70 text-xs tracking-widest uppercase mb-2 drop-shadow-md">Scroll</span>
          <ChevronDown className="w-6 h-6 text-[#C8A165] drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  )
}
