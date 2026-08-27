import type { Metadata } from 'next'
import { LegalPage, LegalSection, LegalSubsection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de démonstration Maison Delcourt.',
  alternates: { canonical: '/mentions-legales' },
}

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Les informations ci-dessous constituent un modèle pour ce site de démonstration. Elles doivent être remplacées et vérifiées avec les informations réelles du client avant toute mise en production."
    >
      <LegalSection title="Identification de l’entreprise">
        <p><strong className="text-foreground">[Nom de l’entreprise]</strong>, entreprise active dans les travaux de toiture et de rénovation.</p>
        <p>Forme juridique : [Forme juridique] · Numéro d’entreprise / TVA : [Numéro d’entreprise]</p>
      </LegalSection>

      <LegalSection title="Adresse et contact">
        <p>[Adresse complète]<br />[Code postal] [Ville], Belgique</p>
        <p>E-mail : <a className="text-accent underline underline-offset-4" href="mailto:[Adresse e-mail]">[Adresse e-mail]</a><br />Téléphone : [Téléphone]</p>
      </LegalSection>

      <LegalSection title="Responsable de publication">
        <p>Responsable de publication : [Nom du responsable de publication].</p>
        <p>Le contenu éditorial et les informations présentées sur ce site doivent être validés par le client avant publication.</p>
      </LegalSection>

      <LegalSection title="Hébergeur">
        <p>Le site est hébergé par <strong className="text-foreground">[Nom de l’hébergeur]</strong>, [Adresse de l’hébergeur], [Téléphone ou contact de l’hébergeur].</p>
        <p>Ces informations sont des placeholders et doivent être complétées selon l’hébergeur effectivement choisi.</p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>Sauf mention contraire, les textes, éléments graphiques, photographies, logos et contenus de ce site sont protégés par les droits applicables et restent la propriété de leurs ayants droit.</p>
        <p>Toute reproduction, adaptation ou utilisation sans autorisation préalable est interdite.</p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>[Nom de l’entreprise] s’efforce de maintenir des informations exactes et à jour, sans garantir l’absence d’erreurs ou l’exhaustivité des contenus.</p>
        <p>L’utilisation des informations publiées sur le site relève de la responsabilité de l’utilisateur. Les liens vers des sites tiers sont fournis à titre informatif.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalSubsection title="Une question concernant le site ?">
          <p>Pour toute question relative à ces mentions légales, contactez [Nom de l’entreprise] à l’adresse <a className="text-accent underline underline-offset-4" href="mailto:[Adresse e-mail]">[Adresse e-mail]</a>.</p>
        </LegalSubsection>
      </LegalSection>
    </LegalPage>
  )
}
