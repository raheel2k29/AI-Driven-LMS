"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Star, Sparkles, LayoutGrid, Users, Code, Video, PlayCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">
      
      {/* Absolute Background Elements for richness */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-indigo-100/50 via-purple-50/30 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/15 blur-[120px] pointer-events-none -z-10"></div>

      {/* Header */}
      <header className="px-6 lg:px-12 h-20 flex items-center border-b border-white/40 bg-white/60 backdrop-blur-xl sticky top-0 z-50 shadow-sm shadow-indigo-900/5">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          Aura
        </Link>
        <nav className="ml-auto hidden md:flex gap-8 text-sm font-medium items-center text-slate-600">
          <Link href="/courses" className="hover:text-indigo-600 transition-colors">Courses</Link>
          <Link href="/academies" className="hover:text-indigo-600 transition-colors">Academies</Link>
          <Link href="/teachers" className="hover:text-indigo-600 transition-colors">Mentors</Link>
          <div className="w-px h-5 bg-slate-300 mx-2"></div>
          <Link href="/login" className="hover:text-indigo-600 transition-colors">Sign in</Link>
          <Button asChild className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-7 py-5 font-medium shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-0.5">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Rich Hero Section */}
        <section className="pt-28 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-indigo-700 mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            Aura AI Assistant 2.0 is now live
          </motion.div>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6 max-w-[1000px]"
          >
            Master new skills with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">intelligent learning.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-600 max-w-[800px] mx-auto leading-relaxed mb-10"
          >
            The premium platform that combines world-class video masterclasses, interactive sandboxes, and a personalized AI tutor to accelerate your career.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-20"
          >
            <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white h-14 px-10 text-lg font-medium shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 group">
              Start learning free <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg font-medium border-slate-300 bg-white/50 backdrop-blur-sm text-slate-700 hover:bg-white shadow-sm transition-all hover:scale-105 active:scale-95">
              <PlayCircle className="mr-2 w-5 h-5 text-indigo-600" /> Watch demo
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="w-full max-w-[1100px] relative z-10 group perspective-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative aspect-[16/9] rounded-2xl md:rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-slate-900/5 transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-mockup.jpg" alt="Aura Dashboard Mockup" className="w-full h-full object-cover object-top opacity-95" />
            </div>
          </motion.div>
        </section>

        {/* Dynamic Social Proof */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale items-center">
              {['Vercel', 'Stripe', 'Linear', 'OpenAI', 'Figma'].map(company => (
                <div key={company} className="text-2xl md:text-3xl font-extrabold tracking-tighter text-slate-800 hover:grayscale-0 hover:text-indigo-600 transition-all duration-300 cursor-pointer">{company}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Features with rich cards */}
        <section className="py-32 max-w-7xl mx-auto px-6 relative">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Everything you need to master your craft</h2>
            <p className="text-xl text-slate-600">A beautifully designed ecosystem of tools designed to keep you focused, organized, and constantly improving.</p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6 relative z-10"
          >
            {/* Feature 1 - Large Focus Card */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 overflow-hidden relative group hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-80 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-8 shadow-sm">
                  <Sparkles className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">Your personal AI mentor, always available</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">Aura doesn't just give answers. It guides you to the solution using Socratic teaching, generating dynamic quizzes tailored to your weaknesses.</p>
                <Link href="/ai" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-indigo-600 transition-colors">
                  Explore AI features <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[350px] h-[250px] bg-white rounded-tl-2xl border-t border-l border-slate-200 shadow-2xl p-6 hidden md:block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">AI</div>
                  <div className="h-4 w-32 bg-slate-100 rounded-md"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-slate-100 rounded-md"></div>
                  <div className="h-3 w-5/6 bg-slate-100 rounded-md"></div>
                  <div className="h-3 w-4/6 bg-slate-100 rounded-md"></div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 flex flex-col hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8 shadow-sm">
                  <LayoutGrid className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Structured Paths</h3>
                <p className="text-slate-600 leading-relaxed flex-1 text-lg">Curated curriculums designed by industry experts to take you from absolute beginner to hired professional.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 flex flex-col hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-8 shadow-sm">
                  <Users className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">1-on-1 Mentorship</h3>
                <p className="text-slate-600 leading-relaxed flex-1 text-lg">Book private sessions with senior developers for code reviews, interview prep, and career guidance.</p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-12 border border-slate-700 overflow-hidden relative group hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
                  <Code className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Interactive Cloud Sandboxes</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">Write code, test ideas, and build projects directly in the browser with our high-performance, containerized cloud environments.</p>
                <Link href="/courses" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                  Try a sandbox environment <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Courses - Rich visual style */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Premium Masterclasses</h2>
                <p className="text-slate-400 text-xl">Cinematic-quality courses taught by industry titans.</p>
              </div>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white backdrop-blur-md transition-all">
                View all courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_COURSES.slice(0, 3).map((course) => (
                <Link href={`/courses/${course.id}`} key={course.id} className="group block h-full">
                  <Card className="h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 flex flex-col rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10">
                        {course.category}
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col flex-1 relative z-10 -mt-12">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-3xl font-bold text-white shadow-sm">
                          ${course.price}
                        </span>
                        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400"/>
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-400 transition-colors">{course.title}</h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-8 flex-1 leading-relaxed">{course.description}</p>
                      
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/20 overflow-hidden shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://i.pravatar.cc/150?u=${course.instructorId}`} alt="Instructor" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Instructor Name</p>
                          <p className="text-xs text-slate-400 flex items-center gap-1"><BookOpen className="w-3 h-3"/> {course.modules.length} modules</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Rich Footer */}
      <footer className="border-t border-slate-200 py-16 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 relative z-10">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:bg-indigo-700 transition-colors">A</div>
              Aura
            </Link>
            <p className="text-base text-slate-500 max-w-sm mb-8 leading-relaxed">
              The premium learning ecosystem combining world-class curriculum with artificial intelligence.
            </p>
            <div className="text-sm text-slate-400 font-medium">© 2026 Aura Inc. All rights reserved.</div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm tracking-wider uppercase">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Courses</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Academies</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Teachers</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 font-medium transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

