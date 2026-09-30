import Image from "next/image"
import { guestOfHonour } from "@/data/event"

export function InviteHonneurSection() {
  return (
    <section id="invite-honneur" className="py-24 bg-gallery-900 text-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative max-w-xs mx-auto md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 border border-accent-gold/60"
              />
              <div className="relative aspect-[3/4] overflow-hidden bg-gallery-800">
                <Image
                  src={guestOfHonour.photo}
                  alt={guestOfHonour.name}
                  fill
                  sizes="(min-width: 768px) 360px, 320px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent-gold-light block mb-4">
              Invité d&apos;honneur
            </span>
            <h2 className="text-4xl md:text-5xl font-serif-title font-normal tracking-tight mb-3">
              {guestOfHonour.name}
            </h2>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-8">{guestOfHonour.role}</p>

            <div className="w-12 h-px bg-accent-gold mb-8 mx-auto md:mx-0" />

            <p className="text-sm text-gray-300 font-light leading-relaxed mb-8">{guestOfHonour.bio}</p>

            <ul className="space-y-3 mb-10 text-left inline-block md:block">
              {guestOfHonour.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-xs text-gray-300 font-light">
                  <span className="text-accent-gold-light font-serif-title text-base leading-4">—</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div>
              <a
                href={guestOfHonour.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] uppercase tracking-[0.25em] text-white border-b border-accent-gold pb-1 transition-colors hover:text-accent-gold-light"
              >
                Voir son profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
