import Image from "next/image";
import {
  ClipboardCheck,
  FileText,
  HeartHandshake,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

import { Container } from "../../ui/Container";

const approachSteps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We begin with a comprehensive evaluation to understand communication, cognitive, or swallowing needs.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Personalized Goals",
    description:
      "Together, we establish practical goals based on individual needs, abilities, and priorities.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Individualized Therapy",
    description:
      "Therapy sessions use evidence-based strategies tailored to each person's unique goals.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Family & Caregiver Support",
    description:
      "We provide education and practical strategies that can be used between therapy sessions.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Progress & Follow-Up",
    description:
      "We monitor progress, adjust the plan when needed, and celebrate meaningful improvements.",
    icon: RefreshCw,
  },
];

export default function SpeechTherapyApproach() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#176d2d]">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#09275f] sm:text-4xl">
              Personalized Therapy.
              <br />
              Meaningful Progress.
            </h2>

            <div
              className="mt-4 h-[3px] w-10 rounded-full bg-[#176d2d]"
              aria-hidden="true"
            />

            <p className="mt-5 max-w-xl text-base leading-7 text-[#183052]">
              Every person has different communication needs. Our speech
              therapy approach focuses on practical goals, individualized
              strategies, and collaboration with families and caregivers.
            </p>

            {/* Steps */}
            <div className="mt-8 space-y-5">
              {approachSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group flex gap-4"
                  >
                    {/* Number / icon */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef8ef] text-[#176d2d] transition-colors duration-300 group-hover:bg-[#176d2d] group-hover:text-white">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      {step.number !== "05" && (
                        <div
                          className="mt-1 h-full min-h-7 w-px bg-[#dbe9dd]"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Text */}
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
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/speech-therapy-approach.png"
                alt="Speech therapist working with a client during an individualized therapy session"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />

              {/* Image overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#09275f]/55 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Bottom message */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="max-w-sm rounded-xl border border-white/20 bg-[#09275f]/85 p-5 backdrop-blur-sm">
                  <p className="text-lg font-bold text-white">
                    Every voice matters.
                  </p>

                  <p className="mt-1.5 text-sm leading-6 text-blue-100">
                    We help individuals communicate with greater confidence,
                    independence, and connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative green accent */}
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