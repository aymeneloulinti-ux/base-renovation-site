import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REGIONS = [
  {
    name: 'Bruxelles-Capitale',
    cities: ['Bruxelles', 'Ixelles', 'Uccle', 'Woluwe', 'Schaerbeek', 'Anderlecht'],
  },
  {
    name: 'Brabant wallon',
    cities: ['Wavre', 'Ottignies', 'Nivelles', 'Waterloo', 'Braine-l’Alleud', 'Genappe'],
  },
  {
    name: 'Namur & Hainaut',
    cities: ['Namur', 'Gembloux', 'Charleroi', 'Mons', 'La Louvière', 'Andenne'],
  },
]

export function Areas() {
  return (
    <section id="zones" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Zones d&apos;intervention
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            À vos côtés à Bruxelles et en Wallonie
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Nous intervenons dans un large périmètre autour de Bruxelles et dans toute la Wallonie.
            Votre commune n&apos;est pas dans la liste&nbsp;? Contactez-nous, nous nous déplaçons
            volontiers.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REGIONS.map((region, i) => (
            <Reveal key={region.name} delay={i * 100}>
              <div className="h-full rounded-md border border-border bg-card p-7">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">{region.name}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground/75"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
