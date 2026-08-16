import {
  Users,
  ShieldCheck,
  Heart,
  TrendingUp,
  HandHeart,
} from "lucide-react";

const reasons = [
  {
    title: "Compassionate Team",
    description:
      "Experienced professionals who treat every individual with respect and kindness.",
    icon: Users,
  },
  {
    title: "Safe & Secure Homes",
    description:
      "Well-maintained homes in welcoming neighborhoods.",
    icon: ShieldCheck,
  },
  {
    title: "Person-Centered Care",
    description:
      "Care plans tailored to individual goals, needs, and preferences.",
    icon: Heart,
  },
  {
    title: "Promotes Independence",
    description:
      "Encouraging life skills, confidence, and community involvement.",
    icon: TrendingUp,
  },
  {
    title: "Family Partnership",
    description:
      "We work closely with families and caregivers every step of the way.",
    icon: HandHeart,
  },
];

export default function ResidentialWhyChooseUs() {
  return (
    <section className="rounded-2xl bg-[#f3f8f3] p-5 sm:p-7">
      <h2 className="text-2xl font-bold text-[#176d2d]">
        Why Families Choose Us
      </h2>

      <div className="mt-5 divide-y divide-slate-200">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <article
              key={reason.title}
              className="flex gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#176d2d]">
                <Icon
                  className="h-5 w-5 text-white"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#09275f]">
                  {reason.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#183052]">
                  {reason.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}