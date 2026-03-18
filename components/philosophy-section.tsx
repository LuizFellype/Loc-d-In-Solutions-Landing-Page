"use client"

import { Lock, Flame, Target, Infinity } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const icons = [Lock, Flame, Target, Infinity]

export function PhilosophySection() {
  const { t } = useI18n()

  return (
    <section id="filosofia" className="relative py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.philosophy.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.philosophy.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.philosophy.description}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.philosophy.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <div 
                key={pillar.title}
                className="group relative p-8 rounded-lg border border-border bg-background hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                {/* Subtle index */}
                <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-foreground/5">
                  0{index + 1}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
