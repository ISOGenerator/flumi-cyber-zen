import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-secondary/80 text-primary border-0 px-4 py-2 text-sm font-medium">
                🚀 Dashboard 2.0
              </Badge>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                One dashboard.{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Infinite possibilities.
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Monitor, analyze, and protect your entire infrastructure from a single, 
                AI-powered command center that adapts to your workflow.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Real-time threat detection and response",
                "AI-powered compliance automation",
                "Unified security posture management",
                "Advanced analytics and reporting"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:shadow-colored-hover shadow-colored transition-all group">
              Explore Dashboard
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            {/* Floating Stats Cards */}
            <div className="absolute -top-8 -left-8 z-20">
              <Card className="glass p-4 hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Security Score</div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute -top-4 -right-4 z-20" style={{ animationDelay: '2s' }}>
              <Card className="glass p-4 hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Threats Blocked</div>
                    <div className="text-2xl font-bold text-cyan">1,247</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute -bottom-6 -left-4 z-20" style={{ animationDelay: '4s' }}>
              <Card className="glass p-4 hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                    <div className="text-2xl font-bold text-accent">847</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Dashboard */}
            <Card className="glass-strong shadow-large overflow-hidden rounded-3xl">
              <div className="bg-gradient-dark p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">Flumi Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-white/80 text-sm">Incidents</span>
                      </div>
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-green-400 text-xs">↓ 12% from last week</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-cyan" />
                        <span className="text-white/80 text-sm">Compliance</span>
                      </div>
                      <div className="text-2xl font-bold text-white">94%</div>
                      <div className="text-green-400 text-xs">↑ 3% from last month</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-white/80 text-sm">Response</span>
                      </div>
                      <div className="text-2xl font-bold text-white">1.2s</div>
                      <div className="text-green-400 text-xs">↓ 0.3s faster</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-white font-medium mb-4">Security Trends</h3>
                    <div className="h-32 bg-gradient-to-r from-primary/20 to-cyan/20 rounded-xl relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent rounded-xl"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        {[30, 45, 25, 60, 40, 70, 55, 80, 35, 90, 65, 75].map((height, i) => (
                          <div 
                            key={i} 
                            className="bg-gradient-primary rounded-sm w-4" 
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;