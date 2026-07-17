export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "design" | "languages" | "frameworks" | "databases";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  availableForWork: boolean;
}
