import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { Container } from "../../components/ui/Container";

const serviceAreas = [
  "Frisco",
  "Prosper",
  "Lewisville",
  "Plano",
  "Little Elm",
  "Richardson",
  "McKinney",
  "The Colony",
  "Dallas",
  "Allen",
  "Carrollton",
  "Surrounding Areas",
];

export default function ContactLocation() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24">
      <Container>
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#09275f] sm:text-4xl">
            Our Location &amp; Service Areas
          </h2>

          <div
            className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#176d2d]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Office Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_25px_rgba(10,40,70,0.07)]">
            <div className="grid sm:grid-cols-[1.15fr_0.85fr]">
              {/* Office Image */}
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/office-building.png"
                  alt="Heritage Homecare Network Limited office"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#09275f]/20 to-transparent" />
              </div>

              {/* Office Information */}
              <div className="flex flex-col justify-center p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8ef]">
                    <MapPin className="h-5 w-5 text-[#176d2d]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#176d2d]">
                    Our Office
                  </h3>
                </div>

                <p className="mt-5 font-semibold leading-6 text-[#09275f]">
                  3780 Bloomfield Lane
                  <br />
                  Frisco, TX 75033
                </p>

                <div className="mt-4 h-[2px] w-9 bg-[#176d2d]" />

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We proudly serve individuals and families across
                  the following areas.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=3780%20Bloomfield%20Lane%2C%20Frisco%2C%20TX%2075033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#176d2d] transition-colors hover:text-[#125923]"
                >
                  Get Directions
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas Card */}
          <div className="rounded-2xl border border-[#e2eee3] bg-gradient-to-br from-[#f3faf3] to-[#f8fbf8] p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <MapPin className="h-5 w-5 text-[#176d2d]" />
              </div>

              <h3 className="text-xl font-bold text-[#176d2d]">
                Areas We Serve
              </h3>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Our team provides compassionate home and community-based
              support throughout these communities and surrounding
              areas.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176d2d]" />

                  <span className="text-sm font-medium text-[#183052]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}