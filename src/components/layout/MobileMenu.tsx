"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { NavLink } from "@/data/event"
import { LinkButton } from "@/components/ui/Button"

interface MobileMenuProps {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="text-gallery-900"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <nav className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center py-8 space-y-6 text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gallery-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton href="#reservation" className="px-6 py-2.5 shadow-sm" onClick={() => setOpen(false)}>
            Accès Privé
          </LinkButton>
        </nav>
      )}
    </div>
  )
}
