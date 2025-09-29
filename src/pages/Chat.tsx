import { useState, useRef, useEffect } from "react";
import { MessageSquare, Users, Settings, User, Plus, Search, Shield, Lightbulb, FileText, Cog, ChevronDown, Send, Mic, Menu, Slash, Folder, Paperclip, ChevronRight, ArrowLeft, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useAgents, Agent } from "@/hooks/use-agents";
import { supabase } from "@/integrations/supabase/client";

// Icon mapping for database icons to React components
const iconMap = {
  Shield: Shield,
  Lightbulb: Lightbulb,
  FileText: FileText,
  Cog: Cog
};

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Typewriter hook
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    if (!text) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return {
    displayText,
    isComplete
  };
};

// Message component with typewriter for AI messages
const MessageBubble = ({ message, isTyping, onTypingComplete }: { 
  message: Message; 
  isTyping: boolean; 
  onTypingComplete?: () => void;
}) => {
  const { displayText, isComplete } = useTypewriter(
    isTyping && message.role === 'assistant' ? message.content : '', 
    30
  );

  useEffect(() => {
    if (isComplete && onTypingComplete) {
      onTypingComplete();
    }
  }, [isComplete, onTypingComplete]);

  const content = isTyping && message.role === 'assistant' ? displayText : message.content;

  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-3xl px-4 py-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="whitespace-pre-wrap">
          {content}
          {isTyping && message.role === 'assistant' && !isComplete && (
            <span className="animate-pulse ml-1">|</span>
          )}
        </div>
        <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const { user } = useAuth();
  const { agents, loading } = useAgents();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [recentChats] = useState([{
    id: '1',
    title: 'ISO 27001 implementatie hulp',
    agent: 'Auditor',
    timestamp: '10 min geleden'
  }, {
    id: '2',
    title: 'GDPR compliance vraag',
    agent: 'Standards Specialist',
    timestamp: '1 uur geleden'
  }, {
    id: '3',
    title: 'Security beleid opstellen',
    agent: 'Consultant',
    timestamp: '2 uur geleden'
  }, {
    id: '4',
    title: 'Firewall configuratie',
    agent: 'Implementer',
    timestamp: 'Gisteren'
  }]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const selectedAgentData = agents.find(agent => agent.type === selectedAgent);

  // Typewriter effect for the title
  const titleText = selectedAgent && selectedAgentData ? `Hey, ik ben Flumi jouw ${selectedAgentData.title}` : "Hey, I'm Flumi.";
  const { displayText: displayTitle } = useTypewriter(titleText, 80);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createNewConversation = async (agentId: string) => {
    if (!user) return null;
    
    try {
      const agent = agents.find(a => a.type === agentId);
      const title = `Chat met ${agent?.title || 'Agent'}`;
      
      const { data, error } = await supabase
        .from('conversations')
        .insert({
          user_id: user.id,
          agent_id: agentId,
          title
        })
        .select()
        .single();

      if (error) throw error;
      return data.id;
    } catch (error) {
      console.error('Error creating conversation:', error);
      toast({
        title: "Fout",
        description: "Kon nieuw gesprek niet aanmaken.",
        variant: "destructive"
      });
      return null;
    }
  };

  const saveMessage = async (conversationId: string, role: 'user' | 'assistant', content: string) => {
    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          role,
          content
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const handleAgentSelect = async (agentType: string) => {
    setSelectedAgent(agentType);
    setMessages([]);
    
    // Create new conversation when selecting an agent
    const conversationId = await createNewConversation(agentType);
    setCurrentConversationId(conversationId);
  };

  const handleNewChat = () => {
    setSelectedAgent(null);
    setCurrentConversationId(null);
    setMessages([]);
    setInputMessage('');
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedAgent || !user) return;
    
    // Create conversation if doesn't exist
    let conversationId = currentConversationId;
    if (!conversationId) {
      conversationId = await createNewConversation(selectedAgent);
      if (!conversationId) return;
      setCurrentConversationId(conversationId);
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Save user message to database
    await saveMessage(conversationId, 'user', userMessage.content);
    
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('chat-with-agent', {
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
      setTypingMessageId(aiMessage.id);
      
      // Save AI message to database
      await saveMessage(conversationId, 'assistant', data.response);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het versturen van je bericht.",
        variant: "destructive"
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

  if (loading) {
    return (
      <div className="flex h-screen bg-white items-center justify-center">
        <div className="text-lg text-gray-600">Agents laden...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className={`${sidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 bg-pink-50/40 backdrop-blur-md border-r border-pink-200/30 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full justify-start hover:bg-gray-50">
            <Menu className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Menu</span>}
          </Button>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <Button variant="outline" size="sm" onClick={handleNewChat} className="w-full justify-start hover:bg-gray-50 border-gray-200">
            <Plus className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">New Chat</span>}
          </Button>
        </div>

        {/* Navigation Icons */}
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-gray-50">
            <MessageSquare className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Chat History</span>}
          </Button>

          {/* Recent Chats */}
          {sidebarOpen && (
            <div className="mt-4 space-y-1">
              <p className="text-xs font-medium text-gray-500 px-2 mb-2">Recent Chats</p>
              {recentChats.map(chat => (
                <button key={chat.id} className="w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="text-sm text-gray-900 truncate">{chat.title}</div>
                  <div className="text-xs text-gray-500 flex items-center justify-between mt-1">
                    <span>{chat.agent}</span>
                    <span>{chat.timestamp}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-gray-50">
            <Users className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Teams</span>}
          </Button>

          <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-gray-50">
            <Settings className="h-4 w-4 text-gray-600" />
            {sidebarOpen && <span className="ml-2 text-gray-700">Settings</span>}
          </Button>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-pink-200/30">
          <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-gray-50">
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
              <Input placeholder="Search..." className="pl-10 pr-12 bg-white border-gray-200 focus:border-gray-300" />
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
                <h1 className="text-3xl font-semibold text-gray-900 mb-2 min-h-[2.5rem] flex items-center justify-center">
                  {selectedAgent && selectedAgentData ? (
                    <span>
                      {displayTitle.includes('jouw') ? (
                        <>
                          {displayTitle.substring(0, displayTitle.indexOf('jouw') + 4)}{" "}
                          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            {displayTitle.substring(displayTitle.indexOf('jouw') + 5)}
                          </span>
                        </>
                      ) : displayTitle}
                      <span className="animate-pulse ml-1">|</span>
                    </span>
                  ) : (
                    <span>
                      {displayTitle}
                      <span className="animate-pulse ml-1">|</span>
                    </span>
                  )}
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
                    {agents.map(agent => {
                      const IconComponent = iconMap[agent.icon as keyof typeof iconMap] || Cog;
                      return (
                        <Card 
                          key={agent.id} 
                          className="cursor-pointer transition-all duration-200 hover:shadow-lg bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/40 rounded-lg" 
                          onClick={() => handleAgentSelect(agent.type)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`w-10 h-10 rounded-full ${agent.icon_bg} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className={`h-5 w-5 ${agent.icon_color}`} />
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
                </>
              )}

              {/* Chat Messages Area - Always present but only shows messages when there are any */}
              {selectedAgent && messages.length > 0 && (
                <div className="space-y-4 mb-8">
                  {messages.map(message => (
                    <MessageBubble 
                      key={message.id} 
                      message={message} 
                      isTyping={typingMessageId === message.id}
                      onTypingComplete={() => setTypingMessageId(null)}
                    />
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 max-w-3xl px-4 py-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{
                              animationDelay: '0.1s'
                            }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{
                              animationDelay: '0.2s'
                            }}></div>
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
                  onChange={e => setInputMessage(e.target.value)} 
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