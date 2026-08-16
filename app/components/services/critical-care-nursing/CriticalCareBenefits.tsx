import {
  Activity,
  HeartHandshake,
  Hospital,
  House,
  ShieldCheck,
  Users,
} from "lucide-react";
import {Container} from "../../ui/Container";
import {SectionTitle} from "../../ui/SectionTitle";
import {Card} from "../../ui/Card";

const benefits = [
  {
    icon: Hospital,
    title: "Hospital-Level Care",
    description:
      "Advanced medical care delivered by skilled critical care nurses.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Hospital Stays",
    description:
      "Help reduce the need for hospital readmissions and extended stays.",
  },
  {
    icon: HeartHandshake,
    title: "Better Outcomes",
    description:
      "Personalized care plans that promote healing and recovery.",
  },
  {
    icon: House,
    title: "Comfort of Home",
    description:
      "Receive expert care in a familiar, comfortable, and safe environment.",
  },
  {
    icon: Users,
    title: "Family Support",
    description:
      "We involve and educate families every step of the way.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    description:
      "Ongoing monitoring and assessment for peace of mind.",
  },
];

export default function CriticalCareBenefits() {
  return (
    <section className="bg-white py-14 md:py-16">
      <Container>
        <SectionTitle
          title="Advanced Care in the Comfort of Home"
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border border-gray-100 bg-white px-5 py-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f8f1] text-[#17712d]">
                  <Icon className="h-8 w-8" strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-base font-bold leading-6 text-[#09265d]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#172957]">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}