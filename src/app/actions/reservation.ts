"use server"

import { headers } from "next/headers"
import { verifyTurnstileToken } from "@/lib/turnstile"
import { TURNSTILE_ACTION_RESERVATION } from "@/lib/constants"
import { addContactToEventList } from "@/lib/brevo"
import { parseReservation, type ReservationFieldErrors } from "@/lib/reservation-schema"
import { professionOptions } from "@/data/event"

export interface ReservationState {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: ReservationFieldErrors
  attempt?: number
}

export async function submitReservation(_prev: ReservationState, formData: FormData): Promise<ReservationState> {
  const parsed = parseReservation(formData)
  if (!parsed.success) {
    return {
      status: "error",
      message: "Merci de corriger les champs signalés.",
      fieldErrors: parsed.fieldErrors,
    }
  }

  const token = formData.get("cf-turnstile-response")
  const headerList = await headers()
  // Only trust the IP header set by Cloudflare; `remoteip` is optional so omit it otherwise.
  const remoteIp = headerList.get("cf-connecting-ip")

  const isHuman = await verifyTurnstileToken(typeof token === "string" ? token : "", {
    expectedAction: TURNSTILE_ACTION_RESERVATION,
    remoteIp,
  })
  if (!isHuman) {
    return { status: "error", message: "La vérification anti-robot a échoué. Merci de réessayer." }
  }

  const { profession, ...contact } = parsed.data
  const saved = await addContactToEventList({
    ...contact,
    profession: professionOptions.find((option) => option.value === profession)?.label ?? profession,
  })
  if (!saved) {
    return { status: "error", message: "Votre demande n'a pas pu être enregistrée. Merci de réessayer plus tard." }
  }

  return { status: "success" }
}
