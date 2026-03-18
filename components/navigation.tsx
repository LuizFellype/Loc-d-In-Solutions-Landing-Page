"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { LanguageSwitcher } from "./language-switcher"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image alt="Loc'd in Solutions Logo" src="./LOGO.png" width={100} height={80} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#filosofia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.philosophy}
            </Link>
            <Link href="#jornada" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.journey}
            </Link>
            <Link href="#comunidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.community}
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.contact}
            </Link>
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="#entrar"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t.nav.joinCommunity}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="#filosofia" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.philosophy}
              </Link>
              <Link 
                href="#jornada" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.journey}
              </Link>
              <Link 
                href="#comunidade" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.community}
              </Link>
              <Link 
                href="#contato" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Link
                href="#entrar"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.joinCommunity}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
