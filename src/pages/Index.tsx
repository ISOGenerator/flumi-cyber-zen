import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AssistantTypes from "@/components/AssistantTypes";
import EURegulations from "@/components/EURegulations";
import DocumentServices from "@/components/DocumentServices";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <AssistantTypes />
      <EURegulations />
      <DocumentServices />
      <Features />
      <ProductShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
