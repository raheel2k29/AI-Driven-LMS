"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MOCK_COURSES, MOCK_USERS } from "@/data/mock";
import { PlayCircle, Clock, Flame, BookOpen, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const activityData = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.0 },
  { day: "Wed", hours: 1.0 },
  { day: "Thu", hours: 3.5 },
  { day: "Fri", hours: 2.5 },
  { day: "Sat", hours: 4.0 },
  { day: "Sun", hours: 3.0 },
];

export default function StudentDashboard() {
  const currentCourse = MOCK_COURSES[0];
  const user = MOCK_USERS[0];

  return (
    <div className="space-y-10 pb-10">
      {/* Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Good morning, {user.name.split(' ')[0]} 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            You&apos;ve learned for 14 hours this week. Keep it up!
          </p>
        </div>
        <Button className="rounded-full shadow-lg shadow-primary/20">
          <PlayCircle className="w-4 h-4 mr-2" /> Resume Learning
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { icon: BookOpen, label: "Enrolled Courses", value: "4", color: "text-blue-500", bg: "bg-blue-500/10" },
          { icon: Clock, label: "Learning Hours", value: "128h", color: "text-purple-500", bg: "bg-purple-500/10" },
          { icon: Flame, label: "Current Streak", value: "7 Days", color: "text-orange-500", bg: "bg-orange-500/10" },
          { icon: Award, label: "Completed Lessons", value: "45", color: "text-green-500", bg: "bg-green-500/10" },
        ].map((stat, i) => (
          <Card key={i} className="border-border/40 bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Continue Learning Widget */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Continue Learning</h2>
          <Card className="overflow-hidden border-border/40 bg-card/50">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto relative bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={currentCourse.coverUrl} alt={currentCourse.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Up next</div>
                  <h3 className="text-xl font-bold mb-1">{currentCourse.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-6">
                    Module 1: Self-Attention Mechanisms
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Progress</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                  <div className="flex justify-end pt-2">
                    <Button variant="ghost" asChild className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Link href={`/learn/${currentCourse.id}/l_1`}>
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Activity Chart */}
          <Card className="border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle>Weekly Learning Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} dy={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Area type="monotone" dataKey="hours" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Upcoming</h2>
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-0">
              <div className="divide-y divide-border/40">
                <div className="p-5 flex gap-4 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">OCT</span>
                    <span className="text-lg font-bold leading-none text-primary">24</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">1-on-1 Mentorship</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 10:00 AM • Marcus Johnson
                    </p>
                  </div>
                </div>
                <div className="p-5 flex gap-4 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-blue-500">OCT</span>
                    <span className="text-lg font-bold leading-none text-blue-500">26</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Live Q&A: GANs</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 2:00 PM • Dr. Sarah Chen
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
