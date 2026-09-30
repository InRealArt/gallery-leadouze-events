"use client"

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react"
import { professionOptions } from "@/data/event"
import { submitReservation, type ReservationState } from "@/app/actions/reservation"
import { TURNSTILE_ACTION_RESERVATION } from "@/lib/constants"
import { SubmitButton } from "@/components/ui/Button"
import { FormField, FormSelect } from "./FormField"
import { Turnstile } from "./Turnstile"

const initialState: ReservationState = { status: "idle" }

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

  // Keep user input on failure: only clear the form once the request succeeded.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset()
  }, [state])

  // Submitting via onSubmit (instead of `action`) prevents React from auto-resetting the fields.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    startTransition(() => formAction(formData))
  }

  return (
    <>
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="firstName" name="firstName" label="Prénom" type="text" required />
          <FormField id="lastName" name="lastName" label="Nom" type="text" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="email" name="email" label="Email Professionnel" type="email" required />
          <FormField id="phone" name="phone" label="Téléphone" type="tel" required />
        </div>

        <FormSelect
          id="profession"
          name="profession"
          label="Activité / Profession"
          options={professionOptions}
          placeholder="Sélectionner"
          defaultValue=""
          required
        />

        <Turnstile action={TURNSTILE_ACTION_RESERVATION} resetKey={state.attempt} onValidChange={setIsHumanVerified} />

        <SubmitButton
          type="submit"
          disabled={isPending || !isHumanVerified}
          className="disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isPending ? "Envoi en cours…" : "Soumettre ma Demande"}
        </SubmitButton>
      </form>

      {state.status === "success" && (
        <div className="mt-6 p-4 bg-white border border-gray-200 text-xs text-gallery-900 text-center font-light">
          Votre demande d&apos;invitation a bien été transmise. Nos équipes reviendront vers vous sous 24h.
        </div>
      )}

      {state.status === "error" && (
        <div role="alert" className="mt-6 p-4 bg-white border border-red-200 text-xs text-red-700 text-center font-light">
          {state.message}
        </div>
      )}
    </>
  )
}
