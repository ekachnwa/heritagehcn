import Image from "next/image";

import { Container } from "../../ui/Container";

export default function DietaryServicesHero() {
  return (
    <section
      aria-labelledby="dietary-services-hero-heading"
      className="relative isolate overflow-hidden bg-gradient-to-r from-[#eef8ff] via-white to-[#f8fbf8]"
    >
      <Container>
        <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-20 py-14 sm:py-16 lg:py-20">
            <h1
              id="dietary-services-hero-heading"
              className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#09275f] sm:text-6xl lg:text-[60px]"
            >
              Dietary Services
            </h1>

            <h2 className="mt-5 max-w-xl text-2xl font-bold leading-[1.35] text-[#176d2d] sm:text-3xl">
              Nourishing Health.
              <br />
              Supporting Independence.
            </h2>

            {/* Green divider */}
            <div
              className="mt-5 h-[3px] w-10 rounded-full bg-[#176d2d]"
              aria-hidden="true"
            />

            <div className="mt-5 max-w-lg space-y-4 text-base leading-7 text-[#15264a] sm:text-lg">
              <p>
                Good nutrition plays a vital role in overall health and
                well-being. Our dietary services provide personalized meal
                planning, nutritious meal preparation, and support that meets
                individual needs and preferences.
              </p>

              <p className="font-semibold">
                Balanced meals. Better health. Peace of mind.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-[350px] sm:h-[410px] lg:absolute lg:-right-[7%] lg:top-0 lg:h-full lg:w-[61%]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/dietary-services-hero.png"
                alt="Caregiver supporting an older adult during a nutritious meal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 61vw"
                className="object-cover object-center"
              />

              {/* Blend image into left-side content */}
              <div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#eef8ff] via-[#eef8ff]/75 to-transparent"
                aria-hidden="true"
              />

              {/* Soft bottom transition */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/30 to-transparent"
                aria-hidden="true"
              />
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