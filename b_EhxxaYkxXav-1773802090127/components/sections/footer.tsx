"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/thecatcaffe", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/thecatcaffe", label: "Facebook" },
]

const footerLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Order", href: "#order" },
  { name: "Contact", href: "#location" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#6B4226] text-[#F5F1E8] py-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%282%29-tF4GlweMmxFB8lQHSRo7Kr7Uz1gCQi.jpeg"
                alt="The Cat Caffé Logo"
                className="w-14 h-14 rounded-full border-2 border-[#C8A165]/30"
              />
              <div>
                <h3 className="text-2xl font-serif">The Cat Caffé</h3>
                <p className="text-[#C8A165] text-sm">& Ristorant</p>
              </div>
            </div>
            <p className="text-[#F5F1E8]/60 text-sm">Where Coffee Meets Comfort</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-[#F5F1E8]/70 hover:text-[#C8A165] transition-colors text-sm tracking-wide font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-full bg-[#F5F1E8]/10 hover:bg-[#C8A165]/30 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F5F1E8]/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#F5F1E8]/50 text-sm"
            >
              © {currentYear} The Cat Caffé & Ristorant. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 text-[#F5F1E8]/50 text-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Civil Lines, Ludhiana
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
