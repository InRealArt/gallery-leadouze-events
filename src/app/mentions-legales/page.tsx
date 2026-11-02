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
  const { publisher, partner, host, domainProvider, processors } = legalInfo

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
            <InfoLine label="Société" value={`${publisher.name} — ${publisher.status}`} />
            <InfoLine label="Immatriculation" value={publisher.registration} />
            <InfoLine label="Siège social" value={publisher.address} />
            <InfoLine label="Représentant" value={`${publisher.representative}, ${publisher.representativeRole}`} />
            <InfoLine label="Directeur de la publication" value={publisher.director} />
            <InfoLine label="Contact" value={publisher.email} />
            <p className="text-sm text-gray-500">
              La société étant en cours de formation, sa forme juridique, son numéro d&apos;immatriculation et son capital
              social seront précisés dès son immatriculation.
            </p>
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
            <InfoLine label="Nom de domaine et DNS" value={`${domainProvider.name} — ${domainProvider.address} — ${domainProvider.website}`} />
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

          <LegalBlock title="Responsabilité">
            <p>
              {publisher.name} s&apos;efforce de fournir des informations exactes et à jour, mais ne peut garantir
              l&apos;absence d&apos;erreurs ou d&apos;omissions. Le programme, les horaires et les intervenants de
              l&apos;événement peuvent être modifiés sans préavis. L&apos;accès au site peut être interrompu pour des
              raisons de maintenance ou techniques, sans que cela ouvre droit à indemnité.
            </p>
            <p>
              Le site peut contenir des liens vers des sites tiers dont {publisher.name} ne contrôle pas le contenu et
              n&apos;assume aucune responsabilité.
            </p>
          </LegalBlock>

          <LegalBlock title="Données personnelles">
            <p>
              <strong className="font-medium text-gallery-900">Responsable du traitement&nbsp;:</strong>{" "}
              {publisher.name}, {publisher.address}.
            </p>
            <p>
              <strong className="font-medium text-gallery-900">Données collectées&nbsp;:</strong> via le formulaire de
              demande d&apos;invitation, vos nom, prénom, adresse e-mail professionnelle, numéro de téléphone,
              entreprise, ville et activité ou profession.
            </p>
            <p>
              <strong className="font-medium text-gallery-900">Finalités et base légale&nbsp;:</strong> traiter votre
              demande d&apos;invitation, gérer la liste des invités et vous communiquer les informations pratiques liées
              à l&apos;événement, sur la base de l&apos;exécution de mesures précontractuelles prises à votre demande et
              de notre intérêt légitime à organiser l&apos;événement.
            </p>
            <p>
              <strong className="font-medium text-gallery-900">Destinataires&nbsp;:</strong> les équipes
              d&apos;{publisher.name} et de la {partner.name}, ainsi que les prestataires techniques suivants, qui
              agissent en qualité de sous-traitants&nbsp;:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {processors.map((processor) => (
                <li key={processor.name}>
                  {processor.name} — {processor.purpose} ({processor.location}).
                </li>
              ))}
            </ul>
            <p>
              Certains de ces prestataires sont situés hors de l&apos;Union européenne. Les transferts de données
              reposent sur les garanties prévues par le RGPD (décision d&apos;adéquation ou clauses contractuelles
              types).
            </p>
            <p>
              <strong className="font-medium text-gallery-900">Durée de conservation&nbsp;:</strong> vos données sont
              conservées pendant la durée nécessaire à l&apos;organisation de l&apos;événement, puis au maximum trois
              ans à compter de notre dernier contact, sauf demande de suppression de votre part.
            </p>
            <p>
              <strong className="font-medium text-gallery-900">Vos droits&nbsp;:</strong> conformément au Règlement
              général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
              droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de
              portabilité de vos données. Pour l&apos;exercer, écrivez à {publisher.email}. Vous pouvez également
              introduire une réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </LegalBlock>

          <LegalBlock title="Cookies et services tiers">
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ni d&apos;outil de mesure d&apos;audience. Le
              formulaire est protégé contre les envois automatisés par Cloudflare Turnstile, et le plan d&apos;accès est
              fourni par Google Maps&nbsp;; ces services peuvent déposer des cookies ou traceurs techniques nécessaires
              à leur fonctionnement.
            </p>
          </LegalBlock>

          <LegalBlock title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de
              résolution amiable, les tribunaux français sont seuls compétents.
            </p>
          </LegalBlock>
        </div>
      </main>

      <Footer />
    </>
  )
}
