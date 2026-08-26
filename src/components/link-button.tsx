import type { AnchorHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const linkButtonVariants = cva(
  'group inline-flex shrink-0 items-center justify-center gap-1.5 rounded-sm text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
        outlineLight:
          'border border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 dark:border-black/40 dark:bg-black/5 dark:text-black dark:hover:bg-black/15',
      },
      size: {
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {}

export function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return <a className={cn(linkButtonVariants({ variant, size, className }))} {...props} />
}
