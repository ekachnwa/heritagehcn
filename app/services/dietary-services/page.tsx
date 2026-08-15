import { Metadata } from "next"; 
import DietaryServicesHero from "@/app/components/services/dietary-services/DietaryServicesHero";
import DietaryServicesApproach from "@/app/components/services/dietary-services/DietaryServicesApproach";
import DietaryServicesBenefits from "@/app/components/services/dietary-services/DietaryServicesBenefits";
import DietaryServicesOverview from "@/app/components/services/dietary-services/DietaryServicesOverview";
import DietaryNutritionBenefits from "@/app/components/services/dietary-services/DietaryNutritionBenefits";
import DietaryServicesCTA from "@/app/components/services/dietary-services/DietaryServicesCTA";

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

export default function DietaryServicesPage() {
  return (
    <>
      <DietaryServicesHero />
      <DietaryServicesBenefits />
      <DietaryServicesOverview />

      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
            <DietaryServicesOverview />
            <DietaryNutritionBenefits />
            </div>
        </div>
        </section>

        <DietaryServicesApproach />

        <DietaryServicesCTA />
        
    </>
  );
}