import { ReservationForm } from "./reservation/ReservationForm"

export function ReservationSection() {
  return (
    <section id="reservation" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <div className="bg-gallery-50 p-10 md:p-14 luxury-border">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent-gold block mb-2">
              Soirées Réservées
            </span>
            <h2 className="text-3xl font-serif-title text-gallery-900">Demande d&apos;Invitation Nommée</h2>
            <p className="text-xs text-gray-500 font-light mt-3">
              Veuillez indiquer la soirée de votre choix (15, 16 ou 17 Octobre).
            </p>
          </div>

          <ReservationForm />
        </div>
      </div>
    </section>
  )
}
