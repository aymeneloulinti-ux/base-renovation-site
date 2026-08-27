import type { Metadata } from 'next'

import { Clock3, ShieldCheck, Sparkles } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Demander un devis',
  description:
    'Demandez votre devis gratuit pour une rénovation de toiture, une couverture, une zinguerie, une isolation ou une rénovation extérieure à Bruxelles et en Wallonie.',
  alternates: { canonical: '/devis' },
}

const reassurance = [
  { icon: Clock3, title: 'Réponse rapide', text: 'Un premier retour sous 48 heures ouvrées.' },
  { icon: ShieldCheck, title: 'Sans engagement', text: 'Votre demande reste confidentielle et gratuite.' },
  { icon: Sparkles, title: 'Conseil d’expert', text: 'Une première orientation claire pour votre projet.' },
]

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader alwaysSolid />
      <main className="relative isolate overflow-hidden px-5 pb-24 pt-28 md:pt-36 lg:px-8">
        <div aria-hidden="true" className="tile-pattern absolute inset-0 -z-20" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/45" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-lg border border-background/15 bg-foreground/95 shadow-2xl lg:grid-cols-[0.82fr_1.18fr]">
            <section className="flex flex-col justify-between border-b border-background/15 p-7 text-background md:p-12 lg:border-b-0 lg:border-r lg:p-14">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-accent">Devis gratuit &amp; sans engagement</p>
                <h1 className="max-w-md text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">Construisons la suite de votre maison.</h1>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70">Parlez-nous de votre toiture ou de vos travaux de rénovation. Notre équipe vous répond avec une première lecture attentive de votre projet.</p>
              </div>
              <div className="mt-12 flex flex-col gap-5 border-t border-background/15 pt-7">
                {reassurance.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3">
                    <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div><p className="text-sm font-medium text-background">{title}</p><p className="mt-1 text-sm leading-relaxed text-background/60">{text}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-card p-7 text-card-foreground md:p-12 lg:p-14">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
                <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">01 — Votre projet</p><h2 className="mt-2 font-serif text-2xl font-semibold">Quelques détails pour commencer</h2></div>
                <span className="hidden text-right text-xs leading-relaxed text-muted-foreground sm:block">2 min<br />à remplir</span>
              </div>
              <QuoteForm />
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}