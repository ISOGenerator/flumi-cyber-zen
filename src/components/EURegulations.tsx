import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Globe, 
  Brain, 
  Building2, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const EURegulations = () => {
  const regulations = [
    { name: "GDPR", status: "Actief", color: "text-green-600" },
    { name: "NIS2", status: "2024", color: "text-orange-600" },
    { name: "AI Act", status: "2025-2027", color: "text-purple-600" },
    { name: "DORA", status: "Jan 2025", color: "text-cyan-600" }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animation/Visual Left */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">EU Compliance Hub</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {regulations.map((reg, index) => (
                  <div key={index} className="glass p-3 rounded-xl text-center hover:scale-105 transition-transform">
                    <div className="font-semibold text-foreground">{reg.name}</div>
                    <div className={`text-sm ${reg.color}`}>{reg.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Real-time updates</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary opacity-20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-accent opacity-20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2">
              🇪🇺 EU Regelgeving
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              Altijd{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Compliant
              </span>{" "}
              met EU Wet- en Regelgeving
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Van GDPR tot de nieuwe AI Act - Flumi houdt je op de hoogte van alle EU regelgeving 
              en helpt je compliant te blijven met real-time updates en praktische begeleiding.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Complete EU regelgeving database</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Automatische compliance checks</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Implementatie roadmaps</span>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored">
              Ontdek EU Compliance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EURegulations;