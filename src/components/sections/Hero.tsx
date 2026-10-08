import { SITE } from "@/lib/constants"
import { LinkButton } from "@/components/ui/Button"
import { ArtworkCartel } from "./hero/ArtworkCartel"

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-title font-normal tracking-tight leading-[1.1] text-gallery-900 mb-8">
          {SITE.title}
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          Une rencontre privilégiée autour de l&apos;art et du collectionnisme, réunissant exposition, masterclass dédiée au marché de l&apos;art
          <br />
          et cocktail.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <LinkButton href="#reservation" variant="solid" className="w-full sm:w-auto shadow-sm">
            Recevoir une invitation
          </LinkButton>
        </div>

        <ArtworkCartel />
      </div>
    </section>
  )
}
