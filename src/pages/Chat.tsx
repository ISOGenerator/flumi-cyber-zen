import { useState } from "react";
import { 
  MessageSquare, 
  Users, 
  Settings, 
  User, 
  Plus, 
  Search, 
  Shield, 
  Lightbulb, 
  FileText, 
  Cog,
  ChevronDown,
  Send,
  Mic,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface AgentCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  accent: string;
}

const agentCards: AgentCard[] = [
  {
    id: "auditor",
    title: "ISO 27001 Auditor",
    description: "Hulp bij audit voorbereiding en compliance verificatie voor ISO 27001 certificering.",
    icon: Shield,
    accent: "bg-blue-50 border-blue-200"
  },
  {
    id: "consultant",
    title: "Security Consultant", 
    description: "Strategisch advies voor cybersecurity implementatie en beleid ontwikkeling.",
    icon: Lightbulb,
    accent: "bg-purple-50 border-purple-200"
  },
  {
    id: "standards",
    title: "Standards Specialist",
    description: "Expertise in cybersecurity standaarden zoals ISO 27001, NIS2 en GDPR compliance.",
    icon: FileText,
    accent: "bg-green-50 border-green-200"
  },
  {
    id: "implementer",
    title: "Security Implementer",
    description: "Praktische implementatie van security controls en technische beveiligingsmaatregelen.",
    icon: Cog,
    accent: "bg-orange-50 border-orange-200"
  }
];

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgent(agentId);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className={`${sidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full justify-start hover:bg-gray-50"
          >
            <Menu className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Menu</span>}
          </Button>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start hover:bg-gray-50 border-gray-200"
          >
            <Plus className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">New Chat</span>}
          </Button>
        </div>

        {/* Navigation Icons */}
        <nav className="flex-1 px-4 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start hover:bg-gray-50"
          >
            <MessageSquare className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Chat History</span>}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start hover:bg-gray-50"
          >
            <Users className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Teams</span>}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start hover:bg-gray-50"
          >
            <Settings className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Settings</span>}
          </Button>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start hover:bg-gray-50"
          >
            <User className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Profile</span>}
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">Flumi</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 pr-12 bg-white border-gray-200 focus:border-gray-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘K</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Welcome Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Hey, I'm Flumi.</h1>
              <p className="text-lg text-gray-600">How can I help you today?</p>
            </div>

            {/* AI Agent Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-12">
              {agentCards.map((agent) => {
                const IconComponent = agent.icon;
                return (
                  <Card
                    key={agent.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md border ${agent.accent} ${
                      selectedAgent === agent.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <IconComponent className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{agent.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{agent.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom Input Area */}
          <div className="border-t border-gray-200 bg-white px-6 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Input
                  placeholder="How can I help you today"
                  className="pr-20 py-3 text-base bg-white border-gray-200 focus:border-gray-300 rounded-xl"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <Mic className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    size="sm"
                    className="h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;