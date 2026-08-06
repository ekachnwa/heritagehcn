import {
  ClipboardList,
  Heart,
  Home,
  Users,
} from "lucide-react";

import { Card } from "../../components/ui/Card";

const expectations = [
  {
    title: "Get to Know You",
    description:
      "We’ll learn about your needs, preferences, and goals for care.",
    icon: Users,
  },
  {
    title: "Care Options",
    description:
      "We’ll discuss personalized care solutions that fit your unique situation.",
    icon: ClipboardList,
  },
  {
    title: "Plan Your Next Steps",
    description:
      "We’ll outline recommendations and next steps to get the care you need.",
    icon: Home,
  },
  {
    title: "Ongoing Support",
    description:
      "Our team will be here to support you every step of the way.",
    icon: Heart,
  },
];

export default function WhatToExpect() {
  return (
    <Card className="overflow-hidden rounded-2xl border border-[#e1ebe2] bg-gradient-to-br from-[#f5faf5] to-[#f8fbf8] p-6 shadow-none sm:p-7">
      <h2 className="text-2xl font-bold text-[#176d2d]">
        What to Expect
      </h2>

      <div className="mt-5">
        {expectations.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex gap-4 py-5 ${
                index !== expectations.length - 1
                  ? "border-b border-[#d9e4da]"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e5f1e6]">
                <Icon
                  className="h-7 w-7 text-[#176d2d]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="pt-0.5">
                <h3 className="text-base font-bold text-[#176d2d] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-[#183052]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}