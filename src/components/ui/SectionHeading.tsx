interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, title, align = "center", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`max-w-2xl mb-16 ${alignment} ${className}`.trim()}>
      <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent-gold block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-serif-title text-gallery-900">{title}</h2>
    </div>
  )
}
