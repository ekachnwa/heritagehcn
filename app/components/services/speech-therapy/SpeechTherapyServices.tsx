import {
  AudioLines,
  Brain,
  MessageCircle,
  Utensils,
} from "lucide-react";

import { Container } from "../../ui/Container";

type TherapyService = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: TherapyService[] = [
  {
    title: "Speech & Language Therapy",
    description:
      "Improve speech clarity, vocabulary, sentence formation, and understanding.",
    icon: MessageCircle,
  },
  {
    title: "Swallowing Disorders (Dysphagia)",
    description:
      "Assessment and treatment to improve safe swallowing and reduce the risk of choking.",
    icon: Utensils,
  },
  {
    title: "Cognitive-Communication Therapy",
    description:
      "Support for memory, attention, problem-solving, and executive function skills.",
    icon: Brain,
  },
  {
    title: "Augmentative & Alternative Communication (AAC)",
    description:
      "Tools and strategies to help individuals express themselves effectively.",
    icon: AudioLines,
  },
];

function TherapyServiceCard({
  service,
}: {
  service: TherapyService;
}) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_3px_15px_rgba(10,40,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d7e8d9] hover:shadow-[0_10px_25px_rgba(10,40,70,0.09)]">
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f8f1] transition-all duration-300 group-hover:bg-[#176d2d]">
        <Icon
          className="h-7 w-7 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="mt-5 max-w-[180px] text-base font-bold leading-6 text-[#09275f]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-[#183052]">
        {service.description}
      </p>
    </article>
  );
}

export default function SpeechTherapyServices() {
  return (
    <section aria-labelledby="speech-therapy-services-heading">
      <div className="mb-6">
        <h2
          id="speech-therapy-services-heading"
          className="text-2xl font-bold text-[#176d2d] sm:text-3xl"
        >
          Our Speech Therapy Services
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#183052] sm:text-base">
          Our licensed speech-language pathologists provide personalized
          therapy to help individuals communicate more effectively and live
          more independently.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <TherapyServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}