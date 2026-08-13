"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MOCK_COURSES } from "@/data/mock";
import { 
  ArrowLeft, CheckCircle, PlayCircle, Lock, 
  Menu, Bot, Send, Search, FileText, Download,
  ThumbsUp, MessageSquare, CornerDownRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LessonPlayerPage({ params }: { params: { courseId: string, lessonId: string } }) {
  const course = MOCK_COURSES.find(c => c.id === params.courseId) || MOCK_COURSES[0];
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(true);
  const [chat, setChat] = useState<{role: 'user'|'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I\'m your AI teaching assistant for this lesson. How can I help you today?' }
  ]);
  const [msg, setMsg] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat([...chat, { role: 'user', text: msg }]);
    setMsg("");
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: "That's a great question! Self-attention mechanisms allow the model to weigh the importance of different words in a sequence when processing a specific word. Would you like me to explain with an example?" }]);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Topbar */}
      <header className="h-16 shrink-0 flex items-center justify-between px-4 border-b border-border/40 bg-card z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
          <div className="h-6 w-px bg-border"></div>
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block"></div>
          <span className="font-semibold text-sm hidden sm:block line-clamp-1">{course.title}</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm font-medium">35% Complete</span>
            <Progress value={35} className="w-32 h-2" />
          </div>
          <Button variant={aiOpen ? "secondary" : "ghost"} size="sm" onClick={() => setAiOpen(!aiOpen)} className="gap-2 rounded-full">
            <Bot className="w-4 h-4" /> <span className="hidden sm:inline">AI Assistant</span>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar - Curriculum */}
        <div className={`w-80 shrink-0 border-r border-border/40 bg-card/50 flex flex-col transition-all duration-300 absolute md:relative z-20 h-full ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}`}>
          <div className="p-4 border-b border-border/40">
            <h3 className="font-bold mb-4">Course Content</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search lessons..." className="pl-9 h-9 bg-background/50 border-transparent focus-visible:bg-background" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {course.modules.map((module, i) => (
              <div key={module.id} className="border-b border-border/40">
                <div className="px-4 py-3 bg-muted/30 font-semibold text-sm">
                  Section {i + 1}: {module.title}
                </div>
                <div className="divide-y divide-border/20">
                  {module.lessons.map((lesson, j) => {
                    const isActive = lesson.id === params.lessonId || (i===0 && j===0);
                    return (
                      <Link href={`/learn/${course.id}/${lesson.id}`} key={lesson.id} 
                        className={`px-4 py-3 flex gap-3 hover:bg-muted/50 transition-colors ${isActive ? 'bg-primary/10 border-l-2 border-primary' : ''}`}>
                        <div className="mt-0.5 shrink-0">
                          {j === 0 ? <CheckCircle className="w-4 h-4 text-primary" /> : isActive ? <PlayCircle className="w-4 h-4 text-primary" /> : <Lock className="w-4 h-4 text-muted-foreground" />}
                        </div>
                        <div>
                          <p className={`text-sm font-medium leading-snug ${isActive ? 'text-primary' : ''}`}>{j + 1}. {lesson.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{lesson.durationMinutes} min</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Player */}
        <div className="flex-1 flex flex-col min-w-0 bg-background overflow-y-auto">
          {/* Video Player Placeholder */}
          <div className="w-full aspect-video bg-black relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {/* Play button */}
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-primary/50">
              <PlayCircle className="w-8 h-8 text-white ml-1" />
            </div>
            
            {/* Controls mockup */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4 text-white">
              <div className="w-full h-1 bg-white/20 rounded-full cursor-pointer relative">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto w-full p-6 lg:p-10 pb-32">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Self-Attention Mechanisms</h1>
                <p className="text-muted-foreground">Module 1 • 45 mins</p>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b border-border/40 rounded-none bg-transparent h-auto p-0 gap-6">
                <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-semibold">Overview</TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-semibold">Resources (3)</TabsTrigger>
                <TabsTrigger value="discussion" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-semibold">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6 text-muted-foreground leading-relaxed space-y-4">
                <p>In this lesson, we break down the core component of Transformer models: the self-attention mechanism. Unlike recurrent neural networks, self-attention allows the model to look at the entire sequence simultaneously and determine which words are most important for understanding the context of a given word.</p>
                <h3 className="text-foreground font-semibold text-lg mt-8">What you&apos;ll learn:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The intuition behind Queries, Keys, and Values.</li>
                  <li>How the attention score is calculated.</li>
                  <li>Scaling by the square root of the dimension.</li>
                  <li>Applying the Softmax function.</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="resources" className="pt-6">
                <div className="space-y-3">
                  {[
                    { name: "Attention Is All You Need (Original Paper)", type: "PDF", size: "1.2 MB" },
                    { name: "Self-Attention Implementation (PyTorch)", type: "Python", size: "4 KB" },
                    { name: "Lesson Slides", type: "PDF", size: "5.4 MB" },
                  ].map((res, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border/40 rounded-xl hover:bg-card transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm group-hover:text-primary transition-colors">{res.name}</p>
                          <p className="text-xs text-muted-foreground">{res.type} • {res.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Avatar><AvatarFallback>ME</AvatarFallback></Avatar>
                    <div className="flex-1">
                      <Input placeholder="Add to the discussion..." className="mb-2 bg-card/50" />
                      <div className="flex justify-end"><Button size="sm">Post</Button></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-4">
                    <div className="flex gap-4">
                      <Avatar><AvatarImage src="https://i.pravatar.cc/150?u=4" /></Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">David Chen</span>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">I&apos;m still a bit confused about why we divide by the square root of d_k. Does anyone have an intuitive explanation?</p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"><ThumbsUp className="w-3 h-3"/> 12</button>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"><MessageSquare className="w-3 h-3"/> Reply</button>
                        </div>
                        
                        {/* Reply */}
                        <div className="flex gap-4 mt-4">
                          <CornerDownRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                          <Avatar className="w-8 h-8"><AvatarImage src="https://i.pravatar.cc/150?u=u_2" /></Avatar>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm">Dr. Sarah Chen</span>
                              <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold uppercase">Instructor</span>
                              <span className="text-xs text-muted-foreground">1 day ago</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Great question! If d_k is large, the dot products grow large in magnitude. This pushes the softmax function into regions where gradients are extremely small, which slows down learning. Scaling prevents this.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Sidebar - AI Assistant */}
        <div className={`w-80 shrink-0 border-l border-border/40 bg-card/30 flex flex-col transition-all duration-300 absolute right-0 md:relative z-20 h-full ${aiOpen ? 'translate-x-0' : 'translate-x-full hidden'}`}>
          <div className="p-4 border-b border-border/40 flex items-center gap-2 bg-card">
            <Bot className="w-5 h-5 text-primary" />
            <h3 className="font-bold">Aura Assistant</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {chat.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${m.role === 'ai' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {m.role === 'ai' ? 'A' : 'ME'}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${m.role === 'ai' ? 'bg-card border border-border/40 rounded-tl-sm' : 'bg-primary text-primary-foreground rounded-tr-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-card border-t border-border/40">
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
              <button onClick={() => setMsg("Summarize this lesson")} className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border/40 bg-muted/50 hover:bg-muted transition-colors whitespace-nowrap">Summarize</button>
              <button onClick={() => setMsg("Create a quick quiz")} className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border/40 bg-muted/50 hover:bg-muted transition-colors whitespace-nowrap">Quiz me</button>
            </div>
            <form onSubmit={handleSend} className="relative">
              <Input 
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Ask about this lesson..." 
                className="pr-10 bg-background/50 rounded-xl"
              />
              <Button type="submit" size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-primary hover:bg-transparent hover:text-primary/80">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="h-20 shrink-0 border-t border-border/40 bg-card flex items-center justify-between px-6 z-30">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Previous Lesson
        </Button>
        <Button className="rounded-full gap-2 px-8 shadow-lg shadow-primary/20">
          Mark Complete <CheckCircle className="w-4 h-4" />
        </Button>
        <Button variant="ghost" className="gap-2">
           Next Lesson <ArrowLeft className="w-4 h-4 rotate-180" />
        </Button>
      </div>
    </div>
  );
}
