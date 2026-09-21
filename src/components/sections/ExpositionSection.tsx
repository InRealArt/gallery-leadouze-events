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
              Une traversée au cœur de la création et du marché
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
              Au fil de la soirée, laissez-vous guider à travers trois perspectives complémentaires :
              l&apos;immersion dans l&apos;œuvre d&apos;un peintre majeur, le décryptage des profils de
              collectionneurs sous le regard éclairé d&apos;un spécialiste issu de Christie&rsquo;s, et la découverte
              d&apos;InRealArt ou l&apos;art pensé comme levier de structuration patrimoniale.
            </p>
            <div className="grid grid-cols-1 gap-8 border-t border-gray-200/80 pt-8">
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
