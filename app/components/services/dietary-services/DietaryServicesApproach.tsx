import Image from "next/image";
import {
  ClipboardCheck,
  HeartHandshake,
  Utensils,
  UserRoundCheck,
  RefreshCw,
} from "lucide-react";

import { Container } from "../../ui/Container";

const approachSteps = [ 
  {
    number: "01",
    title: "Nutrition Assessment",
    description:
      "We learn about individual dietary needs, health conditions, preferences, and daily routines.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "We develop a practical nutrition plan that reflects individual goals, tastes, and requirements.",
    icon: UserRoundCheck,
  },
  {
    number: "03",
    title: "Meal Preparation",
    description:
      "Nutritious meals are prepared with attention to dietary guidelines, food preferences, and safety.",
    icon: Utensils,
  },
  {
    number: "04",
    title: "Compassionate Support",
    description:
      "We provide encouragement and assistance to make mealtimes comfortable, enjoyable, and dignified.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Ongoing Monitoring",
    description:
      "We stay attentive to changing needs and adjust nutrition support as circumstances evolve.",
    icon: RefreshCw,
  },
];

export default function DietaryServicesApproach() {
  return (
    <section
      aria-labelledby="dietary-approach-heading"
      className="overflow-hidden bg-[#f7faf8] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#176d2d]">
              Our Approach
            </p>

            <h2
              id="dietary-approach-heading"
              className="mt-2 text-3xl font-bold leading-tight text-[#09275f] sm:text-4xl"
            >
              Nutrition With
              <br />
              Care at Every Step.
            </h2>

            <div
              className="mt-4 h-[3px] w-10 rounded-full bg-[#176d2d]"
              aria-hidden="true"
            />

            <p className="mt-5 max-w-xl text-base leading-7 text-[#183052]">
              We believe good nutrition is about more than food. It is about
              supporting health, independence, comfort, and dignity through
              personalized care.
            </p>

            {/* Process */}
            <div className="mt-8 space-y-5">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === approachSteps.length - 1;

                return (
                  <article
                    key={step.number}
                    className="group flex gap-4"
                  >
                    {/* Step icon */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#dce9de] transition-all duration-300 group-hover:bg-[#176d2d] group-hover:ring-[#176d2d]">
                        <Icon
                          className="h-5 w-5 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      {!isLast && (
                        <div
                          className="mt-1 h-full min-h-7 w-px bg-[#d5e5d7]"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="pb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold tracking-wider text-[#72a979]">
                          {step.number}
                        </span>

                        <h3 className="text-base font-bold text-[#09275f]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-1.5 max-w-lg text-sm leading-6 text-[#183052]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/dietary-services/dietary-services-approach.jpg"
                alt="Caregiver supporting an older adult with a healthy meal"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />

              {/* Image gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#09275f]/60 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Message */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="max-w-sm rounded-xl border border-white/20 bg-[#09275f]/85 p-5 backdrop-blur-sm">
                  <p className="text-lg font-bold text-white">
                    Every meal is an opportunity to care.
                  </p>

                  <p className="mt-1.5 text-sm leading-6 text-blue-100">
                    We make nutrition personal, practical, and centered around
                    the people we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Heritage accents */}
            <div
              className="absolute -bottom-3 -left-3 h-20 w-20 rounded-br-[2rem] rounded-tl-[2rem] border-b-8 border-l-8 border-[#176d2d]"
              aria-hidden="true"
            />

            <div
              className="absolute -right-3 -top-3 h-16 w-16 rounded-bl-[1.5rem] rounded-tr-[1.5rem] border-r-8 border-t-8 border-[#72b97d]"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}