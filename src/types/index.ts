export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  expanded?: boolean;
}