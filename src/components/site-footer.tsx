import { Mail, MapPin, Phone } from 'lucide-react'
import { CookiePreferencesButton } from '@/components/cookie-consent'

const FOOTER_NAV = [
  {
    title: 'Services',
    links: ['Toiture', 'Couverture', 'Zinguerie', 'Isolation', 'Réparation', 'Rénovation extérieure'],
  },
  {
    title: 'Entreprise',
    links: ['Réalisations', 'Notre méthode', 'Avis clients', 'Zones desservies', 'Demander un devis'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-background text-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 10v9.5h13V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-background">Maison Delcourt</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">
                  Toiture &amp; Rénovation
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/60">
              Couvreur et entreprise de rénovation à Bruxelles et en Wallonie depuis 2009. Un travail
              d&apos;artisan, une exigence de tous les instants.
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === 'Demander un devis' ? '/devis' : '#'}
                      className="text-sm text-background/75 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-background/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Chaussée de Wavre 218
                <br />
                1050 Bruxelles
              </li>
              <li>
                <a href="tel:+3221234567" className="flex items-center gap-3 transition-colors hover:text-background">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  02 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@maisondelcourt.be"
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  contact@maisondelcourt.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-background/15 pt-7 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Delcourt SPRL — TVA BE 0123.456.789</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Liens légaux">
            <a href="#" className="transition-colors hover:text-background">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Politique de confidentialité
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Conditions générales
            </a>
            <CookiePreferencesButton />
          </nav>
        </div>
      </div>
    </footer>
  )
}
