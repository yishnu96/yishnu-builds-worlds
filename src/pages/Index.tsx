import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import Achievements from "@/components/Achievements";
import Superpowers from "@/components/Superpowers";
import EngineerPM from "@/components/EngineerPM";
import Writing from "@/components/Writing";
import SocialConnect from "@/components/SocialConnect";
import TheClose from "@/components/TheClose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MetricsBar />
      <Achievements />
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
