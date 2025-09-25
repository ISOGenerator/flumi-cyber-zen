import { useState, useRef, useEffect } from "react";
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
  Menu,
  Slash,
  Folder,
  Paperclip,
  ChevronRight,
  ArrowLeft,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AgentCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  iconBg: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const agentCards: AgentCard[] = [
  {
    id: "auditor",
    title: "ISO 27001 Auditor",
    description: "Hulp bij audit voorbereiding en compliance verificatie voor ISO 27001 certificering.",
    icon: Shield,
    iconColor: "text-blue-600/60",
    iconBg: "bg-blue-100/40"
  },
  {
    id: "consultant",
    title: "Security Consultant", 
    description: "Strategisch advies voor cybersecurity implementatie en beleid ontwikkeling.",
    icon: Lightbulb,
    iconColor: "text-red-600/60",
    iconBg: "bg-red-100/40"
  },
  {
    id: "standards",
    title: "Standards Specialist",
    description: "Expertise in cybersecurity standaarden zoals ISO 27001, NIS2 en GDPR compliance.",
    icon: FileText,
    iconColor: "text-purple-600/60",
    iconBg: "bg-purple-100/40"
  },
  {
    id: "implementer",
    title: "Security Implementer",
    description: "Praktische implementatie van security controls en technische beveiligingsmaatregelen.",
    icon: Cog,
    iconColor: "text-orange-600/60",
    iconBg: "bg-orange-100/40"
  }
];

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recentChats] = useState([
    { id: '1', title: 'ISO 27001 implementatie hulp', agent: 'Auditor', timestamp: '10 min geleden' },
    { id: '2', title: 'GDPR compliance vraag', agent: 'Standards Specialist', timestamp: '1 uur geleden' },
    { id: '3', title: 'Security beleid opstellen', agent: 'Consultant', timestamp: '2 uur geleden' },
    { id: '4', title: 'Firewall configuratie', agent: 'Implementer', timestamp: 'Gisteren' },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgent(agentId);
    setMessages([]);
  };

  const handleNewChat = () => {
    setSelectedAgent(null);
    setMessages([]);
    setInputMessage('');
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedAgent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-agent', {
        body: {
          message: userMessage.content,
          agentId: selectedAgent,
          conversationHistory: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }
      });

      if (error) throw error;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het versturen van je bericht.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectedAgentData = agentCards.find(agent => agent.id === selectedAgent);

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className={`${sidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 bg-pink-50/40 backdrop-blur-md border-r border-pink-200/30 flex flex-col`}>
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
            onClick={handleNewChat}
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

          {/* Recent Chats */}
          {sidebarOpen && (
            <div className="mt-4 space-y-1">
              <p className="text-xs font-medium text-gray-500 px-2 mb-2">Recent Chats</p>
              {recentChats.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="text-sm text-gray-900 truncate">{chat.title}</div>
                  <div className="text-xs text-gray-500 flex items-center justify-between mt-1">
                    <span>{chat.agent}</span>
                    <span>{chat.timestamp}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

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
        <div className="p-4 border-t border-pink-200/30">
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
      <div className="flex-1 flex flex-col bg-gradient-to-b from-pink-50 to-white">
        {/* Header */}
        <header className="bg-pink-50 px-6 py-4">
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
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Welcome Area */}
          <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                  {selectedAgent && selectedAgentData 
                    ? `Hey, ik ben Flumi jouw ${selectedAgentData.title}` 
                    : "Hey, I'm Flumi."
                  }
                </h1>
                <p className="text-lg text-gray-600">How can I help you today?</p>
              </div>

              {!selectedAgent && (
                <>
                  {/* Agent Cards Section Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Your AI agents</h2>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      All agents
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>

                  {/* AI Agent Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {agentCards.map((agent) => {
                      const IconComponent = agent.icon;
                      return (
                        <Card
                          key={agent.id}
                          className="cursor-pointer transition-all duration-200 hover:shadow-lg bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/40 rounded-lg"
                          onClick={() => handleAgentSelect(agent.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`w-10 h-10 rounded-full ${agent.iconBg} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className={`h-5 w-5 ${agent.iconColor}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 mb-2 text-base">{agent.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{agent.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-amber-800">Belangrijk</h3>
                        <p className="text-sm text-amber-700 mt-1">
                          Controleer altijd de informatie die je van AI agents krijgt. Dit zijn suggesties en geen definitieve adviezen. 
                          Raadpleeg altijd officiële bronnen en experts voor belangrijke beslissingen.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Chat Messages Area - Always present but only shows messages when there are any */}
              {selectedAgent && messages.length > 0 && (
                <div className="space-y-4 mb-8">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-3xl px-4 py-3 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        <div
                          className={`text-xs mt-2 ${
                            message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 max-w-3xl px-4 py-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          <span className="text-sm text-gray-500">Aan het typen...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </div>

          {/* Bottom Input Area - Always present */}
          <div className="bg-white px-6 pb-6 pt-4">
            <div className="max-w-4xl mx-auto">
              {/* Input Field */}
              <div className="relative mb-3">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <Slash className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={selectedAgent ? "Typ je vraag..." : "Selecteer eerst een AI agent om te beginnen"}
                  disabled={!selectedAgent || isLoading}
                  className="w-full h-16 pl-10 pr-24 text-base bg-gray-50/50 border-2 border-transparent rounded-xl shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-pink-200 placeholder:text-gray-400 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ec4899, #8b5cf6) border-box'
                  }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="h-6 w-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                    <Mic className="h-4 w-4 text-gray-400" />
                  </button>
                  <button 
                    onClick={sendMessage}
                    disabled={!selectedAgent || !inputMessage.trim() || isLoading}
                    className="h-8 w-8 flex items-center justify-center bg-pink-400 hover:bg-pink-500 rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1.5 text-gray-500">
                  <Folder className="h-4 w-4" />
                  <span>My Prompts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center justify-center hover:text-gray-700 transition-colors">
                    <Menu className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="flex items-center justify-center hover:text-gray-700 transition-colors">
                    <Paperclip className="h-4 w-4 text-gray-400" />
                  </button>
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