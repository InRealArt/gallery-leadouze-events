"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { FaqItem } from "@/data/event"

export function FaqAccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white luxury-border p-6">
      <button
        type="button"
        className="w-full text-left font-medium text-sm text-gallery-900 flex justify-between items-center"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pt-4 text-xs text-gray-500 font-light leading-relaxed border-t border-gray-100 mt-4">
          {answer}
        </div>
      )}
    </div>
  )
}
