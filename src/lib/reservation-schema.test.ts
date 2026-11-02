import { describe, expect, it } from "vitest"
import { reservationSchema } from "./reservation-schema"

const base = { firstName: "A", lastName: "B", email: "a@b.fr", phone: "0612345678", company: "C", city: "D", profession: "E" }

describe("reservationSchema", () => {
  it("garde des paramètres valides", () => {
    const r = reservationSchema.parse({ ...base, invitationSource: "presse", invitationToken: "abcdefghijklmnop", companion: " Marie Durand " })
    expect(r).toMatchObject({ invitationSource: "presse", invitationToken: "abcdefghijklmnop", companion: "Marie Durand" })
  })

  it("ignore des paramètres altérés sans bloquer", () => {
    const r = reservationSchema.safeParse({ ...base, invitationSource: "hack", invitationToken: "<script>" })
    expect(r.success).toBe(true)
    expect(r.data?.invitationSource).toBeUndefined()
    expect(r.data?.invitationToken).toBeUndefined()
  })

  it("ignore un jeton trop long", () => {
    expect(reservationSchema.parse({ ...base, invitationToken: "a".repeat(65) }).invitationToken).toBeUndefined()
  })

  it("accepte l'absence de paramètres et d'accompagnant", () => {
    const r = reservationSchema.parse(base)
    expect(r.companion).toBeUndefined()
    expect(reservationSchema.parse({ ...base, companion: "  " }).companion).toBeUndefined()
  })

  it("refuse un accompagnant trop long", () => {
    expect(reservationSchema.safeParse({ ...base, companion: "a".repeat(101) }).success).toBe(false)
  })
})
