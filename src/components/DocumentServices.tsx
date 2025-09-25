import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Upload, 
  Download,
  Eye,
  ArrowRight,
  Zap
} from "lucide-react";

const DocumentServices = () => {
  const services = [
    {
      title: "Compliance Gap Analysis",
      description: "Upload je beleidsdocumenten en krijg een complete analyse van compliance gaps volgens EU regelgeving",
      icon: Search,
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "GDPR, NIS2, AI Act compliance check",
        "Geautomatiseerde gap identificatie",
        "Priority ranking van bevindingen",
        "Remediation roadmap"
      ],
      processingTime: "2-5 minuten",
      formats: "PDF, DOCX, TXT"
    },
    {
      title: "Security Policy Review",
      description: "Laat je cybersecurity beleid reviewen op volledigheid, actualiteit en best practices",
      icon: FileText,
      gradient: "from-purple-500 to-pink-600",
      features: [
        "ISO 27001 alignment check",
        "Industry best practice vergelijking", 
        "Toegankelijkheid en leesbaarheid",
        "Implementatie haalbaarheid"
      ],
      processingTime: "3-7 minuten",
      formats: "PDF, DOCX, TXT, MD"
    },
    {
      title: "Contract Risk Assessment",
      description: "Analyseer contracten op cybersecurity risico's, dataprotectie clausules en compliance aspecten",
      icon: AlertTriangle,
      gradient: "from-orange-500 to-red-600",
      features: [
        "Dataprotectie clausule check",
        "Cybersecurity aansprakelijkheid",
        "Compliance verplichtingen",
        "Risico classificatie"
      ],
      processingTime: "5-10 minuten", 
      formats: "PDF, DOCX"
    },
    {
      title: "Incident Response Plan Validation",
      description: "Valideer je incident response procedures tegen best practices en regulatoire vereisten",
      icon: Zap,
      gradient: "from-green-500 to-emerald-600",
      features: [
        "NIS2 incident rapportage check",
        "Response time validatie",
        "Escalatie procedures review",
        "Communication plan check"
      ],
      processingTime: "4-8 minuten",
      formats: "PDF, DOCX, TXT"
    }
  ];

  const uploadProcess = [
    {
      step: 1,
      title: "Upload Document",
      description: "Drag & drop of selecteer je document",
      icon: Upload
    },
    {
      step: 2,
      title: "AI Processing", 
      description: "Flumi analyseert je document volledig",
      icon: Search
    },
    {
      step: 3,
      title: "Results Report",
      description: "Krijg een gedetailleerd rapport met bevindingen",
      icon: Eye
    },
    {
      step: 4,
      title: "Action Plan",
      description: "Download je persoonlijke actieplan",
      icon: Download
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 mb-6">
            📋 Document Intelligence
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI-Gedreven{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Document Analyse
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Upload je cybersecurity documenten en krijg binnen minuten een professionele analyse 
            met compliance gaps, risico's en aanbevelingen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 glass hover-lift border-white/20 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Functies:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Extra's:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 glass rounded-2xl mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-primary mr-1" />
                      <span className="text-xs font-medium text-foreground">Verwerkingstijd</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.processingTime}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <FileText className="w-4 h-4 text-primary mr-1" />
                      <span className="text-xs font-medium text-foreground">Formaten</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.formats}</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all"
                >
                  Upload Document
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Upload Process */}
        <div className="glass p-8 rounded-3xl border border-white/20 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Hoe het werkt
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Van upload tot actionable insights in enkele minuten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {uploadProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-colored">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {index < uploadProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass p-8 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Klaar om je documenten te laten analyseren?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Start met een gratis analyse van je eerste document en ontdek direct verbeterpunten.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored">
              Start Gratis Document Analyse
              <Upload className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentServices;