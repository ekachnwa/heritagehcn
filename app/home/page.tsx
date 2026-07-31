import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import ServicesArea from "../components/home/ServicesArea";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";


export default function HomePage() {
  return (
    <>
      <Hero />
        <About />
        <Services />
        <Process />
        <ServicesArea />
        <Testimonials />
        <CTA />
    </>
  );
}