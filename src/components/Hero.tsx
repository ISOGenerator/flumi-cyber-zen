import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, Play, CheckCircle, Send, Bot, Clock, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-secondary/80 text-primary border-0 px-4 py-2 text-sm font-medium">
                🤖 AI Cybersecurity Assistent
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Ontmoet{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Flumi
                </span>
                , je AI Cybersecurity Expert
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Krijg directe antwoorden op al je cybersecurity vragen. Van beveiligingsadvies 
                tot threat analysis - Flumi helpt je 24/7.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>24/7 Beschikbaar</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Nederlandse Taal</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>1000+ Vragen Beantwoord</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all text-lg px-8 py-4 group rounded-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Chat met Flumi
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-border/50 hover:glass-strong text-lg px-8 py-4 rounded-2xl group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Bekijk Demo
              </Button>
            </div>
          </div>
          
          {/* Right Chat Interface Mockup */}
          <div className="relative">
            {/* Suggestion Pills */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap gap-2 justify-center">
              <div className="glass px-4 py-2 rounded-full text-sm text-muted-foreground hover:glass-strong transition-all cursor-pointer hover-lift">
                Hoe bescherm ik mijn bedrijf tegen ransomware?
              </div>
            </div>
            
            <div className="absolute -top-20 left-4 z-20" style={{ animationDelay: '1s' }}>
              <div className="glass px-4 py-2 rounded-full text-sm text-muted-foreground hover:glass-strong transition-all cursor-pointer hover-lift animate-float">
                Wat zijn de laatste cybersecurity trends?
              </div>
            </div>

            <div className="absolute -top-20 right-4 z-20" style={{ animationDelay: '2s' }}>
              <div className="glass px-4 py-2 rounded-full text-sm text-muted-foreground hover:glass-strong transition-all cursor-pointer hover-lift animate-float">
                Help me met een incident response plan
              </div>
            </div>

            {/* Main Chat Interface */}
            <div className="glass-strong rounded-3xl shadow-large overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-dark p-4 border-b border-border/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Flumi</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white/60 text-xs">Online • Cybersecurity Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="bg-background p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
                {/* Welcome Message */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass-strong rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm">
                      👋 Hallo! Ik ben Flumi, je AI cybersecurity expert. Ik help je graag met al je beveiligingsvragen!
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-gradient-primary rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-sm text-white">
                      Wat zijn de belangrijkste cybersecurity trends van 2024?
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium">U</span>
                  </div>
                </div>

                {/* Flumi Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass-strong rounded-2xl rounded-tl-sm p-4 max-w-md">
                    <p className="text-sm mb-2">
                      Uitstekende vraag! De belangrijkste cybersecurity trends van 2024 zijn:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• AI-gedreven threat detection</li>
                      <li>• Zero Trust architectuur</li>
                      <li>• Cloud security posture management</li>
                      <li>• Supply chain beveiliging</li>
                    </ul>
                    <div className="flex items-center space-x-1 mt-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>Nu</span>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass-strong rounded-2xl rounded-tl-sm p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border/20 bg-background/50 backdrop-blur-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Vraag Flumi over cybersecurity..."
                    className="w-full bg-background/80 border border-border rounded-2xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    disabled
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center hover:shadow-colored-hover transition-all group">
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
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