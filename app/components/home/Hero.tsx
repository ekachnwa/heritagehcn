import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, Users, BadgeCheck } from "lucide-react";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Care",
  },
  {
    icon: BadgeCheck,
    title: "Medicaid & HCS Support",
  },
  {
    icon: Users,
    title: "Serving Communities Across Texas",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-green-50">
      {/* Background Decorations */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">
          {/* LEFT */}

          <div>
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Trusted Home Healthcare Provider
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Trusted Home Care. 
              Lovely Support. 
            </h1>
            <span className="text-green-700 font-semibold text-lg">
                Better Living at Home.
              </span>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Heritage Homecare Network Limited provides
              professional Home & Community-Based Services
              and Texas Home Living programs that empower
              individuals to live independently with dignity,
              confidence, and comfort.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                Book Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-green-700 text-green-700 hover:bg-green-50"
              >
                Explore Services
                <ArrowRight size={18} />
              </Button>
            </div>

            
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-caregiver.png"
                alt="Caregiver assisting an elderly woman"
                width={700}
                height={760}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-gray-500">
                Trusted by Families Across Texas
              </p>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>

                <span className="font-semibold text-slate-900">
                  5.0 Rating
                </span>
              </div>
            </div>

            {/* Experience Badge */}

            <div className="absolute -right-5 top-10 rounded-2xl bg-green-700 px-6 py-5 text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                15+
              </h3>

              <p className="text-sm">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}

        <div className="grid gap-6 border-t py-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-green-100 p-3">
                  <Icon className="h-6 w-6 text-green-700" />
                </div>

                <span className="font-medium text-slate-700">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}