import {
  Award,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Card, CardContent } from "../../components/ui/Card";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Every client receives individualized care delivered with empathy, dignity, and respect.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
    description:
      "Our experienced caregivers and healthcare professionals are fully trained and committed to excellence.",
  },
  {
    icon: Clock3,
    title: "Reliable Support",
    description:
      "Consistent, dependable care that families can trust whenever support is needed.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description:
      "We work closely with families to create personalized care plans that fit each client's unique needs.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Services",
    description:
      "From skilled nursing to therapy and community support, we provide a complete range of home healthcare services.",
  },
  {
    icon: Award,
    title: "Trusted Reputation",
    description:
      "Serving Texas families with integrity, professionalism, and a commitment to improving quality of life.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <Badge>Why Choose Us</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Why Families Trust Heritage Homecare"
              subtitle="We combine compassionate professionals, personalized care plans, and years of experience to help individuals live safely and independently at home."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card
                key={reason.title}
                className="group h-full border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-green-200"
              >
                <CardContent>
                  <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 transition-colors duration-300 group-hover:bg-green-700">
                    <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}

      </Container>
    </section>
  );
}