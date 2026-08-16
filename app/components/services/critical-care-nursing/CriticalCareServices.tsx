import Image from "next/image";
import {
  Activity,
  CheckCircle2,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import {Container} from "../../ui/Container";

const services = [
  "Ventilator care and weaning",
  "Tracheostomy care and management",
  "Intravenous (IV) therapy and medication administration",
  "Wound care and pressure ulcer management",
  "Cardiac care and monitoring",
  "Post-surgical care",
  "Pain management",
  "Chronic disease management",
  "Coordination with physicians and other healthcare providers",
  "Medication management and education",
];

const iconMap = [
  Stethoscope,
  ShieldCheck,
  Syringe,
  Activity,
  HeartPulse,
  ShieldCheck,
  HeartPulse,
  Activity,
  Stethoscope,
  Pill,
];

export default function CriticalCareServices() {
  return (
    <section id="services" className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
          {/* Services */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#176b2d]">
              Our Critical Care Nursing Services
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#142650]">
              Our licensed and specially trained nurses provide comprehensive
              care for individuals with complex medical needs, including:
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = iconMap[index];

                return (
                  <div key={service} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf6ec]">
                      <Icon
                        className="h-4 w-4 text-[#197332]"
                        strokeWidth={2}
                      />
                    </div>

                    <span className="text-sm leading-6 text-[#142650]">
                      {service}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl">
              <Image
                src="/images/critical-care-nurse.png"
                alt="Critical care nurse providing medical care"
                width={900}
                height={500}
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
          </div>

          {/* Audience */}
          <div className="rounded-2xl bg-[#f2f8f3] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#176b2d]">
              Who We Serve
            </h2>

            <div className="mt-6 divide-y divide-[#d8e4da]">
              {[
                "Individuals with life-limiting illnesses",
                "Patients recovering from major surgery",
                "Neurological conditions (e.g., ALS, MS, Parkinson’s)",
                "Respiratory conditions (e.g., COPD, ventilator dependence)",
                "Cardiac conditions",
                "Individuals with complex, ongoing medical needs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#197332]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>

                  <p className="text-sm font-medium leading-6 text-[#142650]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}