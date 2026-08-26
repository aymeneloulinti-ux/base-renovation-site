import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PROJECTS = [
  {
    image: '/images/project-1.png',
    title: 'Rénovation complète de toiture en ardoise',
    location: 'Uccle, Bruxelles',
    tag: 'Toiture',
    featured: true,
  },
  {
    image: '/images/project-2.png',
    title: 'Isolation et rénovation de façade',
    location: 'Wavre, Brabant wallon',
    tag: 'Rénovation extérieure',
    featured: false,
  },
  {
    image: '/images/project-3.png',
    title: 'Zinguerie sur mesure et corniches',
    location: 'Namur',
    tag: 'Zinguerie',
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="realisations" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Nos réalisations
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Des chantiers pensés dans les moindres détails
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Un aperçu de nos réalisations récentes à Bruxelles et en Wallonie, où exigence
            technique et esthétique se rejoignent.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 100}
              className={project.featured ? 'md:col-span-2 lg:row-span-2' : ''}
            >
              <article className="group relative h-full overflow-hidden rounded-md border border-border bg-card">
                <div
                  className={`relative w-full overflow-hidden ${
                    project.featured ? 'aspect-4/3 lg:aspect-auto lg:h-full' : 'aspect-4/3'
                  }`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} — ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-background backdrop-blur-sm">
                      {project.tag}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-background md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-background/80">{project.location}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-sm transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
