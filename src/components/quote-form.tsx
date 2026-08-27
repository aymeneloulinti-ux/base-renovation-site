'use client'

import { useState } from 'react'
import { PROJECT_TYPES, validateQuoteData } from '@/lib/quote-validation'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const initialValues = { firstName: '', lastName: '', email: '', phone: '', projectType: '', location: '', description: '', budget: '', additionalMessage: '', website: '' }

export function QuoteForm() {
  const [values, setValues] = useState(initialValues)
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const updateValue = (field: keyof typeof initialValues, value: string) => { setValues((current) => ({ ...current, [field]: value })); if (state === 'error') { setState('idle'); setError('') } }
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validation = validateQuoteData(values)
    if (!validation.data) { setState('error'); setError(validation.error ?? 'Veuillez vérifier les informations saisies.'); return }
    setState('loading'); setError('')
    try {
      const response = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      const result = (await response.json()) as { error?: string }
      if (!response.ok) { setState('error'); setError(result.error ?? 'Une erreur est survenue. Veuillez réessayer.'); return }
      setValues(initialValues); setState('success')
    } catch { setState('error'); setError('Une erreur réseau est survenue. Vérifiez votre connexion et réessayez.') }
  }
  if (state === 'success') return <div className="border border-border bg-muted/40 p-8 text-center"><h3 className="font-serif text-2xl font-semibold">Votre demande a bien été envoyée.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Merci pour votre confiance. Nous reviendrons vers vous rapidement.</p><button type="button" onClick={() => setState('idle')} className="mt-6 text-sm font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-75">Envoyer une nouvelle demande</button></div>
  return (
    <form onSubmit={submit} className="mt-7 text-left" noValidate>
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" value={values.firstName} onChange={updateValue} required />
        <Field label="Nom" name="lastName" value={values.lastName} onChange={updateValue} required />
        <Field label="E-mail" name="email" type="email" value={values.email} onChange={updateValue} required />
        <Field label="Téléphone" name="phone" type="tel" value={values.phone} onChange={updateValue} required />
        <label className="block text-sm sm:col-span-2"><span className="mb-2 block font-medium">Type de projet <span className="text-accent">*</span></span><select required value={values.projectType} onChange={(event) => updateValue('projectType', event.target.value)} className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/20"><option value="">Sélectionnez un projet</option>{PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
        <Field label="Ville / code postal" name="location" value={values.location} onChange={updateValue} required />
        <Field label="Budget approximatif" name="budget" value={values.budget} onChange={updateValue} placeholder="Ex. 15 000 €" />
        <label className="block text-sm sm:col-span-2"><span className="mb-2 block font-medium">Description du projet <span className="text-accent">*</span></span><textarea required rows={4} value={values.description} onChange={(event) => updateValue('description', event.target.value)} placeholder="Décrivez votre besoin, l’état actuel de la toiture ou les travaux envisagés." className="w-full resize-y rounded-sm border border-input bg-background px-3 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-ring/20" /></label>
        <label className="block text-sm sm:col-span-2"><span className="mb-2 block font-medium">Message complémentaire <span className="font-normal text-muted-foreground">(facultatif)</span></span><textarea rows={3} value={values.additionalMessage} onChange={(event) => updateValue('additionalMessage', event.target.value)} className="w-full resize-y rounded-sm border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/20" /></label>
        <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={values.website} onChange={(event) => updateValue('website', event.target.value)} className="absolute -left-[9999px] size-px opacity-0" />
      </div>
      {state === 'error' && <p role="alert" className="mt-5 border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={state === 'loading'} className="mt-7 h-12 w-full rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60">{state === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande de devis'}</button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">Vos informations sont utilisées uniquement pour répondre à votre demande.</p>
    </form>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder, required = false }: { label: string; name: keyof typeof initialValues; value: string; onChange: (field: keyof typeof initialValues, value: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return <label className="block text-sm"><span className="mb-2 block font-medium">{label}{required && <span className="text-accent"> *</span>}</span><input required={required} type={type} value={value} onChange={(event) => onChange(name, event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-ring/20" /></label>
}
