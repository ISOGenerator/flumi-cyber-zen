import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Brain, Building2, ArrowRight, CheckCircle } from "lucide-react";
const EURegulations = () => {
  const regulations = [{
    name: "WVW",
    status: "Actief",
    color: "text-green-600"
  }, {
    name: "AOW",
    status: "Actief",
    color: "text-green-600"
  }, {
    name: "Zvw",
    status: "Actief",
    color: "text-blue-600"
  }, {
    name: "WIA",
    status: "Actief",
    color: "text-purple-600"
  }];
  return <section className="py-16 relative bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/4 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animation/Visual Left */}
          <div className="relative">
            {/* Background section behind visual */}
            <div className="absolute inset-0 -m-6 bg-gradient-to-br from-primary/4 to-accent/3 rounded-3xl blur-xl opacity-60"></div>
            
            <div className="glass p-8 rounded-3xl border border-gray-100 shadow-soft relative z-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Nederlandse Verzekeringen</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {regulations.map((reg, index) => <div key={index} className="bg-gray-50/50 p-3 rounded-xl text-center hover:scale-105 transition-transform hover:shadow-soft">
                    <div className="font-semibold text-foreground">{reg.name}</div>
                    <div className={`text-sm ${reg.color}`}>{reg.status}</div>
                  </div>)}
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Live wetgeving updates</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/5 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent/5 rounded-full blur-lg animate-float" style={{
            animationDelay: '2s'
          }}></div>
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2">
              🇳🇱 Nederlandse Regelgeving
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Altijd{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Up-to-date
              </span>{" "}
              met Nederlandse Verzekeringswetten
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Van WVW tot Zvw - PolissBuddy houdt je op de hoogte van alle Nederlandse verzekeringswetten 
              en helpt je de juiste keuzes maken met real-time updates en praktisch advies.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Complete Nederlandse verzekeringswetten database</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Automatische dekkingschecks</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Persoonlijke verzekeringsadvies</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default EURegulations;