"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Video, Phone, BookOpen } from "lucide-react";

export default function CalendarPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Calendar</h1>
          <p className="text-muted-foreground">Manage your sessions, calls, and deadlines.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon"><ChevronLeft className="w-4 h-4" /></Button>
            <span className="font-semibold px-4">October 2026</span>
            <Button variant="outline" size="icon"><ChevronRight className="w-4 h-4" /></Button>
          </div>
          <Button>Today</Button>
        </div>
      </div>

      <Card className="border-border/40 bg-card/50 overflow-hidden">
        <div className="grid grid-cols-7 border-b border-border/40 bg-muted/30">
          {days.map((day, i) => (
            <div key={i} className="p-4 text-center text-sm font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 auto-rows-[120px] bg-border/40 gap-[1px]">
          {dates.map((date, i) => (
            <div key={i} className="bg-card p-2 hover:bg-muted/10 transition-colors">
              <span className={`text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full ${date === 24 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                {date}
              </span>
              
              <div className="mt-1 space-y-1">
                {date === 15 && (
                  <div className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-medium flex items-center gap-1 truncate cursor-pointer hover:bg-blue-500/20">
                    <Video className="w-3 h-3 shrink-0" /> Live Q&A
                  </div>
                )}
                {date === 24 && (
                  <div className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xs font-medium flex items-center gap-1 truncate cursor-pointer hover:bg-purple-500/20">
                    <Phone className="w-3 h-3 shrink-0" /> 1-on-1 Mentorship
                  </div>
                )}
                {date === 28 && (
                  <div className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded text-xs font-medium flex items-center gap-1 truncate cursor-pointer hover:bg-orange-500/20">
                    <BookOpen className="w-3 h-3 shrink-0" /> Project Deadline
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
