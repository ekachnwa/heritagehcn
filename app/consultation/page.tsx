import { Metadata } from "next";
import ConsultationBenefits from "../components/consultation/ConsultationBenefit";
import { Container } from "../components/ui/Container";
import ConsultationSupport from "../components/consultation/ConsultationSupport";
import WhatToExpect from "../components/consultation/WhatToExpect";
import ConsultationForm from "../components/consultation/ConsultationForm";
import ConsultationHero from "../components/consultation/ConsultationHero";

export const metadata: Metadata = {
  title: "Consultation | Heritage Homecare Network Limited",
  description:
    "Explore Heritage Homecare Network Limited's comprehensive Home & Community-Based Services, including skilled nursing, therapy, respite care, residential support, adaptive aids, and personalized care across Texas.",
  keywords: [
    "Home Healthcare",
    "Home Care Services",
    "HCS",
    "Texas Home Living",
    "Skilled Nursing",
    "Respite Care",
    "Speech Therapy",
    "Residential Services",
    "Home & Community-Based Services",
    "Heritage Homecare",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ConsultationHero />

        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <Container>
            <div className="grid gap-8 lg:grid-cols-[4fr_2fr]">
                <ConsultationForm />

                <aside>
                <WhatToExpect />
                <ConsultationSupport />
                </aside>
            </div>
            </Container>
        </section>

        <ConsultationBenefits />
    </>
  );
}