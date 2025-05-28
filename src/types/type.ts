export interface Achievement {
  title: string;
  description?: string;
  details?: string[];
}

export interface Item {
  title: string;
  description?: string;
  client?: string;
  period?: string;
  techStack: string[];
  achievements: Achievement[];
}

export interface Career {
  company: string;
  position: string;
  period: string;
  projects: Item[];
}

export interface Project {
  name: string;
  position: string;
  period: string;
  detail: Item[];
}

export type EducationItemProps = {
  year: string;
  name: string;
  detail: string;
  capstone?: string[];
}[];

export type SectionItemProps = {
  year: string;
  name: string;
  detail: string[];
  activate?: boolean;
  link?: string;
  stack?: {
    name: string;
    logo: string;
  }[];
}[];
