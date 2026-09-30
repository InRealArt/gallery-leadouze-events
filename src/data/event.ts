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
    bio: "Propriétaire de la galerie, fort de 40 ans d'ancrage et d'excellence Avenue Matignon.",
    photo: "/images/intervenants/Alexandre.webp",
  },
  {
    name: "Thibault Proust",
    role: "Directeur • Galerie Leadouze",
    bio: "Directeur de la galerie et chef de projet culturel, expert des trajectoires artistiques.",
    photo: "/images/intervenants/Thibault.webp",
  },
  {
    name: "Nicolas Kaenzig",
    role: "Ex-Christie's • Expert Art",
    bio: "Expert du marché fort de 20 ans chez Christie's, animateur de la masterclass « Quel collectionneur êtes-vous ? ».",
    photo: "/images/intervenants/Nicolas.webp",
  },
  {
    name: "Timothée Roy",
    role: "Fondateur d'InRealArt et agent d'artiste",
    bio: "Spécialiste de la communication culturelle, dédié à la mise en lumière et à la portée des œuvres comme des artistes.",
    photo: "/images/intervenants/Timothee.webp",
  },
]

export interface GuestOfHonour {
  name: string
  role: string
  bio: string
  highlights: string[]
  photo: string
}

export const guestOfHonour: GuestOfHonour = {
  name: "Xavier Près",
  role: "Avocat associé • VALTHER",
  bio: "Docteur en droit et spécialiste de la propriété intellectuelle, Xavier Près conseille depuis plus de 20 ans une clientèle publique et privée, avec un fil conducteur : l'art et la culture. Il dispose d'une solide expertise en droit du marché de l'art et du patrimoine culturel.",
  highlights: [
    "Ancien responsable du service juridique du musée du Louvre",
    "Droit du marché de l'art & patrimoine culturel",
    "Enseignant à Sciences Po et à l'Université Paris-Panthéon-Assas",
  ],
  photo: "/images/intervenants/Xavier.webp",
}

export interface ProgrammeItem {
  time: string
  title: string
  description: string
}

export const programme: ProgrammeItem[] = [
  {
    time: "18h00 – 19h00",
    title: "Accueil des participants",
    description: "Alexandre Leadouze vous accueille pour cet événement exceptionnel.",
  },
  {
    time: "19h00 – 19h30",
    title: "La typologie des collectionneurs : lequel êtes-vous ?",
    description: "Intervention de Nicolas Kaenzig sur les profils et motivations des collectionneurs d'art.",
  },
  {
    time: "19h30 – 20h00",
    title: "Présentation d'inrealart & structuration patrimoniale",
    description: "Intervention de Timothée Roy sur le projet inrealart et l'utilisation de l'art comme levier financier.",
  },
  {
    time: "20h00 – 22h00",
    title: "Cocktail & networking privé",
    description: "Échanges autour des œuvres présentées d'Alain Pontecorvo.",
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

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: "En quoi consiste l'exposition consacrée à Alain Pontecorvo ?",
    answer:
      "L'exposition met à l'honneur les toiles majeures d'Alain Pontecorvo à travers une rétrospective exclusive au cœur du triangle d'or. Vous y découvrirez des œuvres fortes, dont la toile vedette Burning Man, caractérisées par un travail remarquable sur la lumière, les cadrages et les volumes.",
  },
  {
    question: "Quels sont les horaires d'ouverture et les conditions d'accès ?",
    answer:
      "L'exposition en journée est ouverte à tout public souhaitant admirer les toiles. La soirée de 18h à 22h est quant à elle réservée sur invitation aux professionnels du patrimoine, avocats, family offices et investisseurs pour un format mêlant masterclass et cocktail networking.",
  },
  {
    question: "Où se situe la Galerie Leadouze et comment s'y rendre ?",
    answer:
      "La Galerie Leadouze est installée au 16 avenue Matignon, dans le 8e arrondissement de Paris. Elle est facilement accessible via les stations de métro Franklin D. Roosevelt ou Miromesnil.",
  },
  {
    question: "Quel est le programme de la masterclass de Nicolas Kaenzig ?",
    answer:
      "Fort de 20 ans d'expérience chez Christie's, l'expert Nicolas Kaenzig animera la masterclass « Quel collectionneur êtes-vous ? ». Il y décryptera les différentes typologies de collectionneurs et les tendances clés du marché de l'art contemporain.",
  },
  {
    question: "Quels documents seront mis à disposition des visiteurs ?",
    answer:
      "Les visiteurs auront accès à un catalogue exclusif regroupant les artistes représentés par InRealArt et la Galerie Leadouze, accompagné de la liste des toiles actuellement disponibles à l'acquisition. Des fiches de synthèse dédiées à la fiscalité et à l'optimisation patrimoniale de l'art seront également remises aux participants.",
  },
  {
    question: "Comment fonctionne la défiscalisation d'une œuvre d'art ?",
    answer:
      "En vertu de l'article 238bis AB du Code Général des Impôts, l'acquisition d'une œuvre d'un artiste vivant permet à une entreprise de déduire 100 % du prix d'achat de son résultat imposable sur 5 ans. Pour les particuliers, les œuvres d'art sont totalement exclues de l'assiette de l'IFI.",
  },
  {
    question: "Comment faire une demande d'invitation pour la soirée privée ?",
    answer:
      "Il suffit d'effectuer une demande d'accès via le formulaire en ligne. Une invitation nominative vous sera adressée après validation par nos équipes.",
  },
]
