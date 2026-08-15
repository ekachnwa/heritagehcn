import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sprout,
  Weight,
} from "lucide-react";

const nutritionBenefits = [
  {
    title: "More Energy",
    description:
      "Proper nutrition helps maintain energy levels for daily activities.",
    icon: Activity,
  },
  {
    title: "Stronger Immune System",
    description:
      "A balanced diet supports the body's natural defenses.",
    icon: ShieldCheck,
  },
  {
    title: "Better Management of Conditions",
    description:
      "Nutritious meals help manage chronic conditions and improve outcomes.",
    icon: HeartPulse,
  },
  {
    title: "Improved Mood & Well-Being",
    description:
      "Good nutrition positively impacts mood, focus, and emotional health.",
    icon: Smile,
  },
  {
    title: "Healthy Weight Management",
    description:
      "Supports maintaining a healthy weight and preventing nutrition-related issues.",
    icon: Weight,
  },
  {
    title: "Enhanced Quality of Life",
    description:
      "Better nutrition leads to better health and a better quality of life.",
    icon: Sprout,
  },
];

export default function DietaryNutritionBenefits() {
  return (
    <section
      aria-labelledby="nutrition-benefits-heading"
      className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_18px_rgba(9,39,95,0.04)] sm:p-7 lg:p-8"
    >
      <h2
        id="nutrition-benefits-heading"
        className="text-2xl font-bold text-[#176d2d] sm:text-3xl"
      >
        Benefits of Good Nutrition
      </h2>

      <div className="mt-5 divide-y divide-slate-200">
        {nutritionBenefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="group flex gap-4 py-3.5 first:pt-0 last:pb-0 sm:gap-5"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#176d2d] transition-transform duration-300 group-hover:scale-105">
                <Icon
                  className="h-5 w-5 text-white"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-5 text-[#176d2d] sm:text-base">
                  {benefit.title}
                </h3>

                <p className="mt-0.5 text-xs leading-5 text-[#183052] sm:text-sm sm:leading-6">
                  {benefit.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}