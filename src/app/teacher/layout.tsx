import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  BarChart3, 
  Video, 
  MessageSquare, 
  Settings,
  Bell,
  Search,
  LogOut,
  Plus
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/teacher" },
  { icon: Users, label: "Students", href: "/teacher/students" },
  { icon: BookOpen, label: "My Courses", href: "/teacher/courses" },
  { icon: BarChart3, label: "Analytics", href: "/teacher/analytics" },
  { icon: Video, label: "Live Sessions", href: "/teacher/sessions" },
  { icon: MessageSquare, label: "Messages", href: "/teacher/messages" },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 bg-card hidden md:flex flex-col h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-border/40 justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              A
            </div>
            Aura <span className="text-xs font-normal text-muted-foreground ml-1 bg-muted px-1.5 py-0.5 rounded">Creator</span>
          </Link>
        </div>
        
        <div className="p-4">
          <Button asChild className="w-full gap-2 justify-start bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
            <Link href="/teacher/courses/builder">
              <Plus className="w-4 h-4" /> New Course
            </Link>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="p-4 border-t border-border/40">
          <Link 
            href="/teacher/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-1">
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 border-b border-border/40 bg-card/50 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search students, courses..." 
              className="pl-9 h-10 bg-muted/50 border-transparent focus-visible:bg-background"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
            </Button>
            <div className="h-8 w-px bg-border/50"></div>
            <Avatar className="cursor-pointer border border-border/50 shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=u_2" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
