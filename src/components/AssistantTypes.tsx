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
      title: "Standaard Assistant",
      description: "Algemene cybersecurity expertise voor alle vraagstukken en EU regelgeving compliance.",
      icon: Users,
      gradient: "from-primary to-accent",
      features: ["Multi-domain expertise", "EU regelgeving kennis", "Risk assessments", "Compliance roadmaps"],
      popular: true
    },
    {
      title: "Consultant", 
      description: "Strategische begeleiding bij cybersecurity transformatie en compliance implementatie.",
      icon: CheckCircle,
      gradient: "from-accent to-cyan",
      features: ["Strategic planning", "Implementation guidance", "Best practices", "Change management"]
    },
    {
      title: "Auditor",
      description: "Fictieve audits en compliance assessments ter voorbereiding op echte controles.",
      icon: Gavel,
      gradient: "from-cyan to-primary",
      features: ["Mock audits", "Compliance testing", "Gap analysis", "Remediation planning"]
    },
    {
      title: "Specialist",
      description: "Diepgaande technische expertise voor specifieke cybersecurity domeinen.",
      icon: Shield,
      gradient: "from-purple-500 to-primary",
      features: ["Technical expertise", "Specialized knowledge", "Deep analysis", "Solution design"]
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
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
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
              <div key={index} className="relative">
                {/* Background behind each card */}
                <div className={`absolute inset-0 -m-2 rounded-3xl blur-lg opacity-30 ${
                  index % 4 === 0 ? 'bg-primary/4' :
                  index % 4 === 1 ? 'bg-accent/4' :
                  index % 4 === 2 ? 'bg-cyan/4' : 'bg-primary/3'
                }`}></div>
                
                <Card className="relative p-6 glass hover-lift group cursor-pointer border-2 z-10" 
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))) border-box'
                  }}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AssistantTypes;