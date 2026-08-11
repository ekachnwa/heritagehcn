import {
  Accessibility,
  Bath,
  BedDouble,
  ChefHat,
  HandHelping,
  HeartPulse,
  MoveUp,
  Utensils,
} from "lucide-react";

import { Card } from "../../ui/Card";

const aidTypes = [
  {
    title: "Grab Bars & Handrails",
    icon: HandHelping,
  },
  {
    title: "Transfer Benches",
    icon: Bath,
  },
  {
    title: "Rollators & Walkers",
    icon: Accessibility,
  },
  {
    title: "Reaching Aids",
    icon: MoveUp,
  },
  {
    title: "Dressing Aids",
    icon: HandHelping,
  },
  {
    title: "Lift Chairs",
    icon: BedDouble,
  },
  {
    title: "Bed Rails",
    icon: BedDouble,
  },
  {
    title: "Wheelchair Accessories",
    icon: Accessibility,
  },
  {
    title: "Adaptive Utensils",
    icon: Utensils,
  },
  {
    title: "Kitchen Equipment",
    icon: ChefHat,
  },
  {
    title: "Orthotic Supports",
    icon: HeartPulse,
  },
  {
    title: "Other Assistive Devices",
    icon: HandHelping,
  },
];

export default function AdaptiveAidsTypes() {
  return (
    <Card className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_25px_rgba(10,40,70,0.06)] sm:p-7 lg:p-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#176d2d]">
          Explore Your Options
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#09275f] sm:text-3xl">
          Types of Adaptive Aids
        </h2>

        <div
          className="mt-3 h-[3px] w-10 rounded-full bg-[#176d2d]"
          aria-hidden="true"
        />

        <p className="mt-4 text-sm leading-6 text-[#183052]">
          From simple everyday tools to specialized equipment, we can
          help you identify solutions that make daily activities safer
          and easier.
        </p>
      </div>

      {/* Aid list */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {aidTypes.map((aid) => {
          const Icon = aid.icon;

          return (
            <div
              key={aid.title}
              className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-[#f8faf8] px-3.5 py-3 transition-all duration-200 hover:border-[#cfe2d1] hover:bg-[#eef8ef]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2e8] transition-colors group-hover:bg-[#176d2d]">
                <Icon
                  className="h-4.5 w-4.5 text-[#176d2d] transition-colors group-hover:text-white"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="text-sm font-semibold leading-5 text-[#183052]">
                {aid.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-6 rounded-xl border-l-4 border-[#176d2d] bg-[#f1f8f2] px-4 py-3">
        <p className="text-xs leading-5 text-[#183052]">
          <span className="font-bold text-[#176d2d]">
            Need something specific?
          </span>{" "}
          Our team can help identify additional adaptive equipment
          based on your individual needs.
        </p>
      </div>
    </Card>
  );
}