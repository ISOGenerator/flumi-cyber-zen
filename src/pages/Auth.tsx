import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Mail, Lock, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
const signUpSchema = z.object({
  email: z.string().trim().email({
    message: "Voer een geldig e-mailadres in"
  }),
  password: z.string().min(6, {
    message: "Wachtwoord moet minimaal 6 karakters zijn"
  }),
  displayName: z.string().trim().min(1, {
    message: "Naam is verplicht"
  }).max(100, {
    message: "Naam mag maximaal 100 karakters zijn"
  })
});
const signInSchema = z.object({
  email: z.string().trim().email({
    message: "Voer een geldig e-mailadres in"
  }),
  password: z.string().min(1, {
    message: "Wachtwoord is verplicht"
  })
});
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: ""
  });
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSignUp = async () => {
    try {
      const validatedData = signUpSchema.parse(formData);
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      const {
        error
      } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: validatedData.displayName
          }
        }
      });
      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Account bestaat al",
            description: "Dit e-mailadres is al geregistreerd. Probeer in te loggen.",
            variant: "destructive"
          });
        } else if (error.message.includes("rate_limit") || error.message.includes("24 seconds")) {
          toast({
            title: "Te veel pogingen",
            description: "Wacht even voordat je opnieuw probeert te registreren.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Registratie mislukt",
            description: error.message,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Controleer je email!",
          description: "We hebben je een bevestigingslink gestuurd. Klik daarop om je account te activeren en daarna kun je inloggen.",
          duration: 8000
        });
        setIsSignUp(false);
        setFormData({
          email: "",
          password: "",
          displayName: ""
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invoerfout",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSignIn = async () => {
    try {
      const validatedData = signInSchema.parse(formData);
      setLoading(true);
      const {
        error
      } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password
      });
      if (error) {
        if (error.message.includes("Email not confirmed")) {
          toast({
            title: "Email nog niet bevestigd",
            description: "Controleer je inbox en klik op de bevestigingslink voordat je inlogt.",
            variant: "destructive"
          });
        } else if (error.message.includes("Invalid login credentials")) {
          toast({
            title: "Onjuiste gegevens",
            description: "Controleer je e-mailadres en wachtwoord.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Inloggen mislukt",
            description: error.message,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Welkom terug!",
          description: "Je bent succesvol ingelogd."
        });
        navigate("/");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invoerfout",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };
  return <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-colored">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">Polisbuddy</span>
          </Link>
        </div>

        <Card className="glass-strong shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-foreground">
              {isSignUp ? "Account maken" : "Inloggen"}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {isSignUp ? "Maak een account om te beginnen met Flumi" : "Log in op je Flumi account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-sm font-medium text-foreground">
                    Naam
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="displayName" name="displayName" type="text" placeholder="Je volledige naam" value={formData.displayName} onChange={handleInputChange} className="pl-10 bg-background/50 border-border/50 focus:bg-background" required />
                  </div>
                </div>}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mailadres
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" placeholder="je@voorbeeld.nl" value={formData.email} onChange={handleInputChange} className="pl-10 bg-background/50 border-border/50 focus:bg-background" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Wachtwoord
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" name="password" type="password" placeholder={isSignUp ? "Minimaal 6 karakters" : "Je wachtwoord"} value={formData.password} onChange={handleInputChange} className="pl-10 bg-background/50 border-border/50 focus:bg-background" required />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:shadow-colored-hover transition-all" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {isSignUp ? "Account maken" : "Inloggen"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {isSignUp ? "Heb je al een account? Log in" : "Nog geen account? Registreer je"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Auth;