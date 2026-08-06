import {
  ArrowRight,
  CalendarDays,
  Phone,
} from "lucide-react";

import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function ConsultationSupport() {
  return (
    <div className="mt-6 space-y-5">
      {/* Phone Support Card */}
      <Card className="overflow-hidden rounded-2xl border-0 bg-[#082960] p-0 shadow-none">
        <div className="relative p-6 sm:p-7">
          {/* Decorative circle */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative flex gap-4">
            {/* Phone Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#176d2d]">
              <Phone
                className="h-7 w-7 text-white"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-base font-bold text-[#72b97d] sm:text-lg">
                Prefer to Talk Now?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/90">
                Call us directly to speak with a care specialist.
              </p>

              <a
                href="tel:2149910608"
                className="mt-1 block text-2xl font-bold tracking-wide text-white transition-colors hover:text-[#72b97d]"
              >
                214-991-0608
              </a>

              <p className="mt-1 text-sm text-blue-100">
                Mon – Fri: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Consultation Availability */}
      <Card className="rounded-2xl border border-[#dfe9e0] bg-gradient-to-br from-[#f3f9f3] to-white p-6 shadow-none sm:p-7">
        <div className="flex gap-4">
          {/* Calendar Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#176d2d]">
            <CalendarDays
              className="h-7 w-7 text-white"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-base font-bold text-[#176d2d] sm:text-lg">
              In-Person or Virtual
              <br />
              Consultations Available
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#183052]">
              We offer in-home, in-office, or virtual consultations—
              whichever is most convenient for you.
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="secondary"
          size="md"
          className="mt-5 w-full justify-center gap-2 border-[#176d2d] text-[#176d2d] hover:bg-[#eaf5eb]"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </div>
  );
}