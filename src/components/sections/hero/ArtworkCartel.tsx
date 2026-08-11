import { ArtworkSvg } from "./ArtworkSvg"

export function ArtworkCartel() {
  return (
    <div className="max-w-4xl mx-auto bg-gallery-50 p-6 md:p-10 luxury-border">
      <div className="relative bg-white p-4 luxury-border shadow-sm">
        <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-200">
          <ArtworkSvg />
        </div>

        <div className="pt-6 pb-2 text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-gray-100 mt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent-gold font-semibold mb-1">
              Œuvre Vedette
            </p>
            <h3 className="text-xl font-serif-title font-medium text-gallery-900">PONTECORVO</h3>
            <p className="text-xs text-gray-500 italic mt-0.5">
              Passants &amp; Perspectives, 2023 — Huile sur toile, 130 x 195 cm
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block">Galerie Leadouze</span>
            <span className="text-xs font-medium text-gallery-900">Disponible à l&apos;acquisition</span>
          </div>
        </div>
      </div>
    </div>
  )
}
