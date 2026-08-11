import Link from "next/link"
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

const VARIANT_CLASSES = {
  solid: "btn-perrotin",
  outline: "btn-perrotin-outline",
  inverted: "btn-perrotin bg-white text-gallery-900 hover:bg-accent-gold hover:text-white",
} as const

type ButtonVariant = keyof typeof VARIANT_CLASSES

const BASE_CLASSES = "px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] inline-block text-center"

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  href: string
  external?: boolean
}

export function LinkButton({
  variant = "solid",
  href,
  external,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`.trim()

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function SubmitButton({ variant = "solid", className = "", children, ...props }: SubmitButtonProps) {
  return (
    <button
      className={`w-full py-4 text-xs font-medium uppercase tracking-[0.25em] ${VARIANT_CLASSES[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
