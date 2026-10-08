import Image from "next/image"
import { SITE } from "@/lib/constants"

const MAP_QUERY = encodeURIComponent(`${SITE.gallery.name}, ${SITE.gallery.address}`)

export function ExpositionSection() {
  return (
    <section id="exposition" className="py-24 border-t border-gray-100 bg-gallery-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-serif-title text-gallery-900 mb-8 leading-snug">
              Une traversée au cœur de la création et du marché
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              La soirée se déroulera dans un cadre d&apos;exception&nbsp;: la Galerie Leadouze, adresse prestigieuse
              située au 16, avenue Matignon et haut lieu du marché de l&apos;art parisien. Alexandre Leadouze et
              Thibault Proust, son directeur, auront le grand plaisir de vous y accueillir.
            </p>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              À cette occasion, Nicolas Kaenzig partagera avec vous son expérience. Fort de 20 ans passés comme
              spécialiste chez Christie&rsquo;s, il accompagne aujourd&apos;hui les professions libérales et les
              family offices dans leurs projets artistiques et la constitution de leur collection. Au cours
              d&apos;une intervention de 30 minutes, il vous livrera les clés pour comprendre le marché, affiner
              votre regard et répondre à une question essentielle&nbsp;: quel collectionneur êtes-vous&nbsp;?
            </p>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              Enfin, Timothée Roy présentera InRealArt, la nouvelle agence de communication qui connecte artistes,
              acteurs du marché de l&apos;art et professions libérales. Vous y découvrirez en avant-première les
              œuvres du catalogue.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-4 luxury-border shadow-sm space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/galerie/gallerie_lea12_1.webp"
                  alt={`Espace d'exposition de la ${SITE.gallery.name}`}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden bg-gallery-50">
                  <iframe
                    title={`Plan d'accès — ${SITE.gallery.name}`}
                    src={`https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                    className="w-full h-full border-0 grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/galerie/gallerie_lea12_2.webp"
                    alt={`Mezzanine et salle d'exposition de la ${SITE.gallery.name}`}
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
