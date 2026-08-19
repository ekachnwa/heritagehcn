import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { cn } from "../../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  className?: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  featured = false,
  className,
  link,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group h-full border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl",
        featured &&
          "border-green-200 bg-gradient-to-br from-green-50 to-white",
        className
      )}
    >
      <CardContent>
        {/* Icon */}

        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-all duration-300 group-hover:bg-green-700",
            featured && "bg-green-700"
          )}
        >
          <Icon
            className={cn(
              "h-8 w-8 text-green-700 transition-colors duration-300 group-hover:text-white",
              featured && "text-white"
            )}
          />
        </div>

        {/* Title */}

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-grow leading-7 text-slate-600">
          {description}
        </p>

        {/* Learn More */}

        <div className="mt-8 flex items-center font-medium text-green-700">
          <span><a href={link} className="hover:underline">
            Learn More
          </a></span>

          <svg
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}