import Image from "next/image";
import { Container } from "../../ui/Container";

export default function ResidentialServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8fc]">
      <Container>
        <div className="grid min-h-[420px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10 py-12 pr-0 lg:py-16 lg:pr-10">
            <h1 className="font-serif text-4xl font-bold leading-tight text-[#09275f] sm:text-5xl lg:text-[54px]">
              Residential Services
            </h1>

            <h2 className="mt-4 max-w-xl text-xl font-bold leading-8 text-[#176d2d] sm:text-2xl">
              A Place to Call Home.
              <br />
              Care That Feels Like Family.
            </h2>

            <div className="mt-5 h-[3px] w-10 bg-[#176d2d]" />

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#09275f] sm:text-base sm:leading-7">
              Our residential services provide safe, comfortable, and
              supportive living environments for individuals with
              developmental and intellectual disabilities. We create homes
              where individuals can thrive, build relationships, and live
              with dignity and respect.
            </p>

            <p className="mt-4 text-sm font-semibold text-[#09275f] sm:text-base">
              Safe Homes. Compassionate Care. Meaningful Living.
            </p>
          </div>

          {/* Image */}
          <div className="relative min-h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              src="/images/residential-services-hero.png"
              alt="Caregiver supporting an individual at home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f1f8fc] via-transparent to-transparent lg:w-1/3" />

            {/* Green curved accent */}
            <div className="absolute -bottom-12 -left-12 h-32 w-[120%] rotate-[-8deg] rounded-[50%] border-b-[10px] border-[#176d2d]" />
          </div>
        </div>
      </Container>
    </section>
  );
}