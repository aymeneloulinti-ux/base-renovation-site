import Image from 'next/image'
import { Award, BadgeCheck, HardHat, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REASONS = [
  {
    icon: Award,
    title: 'Expertise reconnue',
    description:
      'Quinze années d’expérience et des artisans formés aux techniques traditionnelles comme aux normes actuelles.',
  },
  {
    icon: BadgeCheck,
    title: 'Devis transparents',
    description:
      'Un chiffrage clair, détaillé et sans surprise. Vous savez exactement ce que vous payez, avant le début des travaux.',
  },
  {
    icon: HardHat,
    title: 'Travail soigné',
    description:
      'Des matériaux nobles, une finition irréprochable et une garantie décennale sur l’ensemble de nos chantiers.',
  },
  {
    icon: MapPin,
    title: 'Entreprise locale',
    description:
      'Implantés à Bruxelles et en Wallonie, nous connaissons le bâti régional et intervenons rapidement près de chez vous.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-md sm:aspect-3/4 lg:aspect-4/5">
            <Image
              src="/images/craftsman.png"
              alt="Couvreur professionnel inspectant une toiture en ardoise"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Pourquoi nous choisir
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-background md:text-4xl lg:text-5xl">
              Un partenaire de confiance pour votre toiture
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-background/70">
              Nous mettons notre savoir-faire au service de la durabilité de votre habitation, avec
              une exigence constante sur la qualité, le respect des délais et la relation humaine.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.title} delay={(i % 2) * 100}>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-background/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-background">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/65">
                    {reason.description}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
