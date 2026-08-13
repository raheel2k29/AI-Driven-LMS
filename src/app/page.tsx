"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Star, Users, CheckCircle, Sparkles, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <header className="px-6 lg:px-14 h-20 flex items-center border-b border-border/40 glass sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            A
          </div>
          Aura
        </Link>
        <nav className="ml-auto hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
          <Link href="/academies" className="text-muted-foreground hover:text-foreground transition-colors">Academies</Link>
          <Link href="/teachers" className="text-muted-foreground hover:text-foreground transition-colors">Mentors</Link>
          <div className="w-px h-4 bg-border mx-2"></div>
          <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">Log in</Link>
          <Button asChild className="rounded-full px-6 shadow-md shadow-primary/10 transition-transform hover:scale-105 active:scale-95">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
          {/* Ambient Background Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10" />
          
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-8 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 mr-2" />
              Aura AI Assistant 2.0 is now live
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight max-w-[1100px] leading-[1.1] mb-8"
            >
              Learn from the best. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-muted-foreground">Build what matters.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 font-medium"
            >
              The premier ecosystem for advanced learning. Access masterclasses, 1-on-1 mentorship, and an AI-powered curriculum tailored to your growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/20 group transition-all hover:scale-105 active:scale-95">
                Start learning for free <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-border/60 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all hover:scale-105 active:scale-95">
                Explore curriculum
              </Button>
            </motion.div>
          </div>
          
          {/* Dashboard Preview Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="mt-24 w-full max-w-[1200px] px-6 relative z-10"
          >
            <div className="relative aspect-[16/9] rounded-2xl md:rounded-[32px] border border-border/50 bg-card/40 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10">
              <div className="absolute top-0 w-full h-12 bg-muted/30 border-b border-border/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 w-64 h-6 bg-background/50 rounded-md border border-border/50"></div>
              </div>
              <div className="absolute top-12 bottom-0 left-0 w-64 bg-card/30 border-r border-border/50 hidden md:flex flex-col p-4 gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-8 rounded-md bg-muted/40 w-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
              <div className="absolute top-12 bottom-0 left-0 md:left-64 right-0 p-8 flex flex-col gap-6">
                <div className="h-12 w-64 bg-muted/40 rounded-xl animate-pulse"></div>
                <div className="flex gap-6">
                  <div className="h-32 w-1/4 bg-primary/10 rounded-2xl border border-primary/20"></div>
                  <div className="h-32 w-1/4 bg-blue-500/10 rounded-2xl border border-blue-500/20"></div>
                  <div className="h-32 w-1/4 bg-purple-500/10 rounded-2xl border border-purple-500/20"></div>
                  <div className="h-32 w-1/4 bg-orange-500/10 rounded-2xl border border-orange-500/20"></div>
                </div>
                <div className="flex-1 bg-muted/20 rounded-2xl border border-border/50 mt-4"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-border/40 bg-muted/10 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale items-center">
              {['Vercel', 'Stripe', 'Linear', 'OpenAI', 'Figma', 'Notion'].map(company => (
                <div key={company} className="text-xl md:text-2xl font-bold tracking-tighter">{company}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Split */}
        <section className="py-32 container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="space-y-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                An AI assistant that <br/> actually teaches you.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meet Aura AI. It doesn't just give you the answers. It understands your learning style, generates dynamic quizzes, and acts as a 24/7 Socratic tutor to ensure you truly master the material.
              </p>
              <ul className="space-y-4 pt-4">
                {["Context-aware code explanations", "Dynamic flashcard generation", "Personalized study scheduling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-foreground/80">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] border border-border/50 bg-card shadow-2xl p-6 overflow-hidden flex flex-col gap-4"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 -z-10"></div>
              {/* Chat Mockup */}
              <div className="flex gap-4 items-end">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">A</div>
                <div className="bg-muted p-4 rounded-2xl rounded-bl-sm text-sm border border-border/50 shadow-sm leading-relaxed">
                  I noticed you struggled with the concept of <span className="text-primary font-semibold">Self-Attention</span> in the last quiz. Let's break it down using a simpler analogy. Ready?
                </div>
              </div>
              <div className="flex gap-4 items-end justify-end mt-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-br-sm text-sm shadow-md">
                  Yes, please explain it using the library analogy.
                </div>
              </div>
              <div className="flex gap-4 items-end mt-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">A</div>
                <div className="bg-card p-4 rounded-2xl rounded-bl-sm text-sm border border-border/50 shadow-sm leading-relaxed w-full">
                  <div className="h-2 w-12 bg-muted-foreground/20 rounded animate-pulse mb-2"></div>
                  <div className="h-2 w-full bg-muted-foreground/20 rounded animate-pulse mb-2"></div>
                  <div className="h-2 w-3/4 bg-muted-foreground/20 rounded animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-32 bg-muted/20 border-y border-border/40 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-background via-transparent to-transparent"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Premium Masterclasses</h2>
                <p className="text-muted-foreground text-xl">Cinematic-quality courses taught by industry titans, designed to elevate your career.</p>
              </div>
              <Button variant="outline" className="rounded-full px-6 group bg-background">
                View all curriculum <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {MOCK_COURSES.map((course) => (
                <motion.div variants={fadeUp} key={course.id}>
                  <Link href={`/courses/${course.id}`} className="group block h-full">
                    <Card className="h-full overflow-hidden border-border/40 bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                      <div className="aspect-[4/3] relative overflow-hidden bg-muted p-4 flex flex-col justify-between">
                        <div className="absolute inset-0 z-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-90" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>
                        <div className="relative z-10 flex justify-between items-start">
                          <span className="bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/10">
                            {course.category}
                          </span>
                          <span className="bg-background/90 text-foreground px-2.5 py-1 rounded-md text-xs font-bold shadow-sm">
                            ${course.price}
                          </span>
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{course.title}</h3>
                          <div className="flex items-center gap-3 text-white/80 text-sm">
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4"/> {course.modules.length} Modules</span>
                            <span className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4 fill-current"/> {course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed flex-1">{course.description}</p>
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                          <div className="w-8 h-8 rounded-full bg-muted border border-border overflow-hidden shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`https://i.pravatar.cc/150?u=${course.instructorId}`} alt="Instructor" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-foreground leading-tight">Instructor Name</span>
                            <span className="text-xs text-muted-foreground">{course.level}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="container px-4 md:px-6 mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Ready to accelerate your growth?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-2xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
                Join Aura Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-16 bg-card text-muted-foreground">
        <div className="container px-4 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-foreground mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                A
              </div>
              Aura
            </Link>
            <p className="text-base max-w-sm leading-relaxed mb-6">
              The premium learning ecosystem for modern professionals and ambitious students.
            </p>
            <div className="text-sm">© 2026 Aura Inc. All rights reserved.</div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Academies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Teachers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
