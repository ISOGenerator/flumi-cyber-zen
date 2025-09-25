import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  Gavel, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Globe, 
  Lock,
  ArrowRight
} from "lucide-react";

const AssistantTypes = () => {
  const assistants = [
    {
      title: "GDPR Compliance Expert",
      description: "Specialistische hulp bij AVG/GDPR implementatie, privacy impact assessments en dataprotectie procedures.",
      icon: Shield,
      gradient: "from-primary to-accent",
      features: ["Privacy Impact Assessments", "Dataprotectie procedures", "Rechten van betrokkenen", "Internationale transfers"],
      popular: true
    },
    {
      title: "NIS2 Specialist", 
      description: "Complete ondersteuning voor NIS2-richtlijn compliance, incidentrapportage en cybersecurity governance.",
      icon: Globe,
      gradient: "from-cyan to-primary",
      features: ["Incidentrapportage procedures", "Cybersecurity governance", "Supply chain security", "Risicobeheer"]
    },
    {
      title: "ISO 27001 Consultant",
      description: "Uitgebreide begeleiding bij ISO 27001 implementatie, certificering en auditvoorbereiding.",
      icon: CheckCircle,
      gradient: "from-accent to-cyan",
      features: ["ISMS implementatie", "Risico assessments", "Auditvoorbereiding", "Controlemaatregelen"]
    },
    {
      title: "EU AI Act Advisor",
      description: "Expertise in de nieuwe AI Act vereisten, risicoklassificatie en compliance procedures.",
      icon: Users,
      gradient: "from-primary to-purple-500",
      features: ["AI risicoklassificatie", "Conformiteitsbeoordeling", "Transparantie vereisten", "Markttoezicht"]
    },
    {
      title: "DORA Compliance Helper",
      description: "Gespecialiseerde ondersteuning voor financiële instellingen bij DORA compliance.",
      icon: Lock,
      gradient: "from-cyan to-accent",
      features: ["ICT-risicobeheer", "Incidentrapportage", "Digital resilience", "Outsourcing oversight"]
    },
    {
      title: "Document Review Specialist",
      description: "AI-gedreven analyse van beveiligingsbeleid, procedures en contracten voor compliance gaps.",
      icon: FileText,
      gradient: "from-accent to-primary",
      features: ["Beleid analyse", "Contract review", "Gap analysis", "Compliance mapping"]
    },
    {
      title: "Incident Response Coordinator", 
      description: "24/7 ondersteuning bij cybersecurity incidenten, response planning en forensisch onderzoek.",
      icon: AlertTriangle,
      gradient: "from-red-500 to-accent",
      features: ["Incident handling", "Forensisch onderzoek", "Crisis communicatie", "Recovery planning"]
    },
    {
      title: "Compliance Auditor",
      description: "Fictieve audits en assessments ter voorbereiding op echte compliance controles.",
      icon: Gavel,
      gradient: "from-purple-500 to-cyan",
      features: ["Mock audits", "Compliance testing", "Gap identificatie", "Remediation planning"]
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-cyan"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 mb-6">
            🎯 Gespecialiseerde Assistenten
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Kies je{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cybersecurity Expert
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elke assistent is getraind op specifieke EU regelgeving en cybersecurity frameworks. 
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
              Weet je niet welke assistent je nodig hebt?
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