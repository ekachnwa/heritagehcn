import {
  HeartHandshake,
  ShieldCheck,
  House,
  Users,
  HeartPulse,
} from "lucide-react";

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
            <div className="grid lg:grid-cols-4">
              

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

      </Container>
    </section>
  );
}