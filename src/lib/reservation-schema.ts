import * as z from "zod"

const PHONE_PATTERN = /^\+?[\d\s.\-()]+$/
const MIN_PHONE_DIGITS = 8
const MAX_PHONE_DIGITS = 15

function requiredText(missingMessage: string, max = 100) {
  return z
    .string({ error: missingMessage })
    .trim()
    .min(1, missingMessage)
    .max(max, `${max} caractères maximum.`)
}

/** Shared by the form (instant feedback) and the server action (source of truth). */
export const reservationSchema = z.object({
  firstName: requiredText("Le prénom est obligatoire."),
  lastName: requiredText("Le nom est obligatoire."),
  email: requiredText("L'email est obligatoire.", 254)
    .toLowerCase()
    .pipe(z.email("Le format de l'email est invalide (ex. nom@societe.fr).")),
  phone: requiredText("Le téléphone est obligatoire.", 25).refine((value) => {
    const digits = value.replace(/\D/g, "").length
    return PHONE_PATTERN.test(value) && digits >= MIN_PHONE_DIGITS && digits <= MAX_PHONE_DIGITS
  }, "Le format du téléphone est invalide (ex. 06 12 34 56 78 ou +33 6 12 34 56 78)."),
  company: requiredText("L'entreprise est obligatoire."),
  city: requiredText("La ville est obligatoire."),
  profession: requiredText("L'activité ou la profession est obligatoire."),
})

export type ReservationInput = z.infer<typeof reservationSchema>
export type ReservationField = keyof ReservationInput
export type ReservationFieldErrors = Partial<Record<ReservationField, string>>

export const RESERVATION_FIELDS = Object.keys(reservationSchema.shape) as ReservationField[]

export type ReservationParseResult =
  | { success: true; data: ReservationInput }
  | { success: false; fieldErrors: ReservationFieldErrors }

export function parseReservation(formData: FormData): ReservationParseResult {
  const raw = Object.fromEntries(RESERVATION_FIELDS.map((field) => [field, formData.get(field) ?? undefined]))
  const result = reservationSchema.safeParse(raw)
  if (result.success) return { success: true, data: result.data }

  // Keep only the first message per field.
  const { fieldErrors } = z.flattenError(result.error)
  const firstErrors: ReservationFieldErrors = {}
  for (const field of RESERVATION_FIELDS) {
    const message = fieldErrors[field]?.[0]
    if (message) firstErrors[field] = message
  }
  return { success: false, fieldErrors: firstErrors }
}
