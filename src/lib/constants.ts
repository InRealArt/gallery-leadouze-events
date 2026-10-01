export const SITE = {
  name: "InRealArt x Galerie Leadouze",
  title: "Pontecorvo à la Galerie Leadouze : Masterclass, Art & Collectionnisme",
  description:
    "Exposition rétrospective Pontecorvo à Paris, prolongée par une soirée exclusive sur invitation le jeudi 5 novembre pour CGP, avocats et family offices.",
  gallery: {
    name: "Galerie Leadouze",
    address: "16 avenue Matignon, 75008 Paris",
  },
  simulatorUrl: "https://www.inrealart.com//heritage-art-simulator",
} as const

/** Turnstile `action` for the invitation form (max 32 chars, verified server-side). */
export const TURNSTILE_ACTION_RESERVATION = "reservation"
