import {
  HeartHandshake,
  ShieldCheck,
  House,
  Users,
  HeartPulse,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Card, CardContent } from "../../components/ui/Card";
import { Container } from "../../components/ui/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Trained",
    description: "Experienced healthcare professionals you can trust.",
  },
  {
    icon: HeartPulse,
    title: "Compassionate Care",
    description: "Respectful, person-centered support every day.",
  },
  {
    icon: House,
    title: "Home & Community",
    description: "Services delivered wherever you're most comfortable.",
  },
  {
    icon: Users,
    title: "Holistic Approach",
    description: "Supporting physical, emotional, and social well-being.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16">
      <Container>
        <Card className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-12">
              {/* Left */}

              <div className="border-b border-slate-200 bg-gradient-to-br from-green-50 to-white p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
                <Badge>Our Promise</Badge>

                <div className="mt-6 flex items-start gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">
                    <HeartHandshake className="h-10 w-10 text-green-700" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Person-Centered Services
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                      Every individual has unique goals and support
                      needs. Our care plans are thoughtfully
                      customized to promote independence, dignity,
                      and meaningful participation at home and in
                      the community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}

              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 lg:col-span-7 lg:grid-cols-4 lg:divide-y-0">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="group flex flex-col items-center justify-center px-6 py-10 text-center transition-all duration-300 hover:bg-green-50"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-colors duration-300 group-hover:bg-green-700">
                        <Icon className="h-8 w-8 text-green-700 transition-colors duration-300 group-hover:text-white" />
                      </div>

                      <h3 className="mt-6 text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Note */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-green-50 px-6 py-5 text-center md:flex-row">
          <ShieldCheck className="h-6 w-6 text-green-700" />

          <p className="font-medium text-slate-700">
            All services are provided in accordance with
            Home & Community-Based Services (HCS) and Texas Home
            Living (TxHmL) program guidelines.
          </p>
        </div>
      </Container>
    </section>
  );
}