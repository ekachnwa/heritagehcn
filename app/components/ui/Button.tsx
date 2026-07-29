import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:pointer-events-none disabled:opacity-50",

        {
          "bg-green-700 text-white hover:bg-green-800":
            variant === "primary",

          "bg-slate-900 text-white hover:bg-slate-800":
            variant === "secondary",

          "border border-gray-300 bg-white hover:bg-gray-100":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "destructive",

          "px-3 py-2 text-sm": size === "sm",

          "px-5 py-3 text-base": size === "md",

          "px-7 py-4 text-lg": size === "lg",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}