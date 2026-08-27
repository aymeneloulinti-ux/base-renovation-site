'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { Reveal } from '@/components/reveal'

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const updateWidth = () => setContainerWidth(element.offsetWidth)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const update = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const percent = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, percent)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    update(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    update(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 w-full cursor-ew-resize select-none overflow-hidden rounded-md border border-border md:aspect-video"
      onPointerMove={onPointerMove}
    >
      {/* After (base) */}
      <Image
        src="/images/after.png"
        alt="Toiture après rénovation : ardoises neuves et zinguerie soignée"
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover object-[center_35%]"
      />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
        Après
      </span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="relative h-full" style={{ width: containerWidth ?? '100%' }}>
          <Image
            src="/images/before.png"
            alt="Toiture avant rénovation : tuiles usées et abîmées"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-[center_35%]"
          />
        </div>
        <span className="absolute left-4 top-4 z-10 rounded-full bg-foreground/85 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
          Avant
        </span>
      </div>

      {/* Handle */}
      <div
        role="slider"
        aria-label="Comparer avant et après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="absolute inset-y-0 z-20 flex w-1 -translate-x-1/2 items-center justify-center bg-background outline-none"
        style={{ left: `${pos}%` }}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Avant / Après
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            La différence d&apos;un travail bien fait
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Déplacez le curseur pour découvrir la transformation d&apos;une toiture ancienne et
            fatiguée en une couverture neuve, étanche et élégante. Un résultat pensé pour durer
            plusieurs décennies.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Dépose complète et diagnostic de la charpente',
              'Pose d’ardoises naturelles et sous-toiture ventilée',
              'Zinguerie et finitions réalisées sur mesure',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <BeforeAfterSlider />
        </Reveal>
      </div>
    </section>
  )
}
