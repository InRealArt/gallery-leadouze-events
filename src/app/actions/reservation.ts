"use server"

import { headers } from "next/headers"
import { verifyTurnstileToken } from "@/lib/turnstile"
import { TURNSTILE_ACTION_RESERVATION } from "@/lib/constants"

export interface ReservationState {
  status: "idle" | "success" | "error"
  message?: string
  attempt?: number
}

export async function submitReservation(_prev: ReservationState, formData: FormData): Promise<ReservationState> {
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

  // TODO: persister / transmettre la demande (email, CRM, base de données…)

  return { status: "success" }
}
