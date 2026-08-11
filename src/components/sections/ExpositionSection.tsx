import { patrimonyAssets } from "@/data/event"

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
              Une immersion artistique &amp; un cadre d&apos;échange privilégié
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              À l&apos;occasion de l&apos;exposition consacrée au peintre <strong>Pontecorvo</strong>, reconnu pour
              ses silhouettes iconiques et son travail sur la lumière urbaine, la Galerie Leadouze et InRealArt
              ouvrent un espace de dialogue dédié au marché de l&apos;art.
            </p>
            <p className="text-sm text-gray-600 mb-10 font-light leading-relaxed">
              Pensé pour répondre aux enjeux des professionnels de la gestion de patrimoine (CGP, avocats, notaires,
              family offices), cet événement conjugue visite culturelle et décryptage des opportunités de
              diversification d&apos;actifs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-200/80 pt-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gallery-900 block mb-2">
                  En Journée • En accès libre
                </span>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Ouvert à l&apos;ensemble des passionnés d&apos;art et collectionneurs souhaitant admirer les toiles
                  exposées.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gallery-900 block mb-2">
                  Soirées (19h–22h) • Sur invitation
                </span>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Soirées privatisées avec cocktail networking, tables rondes et cas d&apos;études patrimoniales.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 luxury-border shadow-sm space-y-6">
              <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gallery-900 pb-4 border-b border-gray-100">
                Atouts Patrimoniaux
              </h3>
              <div className="space-y-4 text-xs font-light text-gray-600">
                {patrimonyAssets.map((asset) => (
                  <div key={asset.title} className="flex items-start gap-3">
                    <span className="text-accent-gold font-serif-title text-base">—</span>
                    <div>
                      <strong className="font-medium text-gallery-900">{asset.title}</strong>
                      <p className="text-gray-500 mt-0.5">{asset.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
