"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Coffee, IceCream, Cookie, UtensilsCrossed, Salad, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "hot-coffee", name: "Hot Coffee", icon: Coffee },
  { id: "iced-drinks", name: "Iced Drinks", icon: IceCream },
  { id: "appetizers", name: "Appetizers", icon: Cookie },
  { id: "salads", name: "Salads", icon: Salad },
  { id: "maggi", name: "Maggi", icon: UtensilsCrossed },
]

// Real menu data from the menu card image
const menuItems: Record<string, Array<{ name: string; description: string; price: string; priceL?: string; popular?: boolean }>> = {
  "hot-coffee": [
    { name: "Espresso", description: "Rich and bold single shot", price: "₹125", priceL: "₹140" },
    { name: "Americano", description: "Espresso & water", price: "₹165", priceL: "₹195" },
    { name: "Latte", description: "Mild espresso, milk & milk froth", price: "₹175", priceL: "₹205", popular: true },
    { name: "Cappuccino", description: "Strong espresso, milk & more milk froth", price: "₹195", priceL: "₹225" },
    { name: "Mocha", description: "Espresso, cocoa & milk", price: "₹215", priceL: "₹235", popular: true },
  ],
  "iced-drinks": [
    { name: "Strewn Berry", description: "Blend of fresh strawberries, milk & espresso", price: "₹215", popular: true },
    { name: "Black Currant", description: "Black grapes, milk & espresso", price: "₹215" },
    { name: "Nutella", description: "Milk of nutella with espresso & ice", price: "₹235" },
    { name: "Biscoff Caramel", description: "Caramel sauce with a glaze of biscoff", price: "₹245", popular: true },
    { name: "Java Chip", description: "Special java chips with milk & espresso", price: "₹275" },
    { name: "Mayan", description: "Mocha with ice-cream", price: "₹285" },
    { name: "Choco Fairy", description: "Blended brownie with milk & espresso", price: "₹295" },
    { name: "Cheese Triffle", description: "Cream cheese with tiramisu", price: "₹295" },
    { name: "Death by Wish", description: "Very strong espresso to handle", price: "₹315", popular: true },
  ],
  "appetizers": [
    { name: "Salted Fries", description: "Our hand sliced chips drenched with salted oil", price: "₹145" },
    { name: "Peri Peri Fries", description: "Fries tossed and seasoned with peri peri masala served with cocktail dip", price: "₹195", popular: true },
    { name: "Persian Rolls", description: "Fresh spinach & sweet corn rolls served with hot garlic sauce", price: "₹265" },
    { name: "Pita Falafel", description: "Freshly baked pita bread served with hummus & falafel", price: "₹265" },
    { name: "Mexican Nachos", description: "Tolopos covered with cheese sauce & mexican beans", price: "₹295", popular: true },
  ],
  "salads": [
    { name: "Caesar Salad", description: "Brisk veggies with homemade croutons and a light caesar dressing", price: "₹265" },
    { name: "Feta Watermelon", description: "Refreshing watermelon with feta cheese and mint", price: "₹265", popular: true },
    { name: "Quinoa Salad", description: "Herbed lebanese salad with quinoa", price: "₹285" },
    { name: "Sauteed Veggies (Hot)", description: "Exotic vegetables tossed with olive oil, garlic & pepper", price: "₹305" },
    { name: "Waldorf Salad", description: "Red-skinned apples, grapes, chopped walnuts with mayonnaise", price: "₹335" },
  ],
  "maggi": [
    { name: "Masala Maggi", description: "Plain masala maggi", price: "₹145", popular: true },
    { name: "Pahadi Tadka", description: "Lots of veggies with chop tadka", price: "₹245" },
    { name: "Cream Cheese", description: "Creamy cheese loaded maggi", price: "₹265" },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("hot-coffee")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#F5F1E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A165] text-sm tracking-[0.2em] uppercase font-medium">
            Explore
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4226] mt-4 text-balance">
            Our Menu
          </h2>
          <p className="text-[#6B4226]/70 mt-4 max-w-2xl mx-auto text-pretty">
            From aromatic coffees to delectable dishes, discover flavors that inspire
          </p>
          
          {/* Download Menu Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <Button
              variant="outline"
              className="border-2 border-[#6B4226] text-[#6B4226] hover:bg-[#6B4226] hover:text-white rounded-full px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Full Menu (PDF)
            </Button>
          </motion.div>
        </motion.div>

        {/* Menu Image Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-18%20at%201.30.05%20AM-8qZOhzBRytwDozdXqGF8JWDohtO4cc.jpeg"
              alt="The Cat Caffé Menu Card"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#6B4226] text-white shadow-lg"
                    : "bg-white text-[#6B4226] hover:bg-[#6B4226]/10 shadow-md"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-[#6B4226] group-hover:text-[#C8A165] transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="text-xs bg-[#C8A165] text-white px-2 py-1 rounded-full font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[#C8A165] font-bold text-lg">{item.price}</span>
                    {item.priceL && (
                      <span className="text-[#6B4226]/60 text-sm ml-1">/ {item.priceL}</span>
                    )}
                  </div>
                </div>
                <p className="text-[#6B4226]/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Add Flavors Note */}
        {activeCategory === "hot-coffee" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-[#6B4226]/70 text-sm"
          >
            Add your flavors just @ ₹35 - Cinnamon, Irish, Choco Cookie, Tiramisu & Toffenut
          </motion.div>
        )}
      </div>
    </section>
  )
}
