import {
  ClipboardList,
  PhoneCall,
  HeartHandshake,
  Home,
} from "lucide-react";

import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Speak with one of our care coordinators to discuss your healthcare needs and schedule a consultation.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Care Assessment",
    description:
      "Our team performs a personalized assessment to understand your medical, physical, and lifestyle requirements.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Personalized Care Plan",
    description:
      "We create a customized care plan tailored to your goals, health condition, and daily support needs.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Care Begins",
    description:
      "Our experienced caregivers begin delivering compassionate care while continuously monitoring your progress.",
    icon: Home,
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <Badge>Our Care Process</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Simple Steps to Receiving Exceptional Home Care"
              subtitle="Our straightforward process ensures every client receives personalized, compassionate care from the very beginning."
            />
          </div>
        </div>

        <div className="relative mt-20">
          {/* Desktop Connector */}
          <div className="absolute left-0 right-0 top-16 hidden border-t-2 border-dashed border-green-200 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-green-100 shadow-md">
                    <Icon className="h-10 w-10 text-green-700" />
                  </div>

                  <div className="mt-6">
                    <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                      Step {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}

        <div className="mt-20 rounded-3xl bg-green-700 px-8 py-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready to Get Started?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-green-100">
            Our healthcare professionals are ready to answer your
            questions and help you begin your journey toward
            compassionate home care.
          </p>
        </div>
      </Container>
    </section>
  );
}