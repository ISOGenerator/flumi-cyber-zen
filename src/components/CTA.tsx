import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/4 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-soft border border-gray-100">
          <div className="absolute inset-0 opacity-2">
            <div className="w-full h-full bg-primary/2 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          <CardContent className="relative z-10 py-16 px-8 text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-soft">
                  <div className="w-4 h-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">Klaar om te beginnen?</span>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Versterk je cybersecurity met{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Flumi</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sluit je aan bij duizenden bedrijven die hun cybersecurity al hebben getransformeerd met Flumi's AI-gestuurde platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 group bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all"
                >
                  Start gratis trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white shadow-soft"
                >
                  Vraag een demo aan
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-muted-foreground text-sm">
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                  <span>14 dagen gratis</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  <span>Geen creditcard vereist</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 rounded-full bg-gradient-primary"></div>
                  <span>Instant toegang</span>
                </span>
              </div>
            </div>
          </CardContent>
          
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-accent/3 rounded-full blur-2xl"></div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;