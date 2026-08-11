import Image from "next/image";

import { Container } from "../../ui/Container";

export default function AdaptiveAidsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#eef8ff] via-white to-[#f8fbf8]">
      <Container>
        <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-20 py-14 sm:py-16 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-wide text-[#176d2d]">
              Our Services
            </p>

            <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#09275f] sm:text-6xl lg:text-[62px]">
              Adaptive Aids
            </h1>

            <h2 className="mt-5 max-w-xl text-2xl font-bold leading-[1.35] text-[#176d2d] sm:text-3xl">
              Enhancing Independence.
              <br />
              Improving Quality of Life.
            </h2>

            {/* Green divider */}
            <div
              className="mt-5 h-[3px] w-10 rounded-full bg-[#176d2d]"
              aria-hidden="true"
            />

            <div className="mt-5 max-w-lg space-y-4 text-base leading-7 text-[#15264a] sm:text-lg">
              <p>
                Adaptive aids are tools and devices designed to help
                individuals with disabilities or limitations perform daily
                activities more safely, easily, and independently.
              </p>

              <p>
                We help individuals and families find the right adaptive
                equipment to support comfort, safety, and dignity at home
                and in the community.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[360px] sm:h-[420px] lg:absolute lg:-right-[7%] lg:top-0 lg:h-full lg:w-[61%]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/adaptive-aids/adaptive-aids-hero.jpg"
                alt="Caregiver assisting an older adult with adaptive care at home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 61vw"
                className="object-cover object-center"
              />

              {/* Soft transition into the text area */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#eef8ff] via-[#eef8ff]/75 to-transparent" />

              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* Curved Heritage green accent */}
            <div
              className="pointer-events-none absolute -bottom-1 left-[-13%] z-20 h-32 w-[125%] sm:h-36"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1000 180"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                {/* White separation between image and green accent */}
                <path
                  d="M0 180 C190 178 330 155 470 105 C625 48 765 20 1000 4"
                  fill="none"
                  stroke="white"
                  strokeWidth="25"
                />

                {/* Green curve */}
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

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"
        aria-hidden="true"
      />
    </section>
  );
}