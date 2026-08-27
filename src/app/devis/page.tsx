import type { Metadata } from 'next'
import { QuoteForm } from '@/components/quote-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Demander un devis',
  description:
    'Demandez votre devis gratuit pour une rénovation de toiture, une couverture, une zinguerie, une isolation ou une rénovation extérieure à Bruxelles et en Wallonie.',
  alternates: {
    canonical: '/devis',
  },
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader alwaysSolid />
      <main className="px-5 pb-20 pt-28 md:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-foreground px-6 py-12 text-background md:px-14 md:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Devis gratuit &amp; sans engagement
              </p>
              <h1 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-background md:text-4xl lg:text-5xl">
                Parlons de votre projet
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-background/70">
                Décrivez-nous votre projet de toiture ou de rénovation. Un expert vous répondra
                rapidement avec les premières informations utiles.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
