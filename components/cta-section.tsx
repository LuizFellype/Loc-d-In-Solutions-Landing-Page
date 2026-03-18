"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { t } = useI18n()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="entrar" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {t.cta.description}
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-accent">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-lg">{t.cta.success}</span>
            </div>
          )}

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              {t.cta.noSpam}
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              {t.cta.activeCommunity}
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              {t.cta.exclusiveContent}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
