export type User = {
  id: string;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  avatarUrl: string;
  bio?: string;
  title?: string;
  stats?: {
    students: number;
    courses: number;
    rating: number;
  };
};

export type Academy = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  coverUrl: string;
  stats: {
    teachers: number;
    courses: number;
    students: number;
    rating: number;
  };
};

export type Course = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverUrl: string;
  instructorId: string;
  academyId: string;
  price: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  durationHours: number;
  rating: number;
  studentsCount: number;
  modules: Module[];
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  durationMinutes: number;
  videoUrl?: string;
  content?: string;
  isCompleted?: boolean;
};

export const MOCK_USERS: User[] = [
  {
    id: "u_1",
    name: "Alex Rivera",
    email: "alex@example.com",
    role: "student",
    avatarUrl: "https://i.pravatar.cc/150?u=u_1",
  },
  {
    id: "u_2",
    name: "Dr. Sarah Chen",
    email: "sarah@example.com",
    role: "teacher",
    title: "Senior AI Researcher",
    bio: "Ex-DeepMind, passionate about making AI accessible.",
    avatarUrl: "https://i.pravatar.cc/150?u=u_2",
    stats: { students: 12500, courses: 4, rating: 4.9 },
  },
  {
    id: "u_3",
    name: "Marcus Johnson",
    email: "marcus@example.com",
    role: "teacher",
    title: "Lead Product Designer",
    bio: "Design systems expert and typography nerd.",
    avatarUrl: "https://i.pravatar.cc/150?u=u_3",
    stats: { students: 8200, courses: 3, rating: 4.8 },
  },
];

export const MOCK_ACADEMIES: Academy[] = [
  {
    id: "a_1",
    name: "Turing AI Academy",
    description: "The world's premier institution for artificial intelligence and machine learning education.",
    logoUrl: "https://ui-avatars.com/api/?name=Turing&background=0D8ABC&color=fff",
    coverUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    stats: { teachers: 24, courses: 45, students: 150000, rating: 4.9 },
  },
  {
    id: "a_2",
    name: "DesignShift",
    description: "Elevate your design career with masterclasses from industry leaders.",
    logoUrl: "https://ui-avatars.com/api/?name=DesignShift&background=FF0055&color=fff",
    coverUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    stats: { teachers: 12, courses: 28, students: 85000, rating: 4.8 },
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: "c_1",
    title: "Advanced Neural Networks Architecture",
    description: "Master the design and deployment of modern neural networks.",
    longDescription: "A comprehensive deep dive into transformer models, GANs, and diffusion models. Built for practitioners looking to scale AI in production environments.",
    coverUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    instructorId: "u_2",
    academyId: "a_1",
    price: 199,
    category: "AI & ML",
    level: "Advanced",
    durationHours: 24,
    rating: 4.9,
    studentsCount: 12450,
    modules: [
      {
        id: "m_1",
        title: "Foundations of Transformers",
        lessons: [
          { id: "l_1", title: "Self-Attention Mechanisms", durationMinutes: 45 },
          { id: "l_2", title: "Multi-head Attention", durationMinutes: 55 },
        ]
      },
      {
        id: "m_2",
        title: "Generative Models",
        lessons: [
          { id: "l_3", title: "Introduction to GANs", durationMinutes: 60 },
          { id: "l_4", title: "Diffusion Models Explained", durationMinutes: 75 },
        ]
      }
    ]
  },
  {
    id: "c_2",
    title: "Premium SaaS Design Systems",
    description: "Build robust, scalable design systems for modern SaaS applications.",
    longDescription: "Learn how to architect component libraries, define design tokens, and create pixel-perfect interfaces that developers love to use.",
    coverUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    instructorId: "u_3",
    academyId: "a_2",
    price: 149,
    category: "Design",
    level: "Intermediate",
    durationHours: 16,
    rating: 4.8,
    studentsCount: 8100,
    modules: [
      {
        id: "m_3",
        title: "Design Tokens & Primitives",
        lessons: [
          { id: "l_5", title: "Color Theory for SaaS", durationMinutes: 30 },
          { id: "l_6", title: "Typography Scales", durationMinutes: 35 },
        ]
      }
    ]
  },
  {
    id: "c_3",
    title: "Next.js App Router Masterclass",
    description: "Build performant full-stack applications with Next.js 14.",
    longDescription: "Complete guide to server components, server actions, and modern React patterns.",
    coverUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    instructorId: "u_2",
    academyId: "a_1",
    price: 129,
    category: "Development",
    level: "All Levels",
    durationHours: 12,
    rating: 4.7,
    studentsCount: 5600,
    modules: [
      {
        id: "m_4",
        title: "Routing & Layouts",
        lessons: [
          { id: "l_7", title: "File-system Routing", durationMinutes: 25 },
        ]
      }
    ]
  }
];

export const MOCK_NOTIFICATIONS = [
  { id: "n_1", title: "Course Updated", message: "Dr. Sarah Chen added a new module to Advanced Neural Networks.", time: "2 hours ago", unread: true },
  { id: "n_2", title: "Upcoming Session", message: "Your 1-on-1 with Marcus Johnson starts in 1 hour.", time: "1 hour ago", unread: true },
  { id: "n_3", title: "Achievement Unlocked", message: "You completed a 7-day learning streak!", time: "Yesterday", unread: false },
];
