import Image from 'next/image'
import { ArrowRight, Phone, Star } from 'lucide-react'
import { LinkButton } from '@/components/link-button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-roofing.png"
          alt="Toiture en ardoise entièrement rénovée sur une maison de maître à Bruxelles"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:pb-0 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm dark:border-black/25 dark:bg-black/10">
            <span className="flex items-center gap-0.5 text-white dark:text-black">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-xs font-medium text-white/90 dark:text-black/90">
              Plus de 400 toitures rénovées depuis 2009
            </span>
          </div>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white dark:text-black sm:text-5xl md:text-6xl lg:text-7xl">
            L&apos;art de la toiture, la rigueur de la rénovation
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 dark:text-black/85 md:text-lg">
            Couvreur et entreprise de rénovation à Bruxelles et en Wallonie. Nous protégeons
            durablement votre habitation avec un travail soigné, des matériaux nobles et des devis
            transparents.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/devis" size="lg">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </LinkButton>
            <LinkButton href="tel:+3221234567" size="lg" variant="outlineLight">
              <Phone className="h-4 w-4" />
              02 123 45 67
            </LinkButton>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-7 dark:border-black/20">
            {[
              { value: '15 ans', label: "d'expérience" },
              { value: '10 ans', label: 'de garantie' },
              { value: '48 h', label: 'pour votre devis' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl font-semibold text-white dark:text-black md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-white/75 dark:text-black/75 md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
