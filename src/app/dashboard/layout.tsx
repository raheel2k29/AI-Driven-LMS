import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  LayoutDashboard, 
  CalendarDays, 
  Video, 
  Phone, 
  MessageSquare, 
  Bot, 
  Award, 
  Settings,
  Bell,
  Search,
  LogOut
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: BookOpen, label: "My Learning", href: "/dashboard/learning" },
  { icon: Video, label: "Sessions", href: "/dashboard/sessions" },
  { icon: Phone, label: "1-on-1 Calls", href: "/dashboard/calls" },
  { icon: Bot, label: "AI Assistant", href: "/ai" },
  { icon: CalendarDays, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 bg-card hidden md:flex flex-col h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-border/40">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              A
            </div>
            Aura
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
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
            href="/dashboard/settings"
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
              placeholder="Search courses, mentors, or topics..." 
              className="pl-9 h-10 bg-muted/50 border-transparent focus-visible:bg-background"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
            </Button>
            <div className="h-8 w-px bg-border/50"></div>
            <Avatar className="cursor-pointer border border-border/50 shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=u_1" />
              <AvatarFallback>AL</AvatarFallback>
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
