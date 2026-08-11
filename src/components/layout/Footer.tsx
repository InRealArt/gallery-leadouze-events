import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 text-center text-[11px] text-gray-400 uppercase tracking-widest bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 InRealArt x Galerie Leadouze</div>
        <div className="flex space-x-6">
          <Link href="#defiscalisation" className="hover:text-gallery-900 transition-colors">
            Simulateur
          </Link>
          <Link href="#" className="hover:text-gallery-900 transition-colors">
            Mentions Légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
