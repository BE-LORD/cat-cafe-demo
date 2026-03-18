"use client"

import { Phone, MessageCircle, Navigation, ShoppingBag } from "lucide-react"

const actions = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919876543210",
    color: "bg-[#6B4226]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20reserve%20a%20table",
    color: "bg-[#25D366]",
  },
  {
    icon: Navigation,
    label: "Directions",
    href: "https://www.google.com/maps/dir/?api=1&destination=The+Cat+Caffe+Civil+Lines+Ludhiana",
    color: "bg-[#4285F4]",
  },
  {
    icon: ShoppingBag,
    label: "Order",
    href: "#order",
    color: "bg-[#EF4444]",
    isScroll: true,
  },
]

export function MobileActionBar() {
  const handleClick = (action: typeof actions[0]) => {
    if (action.isScroll) {
      const element = document.getElementById('order')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-4 gap-1 p-2">
        {actions.map((action) => {
          const Icon = action.icon
          
          if (action.isScroll) {
            return (
              <button
                key={action.label}
                onClick={() => handleClick(action)}
                className={`${action.color} text-white rounded-xl py-3 flex flex-col items-center justify-center gap-1 transition-transform active:scale-95`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </button>
            )
          }
          
          return (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') ? "_blank" : undefined}
              rel={action.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`${action.color} text-white rounded-xl py-3 flex flex-col items-center justify-center gap-1 transition-transform active:scale-95`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{action.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
