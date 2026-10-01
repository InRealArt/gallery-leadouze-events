import Image from "next/image"
import { speakers } from "@/data/event"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function IntervenantsSection() {
  return (
    <section id="intervenants" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeading title="Les intervenants" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="luxury-card p-8 text-center flex flex-col justify-between">
              <div>
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gallery-50 border border-gray-200">
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gallery-900 mb-1">{speaker.name}</h3>
                <p className="text-xs text-accent-gold tracking-wide mb-4">{speaker.role}</p>
                <p className="text-xs text-gray-500 font-light leading-relaxed text-left">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
