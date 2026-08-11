import {
  Brain,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Improved Communication",
    description:
      "Build clearer speech and stronger communication skills for everyday interactions.",
    icon: MessageCircleHeart,
  },
  {
    title: "Greater Confidence",
    description:
      "Feel more comfortable expressing needs, thoughts, and ideas.",
    icon: HeartHandshake,
  },
  {
    title: "Enhanced Cognitive Skills",
    description:
      "Support memory, attention, problem-solving, and other cognitive-communication abilities.",
    icon: Brain,
  },
  {
    title: "Safer Swallowing",
    description:
      "Learn strategies that can make eating and drinking safer and more comfortable.",
    icon: ShieldCheck,
  },
];

export default function SpeechTherapyBenefits() {
  return (
    <section
      aria-labelledby="speech-therapy-benefits-heading"
      className="border-t border-slate-200 px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-8 xl:px-10"
    >
      <h2
        id="speech-therapy-benefits-heading"
        className="text-xl font-bold text-[#176d2d] sm:text-2xl"
      >
        Benefits of Speech Therapy
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-6 text-[#183052]">
        Speech therapy can make a meaningful difference in communication,
        confidence, safety, and overall quality of life.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="group flex gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:bg-[#176d2d]">
                <Icon
                  className="h-5 w-5 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-sm font-bold leading-5 text-[#09275f]">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#183052]">
                  {benefit.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}