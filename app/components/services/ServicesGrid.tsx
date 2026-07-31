import {
  Accessibility,
  Bed,
  Brain,
  Ear,
  HeartPulse,
  Home,
  Soup,
  Speech,
  Wrench,
  Baby,
  Users,
  Bike,
  HandHelping,
  Activity,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Adaptive Aids",
    description:
      "Equipment and assistive devices that improve independence and daily living.",
    icon: Accessibility,
  },
  {
    title: "Critical Care Nursing",
    description:
      "Skilled nursing care for individuals with complex medical conditions and ongoing health needs.",
    icon: HeartPulse,
    featured: true,
  },
  {
    title: "Residential Services",
    description:
      "Safe and supportive residential environments designed around each individual's needs.",
    icon: Bed,
  },
  {
    title: "In-Home Services",
    description:
      "Personal assistance, daily living support, and companion care provided in the comfort of home.",
    icon: Home,
  },
  {
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers while ensuring uninterrupted, compassionate care.",
    icon: HandHelping,
  },
  {
    title: "Speech Therapy",
    description:
      "Helping individuals improve communication, speech, and swallowing abilities.",
    icon: Speech,
  },
  {
    title: "Audiology",
    description:
      "Professional hearing assessments and audiological support services.",
    icon: Ear,
  },
  {
    title: "Home Modifications",
    description:
      "Accessibility improvements that create a safer and more independent living environment.",
    icon: Wrench,
  },
  {
    title: "Feeding & Grooming",
    description:
      "Daily personal care assistance delivered respectfully and compassionately.",
    icon: Baby,
  },
  {
    title: "Counseling Services",
    description:
      "Behavioral, emotional, and mental wellness support for individuals and families.",
    icon: Brain,
    featured: true,
  },
  {
    title: "Dietary Services",
    description:
      "Nutrition planning and healthy meal guidance tailored to individual healthcare needs.",
    icon: Soup,
  },
  {
    title: "Day Habilitation",
    description:
      "Structured skill-building activities that promote confidence, independence, and community participation.",
    icon: Users,
  },
  {
    title: "Recreational Activities",
    description:
      "Engaging recreational programs that encourage social interaction and overall wellbeing.",
    icon: Bike,
  },
  {
    title: "Community Supports",
    description:
      "Resources and services that help individuals participate fully within their communities.",
    icon: Activity,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <Badge>Our Healthcare Services</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Comprehensive Services Designed Around You"
              subtitle="We provide a complete range of Home & Community-Based Services that empower individuals to live independently while receiving compassionate, high-quality care."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              featured={service.featured}
            />
          ))}
        </div>

        {/* Bottom Information */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-700 to-emerald-600 p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">
                Individualized Care
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Every service plan is customized to meet each
                individual's medical, personal, and lifestyle
                goals.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Licensed Professionals
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Our experienced caregivers, therapists, nurses,
                and healthcare professionals work together to
                deliver exceptional care.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Serving Texas Families
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Proudly supporting individuals through HCS and
                Texas Home Living programs across communities
                throughout Texas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}