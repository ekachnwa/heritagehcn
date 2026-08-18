import Image from "next/image";
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
    title: "Our Promise",
    description: "Warm, loving homes. Holistic care. An interdisciplinary team that plans every service around the individual — never the other way around.",
  },
  {
    icon: HeartPulse,
    title: "What Are HCS & TxHmL?",
    description: "Two Texas Medicaid waiver programs that pay for the supports a person with an intellectual or developmental disability needs to live in their own home, a family home, or a small community setting — rather than in an institution.",
  },
];

export default function ServicesPromise() {
  return (
    <section className="bg-white py-16">
      <Container>
        <Card className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">

              <div className="grid divide-x divide-y divide-slategrid divide-x divide-y divide-slate-200">
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
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/service-group.jpg"
                  alt="Caregiver providing support to a young adult"
                  width={900}
                  height={700}
                  priority
                  className="h-full w-full object-cover"
                />
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