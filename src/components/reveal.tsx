'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'header'
  style?: CSSProperties
}

export function Reveal({ children, className, delay = 0, as = 'div', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ ...style, transitionDelay: style?.transitionDelay ?? `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
