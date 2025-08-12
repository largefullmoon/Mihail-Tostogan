export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'ai' | 'devOps' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}