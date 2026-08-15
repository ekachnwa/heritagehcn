import {
  ClipboardList,
  HeartPulse,
  House,
  Salad,
  ShieldCheck,
  Smile,
} from "lucide-react";

const benefits = [
  {
    title: "Personalized Meal Plans",
    description:
      "Meals tailored to individual dietary needs, health conditions, and preferences.",
    icon: ClipboardList,
  },
  {
    title: "Nutritious & Delicious",
    description:
      "Well-balanced meals made with quality, wholesome ingredients.",
    icon: Salad,
  },
  {
    title: "Supports Better Health",
    description:
      "Proper nutrition helps manage conditions and promotes overall wellness.",
    icon: HeartPulse,
  },
  {
    title: "Promotes Independence",
    description:
      "Supports the ability to live safely and confidently at home.",
    icon: ShieldCheck,
  },
  {
    title: "Convenient & Reliable",
    description:
      "Consistent meal preparation and delivery you can depend on.",
    icon: House,
  },
  {
    title: "Peace of Mind",
    description:
      "Families can rest easy knowing loved ones are well-nourished.",
    icon: Smile,
  },
];

export default function DietaryServicesBenefits() {
  return (
    <section
      aria-labelledby="dietary-benefits-heading"
      className="bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <h2
            id="dietary-benefits-heading"
            className="text-2xl font-bold text-[#09275f] sm:text-3xl lg:text-[32px]"
          >
            Personalized Nutrition. Compassionate Care.
          </h2>

          <div
            className="mx-auto mt-2 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="h-[3px] w-8 rounded-full bg-[#176d2d]" />
          </div>
        </div>

        {/* Benefit cards */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group flex min-h-[185px] flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-[0_2px_10px_rgba(9,39,95,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d5e8d8] hover:shadow-[0_10px_24px_rgba(9,39,95,0.08)]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f8f1] transition-colors duration-300 group-hover:bg-[#176d2d]">
                  <Icon
                    className="h-7 w-7 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-sm font-bold leading-5 text-[#09275f]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-[#183052]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}