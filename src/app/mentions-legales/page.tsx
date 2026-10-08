import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { SITE } from "@/lib/constants"
import { legalInfo } from "@/data/legal"

export const metadata: Metadata = {
  title: `Mentions légales — ${SITE.name}`,
  description: `Mentions légales du site ${SITE.name}.`,
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 border-t border-gray-100">
      <h2 className="text-2xl font-serif-title text-gallery-900 mb-6">{title}</h2>
      <div className="space-y-4 text-base text-gray-600 font-light leading-relaxed">{children}</div>
    </section>
  )
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="block text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-1">{label}</span>
      {value}
    </p>
  )
}

export default function MentionsLegalesPage() {
  const { publisher, partner, host } = legalInfo

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xs uppercase tracking-[0.25em] font-medium text-gallery-900">
            <span className="normal-case">InRealArt</span> <span className="text-accent-gold font-light">|</span> GALERIE LEADOUZE
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 hover:text-gallery-900 transition-colors"
          >
            ← Retour au site
          </Link>
        </div>
      </header>

      <main className="pt-36 pb-24 md:pt-44 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-gold">Informations légales</span>
          <h1 className="text-4xl md:text-5xl font-serif-title font-normal tracking-tight text-gallery-900 mt-4 mb-6">
            Mentions légales
          </h1>
          <p className="text-sm text-gray-500 font-light mb-12">Dernière mise à jour : {legalInfo.lastUpdated}</p>

          <LegalBlock title="Éditeur du site">
            <InfoLine label="Société" value={`${publisher.name} — ${publisher.legalForm}`} />
            <InfoLine label="Siège social" value={publisher.address} />
            <InfoLine label="Immatriculation" value={publisher.registration} />
            <InfoLine label="N° de TVA intracommunautaire" value={publisher.vatNumber} />
            <InfoLine label="Contact" value={publisher.email} />
            <InfoLine label="Directeur de la publication" value={publisher.director} />
          </LegalBlock>

          <LegalBlock title="Lieu de l'événement">
            <p>
              L&apos;événement se tient à la {partner.name}, {partner.address}, en partenariat avec {publisher.name}.
            </p>
          </LegalBlock>

          <LegalBlock title="Hébergement">
            <InfoLine label="Hébergeur" value={host.name} />
            <InfoLine label="Adresse" value={host.address} />
            <InfoLine label="Site web" value={host.website} />
          </LegalBlock>

          <LegalBlock title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, photographies, reproductions d&apos;œuvres,
              logos, éléments graphiques) est protégé par le droit d&apos;auteur et le droit de la propriété
              intellectuelle. Les œuvres reproduites restent la propriété de leurs auteurs ou ayants droit.
            </p>
            <p>
              Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable
              est interdite.
            </p>
          </LegalBlock>

          <LegalBlock title="Données personnelles">
            <p>
              Les informations recueillies via le formulaire de demande d&apos;invitation (nom, prénom, e-mail,
              téléphone, entreprise, ville, activité) sont utilisées uniquement pour la gestion des invitations à
              l&apos;événement et la communication qui s&apos;y rapporte. Elles sont enregistrées auprès de notre
              prestataire d&apos;e-mailing Brevo.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et
              Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              d&apos;opposition et de portabilité de vos données. Pour l&apos;exercer, écrivez à{" "}
              {publisher.email}. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </LegalBlock>

          <LegalBlock title="Cookies et services tiers">
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires. Le formulaire est protégé contre les envois
              automatisés par Cloudflare Turnstile, et le plan d&apos;accès est fourni par Google Maps&nbsp;; ces
              services peuvent déposer des cookies techniques nécessaires à leur fonctionnement.
            </p>
          </LegalBlock>
        </div>
      </main>

      <Footer />
    </>
  )
}
