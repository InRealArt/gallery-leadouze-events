import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react"

const FIELD_CLASSES =
  "w-full bg-white border rounded-none px-4 py-3 text-xs text-gallery-900 focus:outline-none"
const FIELD_STATE_CLASSES = {
  valid: "border-gray-200 focus:border-gallery-900",
  invalid: "border-red-400 focus:border-red-600",
}

interface FieldWrapperProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function FieldWrapper({ id, label, error, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[11px] text-red-700 font-light">
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
    <FieldWrapper id={id} label={label} error={error}>
      <input id={id} {...props} {...fieldA11yProps(id, error)} />
    </FieldWrapper>
  )
}

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  options: SelectOption[]
  placeholder?: string
  error?: string
}

export function FormSelect({ label, id, options, placeholder, error, ...props }: FormSelectProps) {
  return (
    <FieldWrapper id={id} label={label} error={error}>
      <select id={id} {...props} {...fieldA11yProps(id, error)}>
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
    </FieldWrapper>
  )
}
