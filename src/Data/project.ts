import type { TProject } from "../Tyeps";

export const projects: TProject[] = [
  {
    id: 1,
    title: "Restaurant & Food Management App",
    description:
      "A full-stack platform to connect blood donors with recipients. Features smart donor-recipient matching, availability tracking, and AI-powered chatbot support.",
    longDescription:
      "This platform simplifies the process of finding blood donors by connecting them directly with recipients. It includes features like AI-powered chat assistance, live stock updates, and smart matching algorithms.",
    tech: [
      "React",
      "Axios",
      "Tanstack Query",
      "MongoDB",
      "Express",
      "Firebase",
      "JWT",
      "Tailwind CSS",
      "Stripe",
    ],
    features: [
      "Built a role-based system with distinct layouts for users, admins, and super admins.",
      "Developed a modular backend with secure authentication, authorization, and input validation.",
      "Improved admin workflow efficiency by enabling faster content, order, and user management.",
    ],
    imageUrl:
      "https://assets.justinmind.com/wp-content/uploads/2020/02/website-mockup-design-jesica.png",
    liveUrl: "https://github.com/smile995/",
    frontEndUrl: "https://github.com/smile995/Bistro-Boss-frontend",
    backEndUrl: "https://github.com/smile995/Bistro-Boss-Backend",
    status: "completed",
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
    title: "Car Servicing & Booking Platform",
    description:
      "Extracts and analyzes medical reports using Hugging Face's TrOCR model to help screen donor health reports effectively.",
    longDescription:
      "A backend project that automates the extraction and analysis of medical report data using OCR and NLP techniques.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Axios", "JWT", "Firebase", "Tailwind","Daisy UI", "HTML"],
    features: [
      "Designed a booking management system with dashboards for admins and customers.",
      "Implemented secure backend with API validations, authentication, and service record handling.",
      "Optimized backend APIs, reducing response latency by 20% for better user experience.",
    ],
    imageUrl:
      "https://resourceboy.com/wp-content/uploads/2022/03/modern-presentation-grid-website-mockup-1.jpg",
    liveUrl: "https://github.com/smile995",
    frontEndUrl: "https://github.com/smile995/Car-Servicing-Frontend",
    backEndUrl: "https://github.com/smile995/Car-Servicing-Backend",
    status: "completed",
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
    tech: ["React", "Tailwind CSS", "React Router", "TypeScript","Nodemailer", "Ant Design"],
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
    tech: ["MERN Stack", "Nodemailer", "MERN Stack", "Nodemailer","MongoDB Atlas"],
    features: [
      "User & admin dashboards",
      "Email notifications for contact form",
      "Menu browsing and feedback system",
    ],
    imageUrl:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg",
    liveUrl: "https://github.com/smile995",
    frontEndUrl: "https://github.com/smile995",
    backEndUrl: "https://github.com/smile995",
    status: "completed",
    challenges: ["Securing admin routes", "Feedback moderation system"],
    learnings: ["JWT authentication", "Email service integration"],
  },
  {
    id: 5,
    title: "Blog Management Application",
    description:
      "A web app that helps users create professional resumes using AI-generated suggestions and formatting.",
    longDescription:
      "This project leverages AI to provide content suggestions for each section of the resume and formats the document in a clean, ATS-friendly design.",
    tech: ["React", "Tailwind CSS", "Express","Typescript", "Firebase", "MUI"],
    features: [
      "AI-powered content suggestions",
      "Real-time preview",
      "Export to PDF",
      "Cloud storage for resumes",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489190.jpg",
    liveUrl: "https://github.com/smile995",
    frontEndUrl: "https://github.com/smile995",
    backEndUrl: "https://github.com/smile995",
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
    tech: ["React", "Node.js", "MongoDB","React", "Node.js", "MongoDB", "Cloudinary", "Stripe API"],
    features: [
      "Video streaming",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate generation",
    ],
    imageUrl:
      "https://speckyboy.com/wp-content/uploads/2022/04/website-responsive-mockup-template-high-res-14.jpg",
    liveUrl: "https://github.com/smile995",
    frontEndUrl: "https://github.com/smile995",
    backEndUrl: "https://github.com/smile995",
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
