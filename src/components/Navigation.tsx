import { Button } from "@/components/ui/button";
import { Shield, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Uitgelogd",
        description: "Je bent succesvol uitgelogd.",
      });
    } catch (error) {
      toast({
        title: "Fout bij uitloggen",
        description: "Er is iets misgegaan.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-colored">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              Flumi
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors text-sm font-medium ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              Home
            </Link>
            {user ? (
              <Link to="/chat" className={`transition-colors text-sm font-medium ${location.pathname === '/chat' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                Chat
              </Link>
            ) : (
              <button 
                onClick={() => window.location.href = '/auth'}
                className="transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Chat
              </button>
            )}
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Pricing
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{user.user_metadata?.display_name || user.email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={handleSignOut}
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Uitloggen
                </Button>
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:shadow-colored-hover text-sm px-6 shadow-colored transition-all">
                  <Link to="/chat">Chat met Flumi</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
                  <Link to="/auth">Inloggen</Link>
                </Button>
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:shadow-colored-hover text-sm px-6 shadow-colored transition-all">
                  <Link to="/auth">Start nu</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;