import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AwardWinning from "@/components/AwardWinning";
import HotProducts from "@/components/HotProducts";
import FeaturesSection from "@/components/FeaturesSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AwardWinning />
        <HotProducts />
        <FeaturesSection />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
