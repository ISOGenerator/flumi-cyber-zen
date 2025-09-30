import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, Shield, Paperclip, ArrowRight, FileCheck, Users, Gavel } from "lucide-react";
import { useState, useEffect } from "react";
import PolissBuddyAvatar from "@/components/FlumiAvatar";
const Hero = () => {
  const questions = ["Wat is de dekking van mijn autoverzekering?", "Kun je mijn polisvoorwaarden uitleggen?", "Hoe kan ik mijn premie verlagen?", "Welke verzekeringen heb ik nodig voor mijn huis?", "Help me met een schademelding opstellen", "Vergelijk verschillende zorgverzekeringen voor mij", "Wat moet ik weten over aansprakelijkheidsverzekering?", "Analyseer deze polisvoorwaarden voor verborgen clausules"];
  const expertTypes = ["adviseur", "expert", "specialist"];
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
    return <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Hero Content */}
          <div className="text-center space-y-8 max-w-5xl">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 backdrop-blur-sm text-primary border border-primary/20 px-6 py-2 text-sm font-medium rounded-full shadow-sm">
                🛡️ Verzekeringsexpert
              </Badge>
              
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
                <h1 className="text-5xl lg:text-7xl font-semibold leading-tight text-center lg:text-left text-gray-900">
                  Maak kennis met{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    PolissBuddy
                  </span>
                </h1>
                
                
              </div>

              <div className="text-xl lg:text-2xl text-gray-600 leading-tight">
                Jouw persoonlijke verzekering{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-500 font-semibold">
                  {expertTypes[currentExpertIndex]}
                </span>
              </div>
              
              
            </div>

            {/* Quick Action Cards */}
            
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8 py-4 group rounded-xl">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Chat met PolissBuddy
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl group bg-white/40 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/30 hover:bg-white/60 text-gray-700">
                Bekijk Assistenten
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Chat Interface Mockup */}
          <div className="relative max-w-3xl w-full mt-16">
            {/* Background behind chat interface */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl"></div>
            
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/30 hover:shadow-2xl transition-all duration-300">
                {/* macOS Window Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/20 bg-white/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">PolissBuddy - Verzekeringsspecialist</div>
                  <PolissBuddyAvatar size="sm" variant="chat" />
                </div>

                {/* Chat Content Area */}
                <div className="p-8 bg-gradient-to-b from-white/10 to-transparent min-h-[200px]">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-3">Hey, ik ben PolissBuddy</h1>
                    <p className="text-gray-600 text-lg">Hoe kan ik je helpen met verzekeringen en polisadvies?</p>
                  </div>
                </div>

                {/* Bottom Input Area */}
                <div className="p-6 bg-gradient-to-b from-transparent to-white/10">
                  <div className="relative">
                    <input type="text" value={currentText} placeholder="Stel je verzekering of polis vraag..." className="w-full h-16 pl-14 pr-24 text-base bg-gray-50/50 rounded-2xl shadow-sm text-gray-900 placeholder:text-gray-400 border-2 border-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary/20 backdrop-blur-sm" style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #079af7, #4fc3f7) border-box'
                  }} readOnly />
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                      <PolissBuddyAvatar size="sm" />
                    </div>
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors">
                        
                      </button>
                      <button className="h-10 w-10 flex items-center justify-center bg-gradient-primary hover:opacity-90 rounded-xl transition-all shadow-lg">
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