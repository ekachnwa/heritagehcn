"use client"
import {
  HeartPulse,
  Stethoscope,
  Home,
  Dumbbell,
  UtensilsCrossed,
  Brain,
  ArrowRight,
} from "lucide-react";

import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Skilled Nursing",
    description:
      "Professional nursing care provided by licensed healthcare specialists.",
    icon: HeartPulse,
  },
  {
    title: "Personal Care",
    description:
      "Daily living assistance including bathing, dressing, and grooming.",
    icon: Home,
  },
  {
    title: "Physical Therapy",
    description:
      "Helping clients regain mobility, strength, and independence.",
    icon: Dumbbell,
  },
  {
    title: "Speech Therapy",
    description:
      "Communication and swallowing therapy tailored to every patient.",
    icon: Brain,
  },
  {
    title: "Dietary Services",
    description:
      "Nutrition planning that supports healthier lifestyles and recovery.",
    icon: UtensilsCrossed,
  },
  {
    title: "Medical Assessments",
    description:
      "Comprehensive evaluations and ongoing healthcare monitoring.",
    icon: Stethoscope,
  },
];

export default function Services() {
  const router = useRouter();
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 flex flex-col items-center">
          <Badge>Our Services</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Comprehensive Home Healthcare Services"
              subtitle="We provide a wide range of personalized healthcare services designed to improve comfort, independence, and quality of life."
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group overflow-hidden"
              >
                <CardContent>
                  <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 transition group-hover:bg-green-700">
                    <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Button
                    variant="outline"
                    className="mt-8 w-full justify-between border-green-700 text-green-700 hover:bg-green-50"
                  >
                    Learn More

                    <ArrowRight size={18} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg"
          className="course-pointer"
          onClick={() => router.push("/services")}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}