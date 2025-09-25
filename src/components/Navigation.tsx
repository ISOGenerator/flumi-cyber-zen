import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-black">
              Flumi
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Solutions
            </a>
            <a href="#company" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Company
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Pricing
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-600 hover:text-black text-sm">
              Log in
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-sm px-6">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;