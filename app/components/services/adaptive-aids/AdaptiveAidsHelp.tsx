import Image from "next/image";
import {
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  SearchCheck,
} from "lucide-react";

import { Card } from "../../ui/Card";

const supportSteps = [
  {
    label: "Personalized assessments",
    icon: SearchCheck,
  },
  {
    label: "Product recommendations",
    icon: ClipboardCheck,
  },
  {
    label: "Education on safe use",
    icon: GraduationCap,
  },
  {
    label: "Assistance with sourcing and ordering",
    icon: HeartHandshake,
  },
  {
    label: "Ongoing support and follow-up",
    icon: CheckCircle2,
  },
];

export default function AdaptiveAidsHelp() {
  return (
    <Card className="h-full overflow-hidden rounded-2xl border border-[#e1ebe2] bg-gradient-to-br from-[#f5faf5] to-white p-0 shadow-none">
      <div className="grid h-full items-center md:grid-cols-[170px_1fr] lg:grid-cols-[185px_1fr]">
        {/* Image */}
        <div className="relative mx-auto my-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md md:my-0 md:ml-6 lg:h-44 lg:w-44">
          <Image
            src="/images/adaptive-aids/adaptive-aids-help.jpg"
            alt="Caregiver helping an older adult choose adaptive equipment"
            fill
            sizes="(max-width: 768px) 160px, 185px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-7 pt-2 md:px-6 md:py-7 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-[#176d2d]">
            Personalized Support
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#09275f]">
            How We Help
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#183052]">
            Our team works with you to understand your needs and recommend
            the right adaptive aids to support your goals.
          </p>

          <ul className="mt-5 space-y-2.5">
            {supportSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.label}
                  className="flex items-start gap-2.5 text-sm text-[#183052]"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#176d2d]"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />

                  <span>{step.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
}