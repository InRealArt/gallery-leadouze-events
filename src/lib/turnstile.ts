const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
const TOKEN_MAX_LENGTH = 2048
const REQUEST_TIMEOUT_MS = 5000
const MAX_ATTEMPTS = 2

interface SiteverifyResponse {
  success: boolean
  hostname?: string
  action?: string
  "error-codes"?: string[]
  metadata?: { result_with_testing_key?: boolean }
}

interface VerifyOptions {
  /** Action name set on the widget (`action` render parameter). */
  expectedAction: string
  remoteIp?: string | null
}

class RetryableError extends Error {}

async function callSiteverify(body: URLSearchParams): Promise<SiteverifyResponse> {
  let res: Response
  try {
    res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
  } catch (error) {
    throw new RetryableError("Siteverify network error or timeout", { cause: error })
  }
  if (res.status >= 500) throw new RetryableError(`Siteverify HTTP ${res.status}`)
  if (!res.ok) throw new Error(`Siteverify HTTP ${res.status}`)
  return (await res.json()) as SiteverifyResponse
}

function expectedHostnames(): string[] {
  return (process.env.TURNSTILE_EXPECTED_HOSTNAMES ?? "")
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean)
}

export async function verifyTurnstileToken(token: string, { expectedAction, remoteIp }: VerifyOptions): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured")
    return false
  }
  if (!token || token.length > TOKEN_MAX_LENGTH) return false

  // Same idempotency key on every attempt so a retry cannot be rejected as a replayed token.
  const body = new URLSearchParams({ secret, response: token, idempotency_key: crypto.randomUUID() })
  if (remoteIp) body.append("remoteip", remoteIp)

  let data: SiteverifyResponse | undefined
  for (let attempt = 1; attempt <= MAX_ATTEMPTS && !data; attempt++) {
    try {
      data = await callSiteverify(body)
    } catch (error) {
      const canRetry = error instanceof RetryableError && attempt < MAX_ATTEMPTS
      if (!canRetry) {
        console.error("Turnstile verification error", error)
        return false
      }
      await new Promise((resolve) => setTimeout(resolve, 300 * attempt))
    }
  }
  if (!data) return false

  if (!data.success) {
    console.warn("Turnstile verification failed", data["error-codes"])
    return false
  }

  // Cloudflare testing keys return a dummy hostname and no action: skip those checks.
  if (data.metadata?.result_with_testing_key) return true

  const hostnames = expectedHostnames()
  if (hostnames.length === 0) {
    console.warn("TURNSTILE_EXPECTED_HOSTNAMES is not configured: hostname check skipped")
  } else if (!data.hostname || !hostnames.includes(data.hostname)) {
    console.warn("Turnstile hostname mismatch", data.hostname)
    return false
  }

  if (data.action !== expectedAction) {
    console.warn("Turnstile action mismatch", data.action)
    return false
  }

  return true
}
