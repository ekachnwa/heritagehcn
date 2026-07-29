import { ReactNode } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  children,
}: SectionTitleProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}