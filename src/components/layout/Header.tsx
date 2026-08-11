import Link from "next/link"
import { navLinks } from "@/data/event"
import { LinkButton } from "@/components/ui/Button"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href="#top"
          className="text-xs uppercase tracking-[0.25em] font-medium text-gallery-900"
        >
          INREALART <span className="text-accent-gold font-light">|</span> GALERIE LEADOUZE
        </Link>

        <nav className="hidden lg:flex items-center space-x-10 text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gallery-900 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <LinkButton href="#reservation" className="hidden lg:inline-block px-6 py-2.5 shadow-sm">
            Accès Privé
          </LinkButton>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  )
}
