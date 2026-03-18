"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { JourneySection } from "@/components/journey-section"
import { CommunitySection } from "@/components/community-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export function HomeContent() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <JourneySection />
      {/* <CommunitySection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
