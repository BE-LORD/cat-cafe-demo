"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, Instagram, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryMedia = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM%20%281%29-TdyS6C3DTUb5VriblEg1krxtxMfP3o.jpeg",
    alt: "The Cat Caffé storefront with outdoor seating",
    category: "Exterior",
    type: "image",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.06%20AM-9Ty9sSSfzGONH2T125IILSbvuPJgEz.jpeg",
    alt: "Book wall with warm lighting and bar seating",
    category: "Interior",
    type: "image",
    span: "md:col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%282%29-ambRtovv9ZS1sgivZ12NIETR1AFWAi.jpeg",
    alt: "Latte art coffee with spring rolls",
    category: "Food",
    type: "image",
    span: "md:col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM%20%281%29-aDfDKfyQb6spTsDjjE2oOZCXh2sGWj.jpeg",
    alt: "Café interior with neon logo and seating",
    category: "Interior",
    type: "image",
    span: "md:col-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.04%20AM-NWlQjMle7wyvFnnbK3YuQl45M9x8YC.jpeg",
    alt: "Signature drinks and beverages",
    category: "Drinks",
    type: "image",
    span: "md:col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM-8qZOhzBRytwDozdXqGF8JWDohtO4cc.jpeg",
    alt: "Menu card with coffee and food options",
    category: "Menu",
    type: "image",
    span: "md:col-span-1",
  },
]

function MediaCard({ 
  media, 
  index, 
  isInView, 
  onClick 
}: { 
  media: typeof galleryMedia[0]
  index: number
  isInView: boolean
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-[#F5F1E8] shadow-lg hover:shadow-2xl transition-all duration-500 ${media.span}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-square w-full">
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#6B4226] to-[#3D2415] flex items-center justify-center">
            <Play className="w-16 h-16 text-white/50" />
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#6B4226]/90 via-[#6B4226]/40 to-transparent transition-opacity duration-500 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} />

      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 bg-[#C8A165] text-[#3D2415] px-4 py-2 rounded-full text-xs font-bold shadow-lg"
      >
        {media.category}
      </motion.div>

      {/* Zoom/Play Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 hover:border-white/50 transition-colors">
          {media.type === "image" ? (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 13H7" />
            </svg>
          ) : (
            <Play className="w-8 h-8 text-white fill-white" />
          )}
        </div>
      </motion.div>

      {/* View Count or Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute bottom-4 left-4 right-4 text-white"
      >
        <p className="text-sm font-medium">{media.alt}</p>
      </motion.div>
    </motion.div>
  )
}

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedMedia, setSelectedMedia] = useState<typeof galleryMedia[0] | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-gradient-to-b from-[#3D2415] via-[#6B4226] to-[#3D2415]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full bg-[#6B4226]/50 border border-[#C8A165]/30">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-6 text-balance">
            Our Gallery
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-pretty">
            Explore the heart and soul of The Cat Caffé through our curated collection of moments, memories, and experiences.
          </p>
        </motion.div>

        {/* Responsive Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
          {galleryMedia.map((media, index) => (
            <MediaCard
              key={media.src}
              media={media}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedMedia(media)}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-white/80 text-lg">Discover more on our Instagram</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white px-8 py-6 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://instagram.com/thecatcaffe', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us for Updates
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
              ) : (
                <div className="w-full bg-black rounded-2xl shadow-2xl overflow-hidden">
                  <video
                    className="w-full h-auto"
                    controls
                    autoPlay
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Image Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70 uppercase tracking-wide font-medium">
                      {selectedMedia.category}
                    </p>
                    <h3 className="text-xl font-serif mt-2">{selectedMedia.alt}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#C8A165] font-medium">The Cat Caffé</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
