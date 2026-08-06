export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  /** Optional — the card grammar in this system carries no imagery. */
  imageUrl?: string;
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
  /** Stack chips shown under the bullets. */
  tech?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}


export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'external' | 'tableau';
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  avatarUrl: string;
  location: string;
  email: string;
  languages: string;
  skills: string[];
}

export interface Metric {
  value: string;
  label: string;
}

/** A piece of shipped work. `result` is the measurable outcome. */
export interface WorkItem {
  id: string;
  title: string;
  where: string;
  description: string;
  result: string;
  githubUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  /** Public link, where one exists. Not every paper has one. */
  url?: string;
}

export interface SkillGroup {
  heading: string;
  items: string;
}