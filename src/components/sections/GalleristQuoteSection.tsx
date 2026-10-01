import Image from "next/image"
import { galleristQuote } from "@/data/event"

export function GalleristQuoteSection() {
  return (
    <section id="mot-du-galeriste" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <figure className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="shrink-0 text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-gallery-50 border border-gray-200">
              <Image
                src={galleristQuote.photo}
                alt={galleristQuote.name}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-5">
              <span className="block text-base font-semibold text-gallery-900">{galleristQuote.name}</span>
              <span className="block text-[11px] text-accent-gold uppercase tracking-wider mt-1">
                {galleristQuote.role}
              </span>
            </figcaption>
          </div>

          <div className="relative flex-1 bg-gallery-50 luxury-border p-8 md:p-10">
            <span
              aria-hidden="true"
              className="absolute w-4 h-4 bg-gallery-50 rotate-45 left-1/2 -top-2 -translate-x-1/2 border-l border-t border-[rgba(15,14,13,0.08)] md:left-0 md:top-1/2 md:-translate-y-1/2 md:border-t-0 md:border-b"
            />
            <blockquote className="font-serif-title italic text-lg md:text-xl text-gallery-900 leading-relaxed">
              «&nbsp;{galleristQuote.quote}&nbsp;»
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  )
}
