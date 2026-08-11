{/* <main>
  <AdaptiveAidsBenefits />

  <AdaptiveAidCategories />

  <section className="grid lg:grid-cols-2">
    <AdaptiveAidsHelp />
    <AdaptiveAidsTypes />
  </section>

  <AdaptiveAidsCTA />
</main> */}


import { Metadata } from "next";
import AdaptiveAidsHero from "@/app/components/services/adaptive-aids/AdaptiveAidsHero";
import AdaptiveAidsBenefits from "@/app/components/services/adaptive-aids/AdaptiveAidsBenefits";
import AidCategoryCard from "@/app/components/services/adaptive-aids/AdaptiveAidCategories";
import AdaptiveAidsHelp from "@/app/components/services/adaptive-aids/AdaptiveAidsHelp";
import AdaptiveAidsTypes from "@/app/components/services/adaptive-aids/AdaptiveAidsTypes";
import AdaptiveAidsCTA from "@/app/components/services/adaptive-aids/AdaptiveAidsCTA";

export const metadata: Metadata = {
  title: "Adaptive Aids | Heritage Homecare Network Limited",
  description:
    "Explore Heritage Homecare Network Limited's comprehensive Adaptive Aids services, designed to enhance independence and quality of life for individuals in need.",
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

export default function AdaptiveAidsPage() {
  return (
    <>
      <AdaptiveAidsHero />
      <AdaptiveAidsBenefits />
      <AidCategoryCard />

    <section className="grid lg:grid-cols-2">
        <AdaptiveAidsHelp />
        <AdaptiveAidsTypes />
    </section>

    <AdaptiveAidsCTA />

    </>
  );
}