import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

const highlights = [
  "Licensed Healthcare Professionals",
  "Personalized Care Plans",
  "Home & Community-Based Services",
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Background Decorations */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-green-100/40 blur-3xl" />

      <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-blue-100/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
          {/* Left Content */}

          <div className="relative z-10">
            <Badge>Our Services</Badge>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
              Comprehensive Care.
              <br />

              <span className="text-green-700">
                Tailored to You.
              </span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Heritage Homecare Network Limited offers a complete
              range of Home & Community-Based Services designed to
              promote independence, dignity, and a higher quality
              of life.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              From skilled nursing to therapy, adaptive support,
              and community programs, our compassionate team is
              committed to helping every individual thrive.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-700" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                Explore Services

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image */}

          <div className="relative">
            {/* Decorative Ring */}

            <div className="absolute -right-10 top-10 h-44 w-44 rounded-full border-[12px] border-green-600/20" />

            {/* Main Image */}

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/services-hero.png"
                alt="Caregiver providing support to a young adult"
                width={900}
                height={700}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-sm text-slate-500">
                Trusted Across Texas
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Person-Centered Care
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Compassionate healthcare tailored to every
                individual's unique needs.
              </p>
            </div>

            {/* Small Badge */}

            <div className="absolute -left-8 top-8 rounded-2xl bg-green-700 px-6 py-5 text-center text-white shadow-lg">
              <h3 className="text-3xl font-bold">14+</h3>

              <p className="text-sm text-green-100">
                Specialized Services
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Curve */}

      <svg
        viewBox="0 0 1440 120"
        fill="currentColor"
        className="absolute bottom-0 left-0 w-full text-white"
      >
        <path d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,74.7C1120,85,1280,107,1360,117.3L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
      </svg>
    </section>
  );
}