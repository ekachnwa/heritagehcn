import * as React from "react";
import { cn } from "../../lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-slate-600 outline-none transition",

          "focus:border-green-600 focus:ring-2 focus:ring-green-200",

          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-200",

          className
        )}
        {...props}
      />

      {helperText && !error && (
        <p className="text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}