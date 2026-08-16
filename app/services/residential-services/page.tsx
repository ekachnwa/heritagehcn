import { Metadata } from "next"; 
import ResidentialServicesHero from "@/app/components/services/residential-services/ResidentialServicesHero";
import ResidentialServicesOverview from "@/app/components/services/residential-services/ResidentialServicesOverview";
import ResidentialWhyChooseUs from "@/app/components/services/residential-services/ResidentialWhyChooseUs";
import ResidentialAudience from "@/app/components/services/residential-services/ResidentialAudience";
import ResidentialApproach from "@/app/components/services/residential-services/ResidentialApproach";
import ResidentialCTA from "@/app/components/services/residential-services/ResidentialCTA";
import { Container } from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Services | Heritage Homecare Network Limited",
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

export default function ResidentialServicesPage() {
  return (
    <>
      <ResidentialServicesHero />  

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
        `<div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
            <ResidentialServicesOverview />
            <ResidentialWhyChooseUs />
          </div>
          </Container>
      </section>
        <Container>
            <ResidentialAudience />

            <ResidentialApproach />

            <ResidentialCTA /> 
        </Container>
    </>
  );
}