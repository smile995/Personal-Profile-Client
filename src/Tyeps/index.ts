import type { JSX } from "react";

export interface TBlog {
  id: number;
  title: string;
  summary: string;
  details: string;
  date: string; 
  tag: string[];
  image: string; 
}
export interface TReview {
  name: string;
  role: string;
  text: string;
  rating?: number;     
  avatarUrl?: string;   
}
export type TProject = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  imageUrl: string;
  liveUrl: string;
  frontEndUrl: string;
  backEndUrl: string;
  longDescription?: string;
  status: "completed" | "in-progress" | "planned";
  challenges?: string[];
  learnings?: string[];
};
export interface Skill {
  name: string;
  value: number;
  icon: JSX.Element;
}