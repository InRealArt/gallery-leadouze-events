"use client"

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react"
import { submitReservation, type ReservationState } from "@/app/actions/reservation"
import { TURNSTILE_ACTION_RESERVATION } from "@/lib/constants"
import {
  parseReservation,
  RESERVATION_FIELDS,
  type ReservationField,
  type ReservationFieldErrors,
} from "@/lib/reservation-schema"
import { SubmitButton } from "@/components/ui/Button"
import { FormField } from "./FormField"
import { Turnstile } from "./Turnstile"
import { SuccessDialog } from "./SuccessDialog"

const initialState: ReservationState = { status: "idle" }
const FIELD_ERRORS_MESSAGE = "Merci de corriger les champs signalés."

function isReservationField(name: string): name is ReservationField {
  return (RESERVATION_FIELDS as string[]).includes(name)
}

export function ReservationForm() {
  const [state, formAction, isPending] = useActionState(
    async (prev: ReservationState, formData: FormData) => {
      const result = await submitReservation(prev, formData)
      return { ...result, attempt: (prev.attempt ?? 0) + 1 }
    },
    initialState,
  )
  const formRef = useRef<HTMLFormElement>(null)
  const [isHumanVerified, setIsHumanVerified] = useState(false)
  // Client-side errors override the server ones; an edited field maps to `undefined` to hide its error.
  const [clientErrors, setClientErrors] = useState<ReservationFieldErrors>({})
  // Server errors of an attempt are dropped as soon as the user submits again.
  const [dismissedAttempt, setDismissedAttempt] = useState<number | undefined>()
  const serverErrors = state.attempt !== dismissedAttempt ? state.fieldErrors : undefined
  const errors: ReservationFieldErrors = { ...serverErrors, ...clientErrors }
  const hasFieldErrors = Object.values(errors).some(Boolean)
  // The confirmation modal opens on each successful attempt until the user closes it.
  const [closedAttempt, setClosedAttempt] = useState<number | undefined>()
  const isSuccessOpen = state.status === "success" && state.attempt !== closedAttempt

  // Keep user input on failure: only clear the form once the request succeeded.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset()
  }, [state])

  // Submitting via onSubmit (instead of `action`) prevents React from auto-resetting the fields.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setDismissedAttempt(state.attempt)

    // Validate locally first so the Turnstile token is not spent on an invalid form.
    const parsed = parseReservation(formData)
    if (!parsed.success) {
      setClientErrors(parsed.fieldErrors)
      const firstInvalid = RESERVATION_FIELDS.find((field) => parsed.fieldErrors[field])
      const field = firstInvalid && form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
      if (field) {
        // Center the field so its label is not hidden under the fixed header.
        field.scrollIntoView({ behavior: "smooth", block: "center" })
        field.focus({ preventScroll: true })
      }
      return
    }

    setClientErrors({})
    startTransition(() => formAction(formData))
  }

  function handleFieldChange(event: FormEvent<HTMLFormElement>) {
    const { name } = event.target as HTMLInputElement
    if (isReservationField(name) && errors[name]) {
      setClientErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Field errors get the generic summary; other server errors (Turnstile, Brevo) show their own message.
  const alertMessage = hasFieldErrors
    ? FIELD_ERRORS_MESSAGE
    : state.status === "error" && !state.fieldErrors && state.attempt !== dismissedAttempt
      ? state.message
      : undefined

  return (
    <>
      <p className="text-[13px] text-gray-500 font-light mb-6">
        <span aria-hidden="true" className="text-accent-gold">*</span> Tous les champs sont obligatoires.
      </p>

      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} onChange={handleFieldChange} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="firstName" name="firstName" label="Prénom" type="text" autoComplete="given-name" required error={errors.firstName} />
          <FormField id="lastName" name="lastName" label="Nom" type="text" autoComplete="family-name" required error={errors.lastName} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="email" name="email" label="Email professionnel" type="email" autoComplete="email" required error={errors.email} />
          <FormField id="phone" name="phone" label="Téléphone" type="tel" autoComplete="tel" required error={errors.phone} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="company" name="company" label="Entreprise" type="text" autoComplete="organization" required error={errors.company} />
          <FormField id="city" name="city" label="Ville" type="text" autoComplete="address-level2" required error={errors.city} />
        </div>

        <FormField id="profession" name="profession" label="Activité / profession" type="text" autoComplete="organization-title" required error={errors.profession} />

        <Turnstile action={TURNSTILE_ACTION_RESERVATION} resetKey={state.attempt} onValidChange={setIsHumanVerified} />

        <SubmitButton
          type="submit"
          disabled={isPending || !isHumanVerified}
          className="disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isPending ? "Envoi en cours…" : "Soumettre ma demande"}
        </SubmitButton>
      </form>

      <SuccessDialog open={isSuccessOpen} onClose={() => setClosedAttempt(state.attempt)} />

      {alertMessage && (
        <div role="alert" className="mt-6 p-4 bg-white border border-red-200 text-xs text-red-700 text-center font-light">
          {alertMessage}
        </div>
      )}
    </>
  )
}
