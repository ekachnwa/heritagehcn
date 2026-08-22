"use client";

import { CalendarDays, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";

export default function CriticalCareCTA() {
  const router = useRouter();
  return (
    <section className="bg-white py-5">
      <Container>
        <div className="flex flex-col gap-6 rounded-2xl bg-[#f1f8f2] px-7 py-7 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#197332] text-white">
              <Phone className="h-8 w-8" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#09265d] md:text-2xl">
                Let Our Critical Care Nurses Help You Heal at Home
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#172957]">
                Contact us today to learn how our critical care nursing
                services can support you or your loved one.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button variant="primary"
              onClick={() => router.push("/consultation")}
              className="cursor-pointer"
            >
              Book a Consultation
              <CalendarDays className="ml-2 h-4 w-4" />
            </Button>

            <a
              href="tel:2149910608"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#197332] bg-white px-7 font-semibold text-[#09265d] transition hover:bg-[#f2f8f3]"
            >
              <Phone className="h-5 w-5 text-[#197332]" />
              214-991-0608
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}