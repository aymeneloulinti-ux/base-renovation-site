'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkButton } from '@/components/link-button'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Notre méthode', href: '#methode' },
  { label: 'Avis', href: '#avis' },
  { label: 'Zones', href: '#zones' },
]

export function SiteHeader({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', nextIsDark)
    document.documentElement.classList.toggle('light', !nextIsDark)
    window.localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || alwaysSolid
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Accueil — Maison Delcourt">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-sm transition-colors',
              scrolled || open || alwaysSolid
                ? 'bg-foreground text-background'
                : 'bg-white text-foreground dark:bg-black',
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 10v9.5h13V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-lg font-semibold tracking-tight transition-colors',
                scrolled || open || alwaysSolid ? 'text-foreground' : 'text-white dark:text-black',
              )}
            >
              Maison Delcourt
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.22em] transition-colors',
                scrolled || open || alwaysSolid
                  ? 'text-muted-foreground'
                  : 'text-white/70 dark:text-black/70',
              )}
            >
              Toiture &amp; Rénovation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors',
                scrolled || alwaysSolid
                  ? 'text-foreground/75 hover:text-foreground'
                  : 'text-white/80 hover:text-white dark:text-black/80 dark:hover:text-black',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+3221234567"
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              scrolled || alwaysSolid
                ? 'text-foreground hover:text-accent'
                : 'text-white hover:text-white/80 dark:text-black dark:hover:text-black/80',
            )}
          >
            <Phone className="h-4 w-4" />
            02 123 45 67
          </a>
          <LinkButton href="/devis" variant={scrolled ? 'primary' : 'accent'}>
            Demander un devis
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className={cn(
            'hidden h-9 w-9 items-center justify-center rounded-sm border transition-colors lg:flex',
            scrolled || alwaysSolid
              ? 'border-border text-foreground hover:bg-muted'
              : 'border-white/30 text-white hover:bg-white/10 dark:border-black/30 dark:text-black dark:hover:bg-black/10',
          )}
          aria-label="Changer de thème"
          title="Changer de thème"
        >
          <Moon className="h-4 w-4 dark:hidden" />
          <Sun className="hidden h-4 w-4 dark:block" />
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-sm transition-colors lg:hidden',
            scrolled || open || alwaysSolid ? 'text-foreground' : 'text-white dark:text-black',
          )}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden border-t border-border/70 bg-background transition-[max-height,opacity] duration-500 ease-out',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-border/70 pt-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between rounded-sm px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Changer de thème"
            >
              <span className="dark:hidden">Thème sombre</span>
              <span className="hidden dark:inline">Thème clair</span>
              <Moon className="h-5 w-5 dark:hidden" />
              <Sun className="hidden h-5 w-5 dark:block" />
            </button>
            <a
              href="tel:+3221234567"
              className="flex items-center gap-2 text-base font-medium text-foreground"
            >
              <Phone className="h-4 w-4" />
              02 123 45 67
            </a>
            <LinkButton href="/devis" onClick={() => setOpen(false)} size="lg" className="w-full">
              Demander un devis
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
