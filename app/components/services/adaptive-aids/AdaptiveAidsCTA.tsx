import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Phone,
} from "lucide-react";

import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

export default function AdaptiveAidsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#09275f] py-14 sm:py-16 lg:py-20">
      {/* Decorative background elements */}
      <div
        className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#176d2d]/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#176d2d]/20 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          {/* Decorative circle */}
          <div
            className="pointer-events-none absolute right-[-45px] top-[-45px] hidden h-32 w-32 rounded-full border border-white/10 sm:block"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#176d2d] shadow-lg">
              <CalendarCheck
                className="h-7 w-7 text-white"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#72b97d]">
              Personalized Support
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Need Help Finding the{" "}
              <span className="text-[#72b97d]">Right Aid?</span>
            </h2>

            <div
              className="mx-auto mt-5 h-[3px] w-10 rounded-full bg-[#72b97d]"
              aria-hidden="true"
            />

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Choosing the right adaptive equipment can make a meaningful
              difference in everyday life. Our team is here to help you
              understand your options and find solutions that fit your
              individual needs.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="w-full justify-center gap-2 bg-[#176d2d] px-7 hover:bg-[#125923] sm:w-auto"
              >
                <Link href="/consultation">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <a
                href="tel:2149910608"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call 214-991-0608
              </a>
            </div>

            {/* Reassurance */}
            <p className="mt-6 text-xs text-blue-200 sm:text-sm">
              Compassionate guidance from a team that puts your
              independence and comfort first.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}