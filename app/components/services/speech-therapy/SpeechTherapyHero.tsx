import Image from "next/image";

import { Container } from "../../ui/Container";

export default function SpeechTherapyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#eef8ff] via-white to-[#f8fbf8]">
      <Container>
        <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-20 py-14 sm:py-16 lg:py-20">
            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#09275f] sm:text-6xl lg:text-[62px]">
              Speech Therapy
            </h1>

            <h2 className="mt-5 max-w-xl text-2xl font-bold leading-[1.35] text-[#176d2d] sm:text-3xl">
              Empowering Communication.
              <br />
              Enhancing Lives.
            </h2>

            {/* Green divider */}
            <div
              className="mt-5 h-[3px] w-10 rounded-full bg-[#176d2d]"
              aria-hidden="true"
            />

            <div className="mt-5 max-w-lg space-y-4 text-base leading-7 text-[#15264a] sm:text-lg">
              <p>
                Our speech therapy services help individuals of all ages
                improve communication skills, swallow safely, and build
                confidence in everyday interactions.
              </p>

              <p>
                Personalized care. Meaningful progress. Better connections.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-[360px] sm:h-[420px] lg:absolute lg:-right-[7%] lg:top-0 lg:h-full lg:w-[61%]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/speech-therapy/speech-therapy-hero.jpg"
                alt="Speech therapist working with a child during a communication activity"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 61vw"
                className="object-cover object-center"
              />

              {/* Blend image into hero content */}
              <div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#eef8ff] via-[#eef8ff]/75 to-transparent"
                aria-hidden="true"
              />

              {/* Bottom image fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Signature curved green accent */}
            <div
              className="pointer-events-none absolute -bottom-1 left-[-13%] z-20 h-32 w-[125%] sm:h-36"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1000 180"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                {/* White border */}
                <path
                  d="M0 180 C190 178 330 155 470 105 C625 48 765 20 1000 4"
                  fill="none"
                  stroke="white"
                  strokeWidth="25"
                />

                {/* Heritage green line */}
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

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"
        aria-hidden="true"
      />
    </section>
  );
}