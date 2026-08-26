import { ArrowRight, Clock, Phone, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

export function FinalCta() {
  return (
    <section id="devis" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-foreground px-6 py-14 text-background md:px-14 md:py-20">
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Devis gratuit &amp; sans engagement
              </p>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-background md:text-4xl lg:text-5xl">
                Prêt à protéger durablement votre habitation&nbsp;?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-background/70">
                Recevez votre devis détaillé sous 48 heures. Un expert vous rappelle, se déplace et
                vous conseille sans aucun engagement de votre part.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <LinkButton
                  href="tel:+3221234567"
                  size="lg"
                  variant="accent"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  02 123 45 67
                </LinkButton>
                <LinkButton
                  href="mailto:contact@maisondelcourt.be"
                  size="lg"
                  variant="outlineLight"
                  className="w-full sm:w-auto"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </LinkButton>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-background/15 pt-8 text-sm text-background/70 sm:flex-row sm:gap-8">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Réponse sous 48 h
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Garantie décennale
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  Conseil personnalisé
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
