import {
  HeartHandshake,
  ShieldCheck,
  UserRoundCheck,
  ClipboardCheck,
  MessageCircleHeart,
} from "lucide-react";

import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

const benefits = [
  {
    title: "Personalized Care",
    description:
      "We take the time to understand each individual and create care solutions around their unique needs, goals, and preferences.",
    icon: UserRoundCheck,
  },
  {
    title: "Compassionate Support",
    description:
      "Our team treats every individual and family with dignity, respect, kindness, and genuine compassion.",
    icon: HeartHandshake,
  },
  {
    title: "Experienced Professionals",
    description:
      "You can feel confident knowing your care is supported by knowledgeable and dedicated professionals.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Care Planning",
    description:
      "We explain available services clearly and help families understand their options and next steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Family-Centered Approach",
    description:
      "We listen to families, answer questions, and work together to build a care experience that feels right.",
    icon: MessageCircleHeart,
  },
];

export default function ConsultationBenefits() {
  return (
    <section className="bg-[#f7faf8] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center">
          <SectionTitle
            title="Why Families Choose Heritage"
            subtitle="We believe exceptional care begins with listening. Our approach puts individuals and their families at the center of every decision."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_5px_25px_rgba(10,40,70,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(10,40,70,0.09)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef8ef] transition-colors duration-300 group-hover:bg-[#176d2d]">
                  <Icon
                    className="h-7 w-7 text-[#176d2d] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#09275f]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#eaf5eb] px-5 py-3 text-sm font-semibold text-[#176d2d]">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            <span>
              Compassionate care. Personalized support. Peace of mind.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}