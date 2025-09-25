import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, CheckCircle, Upload, Eye, ArrowRight, Zap } from "lucide-react";
const DocumentServices = () => {
  const features = [{
    icon: Search,
    text: "AI Gap Analysis"
  }, {
    icon: CheckCircle,
    text: "Compliance Check"
  }, {
    icon: Eye,
    text: "Risk Assessment"
  }, {
    icon: Zap,
    text: "Instant Results"
  }];
  return <section className="py-16 relative bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-40 h-40 bg-primary/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
              return <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>;
            })}
            </div>

            
          </div>

          {/* Animation/Visual Right */}
          <div className="relative">
            {/* Background section behind document processor */}
            <div className="absolute inset-0 -m-6 bg-gradient-to-bl from-cyan/4 to-primary/3 rounded-3xl blur-xl opacity-60"></div>
            
            <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-soft relative z-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Document Processor</h3>
              </div>
              
              {/* Upload simulation */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border-2 border-dashed border-primary/30 text-center hover:border-primary/60 transition-colors shadow-soft">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Drop your document here</p>
                </div>
                
                {/* Processing steps */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white rounded-lg shadow-soft">
                    <span className="text-sm text-foreground">Analyzing content</span>
                    <div className="w-6 h-1 bg-primary/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-primary animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded-lg shadow-soft">
                    <span className="text-sm text-foreground">Checking compliance</span>
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/5 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-primary/5 rounded-full blur-lg animate-float" style={{
            animationDelay: '2s'
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default DocumentServices;