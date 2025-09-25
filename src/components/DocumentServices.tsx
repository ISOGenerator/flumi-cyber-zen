import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Upload, 
  Eye,
  ArrowRight,
  Zap
} from "lucide-react";

const DocumentServices = () => {
  const features = [
    { icon: Search, text: "AI Gap Analysis" },
    { icon: CheckCircle, text: "Compliance Check" },
    { icon: Eye, text: "Risk Assessment" },
    { icon: Zap, text: "Instant Results" }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2">
              📋 Document Intelligence
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              AI-Gedreven{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Document Analyse
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upload je cybersecurity documenten en krijg binnen minuten een professionele analyse 
              met compliance gaps, risico's en concrete aanbevelingen.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored">
              Upload Document
              <Upload className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Animation/Visual Right */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Document Processor</h3>
              </div>
              
              {/* Upload simulation */}
              <div className="space-y-4">
                <div className="glass p-4 rounded-xl border-2 border-dashed border-primary/30 text-center hover:border-primary/60 transition-colors">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Drop your document here</p>
                </div>
                
                {/* Processing steps */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 glass rounded-lg">
                    <span className="text-sm text-foreground">Analyzing content</span>
                    <div className="w-6 h-1 bg-primary/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-primary animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 glass rounded-lg">
                    <span className="text-sm text-foreground">Checking compliance</span>
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-secondary opacity-20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-primary opacity-20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentServices;