"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"

export function Footer() {
  const { t } = useI18n()

  const links = {
    filosofia: [
      { label: t.footer.commitment, href: "#filosofia" },
      { label: t.footer.patience, href: "#filosofia" },
      { label: t.footer.focus, href: "#filosofia" },
      { label: t.footer.evolution, href: "#filosofia" },
    ],
    
  }

  return (
    <footer id="contato" className="bg-card border-t border-border ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image alt="Loc'd in Solutions Logo" src="./LOGO-name.png" width={100} height={80} />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">{t.footer.philosophy}</h3>
            <ul className="space-y-3">
              {links.filosofia.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Loc'd in Solutions. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
