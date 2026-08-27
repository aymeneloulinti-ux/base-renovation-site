export const PROJECT_TYPES = [
  'Rénovation de toiture',
  'Nouvelle toiture',
  'Zinguerie',
  'Isolation',
  'Réparation',
  'Rénovation extérieure',
  'Autre',
] as const

export type QuoteData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: (typeof PROJECT_TYPES)[number]
  location: string
  description: string
  budget?: string
  additionalMessage?: string
  website?: string
}

const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  location: 120,
  description: 3000,
  budget: 100,
  additionalMessage: 2000,
  website: 200,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateQuoteData(input: unknown): { data?: QuoteData; error?: string } {
  if (!input || typeof input !== 'object') {
    return { error: 'Données invalides.' }
  }

  const value = input as Record<string, unknown>
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'projectType', 'location', 'description']

  for (const field of requiredFields) {
    if (typeof value[field] !== 'string' || value[field].trim() === '') {
      return { error: 'Veuillez compléter tous les champs obligatoires.' }
    }
  }

  const data = {
    firstName: String(value.firstName).trim(),
    lastName: String(value.lastName).trim(),
    email: String(value.email).trim(),
    phone: String(value.phone).trim(),
    projectType: String(value.projectType).trim(),
    location: String(value.location).trim(),
    description: String(value.description).trim(),
    budget: typeof value.budget === 'string' ? value.budget.trim() : '',
    additionalMessage:
      typeof value.additionalMessage === 'string' ? value.additionalMessage.trim() : '',
    website: typeof value.website === 'string' ? value.website.trim() : '',
  }

  if (data.website) return { error: 'Votre demande n’a pas pu être envoyée.' }
  if (!PROJECT_TYPES.includes(data.projectType as (typeof PROJECT_TYPES)[number])) {
    return { error: 'Veuillez sélectionner un type de projet valide.' }
  }
  if (!EMAIL_PATTERN.test(data.email)) return { error: 'Veuillez saisir une adresse e-mail valide.' }

  for (const [field, limit] of Object.entries(LIMITS)) {
    if (data[field as keyof typeof data].length > limit) {
      return { error: 'Un ou plusieurs champs sont trop longs.' }
    }
  }

  return { data: { ...data, projectType: data.projectType as QuoteData['projectType'] } }
}
