import { Resend } from 'resend'
import type { QuoteData } from '@/lib/quote-validation'

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character,
  )
}

export async function sendQuoteEmail(data: QuoteData) {
  const recipient = process.env.CONTACT_EMAIL
  if (!process.env.RESEND_API_KEY || !recipient) {
    throw new Error('Email configuration is missing')
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const fullName = `${data.firstName} ${data.lastName}`
  const rows = [
    ['Nom', fullName],
    ['E-mail', data.email],
    ['Téléphone', data.phone],
    ['Type de projet', data.projectType],
    ['Ville / code postal', data.location],
    ['Budget approximatif', data.budget || 'Non renseigné'],
    ['Description du projet', data.description],
    ['Message complémentaire', data.additionalMessage || 'Aucun'],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 0;color:#6b6861;font-size:13px;vertical-align:top;width:180px"><strong>${escapeHtml(label)}</strong></td><td style="padding:10px 0;color:#272521;font-size:14px;white-space:pre-line">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  return resend.emails.send({
    from: 'Demandes de devis <onboarding@resend.dev>',
    to: recipient,
    replyTo: data.email,
    subject: `Nouvelle demande de devis — ${data.projectType}`,
    html: `<!doctype html><html lang="fr"><body style="margin:0;background:#f2efe8;padding:32px 16px;font-family:Arial,sans-serif;color:#272521"><div style="max-width:640px;margin:auto;background:#fffdf8;padding:32px;border:1px solid #ded8cc"><p style="margin:0 0 8px;color:#9b633f;font-size:12px;letter-spacing:2px;text-transform:uppercase">Maison Delcourt</p><h1 style="margin:0 0 24px;font-size:26px;font-weight:600">Nouvelle demande de devis</h1><table style="width:100%;border-collapse:collapse">${rows}</table><p style="margin:28px 0 0;color:#8a867e;font-size:12px">Demande reçue via le formulaire du site.</p></div></body></html>`,
  })
}
