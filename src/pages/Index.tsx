import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import Achievements from "@/components/Achievements";
import Superpowers from "@/components/Superpowers";
import EngineerPM from "@/components/EngineerPM";
import CaseStudies from "@/components/CaseStudies";
import Writing from "@/components/Writing";
import SocialConnect from "@/components/SocialConnect";
import TheClose from "@/components/TheClose";
import Footer from "@/components/Footer";
import InteractiveCursor from "@/components/InteractiveCursor";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <InteractiveCursor />
      <Navigation />
      <Hero />
      <MetricsBar />
      <Achievements />
      <CaseStudies />
      <Superpowers />
      <EngineerPM />
      <Writing />
      <SocialConnect />
      <TheClose />
      <Footer />
    </div>
  );
};

export default Index;
