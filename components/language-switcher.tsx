"use client"

import { useI18n } from "@/lib/i18n-context"
import type { Locale } from "@/lib/translations"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 p-1 rounded-md bg-card border border-border">
      <button
        onClick={() => setLocale("pt")}
        className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
          locale === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
