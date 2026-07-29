import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",

        {
          "bg-green-100 text-green-700":
            variant === "primary",

          "bg-slate-100 text-slate-700":
            variant === "secondary",

          "border border-gray-300 bg-white text-gray-700":
            variant === "outline",
        },

        className
      )}
    >
      {children}
    </span>
  );
}