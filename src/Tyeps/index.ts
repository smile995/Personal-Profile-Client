export interface TBlog {
  id: number;
  title: string;
  summary: string;
  details: string;
  date: string; // Example: "July 15, 2025"
  tag: string[]; // Example: ["React", "Hooks"]
  image: string; // Example: "https://example.com/blog-image.jpg"
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
