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
  photoClassName?: string
}

export const speakers: Speaker[] = [
  {
    name: "Nicolas Kaenzig",
    role: "Expert en marché de l'art",
    bio: "Vingt ans chez Christie's. Il conseille aujourd'hui des professions libérales et des family offices dans la construction de leur collection, et anime la masterclass « Quel collectionneur êtes-vous\u00a0? ».",
    photo: "/images/intervenants/Nicolas.webp",
    photoClassName: "scale-[1.35] origin-[50%_35%]",
  },
  {
    name: "Timothée Roy",
    role: "Fondateur d'InRealArt",
    bio: "Agent d'artistes, il a fondé InRealArt, une agence de communication qui met en relation artistes, professionnels du marché et professions libérales.",
    photo: "/images/intervenants/Timothee.webp",
    photoClassName: "object-[50%_25%]",
  },
]

export const galleristQuote = {
  name: "Alexandre Leadouze",
  role: "Directeur de la galerie Leadouze",
  photo: "/images/intervenants/Alexandre.webp",
  quote:
    "Depuis quarante ans, avenue Matignon, j'aide ceux qui aiment l'art à devenir collectionneurs. Le 5 novembre, Nicolas Kaenzig vous en livrera les clés, InRealArt vous dévoilera sa vision, et nous poursuivrons autour d'un cocktail, au cœur de la rétrospective Pontecorvo. Et si votre collection commençait ce soir-là\u00a0?",
}

export interface GuestOfHonour {
  name: string
  role: string
  bio: string[]
  photo: string
}

export const guestOfHonour: GuestOfHonour = {
  name: "Xavier Près",
  role: "Avocat associé chez VALTHER",
  bio: [
    "Docteur en droit et spécialiste de la propriété intellectuelle, Xavier Près conseille depuis plus de vingt ans des clients publics et privés en droit du marché de l'art et du patrimoine culturel.",
    "Ancien responsable du service juridique du musée du Louvre, il enseigne aujourd'hui à Sciences Po et à l'Université Paris-Panthéon-Assas.",
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
    title: "Présentation d'InRealArt & du catalogue",
    description: "Intervention de Timothée Roy : genèse du projet InRealArt et présentation des œuvres du catalogue.",
  },
  {
    time: "20h00 – 22h00",
    title: "Cocktail & networking privé",
    description: "Échanges autour des œuvres présentées d'Alain Pontecorvo.",
  },
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
