import {
  Brain,
  HeartPulse,
  Hospital,
  Stethoscope,
  Users,
} from "lucide-react";
import {Container} from "../../ui/Container";
import {SectionTitle} from "../../ui/SectionTitle";

const audiences = [
  {
    icon: Stethoscope,
    title: "Individuals with Life-Limiting Illnesses",
  },
  {
    icon: Hospital,
    title: "Patients Recovering From Major Surgery",
  },
  {
    icon: Brain,
    title: "Neurological Conditions",
    description: "ALS, MS, Parkinson's, and related conditions.",
  },
  {
    icon: HeartPulse,
    title: "Respiratory Conditions",
    description: "COPD, ventilator dependence, and related needs.",
  },
  {
    icon: HeartPulse,
    title: "Cardiac Conditions",
  },
  {
    icon: Users,
    title: "Complex Ongoing Medical Needs",
  },
];

export default function CriticalCareAudience() {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="rounded-2xl bg-[#f4f8fa] p-7 md:p-10">
          <SectionTitle title="Who We Serve" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#197332] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#09265d]">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}