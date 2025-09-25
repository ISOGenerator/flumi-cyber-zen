import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Pricing />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
