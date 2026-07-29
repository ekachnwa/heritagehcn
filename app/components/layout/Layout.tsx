import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../home/Hero";
import About from "../home/About";
import Services from "../home/Services";
import Process from "../home/Process";
import Testimonials from "../home/Testimonials";
import ServicesArea from "../home/ServicesArea";
import CTA from "../home/CTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {children}
        <Hero />
        <About />
        <Services />
        <Process />
        <ServicesArea />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}