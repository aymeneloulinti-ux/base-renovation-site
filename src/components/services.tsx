'use client'

import { Home, Layers, PaintRoller, Ruler, ShieldCheck, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Home,
    title: 'Toiture',
    description:
      'Pose, rénovation et remplacement de toitures en tuiles, ardoises naturelles ou artificielles, avec finitions durables.',
    background: '/images/bg-toiture.png',
  },
  {
    icon: Layers,
    title: 'Couverture',
    description:
      'Étanchéité et couverture complète, toitures plates ou en pente, pour une protection optimale contre les intempéries.',
    background: '/images/bg-couverture.png',
  },
  {
    icon: Ruler,
    title: 'Zinguerie',
    description:
      'Gouttières, corniches, descentes et solins en zinc réalisés sur mesure par nos artisans qualifiés.',
    background: '/images/bg-zinguerie.png',
  },
  {
    icon: ShieldCheck,
    title: 'Isolation',
    description:
      'Isolation de toiture performante pour réduire vos factures énergétiques et améliorer votre confort toute l\'année.',
    background: '/images/bg-isolation.png',
  },
  {
    icon: Wrench,
    title: 'Réparation',
    description:
      'Interventions rapides en cas de fuite, tuiles déplacées ou dégâts de tempête, avec diagnostic précis.',
    background: '/images/bg-reparation.png',
  },
  {
    icon: PaintRoller,
    title: 'Rénovation extérieure',
    description:
      'Façades, bardages et finitions extérieures pour redonner tout son cachet et sa valeur à votre habitation.',
    background: '/images/bg-renovation.png',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Nos savoir-faire
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Un accompagnement complet, de la toiture à la façade
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Chaque chantier est confié à une équipe d&apos;artisans spécialisés. Nous maîtrisons
            l&apos;ensemble des métiers de la toiture et de la rénovation extérieure pour vous offrir
            un interlocuteur unique et un résultat impeccable.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 90}
                className="group relative overflow-hidden bg-card p-8"
                style={{
                  backgroundImage: `url('${service.background}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-card/80 transition-colors duration-300 group-hover:bg-card/70" />
                <div className="relative z-10">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
