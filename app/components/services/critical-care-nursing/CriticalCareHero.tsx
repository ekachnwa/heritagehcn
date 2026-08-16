import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

export default function CriticalCareHero() {
  return (
    <section className="relative overflow-hidden bg-[#eef7fc]">
      <Container className="relative">
        <div className="grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10 py-14 pr-6 lg:py-16 xl:pr-12">
            <p className="mb-4 font-semibold uppercase tracking-wide text-[#176b2d]">
              Critical Care Nursing
            </p>

            <h1 className="max-w-[650px] font-serif text-5xl font-bold leading-[1.05] text-[#09265d] md:text-6xl">
              Expert Care. Close to Home.
            </h1>

            <h2 className="mt-5 max-w-xl text-2xl font-bold leading-tight text-[#176b2d] md:text-3xl">
              Focused on What Matters Most.
            </h2>

            <div className="my-6 h-1 w-12 bg-[#197332]" />

            <p className="max-w-xl text-base leading-7 text-[#142650]">
              Our critical care nursing services provide advanced, skilled
              medical care for individuals with complex health conditions.
              We deliver hospital-level care in the comfort and safety of
              your home.
            </p>

            <p className="mt-4 font-semibold text-[#142650]">
              Skilled. Compassionate. Always by Your Side.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[430px] lg:h-full">
            <Image
              src="/images/critical-care-hero.png"
              alt="Critical care nurse providing care to a patient at home"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#eef7fc] to-transparent lg:block" />

          </div>
        </div>
      </Container>
    </section>
  );
}