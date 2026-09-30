const CONTACTS_URL = "https://api.brevo.com/v3/contacts"
const REQUEST_TIMEOUT_MS = 8000

export interface EventContact {
  email: string
  firstName: string
  lastName: string
  phone: string
  city: string
  profession: string
  company: string
}

interface BrevoError {
  code?: string
  message?: string
}

/**
 * Brevo requires the `SMS` attribute with a country code. Only French mobiles (06…, 07…)
 * are converted to +33: another local number could belong to any country, so it gets
 * no SMS and is kept in TELEPHONE only.
 */
export function toInternationalPhone(raw: string): string | null {
  const compact = raw.replace(/[\s.\-()]/g, "")
  if (/^00\d{8,15}$/.test(compact)) return `+${compact.slice(2)}`
  if (/^\+\d{8,15}$/.test(compact)) return compact
  if (/^0[67]\d{8}$/.test(compact)) return `+33${compact.slice(1)}`
  return null
}

function buildAttributes(contact: EventContact, withSms: boolean): Record<string, string> {
  // FIRSTNAME, LASTNAME and SMS are Brevo defaults; VILLE, PROFESSION, ENTREPRISE and
  // TELEPHONE must exist as "Text" attributes in Brevo (Contacts > Settings > Contact attributes).
  const attributes: Record<string, string> = {
    FIRSTNAME: contact.firstName,
    LASTNAME: contact.lastName,
    VILLE: contact.city,
    PROFESSION: contact.profession,
    ENTREPRISE: contact.company,
    TELEPHONE: contact.phone,
  }
  const sms = withSms ? toInternationalPhone(contact.phone) : null
  if (sms) attributes.SMS = sms
  return attributes
}

async function postContact(apiKey: string, listId: number, contact: EventContact, withSms: boolean) {
  return fetch(CONTACTS_URL, {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      email: contact.email,
      attributes: buildAttributes(contact, withSms),
      listIds: [listId],
      // Re-registration of a known email updates the contact and adds it to the list.
      updateEnabled: true,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
}

/** Creates (or updates) the contact in Brevo and adds it to the event list. */
export async function addContactToEventList(contact: EventContact): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY
  const listId = Number(process.env.BREVO_LIST_ID)
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("BREVO_API_KEY or BREVO_LIST_ID is not configured")
    return false
  }

  try {
    let res = await postContact(apiKey, listId, contact, true)

    // SMS must be unique and valid in Brevo: if it is rejected (already used by another
    // contact, invalid format…), keep the registration and rely on the TELEPHONE attribute.
    if (res.status === 400) {
      const error = (await res.json().catch(() => ({}))) as BrevoError
      if (/sms|phone/i.test(error.message ?? "") || error.code === "duplicate_parameter") {
        console.warn("Brevo rejected the SMS attribute, retrying without it", error)
        res = await postContact(apiKey, listId, contact, false)
      } else {
        console.error("Brevo contact creation failed", error)
        return false
      }
    }

    // 201 = created, 204 = existing contact updated.
    if (res.status === 201 || res.status === 204) return true

    console.error("Brevo contact creation failed", res.status, await res.text().catch(() => ""))
    return false
  } catch (error) {
    console.error("Brevo request error", error)
    return false
  }
}
