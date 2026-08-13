import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_COURSES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Search, SlidersHorizontal, BookOpen, Users, Star } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="px-6 lg:px-14 h-20 flex items-center border-b border-border/40 glass sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            A
          </div>
          Aura
        </Link>
        <nav className="ml-auto flex gap-6 text-sm font-medium items-center">
          <Link href="/courses" className="text-primary transition-colors">Courses</Link>
          <Link href="/academies" className="hover:text-primary transition-colors">Academies</Link>
          <div className="w-px h-4 bg-border mx-2"></div>
          <Button asChild className="rounded-full px-6">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 container px-4 md:px-6 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Explore Courses</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover premium masterclasses taught by industry experts.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search courses, topics, or instructors..." 
              className="pl-10 h-12 bg-card/50 border-border/40 rounded-xl"
            />
          </div>
          <Button variant="outline" className="h-12 rounded-xl px-6 gap-2 border-border/40 bg-card/50">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_COURSES.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="group block">
              <Card className="overflow-hidden border-border/40 bg-card/40 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                    {course.category}
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><BookOpen className="w-4 h-4"/> {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</div>
                    <div className="flex items-center gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current"/> {course.rating}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <span className="font-semibold text-lg">${course.price}</span>
                    <span className="text-xs font-medium text-muted-foreground">{course.level}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
