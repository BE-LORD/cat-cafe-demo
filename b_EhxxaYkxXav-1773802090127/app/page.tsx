import { Navigation } from "@/components/sections/navigation"
import { TopBar } from "@/components/sections/top-bar"
import { HeroSection } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { SignatureItemsSection } from "@/components/sections/signature-items"
import { OffersSection } from "@/components/sections/offers"
import { MenuSection } from "@/components/sections/menu"
import { OnlineOrderSection } from "@/components/sections/online-order"
import { GallerySection } from "@/components/sections/gallery"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { ReservationSection } from "@/components/sections/reservation"
import { LocationSection } from "@/components/sections/location"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MobileActionBar } from "@/components/ui/mobile-action-bar"

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Top Info Bar */}
      <TopBar />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Experience / About Section */}
      <ExperienceSection />

      {/* Signature Items */}
      <SignatureItemsSection />

      {/* Offers & Combos */}
      <OffersSection />

      {/* Interactive Menu */}
      <MenuSection />

      {/* Online Order Section */}
      <OnlineOrderSection />

      {/* Gallery */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Reservation CTA */}
      <ReservationSection />

      {/* Location & Contact */}
      <LocationSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </main>
  )
}
