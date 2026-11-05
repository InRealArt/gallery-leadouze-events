import type { Metadata } from "next"
import localFont from "next/font/local"
import { SITE } from "@/lib/constants"
import "./globals.css"

const plusJakartaSans = localFont({
  src: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "300 600",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const playfairDisplay = localFont({
  src: [
    {
      path: "./fonts/playfair-display-latin-wght-normal.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-latin-wght-italic.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-playfair-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-gallery-900 selection:text-white font-sans">
        {children}
      </body>
    </html>
  )
}
