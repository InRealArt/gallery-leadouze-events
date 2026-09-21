import { SITE } from "@/lib/constants"
import { LinkButton } from "@/components/ui/Button"
import { ArtworkCartel } from "./hero/ArtworkCartel"

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold mb-6">{SITE.dates}</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-title font-normal tracking-tight leading-[1.1] text-gallery-900 mb-8">
          La Galerie Leadouze &amp; InRealArt vous invitent
        </h1>

        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          Alain Pontecorvo, collectionnisme et patrimoine : un événement pensé pour vous et animé par nos experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <LinkButton href="#reservation" variant="solid" className="w-full sm:w-auto shadow-sm">
            Demander une invitation
          </LinkButton>
        </div>

        <ArtworkCartel />
      </div>
    </section>
  )
}
