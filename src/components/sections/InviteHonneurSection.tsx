import Image from "next/image"
import { guestOfHonour } from "@/data/event"

export function InviteHonneurSection() {
  return (
    <section id="invite-honneur" className="py-24 bg-gallery-900 text-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-4">
            <div className="relative max-w-[13rem] mx-auto md:max-w-[15rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 border border-accent-gold/60"
              />
              <div className="relative aspect-[3/4] overflow-hidden bg-gallery-800">
                <Image
                  src={guestOfHonour.photo}
                  alt={guestOfHonour.name}
                  fill
                  sizes="(min-width: 768px) 240px, 208px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif-title font-normal tracking-tight mb-3">
              {guestOfHonour.name}
            </h2>
            <p className="text-[13px] uppercase tracking-[0.25em] text-gray-400 mb-8">{guestOfHonour.role}</p>

            <div className="w-12 h-px bg-accent-gold mb-8 mx-auto md:mx-0" />

            <div className="space-y-4">
              {guestOfHonour.bio.map((paragraph) => (
                <p key={paragraph} className="text-base text-gray-300 font-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
