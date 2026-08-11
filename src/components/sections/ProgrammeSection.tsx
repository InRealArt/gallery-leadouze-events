import { programme } from "@/data/event"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProgrammeSection() {
  return (
    <section id="programme" className="py-24 border-t border-gray-100 bg-gallery-50">
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeading eyebrow="Format Nocturne" title="Déroulé des Soirées (19h00 – 22h00)" />

        <div className="space-y-6">
          {programme.map((item) => (
            <div
              key={item.time}
              className="bg-white p-8 luxury-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-gold shrink-0">
                {item.time}
              </span>
              <div className="md:text-right">
                <h3 className="text-base font-serif-title font-medium text-gallery-900">{item.title}</h3>
                <p className="text-xs text-gray-500 font-light mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
