import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ExpositionSection } from "@/components/sections/ExpositionSection"
import { IntervenantsSection } from "@/components/sections/IntervenantsSection"
import { ProgrammeSection } from "@/components/sections/ProgrammeSection"
import { DefiscalisationBanner } from "@/components/sections/DefiscalisationBanner"
import { ReservationSection } from "@/components/sections/ReservationSection"
import { FaqSection } from "@/components/sections/FaqSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExpositionSection />
        <IntervenantsSection />
        <ProgrammeSection />
        <DefiscalisationBanner />
        <ReservationSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
