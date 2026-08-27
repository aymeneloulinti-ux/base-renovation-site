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
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site-config'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: '+32 2 123 45 67',
  email: 'contact@maisondelcourt.be',
  priceRange: '$$',
  image: `${SITE_URL}/images/hero-roofing.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chaussée de Wavre 218',
    addressLocality: 'Bruxelles',
    postalCode: '1050',
    addressCountry: 'BE',
  },
  areaServed: [
    { '@type': 'City', name: 'Bruxelles' },
    { '@type': 'AdministrativeArea', name: 'Brabant wallon' },
    { '@type': 'AdministrativeArea', name: 'Wallonie' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
