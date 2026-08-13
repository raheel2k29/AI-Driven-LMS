import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_ACADEMIES } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, BookOpen, Star, ChevronRight } from "lucide-react";

export default function AcademiesPage() {
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
          <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <Link href="/academies" className="text-primary transition-colors">Academies</Link>
          <div className="w-px h-4 bg-border mx-2"></div>
          <Button asChild className="rounded-full px-6">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 container px-4 md:px-6 mx-auto py-12 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Discover Academies</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Learn from the world&apos;s most prestigious online institutions and specialized organizations.
            </p>
          </div>
        </div>

        <div className="relative max-w-xl mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search academies by name, topic, or industry..." 
            className="pl-10 h-14 text-base bg-card/50 border-border/40 rounded-xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MOCK_ACADEMIES.map((academy) => (
            <Link href={`/academies/${academy.id}`} key={academy.id} className="group block">
              <Card className="overflow-hidden border-border/40 bg-card/40 hover:bg-card hover:border-primary/50 transition-all duration-300">
                <div className="h-32 md:h-48 relative overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={academy.coverUrl} alt={academy.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
                <CardContent className="p-6 relative pt-0 -mt-10">
                  <div className="flex items-end justify-between mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={academy.logoUrl} alt={academy.name} className="w-20 h-20 rounded-xl border-4 border-background bg-card shadow-lg" />
                    <Button variant="secondary" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Academy <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{academy.name}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{academy.description}</p>
                  
                  <div className="grid grid-cols-4 gap-4 py-4 border-t border-border/40 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1.5"><Users className="w-4 h-4" /> Students</div>
                      <div className="font-semibold text-lg">{(academy.stats.students / 1000).toFixed(0)}k+</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Courses</div>
                      <div className="font-semibold text-lg">{academy.stats.courses}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1.5"><Users className="w-4 h-4" /> Mentors</div>
                      <div className="font-semibold text-lg">{academy.stats.teachers}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1.5"><Star className="w-4 h-4" /> Rating</div>
                      <div className="font-semibold text-lg text-yellow-500">{academy.stats.rating}</div>
                    </div>
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
