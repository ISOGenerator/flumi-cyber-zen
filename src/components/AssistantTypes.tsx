import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Gavel, 
  CheckCircle, 
  Users,
  ArrowRight
} from "lucide-react";

const AssistantTypes = () => {
  const assistants = [
    {
      title: "GDPR Consultant",
      description: "Specialistische hulp bij AVG/GDPR implementatie, privacy impact assessments en dataprotectie procedures.",
      icon: Shield,
      gradient: "from-primary to-accent",
      features: ["Privacy Impact Assessments", "Dataprotectie procedures", "Rechten van betrokkenen", "Internationale transfers"],
      popular: true
    },
    {
      title: "ISO 27001 Consultant", 
      description: "Uitgebreide begeleiding bij ISO 27001 implementatie, certificering en auditvoorbereiding.",
      icon: CheckCircle,
      gradient: "from-accent to-cyan",
      features: ["ISMS implementatie", "Risico assessments", "Auditvoorbereiding", "Controlemaatregelen"]
    },
    {
      title: "NIS2 Consultant",
      description: "Complete ondersteuning voor NIS2-richtlijn compliance, incidentrapportage en cybersecurity governance.",
      icon: Gavel,
      gradient: "from-cyan to-primary",
      features: ["Incidentrapportage procedures", "Cybersecurity governance", "Supply chain security", "Risicobeheer"]
    },
    {
      title: "Algemene Consultant",
      description: "Brede cybersecurity expertise voor alle compliance vraagstukken en EU regelgeving.",
      icon: Users,
      gradient: "from-purple-500 to-primary",
      features: ["Multi-domain expertise", "EU regelgeving kennis", "Risk assessments", "Compliance roadmaps"]
    }
  ];

  return (
    <section className="py-24 relative bg-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 right-20 w-80 h-80 bg-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-16 w-64 h-64 bg-cyan/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-accent/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 mb-6">
            🎯 Gespecialiseerde Consultants
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Kies je{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cybersecurity Expert
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elke consultant is getraind op specifieke EU regelgeving en cybersecurity frameworks. 
            Krijg exact de expertise die je nodig hebt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assistants.map((assistant, index) => {
            const IconComponent = assistant.icon;
            return (
              <Card key={index} className="relative p-6 glass hover-lift group cursor-pointer border-white/20">
                {assistant.popular && (
                  <Badge className="absolute -top-3 right-4 bg-gradient-primary text-white border-0 shadow-colored">
                    Populair
                  </Badge>
                )}
                
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${assistant.gradient} p-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {assistant.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {assistant.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {assistant.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    Start Chat
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="glass p-8 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Weet je niet welke consultant je nodig hebt?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Start een algemene chat en Flumi helpt je de juiste specialist te vinden voor je specifieke vraag.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored">
              Start Algemene Chat
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantTypes;