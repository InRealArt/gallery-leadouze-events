import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const lire = (chemin: string) =>
  readFileSync(new URL(`../${chemin}`, import.meta.url), "utf-8").replace(/\s+/g, " ")

describe("textes alignés sur une inscription validée par l'équipe", () => {
  it.each(["data/event.ts", "components/sections/reservation/SuccessDialog.tsx"])(
    "%s ne promet pas de place avant la validation",
    (chemin) => {
      const texte = lire(chemin)
      expect(texte).not.toMatch(/inscription est immédiate/i)
      expect(texte).not.toMatch(/email de confirmation/i)
      expect(texte).not.toMatch(/bien enregistrée/i)
      expect(texte).toContain("en fonction des places disponibles")
    },
  )

  it("les mentions légales décrivent la validation et les invitations par email", () => {
    const texte = lire("app/mentions-legales/page.tsx")
    expect(texte).toContain("validation")
    expect(texte).toContain("invitation nominative")
    expect(texte).toContain("sources publiques")
    expect(texte).toContain("lien de désinscription")
  })

  it("le bouton d'inscription ne change pas", () => {
    expect(lire("components/sections/faq/FaqAccordionItem.tsx")).toContain("Je m&apos;inscris")
  })
})
