import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import Achievements from "@/components/Achievements";
import Superpowers from "@/components/Superpowers";
import PersonalPhoto from "@/components/PersonalPhoto";
import EngineerPM from "@/components/EngineerPM";
import CaseStudies from "@/components/CaseStudies";
import Writing from "@/components/Writing";
import IBuildStuff from "@/components/IBuildStuff";
import SocialConnect from "@/components/SocialConnect";
import TheClose from "@/components/TheClose";
import Footer from "@/components/Footer";
import InteractiveCursor from "@/components/InteractiveCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <InteractiveCursor />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <MetricsBar />
      <Achievements />
      <CaseStudies />
      <Superpowers />
      <PersonalPhoto />
      <EngineerPM />
      <Writing />
      <IBuildStuff />
      <SocialConnect />
      <TheClose />
      <Footer />
    </div>
  );
};

export default Index;
