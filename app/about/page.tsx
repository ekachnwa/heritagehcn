import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVission";
import OurStory from "../components/about/OurStory";
import WhyChooseUs from "../components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <MissionVision />
      <AboutCTA />
    </>
  );
}