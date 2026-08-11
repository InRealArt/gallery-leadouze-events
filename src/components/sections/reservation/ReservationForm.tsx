"use client"

import { useState, type FormEvent } from "react"
import { eveningOptions, professionOptions } from "@/data/event"
import { SubmitButton } from "@/components/ui/Button"
import { FormField, FormSelect } from "./FormField"

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="firstName" name="firstName" label="Prénom" type="text" required />
          <FormField id="lastName" name="lastName" label="Nom" type="text" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="email" name="email" label="Email Professionnel" type="email" required />
          <FormField id="phone" name="phone" label="Téléphone" type="tel" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            id="profession"
            name="profession"
            label="Activité / Profession"
            options={professionOptions}
            placeholder="Sélectionner"
            defaultValue=""
            required
          />
          <FormSelect
            id="evening"
            name="evening"
            label="Soirée Souhaitée"
            options={eveningOptions}
            defaultValue={eveningOptions[0]?.value}
            required
          />
        </div>

        <SubmitButton type="submit">Soumettre ma Demande</SubmitButton>
      </form>

      {submitted && (
        <div className="mt-6 p-4 bg-white border border-gray-200 text-xs text-gallery-900 text-center font-light">
          Votre demande d&apos;invitation a bien été transmise. Nos équipes reviendront vers vous sous 24h.
        </div>
      )}
    </>
  )
}
