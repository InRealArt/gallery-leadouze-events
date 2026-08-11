export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Exposition", href: "#exposition" },
  { label: "Intervenants", href: "#intervenants" },
  { label: "Déroulé", href: "#programme" },
  { label: "Défiscalisation", href: "#defiscalisation" },
  { label: "FAQ", href: "#faq" },
]

export interface PatrimonyAsset {
  title: string
  description: string
}

export const patrimonyAssets: PatrimonyAsset[] = [
  {
    title: "Exonération IFI",
    description:
      "Les œuvres d'art demeurent exclues de l'assiette de l'Impôt sur la Fortune Immobilière.",
  },
  {
    title: "Fiscalité Entreprise (Art. 238bis AB)",
    description:
      "Déduction intégrale du prix d'acquisition du résultat imposable sur 5 ans.",
  },
  {
    title: "Protection & Transmission",
    description: "Un actif tangible, déconnecté des marchés financiers traditionnels.",
  },
]

export interface Speaker {
  name: string
  role: string
  bio: string
  photo: string
}

export const speakers: Speaker[] = [
  {
    name: "Alexandre Leadouze",
    role: "Propriétaire • Galerie Leadouze",
    bio: "Figures de référence du marché de l'art parisien, il présente l'exposition Pontecorvo et la cote des artistes.",
    photo: "/images/intervenants/Alexandre.webp",
  },
  {
    name: "Thibault",
    role: "Directeur • Galerie Leadouze",
    bio: "Spécialiste de la médiation artistique, il anime la découverte guidée des toiles majeures présentées.",
    photo: "/images/intervenants/Thibault.webp",
  },
  {
    name: "Nicolas Kaenzig",
    role: "Ex-Christie's • Expert Art",
    bio: "Ancien spécialiste Christie's et conseiller auprès des Family Offices et CGP pour l'intégration de l'art au patrimoine.",
    photo: "/images/intervenants/Nicolas.webp",
  },
  {
    name: "Timothée Roy",
    role: "Fondateur • InRealArt",
    bio: "Pionnier de la numérisation et sécurisation des actifs artistiques, il dévoile les solutions d'investissement moderne.",
    photo: "/images/intervenants/Tim.webp",
  },
]

export interface ProgrammeItem {
  time: string
  title: string
  description: string
}

export const programme: ProgrammeItem[] = [
  {
    time: "19h00 – 19h30",
    title: "Cocktail d'Accueil & Vernissage Privé",
    description: "Découverte exclusive de l'exposition Pontecorvo en présence des galeristes.",
  },
  {
    time: "19h30 – 20h30",
    title: "Table Ronde & Structuration Patrimoniale",
    description: "Intervention de Nicolas Kaenzig et Timothée Roy sur l'art comme levier financier.",
  },
  {
    time: "20h30 – 21h00",
    title: "Démonstration du Simulateur Fiscal",
    description: "Cas d'application concrète pour l'optimisation fiscale en entreprise et particuliers.",
  },
  {
    time: "21h00 – 22h00",
    title: "Networking Privé & Échanges Privilégiés",
    description: "Échanges confidentiels entre confrères et réservations d'œuvres.",
  },
]

export interface ProfessionOption {
  value: string
  label: string
}

export const professionOptions: ProfessionOption[] = [
  { value: "cgp", label: "CGP / Conseiller Patrimonial" },
  { value: "avocat", label: "Avocat / Juriste" },
  { value: "fo", label: "Family Office" },
  { value: "notaire", label: "Notaire" },
  { value: "collectionneur", label: "Collectionneur / Investisseur" },
]

export interface EveningOption {
  value: string
  label: string
}

export const eveningOptions: EveningOption[] = [
  { value: "15", label: "Mardi 15 Octobre (19h – 22h)" },
  { value: "16", label: "Mercredi 16 Octobre (19h – 22h)" },
  { value: "17", label: "Jeudi 17 Octobre (19h – 22h)" },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: "À qui s'adresse l'événement ?",
    answer:
      "L'exposition Pontecorvo en journée est ouverte à tout public souhaitant admirer les toiles. Les soirées de 19h à 22h sont quant à elles réservées sur invitation aux professionnels du patrimoine, avocats, family offices et investisseurs.",
  },
  {
    question: "Comment fonctionne la défiscalisation d'une œuvre d'art ?",
    answer:
      "En vertu de l'article 238bis AB du CGI, l'acquisition d'une œuvre d'artiste vivant permet d'amortir 100% du prix d'achat sur le résultat imposable de l'entreprise sur 5 ans. De plus, les œuvres d'art sont exclues de l'IFI pour les particuliers.",
  },
  {
    question: "Puis-je venir accompagné ?",
    answer:
      "Oui, sous réserve d'avoir enregistré le nom de votre accompagnateur ou client dans le formulaire de réservation afin de respecter la jauge d'accueil.",
  },
]
