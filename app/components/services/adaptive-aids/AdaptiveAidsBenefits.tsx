import {
  Accessibility,
  HeartHandshake,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";

const benefits = [
  {
    title: "Promotes Independence",
    description:
      "Helps individuals complete daily tasks with greater autonomy.",
    icon: Accessibility,
  },
  {
    title: "Improves Safety",
    description:
      "Reduces the risk of falls, injuries, and other potential hazards.",
    icon: ShieldCheck,
  },
  {
    title: "Enhances Comfort",
    description:
      "Provides support and convenience for everyday activities.",
    icon: HeartHandshake,
  },
  {
    title: "Supports Aging in Place",
    description:
      "Enables individuals to stay in their homes and communities longer.",
    icon: Home,
  },
  {
    title: "Boosts Confidence",
    description:
      "Empowers individuals to live with dignity and greater confidence.",
    icon: Sparkles,
  },
];

export default function AdaptiveAidsBenefits() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <Container>
        <SectionTitle
          title="Benefits of Adaptive Aids"
          align="center"
        />

        <div className="mt-8 grid grid-cols-1 divide-y divide-slate-200 border-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group px-5 py-6 text-center sm:px-6 lg:py-4"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f8f1] transition-all duration-300 group-hover:bg-[#176d2d] group-hover:shadow-md">
                  <Icon
                    className="h-7 w-7 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold leading-6 text-[#09275f]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-[190px] text-sm leading-6 text-[#183052]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}