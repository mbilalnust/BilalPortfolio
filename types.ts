export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'external';
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  avatarUrl: string;
  location: string;
  email: string;
  skills: string[];
}