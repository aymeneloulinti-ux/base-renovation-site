import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { BeforeAfter } from '@/components/before-after'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { Areas } from '@/components/areas'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Projects />
        <BeforeAfter />
        <WhyUs />
        <Process />
        <Testimonials />
        <Areas />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
