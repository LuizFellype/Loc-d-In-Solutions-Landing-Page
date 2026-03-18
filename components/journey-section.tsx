"use client"

import { useI18n } from "@/lib/i18n-context"

export function JourneySection() {
  const { t } = useI18n()

  return (
    <section id="jornada" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.journey.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.journey.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.journey.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {t.journey.stages.map((stage, index) => (
              <div 
                key={stage.phase}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${index > 0 ? 'md:mt-12' : ''}`}
              >
                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {stage.phase}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      — {stage.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
