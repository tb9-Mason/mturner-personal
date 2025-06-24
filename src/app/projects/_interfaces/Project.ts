import { ReactNode } from 'react';

export interface Project {
  id: string;
  name: string;
  imagePath?: string;
  description: ReactNode;
  technologies: ProjectTechnology[];
  client: string;
  type: 'enterprise' | 'entrepreneur' | 'non-profit' | 'personal';
  projectLinks: ProjectLinks;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface ProjectTechnology {
  name: string;
}
