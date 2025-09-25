import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Play, CheckCircle, Zap, Users, BarChart3 } from "lucide-react";

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
                🚀 AI-Powered Security Platform
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Cybersecurity{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  made simple
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Protect your business with AI-powered security that adapts, learns, and responds 
                in real-time. No expertise required.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>24/7 Monitoring</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all text-lg px-8 py-4 group rounded-2xl"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-border/50 hover:glass-strong text-lg px-8 py-4 rounded-2xl group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right Dashboard Mockup */}
          <div className="relative">
            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 z-20">
              <div className="glass p-4 rounded-2xl hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Threats Blocked</div>
                    <div className="text-2xl font-bold text-primary">2,547</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 z-20" style={{ animationDelay: '2s' }}>
              <div className="glass p-4 rounded-2xl hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Protected Users</div>
                    <div className="text-2xl font-bold text-cyan">1,247</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 z-20" style={{ animationDelay: '4s' }}>
              <div className="glass p-4 rounded-2xl hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Risk Score</div>
                    <div className="text-2xl font-bold text-accent">Low</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard */}
            <div className="glass-strong rounded-3xl shadow-large overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-dark p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">Flumi Security Center</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-white/80 text-sm">Security Score</span>
                    </div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-green-400 text-xs">↑ 5% this month</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-cyan" />
                      <span className="text-white/80 text-sm">Threats Blocked</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1,247</div>
                    <div className="text-green-400 text-xs">↓ 12% from last week</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-white/80 text-sm">Active Users</span>
                    </div>
                    <div className="text-2xl font-bold text-white">847</div>
                    <div className="text-green-400 text-xs">↑ 23 new today</div>
                  </div>
                </div>

                {/* Main Chart Area */}
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium">Real-time Security Overview</h3>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-white/60 text-xs">Live</span>
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="h-40 bg-gradient-to-r from-primary/20 to-cyan/20 rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      {[30, 45, 25, 60, 40, 70, 55, 80, 35, 90, 65, 75, 85, 50, 95].map((height, i) => (
                        <div 
                          key={i} 
                          className="bg-gradient-primary rounded-sm w-3" 
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${i * 100}ms`,
                            animation: 'fade-in-up 0.6s ease-out forwards'
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;