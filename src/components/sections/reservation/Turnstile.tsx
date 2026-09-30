"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface TurnstileApi {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

interface TurnstileProps {
  /** Change this value to force a fresh challenge (e.g. after a submission). */
  resetKey?: number
  /** Action name, checked server-side against the siteverify response. */
  action: string
  /** Called whenever the validity of the current token changes. */
  onValidChange?: (valid: boolean) => void
}

export function Turnstile({ resetKey = 0, action, onValidChange }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onValidChangeRef = useRef(onValidChange)
  const [scriptReady, setScriptReady] = useState(() => typeof window !== "undefined" && !!window.turnstile)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    onValidChangeRef.current = onValidChange
  }, [onValidChange])

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current || !window.turnstile) return
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      language: "fr",
      theme: "light",
      callback: () => onValidChangeRef.current?.(true),
      "expired-callback": () => onValidChangeRef.current?.(false),
      "error-callback": () => onValidChangeRef.current?.(false),
    })
    return () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current)
      widgetIdRef.current = null
      onValidChangeRef.current?.(false)
    }
  }, [scriptReady, siteKey, action])

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current)
      onValidChangeRef.current?.(false)
    }
  }, [resetKey])

  if (!siteKey) {
    if (process.env.NODE_ENV !== "production") console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not configured")
    return null
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="flex justify-center" />
    </>
  )
}
