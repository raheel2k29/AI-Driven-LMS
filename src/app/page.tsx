"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Star, Sparkles, LayoutGrid, Users, Code, Video } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="px-6 lg:px-12 h-[72px] flex items-center border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
            A
          </div>
          Aura
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium items-center text-slate-600">
          <Link href="/courses" className="hover:text-slate-900 transition-colors">Courses</Link>
          <Link href="/academies" className="hover:text-slate-900 transition-colors">Academies</Link>
          <Link href="/teachers" className="hover:text-slate-900 transition-colors">Mentors</Link>
          <div className="w-px h-4 bg-slate-200 mx-2"></div>
          <Link href="/login" className="hover:text-slate-900 transition-colors">Sign in</Link>
          <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 font-medium border-0 shadow-sm transition-transform hover:-translate-y-[1px]">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Minimal Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Introducing Workspace Learning
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Build skills faster. <br className="hidden lg:block"/>
              Learn together.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Aura brings world-class curriculum, AI-powered assistance, and collaborative tools into a single, beautifully simple workspace.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-base font-medium shadow-none">
                Get started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-medium border-slate-300 text-slate-700 hover:bg-slate-50 shadow-none">
                Browse courses
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="ml-4 h-6 w-48 bg-slate-100 rounded-md"></div>
              </div>
              <div className="aspect-[4/3] bg-slate-50 relative p-6 flex flex-col gap-4">
                <div className="h-8 w-1/3 bg-slate-200 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><BookOpen className="w-5 h-5 text-blue-600"/></div>
                    <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"><Video className="w-5 h-5 text-emerald-600"/></div>
                    <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                  </div>
                  <div className="col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex-1 flex flex-col gap-3">
                    <div className="h-4 w-1/4 bg-slate-100 rounded"></div>
                    <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Clients/Trust */}
        <section className="py-12 border-y border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-slate-500 mb-6">Empowering teams at leading organizations</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale items-center">
              {['Acme Corp', 'GlobalTech', 'Innovate', 'Nexus', 'Pinnacle'].map(company => (
                <div key={company} className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">{company}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Everything you need to succeed</h2>
            <p className="text-lg text-slate-600">Aura provides a complete suite of tools designed to accelerate your learning and keep you organized.</p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Tutoring</h3>
                <p className="text-slate-600 leading-relaxed mb-6">Get instant answers, tailored explanations, and code reviews from an intelligent assistant that knows your curriculum inside out.</p>
                <Link href="/ai" className="text-blue-600 font-medium inline-flex items-center hover:underline">
                  Learn more about AI <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <LayoutGrid className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Pathways</h3>
              <p className="text-slate-600 leading-relaxed flex-1">Follow curated learning paths designed by industry experts to take you from beginner to professional.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1-on-1 Mentorship</h3>
              <p className="text-slate-600 leading-relaxed flex-1">Connect with senior developers and designers for direct feedback and career guidance.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 overflow-hidden relative group">
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Interactive Sandboxes</h3>
                <p className="text-slate-600 leading-relaxed mb-6">Write code, test ideas, and build projects directly in the browser with our high-performance cloud environments.</p>
                <Link href="/courses" className="text-blue-600 font-medium inline-flex items-center hover:underline">
                  Browse practical courses <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Clean Course Grid */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Featured Courses</h2>
                <p className="text-slate-600">Start learning from top-rated curriculum.</p>
              </div>
              <Link href="/courses" className="text-blue-600 font-medium hover:underline">
                View all courses
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_COURSES.slice(0, 3).map((course) => (
                <Link href={`/courses/${course.id}`} key={course.id} className="group block h-full">
                  <Card className="h-full overflow-hidden border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 flex flex-col shadow-sm hover:shadow-md rounded-2xl">
                    <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={course.coverUrl} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-1 rounded-md">
                          {course.category}
                        </span>
                        <span className="font-bold text-slate-900">
                          ${course.price}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-1">{course.description}</p>
                      
                      <div className="flex justify-between items-center text-sm text-slate-500 pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-400"/> {course.modules.length} lessons</span>
                        <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400"/> {course.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 mb-4">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">A</div>
              Aura
            </Link>
            <p className="text-sm text-slate-500 max-w-sm mb-6">
              A modern, intelligent platform for lifelong learners and professionals.
            </p>
            <div className="text-xs text-slate-400">© 2026 Aura Inc.</div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">Community</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">Privacy</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
