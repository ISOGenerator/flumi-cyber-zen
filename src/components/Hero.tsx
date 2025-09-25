import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-cybersecurity.jpg";
import { Shield, Sparkles, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Bedrijven met betere{" "}
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">cybersecurity</span> ervaring.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all text-base px-8 py-3">
                Get Started
              </Button>
              <Button variant="outline" className="text-foreground border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background text-base px-8 py-3">
                Book a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-background/80 backdrop-blur-xl rounded-2xl shadow-glass border border-border/30 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-background/60 backdrop-blur-sm border-b border-border/30 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Security Dashboard</h2>
                    <div className="text-sm text-muted-foreground">Laatste update: vandaag</div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Left Sidebar */}
                  <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-4 text-white">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-6 h-6 rounded-lg bg-gradient-primary flex items-center justify-center shadow-colored">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">Flumi</span>
                    </div>
                    <nav className="space-y-3">
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gradient-primary text-white shadow-colored">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm font-medium">Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Documenten</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">Security Scan</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <span className="text-sm">Compliance</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <span className="text-sm">Rapporten</span>
                      </div>
                    </nav>
                  </div>
                  
                  {/* Main Content */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Top Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20 shadow-soft">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">98%</div>
                        <div className="text-sm text-muted-foreground">Security Score</div>
                      </div>
                      <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20 shadow-soft">
                        <div className="text-2xl font-bold text-foreground">24</div>
                        <div className="text-sm text-muted-foreground">Documenten</div>
                      </div>
                      <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20 shadow-soft">
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">3</div>
                        <div className="text-sm text-muted-foreground">Waarschuwingen</div>
                      </div>
                      <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20 shadow-soft">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">12</div>
                        <div className="text-sm text-muted-foreground">Actieve Scans</div>
                      </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* AI Chat Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black">AI Assistent</h3>
                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                              <Sparkles className="w-3 h-3 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-black">Flumi AI</div>
                              <div className="text-sm text-gray-600 mt-1">
                                Je security posture is uitstekend! Wil je een GDPR compliance rapport genereren?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-sm text-gray-600">Typ je vraag hier...</div>
                        </div>
                      </div>
                      
                      {/* Recent Activities */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black">Recente Activiteiten</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-black">Security scan voltooid</div>
                              <div className="text-xs text-gray-600">2 minuten geleden</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-black">GDPR rapport gegenereerd</div>
                              <div className="text-xs text-gray-600">1 uur geleden</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-black">Nieuwe waarschuwing</div>
                              <div className="text-xs text-gray-600">3 uren geleden</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Security Status */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-4">Security Status</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Shield className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="text-sm font-medium text-black">Firewall</div>
                          <div className="text-xs text-green-600">Actief</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <div className="w-6 h-6 bg-green-600 rounded"></div>
                          </div>
                          <div className="text-sm font-medium text-black">Antivirus</div>
                          <div className="text-xs text-green-600">Up-to-date</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <div className="w-6 h-6 bg-orange-600 rounded"></div>
                          </div>
                          <div className="text-sm font-medium text-black">Updates</div>
                          <div className="text-xs text-orange-600">3 Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;