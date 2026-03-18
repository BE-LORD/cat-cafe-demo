"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Order", href: "#order" },
  { name: "Contact", href: "#location" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg py-3"
            : "top-10 bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#hero")
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%282%29-tF4GlweMmxFB8lQHSRo7Kr7Uz1gCQi.jpeg"
                alt="The Cat Caffé Logo"
                className={`rounded-full transition-all duration-300 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
              />
              <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${
                isScrolled ? "text-[#6B4226]" : "text-white drop-shadow-lg"
              }`}>
                The Cat Caffé
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C8A165] ${
                    isScrolled ? "text-[#6B4226]" : "text-white drop-shadow-md"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button
                size="sm"
                className="bg-[#C8A165] hover:bg-[#B8914F] text-[#3D2415] rounded-full px-6 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => scrollToSection("#reservation")}
              >
                Book a Table
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-[#6B4226]" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-[#6B4226]" : "text-white"}`} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5F1E8] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%282%29-tF4GlweMmxFB8lQHSRo7Kr7Uz1gCQi.jpeg"
                alt="The Cat Caffé Logo"
                className="w-24 h-24 rounded-full shadow-lg mb-4"
              />
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-serif text-[#6B4226] hover:text-[#C8A165] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-[#C8A165] hover:bg-[#B8914F] text-[#3D2415] rounded-full px-8 mt-4 font-semibold"
                  onClick={() => scrollToSection("#reservation")}
                >
                  Book a Table
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
