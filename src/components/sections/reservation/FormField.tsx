import type { InputHTMLAttributes, ReactNode } from "react"

const FIELD_CLASSES =
  "w-full bg-white border rounded-none px-4 py-3 text-xs text-gallery-900 focus:outline-none"
const FIELD_STATE_CLASSES = {
  valid: "border-gray-200 focus:border-gallery-900",
  invalid: "border-red-400 focus:border-red-600",
}

interface FieldWrapperProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

function FieldWrapper({ id, label, required, error, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-accent-gold">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[13px] text-red-700 font-light">
          {error}
        </p>
      )}
    </div>
  )
}

function fieldA11yProps(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `${FIELD_CLASSES} ${error ? FIELD_STATE_CLASSES.invalid : FIELD_STATE_CLASSES.valid}`,
  }
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
}

export function FormField({ label, id, error, ...props }: FormFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={props.required} error={error}>
      <input id={id} {...props} {...fieldA11yProps(id, error)} />
    </FieldWrapper>
  )
}
