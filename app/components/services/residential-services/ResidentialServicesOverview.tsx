import {
  House,
  UserRound,
  Users,
  HeartHandshake,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    title: "Group Homes",
    description:
      "Supportive, structured living with 24/7 care in a home-like environment.",
    icon: House,
  },
  {
    title: "Supported Living",
    description:
      "Assistance with daily living while promoting greater independence.",
    icon: UserRound,
  },
  {
    title: "Shared Living",
    description:
      "Living with a host family in a community-based, family setting.",
    icon: Users,
  },
  {
    title: "Respite Homes",
    description:
      "Short-term stays that give primary caregivers a break while ensuring quality care.",
    icon: HeartHandshake,
  },
  {
    title: "Behavioral Support Homes",
    description:
      "Specialized support for individuals with complex needs in a safe setting.",
    icon: ShieldCheck,
  },
  {
    title: "Transitional Living",
    description:
      "Preparing individuals for more independent living through life skills training.",
    icon: CalendarDays,
  },
];

export default function ResidentialServicesOverview() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-2xl font-bold text-[#176d2d]">
        Our Residential Services
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#183052]">
        We offer a variety of residential options designed to meet individual
        needs and promote independence.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7ef]">
                <Icon
                  className="h-6 w-6 text-[#176d2d]"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#09275f]">
                {service.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#183052]">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}