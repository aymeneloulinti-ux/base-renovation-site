import type { Metadata } from 'next'
import { LegalPage, LegalSection, LegalSubsection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site de démonstration Maison Delcourt.',
  alternates: { canonical: '/politique-confidentialite' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Vie privée"
      title="Politique de confidentialité"
      intro="Cette politique décrit les traitements actuellement prévus par ce site de démonstration. Les placeholders et les modalités doivent être adaptés et validés par le client réel avant la mise en production."
    >
      <LegalSection title="Responsable du traitement">
        <p>Le responsable du traitement est <strong className="text-foreground">[Nom de l’entreprise]</strong>, dont les coordonnées sont indiquées dans les <a className="text-accent underline underline-offset-4" href="/mentions-legales">mentions légales</a>.</p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <LegalSubsection title="Demande de devis">
          <p>Lorsque vous utilisez le formulaire de demande de devis, le site collecte les informations que vous saisissez : prénom, nom, adresse e-mail, téléphone, type de projet, ville ou code postal, description du projet, ainsi que, le cas échéant, votre budget approximatif et votre message complémentaire.</p>
        </LegalSubsection>
        <LegalSubsection title="Données techniques minimales">
          <p>Le site peut recevoir les données techniques strictement nécessaires au fonctionnement de l’hébergement et à la sécurité des requêtes. Aucun profilage publicitaire n’est actuellement réalisé.</p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="Finalités et base légale">
        <p>Les données du formulaire sont utilisées pour lire votre demande, vous recontacter et préparer une réponse concernant vos travaux de toiture ou de rénovation. Ce traitement repose sur votre demande préalable et les mesures nécessaires à l’exécution de cette démarche.</p>
        <p>Les préférences de cookies sont conservées dans votre navigateur afin de mémoriser votre choix. Les cookies nécessaires restent activés ; les catégories Analytics et Marketing sont désactivées par défaut et aucun outil correspondant n’est actuellement installé.</p>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>Les demandes de devis sont transmises à [Nom de l’entreprise] et à son prestataire d’envoi d’e-mails, <strong className="text-foreground">Resend</strong>, uniquement pour permettre la transmission de la demande à l’adresse de contact configurée.</p>
        <p>Les données ne sont pas vendues ni transmises à des fins publicitaires. Le prestataire d’hébergement et les sous-traitants éventuellement retenus devront être confirmés par le client.</p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>Les demandes de devis sont conservées pendant la durée nécessaire au traitement de la demande et au suivi de la relation, puis supprimées conformément aux obligations légales applicables. La durée exacte doit être définie par le client selon son activité et ses obligations.</p>
        <p>Les préférences de cookies sont conservées localement dans votre navigateur jusqu’à leur suppression ou leur modification.</p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Selon la réglementation applicable, vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données, ainsi que la portabilité lorsque celle-ci s’applique.</p>
        <p>Pour exercer vos droits, écrivez à <a className="text-accent underline underline-offset-4" href="mailto:[Adresse e-mail]">[Adresse e-mail]</a>. Vous pouvez également introduire une réclamation auprès de l’autorité de contrôle compétente.</p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>Le formulaire communique avec un endpoint serveur et la clé d’API d’envoi n’est jamais exposée au navigateur. Des contrôles de format, de longueur et un champ honeypot limitent les soumissions automatisées.</p>
        <p>Aucune mesure de sécurité ne pouvant être absolument garantie, le client doit compléter cette politique selon son hébergement et ses procédures internes.</p>
      </LegalSection>

      <LegalSection title="Cookies et technologies similaires">
        <p>Le site utilise un stockage local pour mémoriser les préférences de consentement. Consultez la <a className="text-accent underline underline-offset-4" href="/politique-cookies">politique de cookies</a> pour plus de détails.</p>
      </LegalSection>

      <LegalSection title="Modifications">
        <p>Cette politique peut être mise à jour pour refléter une évolution du site, des traitements ou des obligations légales. La version publiée sur cette page est la version applicable.</p>
      </LegalSection>
    </LegalPage>
  )
}
