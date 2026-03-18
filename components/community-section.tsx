"use client"

import { Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function CommunitySection() {
  const { t } = useI18n()

  return (
    <section id="comunidade" className="relative py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.community.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.community.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.community.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.community.testimonials.map((testimonial) => (
            <div 
              key={testimonial.author}
              className="relative p-8 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-6" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} · {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 p-8 md:p-12 rounded-lg border border-border bg-background">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.community.stats.activeMembers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">45+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.community.stats.countries}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">2M+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.community.stats.conversations}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">{t.community.stats.daysConsistency}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
