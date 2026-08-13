import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Star, Users, Video } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 lg:px-14 h-20 flex items-center border-b border-border/40 glass sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            A
          </div>
          Aura
        </div>
        <nav className="ml-auto flex gap-6 text-sm font-medium items-center">
          <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <Link href="/academies" className="hover:text-primary transition-colors">Academies</Link>
          <Link href="/teachers" className="hover:text-primary transition-colors">Teachers</Link>
          <div className="w-px h-4 bg-border mx-2"></div>
          <Link href="/login" className="hover:text-primary transition-colors">Log in</Link>
          <Button asChild className="rounded-full px-6">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Aura AI Assistant 2.0 is live
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter max-w-5xl">
              Learn from the best. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Build what matters.</span>
            </h1>
            
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
              The premier ecosystem for advanced learning. Access masterclasses, 1-on-1 mentorship, and an AI-powered curriculum tailored to your growth.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base">
                Start learning for free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base">
                Explore courses
              </Button>
            </div>
            
            <div className="mt-16 w-full max-w-5xl aspect-video rounded-xl border border-border/50 bg-card/50 shadow-2xl overflow-hidden relative backdrop-blur-sm">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                  <span className="text-2xl font-medium tracking-widest">[ Dashboard Interface Preview ]</span>
               </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-border/40 bg-muted/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Active Students", value: "2M+" },
                { label: "Expert Teachers", value: "500+" },
                { label: "Premium Courses", value: "1,200+" },
                { label: "AI Sessions", value: "5M+" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <h3 className="text-4xl md:text-5xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24 lg:py-32 container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured masterclasses</h2>
              <p className="text-muted-foreground text-lg max-w-[600px]">Curated courses from industry leaders designed to elevate your skills to the next level.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex">View all courses <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.map((course) => (
              <Link href={`/courses/${course.id}`} key={course.id} className="group block">
                <Card className="overflow-hidden border-border/40 bg-card/40 hover:bg-card hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                      {course.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1"><BookOpen className="w-4 h-4"/> {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</div>
                      <div className="flex items-center gap-1"><Users className="w-4 h-4"/> {(course.studentsCount / 1000).toFixed(1)}k</div>
                      <div className="flex items-center gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current"/> {course.rating}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/40">
                      <span className="font-semibold text-lg">${course.price}</span>
                      <span className="text-sm font-medium text-muted-foreground">{course.level}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-card">
        <div className="container px-4 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
                A
              </div>
              Aura
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The premium learning ecosystem for modern professionals and ambitious students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Courses</Link></li>
              <li><Link href="#" className="hover:text-primary">Academies</Link></li>
              <li><Link href="#" className="hover:text-primary">Teachers</Link></li>
              <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
