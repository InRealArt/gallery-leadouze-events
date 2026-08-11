import Image from "next/image"
import { speakers } from "@/data/event"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function IntervenantsSection() {
  return (
    <section id="intervenants" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeading eyebrow="Expertises Croisées" title="Les Intervenants" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="luxury-card p-8 text-center flex flex-col justify-between">
              <div>
                <div className="relative w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden bg-gallery-50 border border-gray-200">
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gallery-900 mb-1">{speaker.name}</h3>
                <p className="text-[11px] text-accent-gold uppercase tracking-wider mb-4">{speaker.role}</p>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
