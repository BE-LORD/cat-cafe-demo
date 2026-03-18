"use client"

import { Star, MapPin, Clock } from "lucide-react"

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#6B4226] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-[#C8A165] fill-[#C8A165]" />
          <span className="font-medium">4.2 Rating</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#C8A165]" />
          <span>Civil Lines, Ludhiana</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#C8A165]" />
          <span>Open till 11 PM</span>
        </div>
      </div>
    </div>
  )
}
