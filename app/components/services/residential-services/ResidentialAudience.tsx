import {
  Baby,
  UserRound,
  UserRoundCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

const audience = [
  {
    title: "Children & Adolescents",
    description: "Safe and nurturing environments to support growth and development.",
    icon: Baby,
  },
  {
    title: "Adults",
    description: "Support with daily living and community engagement.",
    icon: UserRound,
  },
  {
    title: "Older Adults",
    description: "Meaningful living with the right support in place.",
    icon: UserRoundCheck,
  },
  {
    title: "Individuals with Complex Needs",
    description: "Specialized care and structured support in a safe home.",
    icon: Users,
  },
  {
    title: "Families & Caregivers",
    description: "Peace of mind knowing your loved one is in good hands.",
    icon: HeartHandshake,
  },
];

export default function ResidentialAudience() {
  return (
    <section className="rounded-2xl bg-[#f1f7fc] p-6 sm:p-8">
      <h2 className="text-center text-2xl font-bold text-[#09275f]">
        Who We Serve
      </h2>

      <div className="mx-auto mt-2 h-[3px] w-10 bg-[#176d2d]" />

      <div className="mt-7 grid md:grid-cols-5">
        {audience.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`px-4 py-3 text-center ${
                index !== 0 ? "border-slate-200 md:border-l" : ""
              }`}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Icon className="h-6 w-6 text-[#176d2d]" strokeWidth={1.8} />
              </div>

              <h3 className="mt-3 text-xs font-bold text-[#09275f] sm:text-sm">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#183052]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}