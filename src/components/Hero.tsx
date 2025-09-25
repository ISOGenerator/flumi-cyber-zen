import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-cybersecurity.jpg";
import { Shield, Sparkles, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="inline-flex items-center space-x-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Cybersecurity</span>
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Je{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  cybersecurity
                </span>{" "}
                assistent{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Flumi
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Krijg een duidelijk overzicht van je cybersecurity. Flumi beantwoordt al je vragen via AI en genereert automatisch documenten met je eigen templates.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start nu gratis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Bekijk demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Flumi cybersecurity dashboard interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-secondary rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;