import { Metadata } from "next"; 
import CriticalCareApproach from "@/app/components/services/critical-care-nursing/CriticalCareApproach";
import { Container } from "@/app/components/ui/Container";
import CriticalCareHero from "@/app/components/services/critical-care-nursing/CriticalCareHero";
import CriticalCareBenefits from "@/app/components/services/critical-care-nursing/CriticalCareBenefits";
import CriticalCareServices from "@/app/components/services/critical-care-nursing/CriticalCareServices";
import CriticalCareAudience from "@/app/components/services/critical-care-nursing/CriticalCareAudience";
import CriticalCareCTA from "@/app/components/services/critical-care-nursing/CriticalCareCTA";

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

export default function CriticalCarePage() {
  return (
    <>
      <main>
        <CriticalCareHero />

        <CriticalCareBenefits />

        <CriticalCareServices />

        <CriticalCareAudience />

        <CriticalCareApproach />

        <CriticalCareCTA />
      </main>
    </>
  );
}