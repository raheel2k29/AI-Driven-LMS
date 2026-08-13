"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, GripVertical, Plus, Settings, Video, FileText, 
  HelpCircle, MoreVertical, Save, Play, Eye
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const initialModules = [
  {
    id: "m1", title: "Module 1: Foundations", lessons: [
      { id: "l1", title: "Introduction to the Course", type: "video", duration: "5:00" },
      { id: "l2", title: "Setup and Prerequisites", type: "text", duration: "10:00" },
    ]
  },
  {
    id: "m2", title: "Module 2: Core Concepts", lessons: [
      { id: "l3", title: "Understanding the Architecture", type: "video", duration: "15:00" },
      { id: "l4", title: "Knowledge Check", type: "quiz", duration: "5:00" },
    ]
  }
];

export default function CourseBuilderPage() {
  const [activeTab, setActiveTab] = useState("curriculum");

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-border/40 bg-card z-10">
        <div className="flex items-center gap-4">
          <Link href="/teacher" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <div className="h-6 w-px bg-border"></div>
          <span className="font-semibold text-sm">Advanced Neural Networks Architecture</span>
          <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-medium">Draft</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2"><Eye className="w-4 h-4" /> Preview</Button>
          <Button size="sm" className="gap-2"><Save className="w-4 h-4" /> Save</Button>
          <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white"><Play className="w-4 h-4" /> Publish</Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-80 shrink-0 border-r border-border/40 bg-card/50 flex flex-col h-full">
          <div className="p-4 border-b border-border/40">
            <h3 className="font-bold">Course Structure</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {initialModules.map((m, i) => (
              <div key={m.id} className="space-y-2">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-2">
                    <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                    <span className="font-semibold text-sm">{m.title}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical className="w-4 h-4" /></Button>
                </div>
                <div className="space-y-1 pl-6">
                  {m.lessons.map(l => (
                    <div key={l.id} className="flex items-center justify-between bg-background border border-border/40 p-2 rounded-lg cursor-pointer hover:border-primary transition-colors group">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <GripVertical className="w-3 h-3 text-muted-foreground cursor-grab shrink-0" />
                        {l.type === 'video' ? <Video className="w-3.5 h-3.5 text-blue-500 shrink-0" /> : l.type === 'text' ? <FileText className="w-3.5 h-3.5 text-orange-500 shrink-0" /> : <HelpCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />}
                        <span className="text-xs truncate">{l.title}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full justify-start text-xs text-muted-foreground h-8 mt-2 border border-dashed border-border/60 hover:bg-muted/50"><Plus className="w-3 h-3 mr-2" /> Add Lesson</Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-dashed"><Plus className="w-4 h-4 mr-2" /> Add Module</Button>
          </div>
        </div>

        <div className="flex-1 bg-muted/20 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <Card className="border-border/40 shadow-sm bg-card">
              <div className="border-b border-border/40">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start rounded-none bg-transparent h-12 p-0 gap-6 px-6">
                    <TabsTrigger value="curriculum" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 h-full font-semibold">Content</TabsTrigger>
                    <TabsTrigger value="settings" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 h-full font-semibold">Settings</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <CardContent className="p-8">
                {activeTab === "curriculum" && (
                  <div className="space-y-8">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Lesson Title</label>
                      <Input defaultValue="Understanding the Architecture" className="text-lg font-semibold h-12 bg-background" />
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-sm font-semibold block">Video Content</label>
                      <div className="border-2 border-dashed border-border/60 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-background/50 hover:bg-muted/50 transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Video className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">Upload Video</h4>
                        <p className="text-sm text-muted-foreground mt-1">Drag and drop or click to browse (MP4, WebM)</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-sm font-semibold block">Lesson Description (Rich Text)</label>
                      <div className="border border-border/40 rounded-xl bg-background overflow-hidden flex flex-col">
                        <div className="h-10 border-b border-border/40 bg-muted/30 flex items-center px-2 gap-1">
                          {/* Rich text toolbar mockup */}
                          <div className="w-6 h-6 rounded bg-muted/80 flex items-center justify-center text-xs font-bold">B</div>
                          <div className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center text-xs italic">I</div>
                          <div className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center text-xs underline">U</div>
                          <div className="w-px h-4 bg-border/60 mx-2"></div>
                          <div className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center"><GripVertical className="w-3 h-3 rotate-90" /></div>
                        </div>
                        <textarea className="w-full h-40 p-4 bg-transparent resize-none focus:outline-none text-sm text-muted-foreground" defaultValue="In this lesson, we will cover the core architecture..." />
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "settings" && (
                  <div className="space-y-8 text-center text-muted-foreground py-20">
                    <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Lesson settings configuration interface.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
