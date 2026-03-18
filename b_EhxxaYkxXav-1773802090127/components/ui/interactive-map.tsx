"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

// Exact location coordinates for The Cat Caffé
const CAFE_LOCATION = {
  name: "The Cat Caffé & Ristorant",
  address: "355, Dr Hira Singh Rd, Sant Nagar, Civil Lines, Ludhiana, Punjab 141001, India",
  lat: 30.9010,
  lng: 75.8286,
  phone: "+91 98765 43210",
  hours: "10:00 AM – 11:00 PM",
}

export function InteractiveMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    setMapLoaded(true)
  }, [])

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.3157897832644!2d${CAFE_LOCATION.lng}!3d${CAFE_LOCATION.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sThe%20Cat%20Caffe%20%26%20Ristorant!5e0!3m2!1sen!2sin!4v1700000000000`

  return (
    <div className="w-full space-y-6">
      {/* Map Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-[16/9] w-full">
          {mapLoaded && (
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ 
                border: 0,
                filter: 'brightness(0.95) contrast(1.1) saturate(0.95)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Cat Caffé & Ristorant Location"
              className="transition-all duration-300 hover:brightness-100"
            />
          )}
        </div>

        {/* Map Overlay - Location Pin Card */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
            <div className="flex gap-3 items-start">
              <MapPin className="w-6 h-6 text-[#6B4226] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#6B4226] text-lg">{CAFE_LOCATION.name}</h3>
                <p className="text-sm text-[#6B4226]/70 mt-1 leading-tight max-w-xs">
                  {CAFE_LOCATION.address}
                </p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${CAFE_LOCATION.lat},${CAFE_LOCATION.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6B4226] hover:bg-[#3D2415] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-[#C8A165]" />
            <p className="text-white/70 text-sm font-medium uppercase tracking-wide">Location</p>
          </div>
          <p className="text-white font-semibold text-sm leading-tight">Civil Lines, Ludhiana</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-[#C8A165]" />
            <p className="text-white/70 text-sm font-medium uppercase tracking-wide">Hours</p>
          </div>
          <p className="text-white font-semibold text-sm leading-tight">{CAFE_LOCATION.hours}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5 text-[#C8A165]" />
            <p className="text-white/70 text-sm font-medium uppercase tracking-wide">Contact</p>
          </div>
          <a 
            href={`tel:${CAFE_LOCATION.phone.replace(/\s/g, '')}`}
            className="text-white font-semibold text-sm hover:text-[#C8A165] transition-colors"
          >
            {CAFE_LOCATION.phone}
          </a>
        </div>
      </div>

      {/* Detailed Address Card */}
      <div className="bg-gradient-to-r from-[#6B4226]/20 to-[#C8A165]/10 border border-[#C8A165]/30 rounded-xl p-6 backdrop-blur-sm">
        <h4 className="text-white font-serif text-lg mb-3">Full Address</h4>
        <p className="text-white/90 leading-relaxed mb-4">
          {CAFE_LOCATION.address}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(CAFE_LOCATION.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6B4226] hover:bg-[#3D2415] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
          >
            View on Google Maps
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${CAFE_LOCATION.lat},${CAFE_LOCATION.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A165]/20 hover:bg-[#C8A165]/30 text-[#C8A165] px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-center border border-[#C8A165]/30"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}
