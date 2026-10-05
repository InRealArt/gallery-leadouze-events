"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { SubmitButton } from "@/components/ui/Button"

interface SuccessDialogProps {
  open: boolean
  onClose: () => void
}

/** Confirmation modal shown once the invitation request is saved. Native <dialog> handles focus trap and Escape. */
export function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="success-dialog-title"
      onClose={onClose}
      // A click on the backdrop targets the <dialog> itself, not its content.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="success-dialog m-auto w-[calc(100%-2rem)] max-w-lg bg-transparent p-0 backdrop:bg-gallery-900/60 backdrop:backdrop-blur-[2px]"
    >
      <div className="relative bg-gallery-50 p-3 luxury-border shadow-2xl">
        <div className="relative bg-white luxury-border px-8 py-12 md:px-12 text-center">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-4 right-4 text-gray-400 hover:text-gallery-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span aria-hidden="true" className="block w-10 h-px bg-accent-gold mx-auto mb-8" />

          <h2 id="success-dialog-title" className="text-3xl font-serif-title text-gallery-900">
            Merci pour votre demande
          </h2>
          <p className="text-sm text-gray-600 font-light leading-relaxed mt-5">
            Votre demande d&apos;invitation a bien été transmise. Nos équipes reviendront vers vous sous 24h.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block">Galerie Leadouze</span>
            <span className="text-xs font-medium text-gallery-900 block mt-1">
              Jeudi 5 novembre, de 18h à 22h
            </span>
            <span className="text-xs text-gray-500 italic block mt-0.5">16 avenue Matignon, Paris 8e</span>
          </div>

          <SubmitButton type="button" onClick={onClose} autoFocus className="mt-10">
            Fermer
          </SubmitButton>
        </div>
      </div>
    </dialog>
  )
}
