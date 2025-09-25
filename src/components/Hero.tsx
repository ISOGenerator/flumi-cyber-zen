import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, Shield, Paperclip, ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-16">
          {/* Hero Content */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-secondary/80 text-primary border-0 px-4 py-2 text-sm font-medium">
                🤖 AI Cybersecurity Expert
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Ontmoet{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Flumi
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Je AI cybersecurity expert die 24/7 klaarstaat voor al je beveiligingsvragen
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all text-lg px-8 py-4 group rounded-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Chat met Flumi
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-lg px-8 py-4 rounded-2xl group hover:bg-transparent"
              >
                Bekijk hoe het werkt
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Chat Interface Mockup */}
          <div className="relative max-w-2xl w-full">
            {/* Chat Interface Container with 3D perspective */}
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-xl overflow-hidden border border-pink-200/30">

                {/* Main Chat Window */}
                <div>
                  {/* macOS Window Header */}
                  <div className="flex items-center justify-between p-3 border-b border-pink-200/30 bg-pink-50">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-900">Flumi</div>
                    <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Chat Content Area */}
                  <div className="p-6 bg-gradient-to-b from-pink-50 to-white">
                    {/* Welcome Section */}
                    <div className="text-center mb-6">
                      <h1 className="text-xl font-semibold text-gray-900 mb-2">Hey, I'm Flumi.</h1>
                      <p className="text-gray-600">How can I help you today?</p>
                    </div>
                  </div>

                  {/* Bottom Input Area */}
                  <div className="p-4 bg-gradient-to-b from-pink-50 to-white">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="How can I help you today"
                        className="w-full h-16 pl-10 pr-20 text-base bg-gray-50/50 border-2 border-transparent rounded-xl shadow-sm backdrop-blur-sm"
                        style={{
                          background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ec4899, #8b5cf6) border-box'
                        }}
                        disabled
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <div className="h-4 w-4 text-gray-400">💬</div>
                      </div>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                        <button className="h-6 w-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                          <Paperclip className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center bg-pink-400 hover:bg-pink-500 rounded-full transition-colors">
                          <Send className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements for extra depth */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-pink-400/20 rounded-full blur-lg"></div>
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-purple-400/20 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;