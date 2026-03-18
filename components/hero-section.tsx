"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,200,150,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="block text-balance">Loc'd in Solutions</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {t.hero.tagline}
          </p>

          {/* Description */}
          <p
            className={`max-w-2xl text-base md:text-lg text-muted-foreground/80 mb-12 transition-all duration-700 delay-300 text-pretty ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="#entrar"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#filosofia"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-border text-foreground rounded-md hover:bg-card transition-colors"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-col gap-7 mt-8 pt-12 border-t border-border transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-serif font-bold text-foreground">10+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{t.hero.delivered}</div>
            </div>
            <div className="text-center">
              <p
                className={`whitespace-pre-wrap max-w-xl text-base md:text-lg text-muted-foreground/80 transition-all duration-700 delay-300 text-pretty ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {t.hero.deliverableSuccess}
              </p>
          </div>
        </div>
      </div>
    </div>

      {/* Bottom fade */ }
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section >
  )
}
