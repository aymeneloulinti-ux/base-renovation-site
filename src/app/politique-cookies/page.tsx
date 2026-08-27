import type { Metadata } from 'next'
import { LegalPage, LegalSection, LegalSubsection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Politique de cookies du site de démonstration Maison Delcourt.',
  alternates: { canonical: '/politique-cookies' },
}

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Préférences"
      title="Politique de cookies"
      intro="Cette page explique le fonctionnement des cookies et du mécanisme de consentement présent sur ce site de démonstration. Les informations devront être revues pour chaque client avant publication."
    >
      <LegalSection title="Qu’est-ce qu’un cookie ?">
        <p>Un cookie est un petit fichier ou identifiant enregistré par un site dans votre navigateur. Il peut servir à conserver une préférence ou à reconnaître une session lors d’une visite ultérieure.</p>
        <p>Le site utilise également le stockage local du navigateur pour mémoriser votre choix de consentement. Ce mécanisme ne transmet pas à lui seul de données à un service d’analyse.</p>
      </LegalSection>

      <LegalSection title="Catégories utilisées">
        <LegalSubsection title="Nécessaires">
          <p>Cette catégorie est toujours active. Elle permet le fonctionnement essentiel du site, notamment la mémorisation de vos préférences de cookies. Elle ne peut pas être désactivée depuis le panneau de consentement.</p>
        </LegalSubsection>
        <LegalSubsection title="Analytics">
          <p>Cette catégorie est désactivée par défaut. Aucun outil Analytics n’est actuellement installé sur ce site. Le consentement est toutefois prévu pour permettre une éventuelle intégration ultérieure, après information et accord appropriés.</p>
        </LegalSubsection>
        <LegalSubsection title="Marketing">
          <p>Cette catégorie est désactivée par défaut. Aucun pixel publicitaire, cookie marketing ou outil de personnalisation publicitaire n’est actuellement installé.</p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="Votre consentement">
        <p>Lors de votre première visite, le banner vous permet d’accepter toutes les catégories, de refuser les catégories optionnelles ou de personnaliser votre choix.</p>
        <p>Les choix sont enregistrés dans le stockage local de votre navigateur sous une clé dédiée au consentement du site. Les catégories Analytics et Marketing ne sont pas initialisées sans accord explicite.</p>
      </LegalSection>

      <LegalSection title="Modifier vos préférences">
        <p>Vous pouvez rouvrir le panneau à tout moment en cliquant sur <strong className="text-foreground">Gérer mes cookies</strong> dans le footer. Vous pouvez ensuite activer ou désactiver les catégories Analytics et Marketing, puis enregistrer votre choix.</p>
        <p>Vous pouvez également supprimer les données de site dans les réglages de votre navigateur. Le banner pourra alors apparaître à nouveau lors de votre prochaine visite.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>Pour toute question concernant les cookies ou vos préférences, contactez [Nom de l’entreprise] à l’adresse <a className="text-accent underline underline-offset-4" href="mailto:[Adresse e-mail]">[Adresse e-mail]</a> ou au [Téléphone].</p>
      </LegalSection>
    </LegalPage>
  )
}
