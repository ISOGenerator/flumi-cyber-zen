import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Globe, 
  Brain, 
  Building2, 
  Users, 
  FileCheck, 
  Calendar, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const EURegulations = () => {
  const regulations = [
    {
      title: "GDPR (AVG)",
      fullName: "General Data Protection Regulation",
      status: "Actief sinds 2018",
      statusColor: "bg-green-500",
      description: "Bescherming van persoonsgegevens en privacy van EU-burgers",
      icon: Shield,
      gradient: "from-green-500 to-emerald-600",
      keyPoints: [
        "Toestemming en rechtmatige grondslag",
        "Rechten van betrokkenen (inzage, rectificatie, vergetelheid)",
        "Data Protection Impact Assessments (DPIA)",
        "Meldplicht datalekken binnen 72 uur",
        "Boetes tot 4% van wereldwijde omzet"
      ],
      sectors: "Alle sectoren",
      deadline: "In werking sinds 25 mei 2018"
    },
    {
      title: "NIS2 Directive",
      fullName: "Network and Information Systems Directive 2",
      status: "Implementatie deadline 17 okt 2024",
      statusColor: "bg-orange-500",
      description: "Verhoogde cybersecurity eisen voor kritieke en belangrijke entiteiten",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-600",
      keyPoints: [
        "Cybersecurity risicomanagement maatregelen",
        "Incident rapportage binnen 24 uur",
        "Supply chain security eisen",
        "Governance en toezicht door management",
        "Boetes tot 2% van wereldwijde omzet"
      ],
      sectors: "Energie, transport, banking, healthcare, digitale infrastructuur",
      deadline: "Implementatie uiterlijk 17 oktober 2024"
    },
    {
      title: "EU AI Act",
      fullName: "Artificial Intelligence Act",
      status: "Gefaseerde implementatie 2025-2027",
      statusColor: "bg-purple-500",
      description: "Regulering van AI-systemen op basis van risicoklassificatie",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      keyPoints: [
        "Verbod op onacceptabele AI-praktijken",
        "Strenge eisen voor hoog-risico AI-systemen",
        "Transparantie vereisten voor AI-interactie",
        "Conformiteitsbeoordeling en CE-markering",
        "Boetes tot 7% van wereldwijde omzet"
      ],
      sectors: "AI-ontwikkelaars en -gebruikers in alle sectoren",
      deadline: "Verschillende deadlines tussen 2025-2027"
    },
    {
      title: "DORA",
      fullName: "Digital Operational Resilience Act",
      status: "In werking vanaf 17 jan 2025",
      statusColor: "bg-cyan-500",
      description: "ICT-risicobeheer voor financiële sector",
      icon: Building2,
      gradient: "from-cyan-500 to-blue-600",
      keyPoints: [
        "ICT-risicobeheer framework",
        "ICT-gerelateerde incident rapportage",
        "Digital resilience testing",
        "ICT third-party risicomanagement",
        "Informatie uitwisseling over cyber threats"
      ],
      sectors: "Banken, verzekeraars, beleggingsondernemingen, crypto-assets",
      deadline: "In werking vanaf 17 januari 2025"
    }
  ];

  const complianceSteps = [
    {
      step: 1,
      title: "Assessment & Gap Analysis",
      description: "Identificeer welke regelgeving van toepassing is en waar gaps bestaan"
    },
    {
      step: 2, 
      title: "Implementation Planning",
      description: "Ontwikkel een gefaseerd implementatieplan met realistische tijdslijnen"
    },
    {
      step: 3,
      title: "Policy & Procedures",
      description: "Implementeer beleid, procedures en technische maatregelen"
    },
    {
      step: 4,
      title: "Training & Awareness", 
      description: "Train personeel en creëer bewustzijn binnen de organisatie"
    },
    {
      step: 5,
      title: "Monitor & Audit",
      description: "Continuele monitoring en regelmatige audits voor compliance"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 mb-6">
            🇪🇺 EU Regelgeving
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Europese{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Compliance Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Blijf compliant met de nieuwste EU regelgeving. Flumi kent alle details en helpt je 
            bij implementatie, gap analysis en auditvoorbereiding.
          </p>
        </div>

        {/* Regulations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {regulations.map((regulation, index) => {
            const IconComponent = regulation.icon;
            return (
              <Card key={index} className="p-8 glass hover-lift border-white/20 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${regulation.gradient} p-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {regulation.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{regulation.fullName}</p>
                    </div>
                  </div>
                  <Badge className={`${regulation.statusColor} text-white border-0 text-xs px-3 py-1`}>
                    {regulation.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {regulation.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground">Belangrijkste punten:</h4>
                  <ul className="space-y-2">
                    {regulation.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6 p-4 glass rounded-2xl">
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-foreground">Van toepassing op:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{regulation.sectors}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-foreground">Deadline:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{regulation.deadline}</p>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full glass border-primary/20 hover:bg-primary/10 group-hover:border-primary/40 transition-all"
                >
                  Krijg hulp met {regulation.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Compliance Journey */}
        <div className="glass p-8 rounded-3xl border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Jouw Compliance Journey
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Van gap analysis tot volledige compliance - Flumi begeleidt je door elke stap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {complianceSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-colored">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                
                {index < complianceSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored">
              Start je Compliance Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EURegulations;