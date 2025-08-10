import type { TProject } from "../Tyeps";

export const projects: TProject[] = [
  {
    id: 1,
    title: "Blood Donation Management System",
    description:
      "A full-stack platform to connect blood donors with recipients. Features smart donor-recipient matching, availability tracking, and AI-powered chatbot support.",
    longDescription:
      "This platform simplifies the process of finding blood donors by connecting them directly with recipients. It includes features like AI-powered chat assistance, live stock updates, and smart matching algorithms.",
    tech: ["React", "TypeScript", "MongoDB", "Express", "Node.js"],
    features: [
      "Smart matching algorithm",
      "Donor registration and login",
      "Live blood stock availability",
      "Chatbot assistant",
    ],
    imageUrl:
      "https://assets.justinmind.com/wp-content/uploads/2020/02/website-mockup-design-jesica.png",
    liveUrl: "#",
    frontEndUrl: "#",
    backEndUrl: "#",
    status: "in-progress",
    challenges: [
      "Implementing real-time data updates for stock availability",
      "Integrating AI chatbot with MERN stack",
    ],
    learnings: [
      "Optimizing MongoDB queries",
      "WebSocket integration for live updates",
    ],
  },
  {
    id: 2,
    title: "OCR-based Report Analyzer",
    description:
      "Extracts and analyzes medical reports using Hugging Face's TrOCR model to help screen donor health reports effectively.",
    longDescription:
      "A backend project that automates the extraction and analysis of medical report data using OCR and NLP techniques.",
    tech: ["Python", "FastAPI", "Hugging Face", "OCR"],
    features: [
      "TrOCR integration",
      "Health keyword detection",
      "Auto-report classification",
    ],
    imageUrl:
      "https://resourceboy.com/wp-content/uploads/2022/03/modern-presentation-grid-website-mockup-1.jpg",
    liveUrl: "#",
    frontEndUrl: "",
    backEndUrl: "#",
    status: "planned",
    challenges: [
      "Accurate text recognition from poor-quality scans",
      "Integrating NLP with OCR outputs",
    ],
    learnings: [
      "Working with Hugging Face APIs",
      "OCR accuracy improvements via preprocessing",
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "My personal developer portfolio website showcasing projects, skills, resume, and blog. Fully responsive and professional layout.",
    longDescription:
      "A modern, clean portfolio site built with React and Tailwind CSS. Includes project showcases, a blog, contact form, and downloadable resume.",
    tech: ["React", "Tailwind CSS", "React Router", "TypeScript"],
    features: [
      "Dynamic project rendering",
      "Blog and contact pages",
      "Mobile-first responsive design",
      "Downloadable resume",
    ],
    imageUrl:
      "https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg",
    liveUrl: "https://your-portfolio-url.com",
    frontEndUrl: "https://github.com/yourusername/portfolio",
    backEndUrl: "",
    status: "completed",
    challenges: ["SEO optimization", "Responsive layout testing"],
    learnings: [
      "Responsive design best practices",
      "React Router deep linking",
    ],
  },
  {
    id: 4,
    title: "Restaurant Management App",
    description:
      "A modern restaurant web app where users can browse menu, send feedback, and admins can manage orders and customers.",
    longDescription:
      "Full-stack application that streamlines restaurant operations. Users can browse menus, submit orders, and send feedback while admins manage backend operations.",
    tech: ["MERN Stack", "Nodemailer", "MongoDB Atlas"],
    features: [
      "User & admin dashboards",
      "Email notifications for contact form",
      "Menu browsing and feedback system",
    ],
    imageUrl:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg",
    liveUrl: "#",
    frontEndUrl: "#",
    backEndUrl: "#",
    status: "completed",
    challenges: ["Securing admin routes", "Feedback moderation system"],
    learnings: ["JWT authentication", "Email service integration"],
  },
  {
    id: 5,
    title: "AI-Powered Resume Builder",
    description:
      "A web app that helps users create professional resumes using AI-generated suggestions and formatting.",
    longDescription:
      "This project leverages AI to provide content suggestions for each section of the resume and formats the document in a clean, ATS-friendly design.",
    tech: ["Next.js", "Tailwind CSS", "OpenAI API", "Firebase"],
    features: [
      "AI-powered content suggestions",
      "Real-time preview",
      "Export to PDF",
      "Cloud storage for resumes",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489190.jpg",
    liveUrl: "#",
    frontEndUrl: "#",
    backEndUrl: "#",
    status: "in-progress",
    challenges: [
      "Integrating AI API efficiently",
      "Handling PDF export formatting",
    ],
    learnings: [
      "Prompt engineering for better AI outputs",
      "Optimizing client-side performance in Next.js",
    ],
  },
  {
    id: 6,
    title: "E-Learning Platform",
    description:
      "An interactive platform for online courses with video streaming, quizzes, and progress tracking.",
    longDescription:
      "Full-stack e-learning application enabling instructors to create courses, upload videos, and manage quizzes, while students can enroll, track progress, and earn certificates.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Stripe API"],
    features: [
      "Video streaming",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate generation",
    ],
    imageUrl:
      "https://speckyboy.com/wp-content/uploads/2022/04/website-responsive-mockup-template-high-res-14.jpg",
    liveUrl: "#",
    frontEndUrl: "#",
    backEndUrl: "#",
    status: "planned",
    challenges: [
      "Video optimization for slow networks",
      "Quiz auto-grading system",
    ],
    learnings: [
      "Integrating payment gateways",
      "Handling large media uploads efficiently",
    ],
  },
];
