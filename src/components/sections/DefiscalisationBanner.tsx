import { SITE } from "@/lib/constants"
import { LinkButton } from "@/components/ui/Button"

export function DefiscalisationBanner() {
  return (
    <section id="defiscalisation" className="py-20 bg-gallery-900 text-white relative">
      <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-accent-gold">Outil InRealArt</span>
          <h3 className="text-2xl md:text-3xl font-serif-title font-light">
            Simulez l&apos;impact fiscal d&apos;un investissement artistique
          </h3>
          <p className="text-xs text-gray-400 font-light max-w-xl leading-relaxed">
            Accédez en quelques clics à notre calculateur d&apos;amortissement fiscal pour vos clients ou vos
            entreprises.
          </p>
        </div>
        <LinkButton href={SITE.simulatorUrl} external variant="inverted" className="shrink-0">
          Ouvrir le Simulateur
        </LinkButton>
      </div>
    </section>
  )
}
