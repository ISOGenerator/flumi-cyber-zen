import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-colored">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              Flumi
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Solutions
            </a>
            <a href="#company" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Company
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Pricing
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
              Log in
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-colored-hover text-sm px-6 shadow-colored transition-all">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;