"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "../../components/ui/Button";
import { Container } from "../..//components/ui/Container";
import { SectionTitle } from "../..//components/ui/SectionTitle";
import { Badge } from "../../components/ui/Badge";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Providing personalized care that respects every individual's dignity and independence.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description:
      "Licensed and experienced caregivers dedicated to delivering exceptional healthcare.",
  },
  {
    icon: Users,
    title: "Family Focused",
    description:
      "Working closely with families to create customized care plans for long-term success.",
  },
];

export default function About() {
  const router = useRouter();
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/about-homecare.png"
                alt="Caregiver helping a senior woman"
                width={650}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

          </div>

          {/* Content */}

          <div>
            <Badge>About Us</Badge>

            <div className="mt-4">
              <SectionTitle
                align="left"
                title="Dedicated to Delivering Exceptional Home Healthcare"
                subtitle="At Heritage Homecare Network Limited, we believe everyone deserves compassionate, high-quality care in the comfort of their own home."
              />
            </div>

            <p className="mt-8 leading-8 text-slate-600">
              We provide Home & Community-Based Services, skilled nursing,
              therapy, and personalized support that empower individuals to
              maintain independence while improving their quality of life.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Licensed & Certified Healthcare Professionals",
                "Customized Care Plans",
                "24/7 Client Support",
                "Trusted by Families Across Texas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-700" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button size="lg"
              className="cursor-pointer"
              onClick={() => router.push("/about")}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        {/* Values */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-green-100 p-4">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}