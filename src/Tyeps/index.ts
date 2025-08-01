export interface TBlog {
  id: number;
  title: string;
  summary: string;
  details: string;
  date: string;         // Example: "July 15, 2025"
  tag: string[];        // Example: ["React", "Hooks"]
  image: string;        // Example: "https://example.com/blog-image.jpg"
}
