import Image from "next/image"
import { SITE } from "@/lib/constants"

const MAP_QUERY = encodeURIComponent(`${SITE.gallery.name}, ${SITE.gallery.address}`)

export function ExpositionSection() {
  return (
    <section id="exposition" className="py-24 border-t border-gray-100 bg-gallery-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent-gold block mb-3">
              Rétrospective &amp; Rencontres
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-title text-gallery-900 mb-8 leading-snug">
              Une traversée au cœur de la création et du marché
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              Tout au long de la soirée, laissez-vous guider par Alexandre Leadouze, propriétaire de cette
              galerie emblématique du 16, avenue Matignon, et par Thibault Proust, son directeur et chef de projet
              culturel. Fort de vingt ans d&apos;expérience chez Christie&rsquo;s, Nicolas Kaenzig animera ensuite
              une masterclass consacrée au marché de l&apos;art : «&nbsp;Quel collectionneur êtes-vous&nbsp;?&nbsp;».
              Enfin, Timothée Roy vous présentera InRealArt, agence de communication dédiée aux artistes, ainsi que
              son catalogue.
            </p>
            <div className="grid grid-cols-1 gap-8 border-t border-gray-200/80 pt-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gallery-900 block mb-2">
                  Soirée sur invitation (18 h – 22 h)
                </span>
                <p className="text-xs text-gray-500 font-light leading-relaxed">Cocktail networking.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-4 luxury-border shadow-sm space-y-4">
              <div className="aspect-[4/3] overflow-hidden bg-gallery-50">
                <iframe
                  title={`Plan d'accès — ${SITE.gallery.name}`}
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                  className="w-full h-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/galerie/vitrine.webp"
                    alt={`Vitrine de la ${SITE.gallery.name}`}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/galerie/avenue-matignon.webp"
                    alt="Avenue Matignon, Paris 8e"
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-2 text-center">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gallery-900 block">
                  {SITE.gallery.name}
                </span>
                <p className="text-xs text-gray-500 font-light mt-1">{SITE.gallery.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
