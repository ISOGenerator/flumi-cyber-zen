import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, Shield, Paperclip, ArrowRight, FileCheck, Users, Gavel } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const questions = [
    "Wat zijn de GDPR compliance vereisten voor mijn bedrijf?",
    "Hoe implementeer ik ISO 27001 in mijn organisatie?", 
    "Kun je mijn data breach response plan controleren?",
    "Welke NIS2-richtlijnen moet ik naleven?",
    "Hoe voer ik een cybersecurity audit uit?",
    "Wat zijn de nieuwe EU AI Act vereisten?",
    "Help me met DORA compliance voor financiële diensten",
    "Analyseer dit cybersecurity document voor risico's"
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

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
          setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? 80 : 50);

    return () => clearTimeout(timer);
  }, [currentText, currentQuestionIndex, isTyping, charIndex, questions]);

  return (
    <section className="pt-20 pb-20 relative overflow-hidden bg-white">
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
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Ontmoet{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Flumi
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Je AI cybersecurity specialist voor Europese regelgeving, document review, compliance audits en meer
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="glass p-4 rounded-2xl hover:shadow-colored transition-all group cursor-pointer">
                <Gavel className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">EU Regelgeving</h3>
                <p className="text-sm text-muted-foreground">GDPR, NIS2, AI Act, DORA</p>
              </div>
              <div className="glass p-4 rounded-2xl hover:shadow-colored transition-all group cursor-pointer">
                <FileCheck className="w-8 h-8 text-cyan mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">Document Review</h3>
                <p className="text-sm text-muted-foreground">Beleid, procedures, contracten</p>
              </div>
              <div className="glass p-4 rounded-2xl hover:shadow-colored transition-all group cursor-pointer">
                <Users className="w-8 h-8 text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">Compliance Audits</h3>
                <p className="text-sm text-muted-foreground">Fictieve audits en assessments</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
                className="text-lg px-8 py-4 rounded-2xl group glass border-primary/20 hover:bg-primary/5"
              >
                Bekijk Assistenten
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Chat Interface Mockup */}
          <div className="relative max-w-3xl w-full mt-16">
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="glass rounded-3xl shadow-large overflow-hidden border border-white/20 backdrop-blur-2xl">
                {/* macOS Window Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-foreground">Flumi - EU Cybersecurity Specialist</div>
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-colored">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
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
                    <input
                      type="text"
                      value={currentText}
                      placeholder="Stel je cybersecurity of compliance vraag..."
                      className="w-full h-16 pl-14 pr-24 text-base glass-strong rounded-2xl shadow-medium text-foreground placeholder:text-muted-foreground border border-white/20"
                      readOnly
                    />
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                      <Shield className="h-6 w-6 text-primary" />
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
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;