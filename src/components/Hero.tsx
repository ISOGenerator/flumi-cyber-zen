import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-cybersecurity.jpg";
import { Shield, Sparkles, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
              Bedrijven met betere{" "}
              <br />
              cybersecurity ervaring.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 text-base px-8 py-3">
                Get Started
              </Button>
              <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-100 text-base px-8 py-3">
                Book a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-black">Security Dashboard</h2>
                    <div className="text-sm text-gray-500">Laatste update: vandaag</div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Sidebar */}
                  <div className="bg-gray-900 rounded-lg p-4 text-white">
                    <div className="flex items-center space-x-2 mb-6">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Flumi</span>
                    </div>
                    <nav className="space-y-3">
                      <div className="flex items-center space-x-3 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Documenten</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">Security Scan</span>
                      </div>
                    </nav>
                  </div>
                  
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-black">98%</div>
                        <div className="text-sm text-gray-600">Security Score</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-black">24</div>
                        <div className="text-sm text-gray-600">Documenten</div>
                      </div>
                    </div>
                    
                    {/* AI Chat Preview */}
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