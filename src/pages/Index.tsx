import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrailSection from "@/components/TrailSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrailSection />
      <FeaturesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
