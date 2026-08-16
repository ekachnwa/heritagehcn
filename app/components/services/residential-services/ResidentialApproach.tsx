import Image from "next/image";
import {
  ClipboardCheck,
  Users,
  House,
  TrendingUp,
  Heart,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Assessment",
    description: "We learn about individual needs, preferences, and goals.",
    icon: ClipboardCheck,
  },
  {
    number: "2",
    title: "Personalized Plan",
    description: "We create a customized support plan tailored to each individual.",
    icon: Users,
  },
  {
    number: "3",
    title: "Care & Support",
    description: "24/7 support focused on safety, well-being, and personal growth.",
    icon: House,
  },
  {
    number: "4",
    title: "Skill Building",
    description: "Encouraging independence through daily living and life skills development.",
    icon: TrendingUp,
  },
  {
    number: "5",
    title: "Ongoing Support",
    description: "We continuously monitor and adjust to ensure the best outcomes.",
    icon: Heart,
  },
];

export default function ResidentialApproach() {
  return (
    <section className="py-10 sm:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <h2 className="text-center text-2xl font-bold text-[#09275f]">
            Our Approach
          </h2>

          <div className="mx-auto mt-2 h-[3px] w-10 bg-[#176d2d]" />

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#176d2d] text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <div className="mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f7f1]">
                    <Icon className="h-6 w-6 text-[#176d2d]" />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-[#09275f]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#183052]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/residential-services-home.png"
            alt="Comfortable residential home"
            width={700}
            height={500}
            className="h-[320px] w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-[#09275f]/95 p-6">
            <p className="text-xl font-bold leading-7 text-white">
              A home where individuals are{" "}
              <span className="text-[#4ca65a]">
                supported, valued, and empowered
              </span>{" "}
              to live their best lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}