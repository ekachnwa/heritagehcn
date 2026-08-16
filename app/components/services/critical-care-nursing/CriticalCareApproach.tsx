import Image from "next/image";
import {
  ClipboardCheck,
  FileHeart,
  HeartHandshake,
  LineChart,
  Users,
} from "lucide-react";
import {Container} from "../../ui/Container";
import {SectionTitle} from "../../ui/SectionTitle";

const steps = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Comprehensive Assessment",
    description:
      "We evaluate medical needs, goals, and home environment.",
  },
  {
    number: "2",
    icon: FileHeart,
    title: "Personalized Care Plan",
    description:
      "A customized plan is created in collaboration with your healthcare team.",
  },
  {
    number: "3",
    icon: HeartHandshake,
    title: "Skilled Nursing Care",
    description:
      "Our nurses provide expert, compassionate care tailored to your needs.",
  },
  {
    number: "4",
    icon: LineChart,
    title: "Ongoing Monitoring",
    description:
      "We closely monitor progress and adjust care as needed.",
  },
  {
    number: "5",
    icon: Users,
    title: "Family Involvement",
    description:
      "We educate and support families to ensure continuity and confidence.",
  },
];

export default function CriticalCareApproach() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.9fr_.8fr]">
          <div>
            <SectionTitle title="Our Approach" />

            <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="absolute left-[8%] right-[8%] top-6 hidden border-t border-dashed border-gray-300 lg:block" />

              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative z-10 text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#197332] text-lg font-bold text-white">
                      {step.number}
                    </div>

                    <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f7f1] text-[#197332]">
                      <Icon className="h-8 w-8" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-4 text-sm font-bold leading-5 text-[#09265d]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#172957]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/critical-care-approach.png"
              alt="Nurse providing compassionate critical care at home"
              width={600}
              height={700}
              className="h-[360px] w-full object-cover lg:h-[430px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-[#06295f]/95 p-6 text-white">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#197332]">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <p className="text-lg font-semibold leading-7">
                We bring expert critical care to your home —
                <span className="text-[#65c86f]">
                  {" "}
                  so you can focus on healing.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}