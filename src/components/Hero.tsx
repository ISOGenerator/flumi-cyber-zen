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
          <div className="relative max-w-4xl w-full">
            {/* Chat Interface Container with 3D perspective */}
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-border/20">
                
                {/* Sidebar (partially visible) */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-sidebar-background border-r border-border/20 z-10">
                  <div className="p-3 border-b border-border/20">
                    <div className="text-xs font-medium text-sidebar-foreground/60 mb-2">Select AI Model</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 bg-sidebar-accent rounded-lg">
                        <ToggleRight className="w-4 h-4 text-primary" />
                        <div className="text-xs font-medium text-sidebar-foreground truncate">Flumi 2.5</div>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-sidebar-accent/50 rounded-lg cursor-pointer">
                        <ToggleLeft className="w-4 h-4 text-muted-foreground" />
                        <div className="text-xs text-muted-foreground truncate">ChatGPT 4o</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Chat Window */}
                <div className="ml-16">
                  {/* macOS Window Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border/20 bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">New Chat</div>
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Chat Content Area */}
                  <div className="p-6 space-y-4 min-h-[400px] bg-white">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                        <p className="text-sm">
                          Hoe bescherm ik mijn bedrijf tegen phishing?
                        </p>
                      </div>
                    </div>

                    {/* Flumi Response */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                        <p className="text-sm text-foreground mb-2">
                          Uitstekende vraag! Hier zijn de belangrijkste stappen:
                        </p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• Train je medewerkers regelmatig</div>
                          <div>• Implementeer email filtering</div>
                          <div>• Gebruik multi-factor authenticatie</div>
                          <div>• Houd software up-to-date</div>
                        </div>
                        <p className="text-sm text-foreground mt-2">
                          Wil je dat ik dieper inga op een van deze punten?
                        </p>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Input Area */}
                  <div className="p-4 border-t border-border/20 bg-white">
                    <div className="relative bg-muted/30 rounded-2xl border border-border/20">
                      <div className="flex items-center">
                        <button className="p-3 hover:bg-muted/50 rounded-l-2xl transition-colors">
                          <Paperclip className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <input
                          type="text"
                          placeholder="Vraag Flumi over cybersecurity..."
                          className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                          disabled
                        />
                        <button className="p-3 hover:bg-primary/10 rounded-r-2xl transition-colors group">
                          <Send className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements for extra depth */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-secondary/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;