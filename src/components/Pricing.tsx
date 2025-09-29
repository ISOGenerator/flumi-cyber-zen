import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "€29",
      period: "/month",
      description: "Perfect for small teams getting started with cybersecurity",
      icon: Zap,
      features: [
        "Up to 5 team members",
        "Basic security scanning",
        "Standard support",
        "Monthly reports",
        "Email notifications",
        "Basic integrations"
      ],
      highlighted: false,
      badge: null
    },
    {
      name: "Professional",
      price: "€79",
      period: "/month",
      description: "Advanced security features for growing businesses",
      icon: Star,
      features: [
        "Up to 25 team members",
        "Advanced threat detection",
        "Priority support",
        "Real-time monitoring",
        "Custom reports",
        "API access",
        "GDPR compliance tools",
        "Advanced integrations"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "€199",
      period: "/month",
      description: "Complete security solution for large organizations",
      icon: Crown,
      features: [
        "Unlimited team members",
        "AI-powered security",
        "24/7 dedicated support",
        "Custom dashboards",
        "White-label solutions",
        "SSO integration",
        "Compliance automation",
        "Custom integrations",
        "On-premise deployment"
      ],
      highlighted: false,
      badge: "Enterprise"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-20 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-cyan/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="bg-secondary/80 text-primary border-0 px-4 py-2 text-sm font-medium">
            💰 Flexible Pricing
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight">
            Choose your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              security plan
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no vendor lock-in. 
            Cancel anytime with full data export.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className="relative">
                {/* Background behind pricing cards */}
                <div className={`absolute inset-0 -m-4 rounded-3xl blur-xl opacity-50 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-primary/5 to-accent/4' 
                    : index % 2 === 0 ? 'bg-primary/3' : 'bg-accent/3'
                }`}></div>
                
                <Card 
                  className={`relative overflow-hidden border-0 hover-lift z-10 ${
                    plan.highlighted 
                      ? 'glass-strong shadow-glow scale-105' 
                      : 'glass shadow-medium'
                  } rounded-3xl`}
                >
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
                )}
                
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white border-0 px-4 py-1 shadow-colored">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.highlighted 
                        ? 'bg-gradient-primary shadow-colored' 
                        : 'bg-gradient-secondary'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mt-6">
                    <span className="text-5xl font-semibold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <Button 
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? 'bg-gradient-primary hover:shadow-colored-hover shadow-colored'
                        : 'bg-gradient-secondary hover:shadow-medium'
                    } text-white border-0 rounded-xl py-3 text-base font-medium transition-all`}
                  >
                    {plan.highlighted ? 'Start Free Trial' : 'Get Started'}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground">
            Need a custom solution? We'll help you build the perfect security package.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-border/50 hover:glass-strong rounded-xl px-8 py-3"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;