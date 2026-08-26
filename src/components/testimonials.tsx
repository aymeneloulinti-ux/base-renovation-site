import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TESTIMONIALS = [
  {
    quote:
      'Toiture entièrement refaite en une semaine. Équipe ponctuelle, chantier propre et devis parfaitement respecté. Je recommande sans hésiter.',
    name: 'Isabelle Laurent',
    location: 'Ixelles',
  },
  {
    quote:
      'Un vrai souci du détail sur la zinguerie et les finitions. On sent le travail d’artisans passionnés. La maison a retrouvé tout son cachet.',
    name: 'Thomas Vandenberghe',
    location: 'Wavre',
  },
  {
    quote:
      'Intervention rapide après une tempête. Diagnostic honnête, réparation soignée et suivi impeccable. Une entreprise sérieuse et de confiance.',
    name: 'Sophie Moreau',
    location: 'Namur',
  },
]

export function Testimonials() {
  return (
    <section id="avis" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Ils nous font confiance
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            La satisfaction de nos clients
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-md border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-accent/40" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <div className="mb-2 flex items-center gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-base font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
