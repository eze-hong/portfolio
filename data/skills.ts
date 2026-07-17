import type { Skill } from "@/types";

export const skills: Skill[] = [
  // // Frontend
  // { name: "React", category: "frontend" },
  // { name: "Next.js", category: "frontend" },
  // { name: "TypeScript", category: "frontend" },
  // { name: "Tailwind CSS", category: "frontend" },
  // { name: "Framer Motion", category: "frontend" },
  // { name: "Zustand", category: "frontend" },
  // { name: "React Query", category: "frontend" },
  // { name: "HTML5 / CSS3", category: "frontend" },

  // // Backend
  // { name: "Node.js", category: "backend" },
  // { name: "tRPC", category: "backend" },
  // { name: "Prisma", category: "backend" },
  // { name: "PostgreSQL", category: "backend" },
  // { name: "REST APIs", category: "backend" },

  // // Tools
  // { name: "Git", category: "tools" },
  // { name: "Vercel", category: "tools" },
  // { name: "Vitest", category: "tools" },
  // { name: "Turborepo", category: "tools" },

  // // Design
  // { name: "Figma", category: "design" },
  // { name: "Storybook", category: "design" },
  // Languages
  { name: "Java", category: "languages" },
  { name: "JSP", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "Python", category: "languages" },

  // Frameworks
  { name: "Spring Framework", category: "frameworks" },
  { name: "EgovFramework", category: "frameworks" },
  { name: "MyBatis", category: "frameworks" },

  // Databases
  { name: "Oracle", category: "databases" },
  { name: "SQL", category: "databases" },
  { name: "DBeaver", category: "databases" },

  // Tools & Infrastructure
  { name: "SVN", category: "tools" },
  { name: "Redmine", category: "tools" },
  { name: "Sparrow", category: "tools" },
  { name: "Eclipse", category: "tools" },
];

// export const skillCategories = [
//   { key: "frontend", label: "Frontend" },
//   { key: "backend", label: "Backend" },
//   { key: "tools", label: "Tools & DevOps" },
//   { key: "design", label: "Design & DX" },
// ] as const;
export const skillCategories = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools & Infra" },
] as const;