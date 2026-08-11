import {
  Baby,
  HeartHandshake,
  UserRound,
  UsersRound,
} from "lucide-react";

const audiences = [
  {
    title: "Children",
    description:
      "Help with speech delays, language development, and social communication.",
    icon: Baby,
  },
  {
    title: "Adults",
    description:
      "Support for communication challenges due to injury, illness, or neurological conditions.",
    icon: UserRound,
  },
  {
    title: "Older Adults",
    description:
      "Improve communication and swallowing for a better quality of life.",
    icon: HeartHandshake,
  },
  {
    title: "Families & Caregivers",
    description:
      "Education and strategies to support communication at home.",
    icon: UsersRound,
  },
];

export default function SpeechTherapyAudience() {
  return (
    <section
      aria-labelledby="speech-therapy-audience-heading"
      className="px-6 py-8 sm:px-8 sm:py-10 lg:px-7 xl:px-9"
    >
      <h2
        id="speech-therapy-audience-heading"
        className="text-xl font-bold text-[#176d2d] sm:text-2xl"
      >
        Who We Serve
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;

          return (
            <article
              key={audience.title}
              className={`group px-4 py-3 text-center sm:px-5 lg:py-2 ${
                index > 0
                  ? "border-slate-200 sm:border-l"
                  : ""
              } ${
                index === 2
                  ? "lg:border-l"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:bg-[#176d2d]">
                <Icon
                  className="h-6 w-6 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#09275f]">
                {audience.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-[#183052]">
                {audience.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}