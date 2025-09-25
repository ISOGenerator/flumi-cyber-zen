import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileCheck, Shield, Zap, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Assistent",
      description: "Stel elke cybersecurity vraag en krijg direct intelligente antwoorden van Flumi.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: FileCheck,
      title: "Document Generatie",
      description: "Maak automatisch professionele documenten met je eigen templates door simpelweg vragen te stellen.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Shield,
      title: "Security Overzicht",
      description: "Krijg een kristalhelder overzicht van je complete cybersecurity status in één dashboard.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Zap,
      title: "Instant Antwoorden",
      description: "Geen wachttijden meer. Flumi geeft je binnen seconden de cybersecurity inzichten die je nodig hebt.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Clock,
      title: "24/7 Beschikbaar",
      description: "Flumi werkt rond de klok en is altijd klaar om je te helpen met cybersecurity uitdagingen.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Users,
      title: "Team Samenwerking",
      description: "Deel inzichten en documenten naadloos met je team voor betere cybersecurity besluitvorming.",
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Krachtige features voor{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              moderne cybersecurity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flumi combineert AI-intelligentie met praktische tools om je cybersecurity workflow te revolutioneren.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-background/80 backdrop-blur-xl border border-border/30 shadow-glass hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center shadow-colored`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;