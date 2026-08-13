import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES, MOCK_USERS } from "@/data/mock";
import { notFound } from "next/navigation";
import { ArrowLeft, PlayCircle, Clock, Star, Users, CheckCircle } from "lucide-react";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = MOCK_COURSES.find(c => c.id === params.id);
  
  if (!course) {
    notFound();
  }

  const instructor = MOCK_USERS.find(u => u.id === course.instructorId);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-6 lg:px-14 h-20 flex items-center border-b border-border/40 glass sticky top-0 z-50">
        <Link href="/courses" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to courses
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <span className="font-semibold">${course.price}</span>
          <Button asChild className="rounded-full px-6">
            <Link href={`/dashboard`}>Enroll Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Course Hero */}
        <section className="relative pt-20 pb-24 border-b border-border/40 bg-card overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold">
                {course.category} • {course.level}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={instructor?.avatarUrl} alt={instructor?.name} className="w-8 h-8 rounded-full" />
                  <span className="font-medium">{instructor?.name}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current"/>
                  <span className="font-medium text-foreground">{course.rating}</span>
                  <span className="text-muted-foreground">({(course.studentsCount / 1000).toFixed(1)}k students)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" /> {course.durationHours} hours
                </div>
              </div>
              
              <div className="pt-4 flex gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/20">
                  Enroll for ${course.price}
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm">
                  View Syllabus
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-2xl group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20">
          <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About this course</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p>{course.longDescription}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Syllabus</h2>
                <div className="space-y-4">
                  {course.modules.map((module, i) => (
                    <div key={module.id} className="border border-border/40 rounded-xl overflow-hidden bg-card/30">
                      <div className="p-6 border-b border-border/40 bg-card/50 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Module {i + 1}: {module.title}</h3>
                        <span className="text-sm text-muted-foreground">{module.lessons.length} lessons</span>
                      </div>
                      <div className="divide-y divide-border/40">
                        {module.lessons.map((lesson, j) => (
                          <div key={lesson.id} className="p-4 px-6 flex justify-between items-center hover:bg-muted/50 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">{j + 1}. {lesson.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.durationMinutes} min</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-border/40 bg-card/50 space-y-6 sticky top-28">
                <h3 className="text-xl font-bold">What you&apos;ll get</h3>
                <ul className="space-y-4">
                  {[
                    `${course.durationHours} hours of on-demand video`,
                    "Full lifetime access",
                    "Access on mobile and TV",
                    "Certificate of completion",
                    "1-on-1 AI Assistant access",
                    "Private community access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 rounded-xl text-base">Enroll for ${course.price}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
