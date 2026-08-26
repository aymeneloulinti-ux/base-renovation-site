import { ClipboardList, FileText, Handshake, Search } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    icon: ClipboardList,
    step: 'Étape 01',
    title: 'Demande',
    description:
      'Vous nous contactez par téléphone ou via le formulaire. Nous cernons votre besoin et vos priorités.',
  },
  {
    icon: Search,
    step: 'Étape 02',
    title: 'Visite',
    description:
      'Un expert se déplace sur place pour analyser l’état de votre toiture et prendre les mesures nécessaires.',
  },
  {
    icon: FileText,
    step: 'Étape 03',
    title: 'Devis',
    description:
      'Vous recevez un devis détaillé et transparent sous 48 h, avec le choix des matériaux et le planning.',
  },
  {
    icon: Handshake,
    step: 'Étape 04',
    title: 'Réalisation',
    description:
      'Notre équipe réalise les travaux dans les règles de l’art, dans le respect des délais convenus.',
  },
]

export function Process() {
  return (
    <section id="methode" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Notre méthode
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Un processus simple et maîtrisé
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            De la première prise de contact à la livraison du chantier, nous vous accompagnons à
            chaque étape avec clarté et rigueur.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal as="li" key={step.title} delay={i * 90}>
                <div className="group relative flex h-full flex-col rounded-md border border-border bg-card p-7 transition-colors duration-300 hover:border-accent/50">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-sm text-muted-foreground">{step.step}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
