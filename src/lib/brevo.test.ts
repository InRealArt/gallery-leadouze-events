import { describe, expect, it } from "vitest"
import { buildAttributes } from "./brevo"

const contact = { email: "a@b.fr", firstName: "A", lastName: "B", phone: "0612345678", city: "D", profession: "E", company: "C" }

describe("buildAttributes", () => {
  it("n'efface rien sans paramètres", () => {
    const attrs = buildAttributes(contact, false)
    for (const k of ["SOURCE_INVITATION", "INVITE_TOKEN_UTILISE", "ACCOMPAGNANT", "BASE_EVENT"]) {
      expect(attrs).not.toHaveProperty(k)
    }
  })

  it("transmet la source quand elle existe", () => {
    expect(buildAttributes({ ...contact, invitationSource: "presse", invitationToken: "abcdefghijklmnop", companion: "Marie" }, false))
      .toMatchObject({ SOURCE_INVITATION: "presse", INVITE_TOKEN_UTILISE: "abcdefghijklmnop", ACCOMPAGNANT: "Marie" })
  })
})
