import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Integrations = () => {
  const integrations = [
    {
      name: "Slack",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
      category: "Communication"
    },
    {
      name: "Microsoft Teams",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
      category: "Communication"
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      category: "Development"
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
      category: "Development"
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "Cloud"
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      category: "Cloud"
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      category: "Cloud"
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
      category: "Project Management"
    },
    {
      name: "Salesforce",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg",
      category: "CRM"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      category: "DevOps"
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
      category: "DevOps"
    },
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      category: "CI/CD"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="bg-secondary/80 text-primary border-0 px-4 py-2 text-sm font-medium">
            🔗 200+ Integrations
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
            Connects with your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              favorite tools
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Seamlessly integrate with the tools you already use. 
            Set up takes minutes, not hours.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <Card 
              key={index}
              className="glass hover-lift group cursor-pointer border-0 rounded-2xl p-6 transition-all duration-300 hover:glass-strong"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="fallback hidden w-full h-full bg-gradient-primary rounded-xl items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {integration.category}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 space-y-8">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Don't see your tool?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly adding new integrations. Request yours and we'll prioritize it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="text" 
                placeholder="Enter tool name..."
                className="px-4 py-3 rounded-xl border border-border/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-1 max-w-xs"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-medium hover:shadow-colored-hover transition-all">
                Request Integration
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <span className="text-sm text-muted-foreground">Trusted by teams at:</span>
            <div className="flex items-center space-x-8">
              <div className="h-8 w-20 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-24 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-16 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-28 bg-muted rounded opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;