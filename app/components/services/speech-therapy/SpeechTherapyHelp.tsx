import { CheckCircle2, ListChecks } from "lucide-react";

const helpItems = [
  "Speech sound disorders",
  "Language delays",
  "Stuttering (fluency disorders)",
  "Voice disorders",
  "Swallowing difficulties",
  "Cognitive-communication challenges",
  "Post-stroke communication difficulties",
  "Autism spectrum communication needs",
  "Traumatic brain injury",
  "And more",
];

export default function SpeechTherapyHelp() {
  return (
    <aside
      aria-labelledby="speech-therapy-help-heading"
      className="h-full rounded-2xl bg-[#f2f8f3] p-6 sm:p-7"
    >
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
          <ListChecks
            className="h-6 w-6 text-[#176d2d]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <h2
          id="speech-therapy-help-heading"
          className="text-xl font-bold text-[#176d2d] sm:text-2xl"
        >
          We Help With
        </h2>
      </div>

      {/* Checklist */}
      <ul className="mt-6 space-y-3" aria-label="Speech therapy needs we support">
        {helpItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-[#183052]"
          >
            <CheckCircle2
              className="mt-1 h-4 w-4 shrink-0 text-[#176d2d]"
              strokeWidth={2.5}
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}