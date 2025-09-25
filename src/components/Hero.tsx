import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, Shield, Paperclip, ArrowRight, FileCheck, Users, Gavel } from "lucide-react";
import { useState, useEffect } from "react";
import FlumiAvatar from "@/components/FlumiAvatar";
const Hero = () => {
  const questions = ["Wat zijn de GDPR compliance vereisten voor mijn bedrijf?", "Hoe implementeer ik ISO 27001 in mijn organisatie?", "Kun je mijn data breach response plan controleren?", "Welke NIS2-richtlijnen moet ik naleven?", "Hoe voer ik een cybersecurity audit uit?", "Wat zijn de nieuwe EU AI Act vereisten?", "Help me met DORA compliance voor financiële diensten", "Analyseer dit cybersecurity document voor risico's"];
  const expertTypes = ["consultant", "auditor", "specialist"];
  const [currentText, setCurrentText] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentQuestion.length) {
          setCurrentText(currentQuestion.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsTyping(false), 2500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentQuestion.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setCurrentQuestionIndex(prev => (prev + 1) % questions.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? 80 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentQuestionIndex, isTyping, charIndex, questions]);

  // Effect for rotating expert types
  useEffect(() => {
    const expertTimer = setInterval(() => {
      setCurrentExpertIndex(prev => (prev + 1) % expertTypes.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(expertTimer);
  }, [expertTypes.length]);
  return <section className="pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Hero Content */}
          <div className="text-center space-y-8 max-w-5xl">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-6 py-2 text-sm font-medium rounded-full">
                🛡️ EU Cybersecurity Expert
              </Badge>
              
              <div className="flex flex-col items-center space-y-6">
                <FlumiAvatar size="xl" variant="hero" className="animate-float" />
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Ontmoet{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Flumi
                  </span>
                </h1>
              </div>

              <div className="text-xl lg:text-2xl text-muted-foreground leading-tight">
                Jouw persoonlijke cybersecurity{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent transition-all duration-500 font-semibold">
                  {expertTypes[currentExpertIndex]}
                </span>
              </div>
              
              
            </div>

            {/* Quick Action Cards */}
            
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all text-lg px-8 py-4 group rounded-2xl">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Chat met Flumi
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-2xl group glass border-primary/20 hover:bg-primary/5">
                Bekijk Assistenten
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Chat Interface Mockup */}
          <div className="relative max-w-3xl w-full mt-16">
            {/* Background behind chat interface */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-br from-primary/3 to-accent/2 rounded-3xl blur-xl"></div>
            
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="glass rounded-3xl shadow-large overflow-hidden border border-white/20 backdrop-blur-2xl">
                {/* macOS Window Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-foreground">Flumi - EU Cybersecurity Specialist</div>
                  <FlumiAvatar size="sm" variant="chat" />
                </div>

                {/* Chat Content Area */}
                <div className="p-8 bg-gradient-to-b from-white/5 to-transparent min-h-[200px]">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-foreground mb-3">Hey, ik ben Flumi</h1>
                    <p className="text-muted-foreground text-lg">Hoe kan ik je helpen met cybersecurity en EU compliance?</p>
                  </div>
                </div>

                {/* Bottom Input Area */}
                <div className="p-6 bg-gradient-to-b from-transparent to-white/5">
                  <div className="relative">
                    <input type="text" value={currentText} placeholder="Stel je cybersecurity of compliance vraag..." className="w-full h-16 pl-14 pr-24 text-base glass-strong rounded-2xl shadow-medium text-foreground placeholder:text-muted-foreground border-2" style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))) border-box'
                  }} readOnly />
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                      <FlumiAvatar size="sm" />
                    </div>
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors">
                        <Paperclip className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="h-10 w-10 flex items-center justify-center bg-gradient-primary hover:shadow-colored-hover rounded-xl transition-all shadow-colored">
                        <Send className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-float" style={{
              animationDelay: '2s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;