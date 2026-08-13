"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Bot, Sparkles, Send, PanelLeftClose, PanelLeftOpen, Clock, Settings, Search, Edit3, Plus, MessageSquare as MessageSquareIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const promptSuggestions = [
  "Explain quantum computing in simple terms",
  "Create a 7-day study plan for React",
  "Summarize the concept of gradient descent",
  "Generate flashcards for UI/UX principles"
];

const history = [
  { id: 1, title: "Next.js App Router Architecture", time: "2 hours ago" },
  { id: 2, title: "Debugging React useEffect", time: "Yesterday" },
  { id: 3, title: "Color theory for dashboards", time: "3 days ago" },
];

export default function AiAssistantPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e?: React.FormEvent, textOverride?: string) => {
    if (e) e.preventDefault();
    const text = textOverride || msg;
    if (!text.trim()) return;
    
    setChat(prev => [...prev, { role: 'user', text }]);
    setMsg("");
    setIsTyping(true);
    
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: "I can certainly help you with that. Here is a detailed response explaining the concept..." }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <div className={`shrink-0 border-r border-border/40 bg-card/50 flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-0 overflow-hidden'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-border/40 shrink-0">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <PanelLeftClose className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-4 border-b border-border/40 shrink-0">
          <Button className="w-full gap-2 justify-start" variant="secondary" onClick={() => setChat([])}>
            <Edit3 className="w-4 h-4" /> New Chat
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground mb-2 mt-2">Recent</div>
          {history.map((h) => (
            <div key={h.id} className="px-3 py-2.5 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors mb-1 group flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <MessageSquare className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm truncate">{h.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border/40 flex items-center gap-3 shrink-0 cursor-pointer hover:bg-muted/50 transition-colors">
          <Avatar className="w-8 h-8"><AvatarImage src="https://i.pravatar.cc/150?u=u_1" /></Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate">Alex Rivera</p>
            <p className="text-xs text-muted-foreground">Pro Plan</p>
          </div>
          <Settings className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <header className="h-16 shrink-0 flex items-center px-4 border-b border-border/40 bg-card/50 backdrop-blur-md absolute top-0 left-0 right-0 z-10">
          {!sidebarOpen && (
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="mr-4">
              <PanelLeftOpen className="w-4 h-4" />
            </Button>
          )}
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            Aura AI
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pt-16 pb-32">
          {chat.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-6 max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-8 ring-primary/5">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-3">How can I help you learn today?</h2>
              <p className="text-muted-foreground mb-12">I can explain complex topics, create study plans, test your knowledge, and act as your personal tutor.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 w-full">
                {promptSuggestions.map((prompt, i) => (
                  <div 
                    key={i} 
                    onClick={() => handleSend(undefined, prompt)}
                    className="p-4 border border-border/40 rounded-xl bg-card hover:bg-muted/50 hover:border-primary/50 cursor-pointer transition-all text-left text-sm text-muted-foreground hover:text-foreground"
                  >
                    &quot;{prompt}&quot;
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto w-full p-6 space-y-8">
              {chat.map((m, i) => (
                <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : ''}`}>
                  {m.role === 'ai' && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] text-[15px] leading-relaxed ${m.role === 'user' ? 'bg-primary text-primary-foreground px-5 py-3 rounded-2xl rounded-tr-sm' : 'pt-2 text-foreground'}`}>
                    {m.text}
                  </div>
                  {m.role === 'user' && (
                    <Avatar className="w-8 h-8 mt-1 shrink-0"><AvatarImage src="https://i.pravatar.cc/150?u=u_1" /></Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="pt-3 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{animationDelay: "150ms"}}></span>
                    <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{animationDelay: "300ms"}}></span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
          <div className="max-w-3xl mx-auto relative pointer-events-auto">
            <form onSubmit={(e) => handleSend(e)}>
              <div className="relative flex items-center bg-card/80 backdrop-blur-xl border border-border/60 shadow-xl rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
                <Button type="button" variant="ghost" size="icon" className="absolute left-2 text-muted-foreground hover:text-foreground">
                  <Plus className="w-5 h-5" />
                </Button>
                <Input 
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  placeholder="Message Aura AI..." 
                  className="w-full h-14 pl-12 pr-14 bg-transparent border-none focus-visible:ring-0 text-base shadow-none"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!msg.trim()}
                  className={`absolute right-2 h-10 w-10 rounded-xl transition-all ${msg.trim() ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground'}`}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-center mt-3">
                <p className="text-xs text-muted-foreground">Aura AI can make mistakes. Consider verifying important information.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const MessageSquare = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
