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
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              La soirée se tiendra dans un lieu d&apos;exception&nbsp;: la galerie Leadouze, adresse de prestige du
              16, avenue Matignon et galerie de renom au cœur du quartier historique du marché de l&apos;art
              parisien. Alexandre Leadouze et Thibault Proust, son directeur, vous y accueilleront pour prolonger
              les échanges autour d&apos;un cocktail.
            </p>
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              Lors de cette soirée, Nicolas Kaenzig vous partagera son expérience. Fort de 20 ans en tant que
              spécialiste chez Christie&rsquo;s, il accompagne désormais les professions libérales et family offices
              dans leurs projets artistiques et la construction de leur collection. Pendant 30 minutes, il vous
              livrera les clés pour comprendre le marché, affiner votre regard et répondre à une question
              essentielle&nbsp;: quel collectionneur êtes-vous&nbsp;?
            </p>
            <blockquote className="text-sm text-gray-600 mb-6 font-light italic leading-relaxed border-l-2 border-gallery-900/20 pl-4">
              «&nbsp;Avenue Matignon, cela fait quarante ans que j&apos;accompagne les passionnés d&apos;art dans le
              développement de leur collection. Entouré de Nicolas et Timothée, deux experts dont j&apos;apprécie
              profondément l&apos;expérience et le parcours, nous vous donnons rendez-vous le 5 novembre. Ils
              partageront avec vous leur vision et leurs conseils, avant de prolonger la discussion autour d&apos;un
              cocktail au sein de la rétrospective Pontecorvo. Et si c&apos;était le moment d&apos;initier votre
              propre collection&nbsp;?&nbsp;»
            </blockquote>
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              Enfin, Timothée Roy présentera InRealArt, la nouvelle agence de communication qui connecte artistes,
              acteurs du marché de l&apos;art et professions libérales. Vous y découvrirez en avant-première les
              œuvres du catalogue.
            </p>
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
