import {
  Apple,
  ClipboardList,
  Droplets,
  HeartHandshake,
  ShoppingCart,
  Utensils,
} from "lucide-react";

const dietaryServices = [
  {
    title: "Meal Planning",
    description:
      "Customized meal plans developed by our team to meet dietary requirements and health goals.",
    icon: ClipboardList,
  },
  {
    title: "Meal Preparation",
    description:
      "Nutritious meals prepared with care, following dietary guidelines and preferences.",
    icon: Utensils,
  },
  {
    title: "Special Diet Support",
    description:
      "Support for low-sodium, diabetic-friendly, heart-healthy, soft-food, gluten-free, and other special diets.",
    icon: HeartHandshake,
  },
  {
    title: "Grocery Shopping Assistance",
    description:
      "Help with selecting healthy foods and essential items to support a balanced diet.",
    icon: ShoppingCart,
  },
  {
    title: "Hydration Support",
    description:
      "Encouraging proper hydration to support overall health and well-being.",
    icon: Droplets,
  },
  {
    title: "Feeding Assistance",
    description:
      "Compassionate assistance for individuals who need help with eating.",
    icon: Apple,
  },
];

export default function DietaryServicesOverview() {
  return (
    <section
      aria-labelledby="dietary-services-overview-heading"
      className="bg-white py-8 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_18px_rgba(9,39,95,0.04)] sm:p-7 lg:p-8">
          <h2
            id="dietary-services-overview-heading"
            className="text-2xl font-bold text-[#176d2d] sm:text-3xl"
          >
            Our Dietary Services
          </h2>

          <div className="mt-5 divide-y divide-slate-200">
            {dietaryServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex gap-4 py-4 first:pt-0 last:pb-0 sm:gap-5"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef7ef] transition-colors duration-300 group-hover:bg-[#176d2d]">
                    <Icon
                      className="h-5 w-5 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#09275f] sm:text-base">
                      {service.title}
                    </h3>

                    <p className="mt-1 max-w-2xl text-xs leading-5 text-[#183052] sm:text-sm sm:leading-6">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}