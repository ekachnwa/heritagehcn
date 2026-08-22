"use client";
import { useRouter } from "next/navigation";

import { Button } from "../../ui/Button";
import { ArrowRight, Phone } from "lucide-react";

export default function ResidentialCTA() {
  const router = useRouter();

  return (
    <section className="rounded-2xl bg-[#f1f7f2] px-6 py-7 sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#176d2d]">
            <Phone className="h-7 w-7 text-white" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#09275f] sm:text-2xl">
              Find the Right Home. Build a Better Future.
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-6 text-[#183052]">
              Our team is here to help you explore residential options that
              are the right fit for your loved one.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#176d2d] px-6 text-sm font-bold text-white transition hover:bg-[#125923] cursor-pointer"
            onClick={() => router.push("/consultation")}
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>

          <a
            href="tel:2149910608"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#176d2d] px-6 text-sm font-bold text-[#09275f] transition hover:bg-white"
          >
            <Phone className="h-4 w-4 text-[#176d2d]" />
            214-991-0608
          </a>
        </div>
      </div>
    </section>
  );
}