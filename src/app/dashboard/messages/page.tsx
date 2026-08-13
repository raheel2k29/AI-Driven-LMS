"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import { MOCK_USERS } from "@/data/mock";

const conversations = [
  { id: 1, userId: "u_2", lastMessage: "Yes, the assignment is due on Friday.", time: "10:24 AM", unread: 2 },
  { id: 2, userId: "u_3", lastMessage: "Great progress on the latest module!", time: "Yesterday", unread: 0 },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const activeUser = MOCK_USERS.find(u => u.id === activeChat.userId);

  return (
    <div className="h-[calc(100vh-8rem)] flex rounded-xl border border-border/40 bg-card overflow-hidden shadow-sm">
      {/* Sidebar */}
      <div className="w-80 border-r border-border/40 flex flex-col bg-muted/10 shrink-0">
        <div className="p-4 border-b border-border/40">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search messages..." className="pl-9 bg-background border-border/40" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(c => {
            const u = MOCK_USERS.find(user => user.id === c.userId);
            return (
              <div 
                key={c.id} 
                onClick={() => setActiveChat(c)}
                className={`flex gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors border-l-2 ${activeChat.id === c.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
              >
                <Avatar className="w-12 h-12 border border-border/40">
                  <AvatarImage src={u?.avatarUrl} />
                  <AvatarFallback>{u?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-sm truncate">{u?.name}</span>
                    <span className="text-xs text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground self-center shrink-0">
                    {c.unread}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background/50">
        {/* Chat Header */}
        <div className="h-16 border-b border-border/40 flex items-center justify-between px-6 bg-card shrink-0">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border border-border/40">
              <AvatarImage src={activeUser?.avatarUrl} />
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm leading-tight">{activeUser?.name}</h3>
              <p className="text-xs text-muted-foreground">{activeUser?.role === 'teacher' ? 'Instructor' : 'Student'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground"><Phone className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground"><Video className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">Yesterday, 10:24 AM</span>
          </div>
          
          <div className="flex gap-3">
            <Avatar className="w-8 h-8 shrink-0"><AvatarImage src={activeUser?.avatarUrl} /></Avatar>
            <div className="max-w-[70%]">
              <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm">
                Hi Alex, just checking in to see if you have any questions about the upcoming assignment?
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 flex-row-reverse">
            <div className="max-w-[70%]">
              <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm text-sm">
                Thanks for checking in! Is it due on Friday?
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Avatar className="w-8 h-8 shrink-0"><AvatarImage src={activeUser?.avatarUrl} /></Avatar>
            <div className="max-w-[70%]">
              <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm">
                {activeChat.lastMessage}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-card border-t border-border/40 shrink-0">
          <div className="flex items-center gap-2 relative">
            <Button variant="ghost" size="icon" className="absolute left-1 text-muted-foreground hover:bg-muted"><Paperclip className="w-4 h-4" /></Button>
            <Input placeholder="Type a message..." className="pl-10 h-12 bg-muted/50 border-transparent rounded-xl" />
            <Button size="icon" className="absolute right-1 h-10 w-10 rounded-xl"><Send className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
