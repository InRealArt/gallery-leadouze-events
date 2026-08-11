import type { InputHTMLAttributes, SelectHTMLAttributes } from "react"

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const FIELD_CLASSES =
  "w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-xs text-gallery-900 focus:outline-none focus:border-gallery-900"

export function FormField({ label, id, ...props }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">
        {label}
      </label>
      <input id={id} className={FIELD_CLASSES} {...props} />
    </div>
  )
}

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  placeholder?: string
}

export function FormSelect({ label, id, options, placeholder, ...props }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">
        {label}
      </label>
      <select id={id} className={FIELD_CLASSES} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
