import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-primary shadow-large border-0">
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-white/5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          <CardContent className="relative z-10 py-16 px-8 text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Klaar om te beginnen?</span>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Versterk je cybersecurity met{" "}
                <span className="text-yellow-300">Flumi</span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Sluit je aan bij duizenden bedrijven die hun cybersecurity al hebben getransformeerd met Flumi's AI-gestuurde platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="text-lg px-8 py-4 group"
                >
                  Start gratis trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
                >
                  Vraag een demo aan
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-white/80 text-sm">
                <span>✓ 14 dagen gratis</span>
                <span>✓ Geen creditcard vereist</span>
                <span>✓ Instant toegang</span>
              </div>
            </div>
          </CardContent>
          
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;