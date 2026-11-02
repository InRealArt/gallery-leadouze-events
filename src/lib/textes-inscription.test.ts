import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const lire = (chemin: string) => readFileSync(new URL(`../${chemin}`, import.meta.url), "utf-8")

describe("textes alignés sur une inscription sans validation", () => {
  it.each([
    "data/event.ts",
    "data/legal.ts",
    "app/actions/reservation.ts",
    "app/mentions-legales/page.tsx",
    "components/sections/ReservationSection.tsx",
    "components/sections/reservation/SuccessDialog.tsx",
  ])("%s ne parle plus de demande ni de validation", (chemin) => {
    const texte = lire(chemin)
    expect(texte).not.toMatch(/demandes? d(&apos;|')(invitation|accès)/i)
    expect(texte).not.toMatch(/validation par nos équipes/i)
    expect(texte).not.toMatch(/Votre demande/)
  })

  it("les mentions légales décrivent les invitations par email", () => {
    const texte = lire("app/mentions-legales/page.tsx").replace(/\s+/g, " ")
    expect(texte).toContain("sources publiques")
    expect(texte).toContain("lien de désinscription")
  })
})
