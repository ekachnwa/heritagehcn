import type { Metadata } from "next";

import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactLocation from "../components/contact/ContactLocation";
import ContactCTA from "../components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | Heritage Homecare Network Limited",
  description:
    "Contact Heritage Homecare Network Limited to learn more about our compassionate home and community-based care services across Texas.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactHero />
      <ContactFormSection />
      <ContactLocation />
      <ContactCTA />
    </main>
  );
}