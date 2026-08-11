import { faqItems } from "@/data/event"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FaqAccordionItem } from "./faq/FaqAccordionItem"

export function FaqSection() {
  return (
    <section id="faq" className="py-24 border-t border-gray-100 bg-gallery-50">
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeading eyebrow="Informations" title="Questions Fréquentes" />

        <div className="space-y-4">
          {faqItems.map((item) => (
            <FaqAccordionItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
