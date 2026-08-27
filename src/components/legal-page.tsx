import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
}

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader alwaysSolid />
      <main className="px-5 pb-20 pt-28 md:pt-36 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="border-b border-border pb-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{intro}</p>
          </header>
          {/* Legal copy is demonstration content and must be reviewed for each client before production. */}
          <div className="prose-legal pt-10">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border py-8 first:pt-0 last:border-b-0">
      <h2 className="font-serif text-2xl font-semibold leading-tight text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  )
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  )
}
