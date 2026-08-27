'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'

const CONSENT_KEY = 'maison-delcourt-cookie-consent'
const CHANGE_EVENT = 'maison-delcourt:cookie-consent-change'
const OPEN_EVENT = 'maison-delcourt:open-cookie-preferences'

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

function getSnapshot() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(CONSENT_KEY)
}

function getServerSnapshot() {
  return null
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {}

  const onConsentChange = () => onStoreChange()
  window.addEventListener('storage', onConsentChange)
  window.addEventListener(CHANGE_EVENT, onConsentChange)

  return () => {
    window.removeEventListener('storage', onConsentChange)
    window.removeEventListener(CHANGE_EVENT, onConsentChange)
  }
}

function parseConsent(value: string | null): Consent | null {
  if (!value) return null

  try {
    const parsed = JSON.parse(value) as Partial<Consent>
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') {
      return null
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    }
  } catch {
    return null
  }
}

function saveConsent(consent: Consent) {
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="transition-colors hover:text-background"
    >
      Gérer mes cookies
    </button>
  )
}

export function CookieConsent() {
  const storedConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const hasConsent = parseConsent(storedConsent) !== null
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const openPreferences = useCallback(() => {
    const currentConsent = parseConsent(getSnapshot())
    setAnalytics(currentConsent?.analytics ?? false)
    setMarketing(currentConsent?.marketing ?? false)
    setIsPreferencesOpen(true)
  }, [])

  useEffect(() => {
    window.addEventListener(OPEN_EVENT, openPreferences)
    return () => window.removeEventListener(OPEN_EVENT, openPreferences)
  }, [openPreferences])

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
    setIsPreferencesOpen(false)
  }

  const refuseOptional = () => {
    saveConsent(DEFAULT_CONSENT)
    setIsPreferencesOpen(false)
  }

  const savePreferences = () => {
    saveConsent({ necessary: true, analytics, marketing })
    setIsPreferencesOpen(false)
  }

  const showBanner = !hasConsent && !isPreferencesOpen

  return (
    <>
      {showBanner && (
        <aside
          role="region"
          aria-label="Préférences de cookies"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-md border border-border bg-background p-5 text-foreground shadow-xl md:inset-x-auto md:bottom-6 md:p-6"
        >
          <h2 className="font-serif text-lg font-semibold">Votre vie privée compte</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Nous utilisons uniquement les cookies nécessaires au fonctionnement du site. Les cookies
            Analytics et Marketing restent désactivés jusqu&apos;à votre accord.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={refuseOptional}
              className="h-10 rounded-sm border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={openPreferences}
              className="h-10 rounded-sm border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              Personnaliser
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="h-10 rounded-sm bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Accepter tout
            </button>
          </div>
        </aside>
      )}

      {isPreferencesOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground/50 p-4 sm:items-center">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md border border-border bg-background p-6 text-foreground shadow-2xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 id="cookie-preferences-title" className="font-serif text-2xl font-semibold">
                  Gérer mes cookies
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Choisissez les catégories de cookies que vous souhaitez autoriser. Vous pouvez
                  modifier votre choix à tout moment.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPreferencesOpen(false)}
                className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Fermer les préférences de cookies"
              >
                Fermer
              </button>
            </div>

            <div className="mt-6 divide-y divide-border rounded-sm border border-border">
              <CookieOption
                title="Nécessaires"
                description="Indispensables au fonctionnement, à la sécurité et à la mémorisation de vos préférences."
                checked
                disabled
                onChange={() => {}}
              />
              <CookieOption
                title="Analytics"
                description="Permettent de comprendre la fréquentation du site, uniquement avec votre accord."
                checked={analytics}
                onChange={setAnalytics}
              />
              <CookieOption
                title="Marketing"
                description="Peuvent mesurer les campagnes ou personnaliser la communication, uniquement avec votre accord."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={refuseOptional}
                className="h-10 rounded-sm border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Refuser les optionnels
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="h-10 rounded-sm bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Enregistrer mes choix
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

function CookieOption({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 p-4 has-[:disabled]:cursor-default">
      <span>
        <span className="block text-sm font-medium">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-[--accent]"
      />
    </label>
  )
}
