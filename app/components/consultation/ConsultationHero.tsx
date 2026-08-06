import Image from "next/image";

import { Container } from "../ui/Container";

export default function ConsultationHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#edf8ff] via-white to-[#f8fbf8]">
      <Container>
        <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Hero Content */}
          <div className="relative z-20 py-14 sm:py-16 lg:py-20">
            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#09275f] sm:text-6xl lg:text-[62px]">
              Book a Consultation
            </h1>

            <div className="mt-5 max-w-xl">
              <h2 className="text-2xl font-bold leading-[1.35] text-[#176d2d] sm:text-3xl">
                Personalized Care Starts
                <br />
                with a Conversation.
              </h2>

              {/* Green Divider */}
              <div
                className="mt-5 h-[3px] w-10 bg-[#176d2d]"
                aria-hidden="true"
              />

              <p className="mt-5 max-w-lg text-base leading-7 text-[#15264a] sm:text-lg">
                Schedule a free, no-obligation consultation with our care
                team. We&apos;ll talk with you about your needs, answer your
                questions, and help you explore the right care options for
                your loved one.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[380px] sm:h-[430px] lg:absolute lg:-right-[8%] lg:top-0 lg:h-full lg:w-[62%]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/consultation-hero.jpg"
                alt="Caregiver speaking with an older adult during a consultation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center"
              />

              {/* Blend image into the text area */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#edf8ff] via-[#edf8ff]/70 to-transparent" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* Decorative curved green line */}
            <div
              className="pointer-events-none absolute -bottom-1 left-[-12%] z-20 h-32 w-[125%] sm:h-36"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1000 180"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                {/* White separation */}
                <path
                  d="M0 180 C190 178 330 155 470 105 C625 48 765 20 1000 4"
                  fill="none"
                  stroke="white"
                  strokeWidth="25"
                />

                {/* Green accent */}
                <path
                  d="M0 180 C190 178 330 155 470 105 C625 48 765 20 1000 4"
                  fill="none"
                  stroke="#176d2d"
                  strokeWidth="8"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"
        aria-hidden="true"
      />
    </section>
  );
}