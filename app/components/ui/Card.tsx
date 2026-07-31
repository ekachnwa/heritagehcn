import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="p-6 border-b">
      {children}
    </div>
  );
}

export function CardTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h3 className="text-xl font-semibold text-slate-900">
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="mt-2 text-gray-600">
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="border-t p-6">
      {children}
    </div>
  );
}