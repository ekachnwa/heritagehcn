import { Metadata } from "next";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import ServicesPromise from "../components/services/ServicesPromise";

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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServicesGrid />
      <ServicesPromise />
      <ServicesCTA />
    </>
  );
}