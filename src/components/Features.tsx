import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Gavel, FileSearch, Users, Zap, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "EU Compliance Expertise",
      description: "Complete kennis van GDPR, NIS2, AI Act, DORA en andere EU regelgeving met real-time updates.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: FileSearch,
      title: "Document Intelligence",
      description: "AI-gedreven analyse van beleid, contracten en procedures met gap identification en remediation.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Gavel,
      title: "Fictieve Audits",
      description: "Voer realistische compliance audits uit ter voorbereiding op echte toezichthoudende controles.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "Specialized Assistants",
      description: "8 gespecialiseerde AI-assistenten voor elk cybersecurity en compliance domein.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Zap,
      title: "Instant Risk Assessment",
      description: "Directe risicobeoordelingen en impact analyses voor cybersecurity incidenten en threats.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Globe,
      title: "Multi-Sector Support",
      description: "Expertise voor alle sectoren: financieel, healthcare, kritieke infrastructuur, en meer.",
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Alles voor{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EU Cybersecurity Compliance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van GDPR tot AI Act - Flumi heeft alle expertise om je organisatie compliant en veilig te houden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative glass hover-lift border-white/20"
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center shadow-colored group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;