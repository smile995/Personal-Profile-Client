import React from "react";

// Sample data – you can place this in a separate file and import it if needed
const projects = [
  {
    id: 1,
    title: "Blood Donation Management System",
    description:
      "A full-stack platform to connect blood donors with recipients. Features smart donor-recipient matching, availability tracking, and AI-powered chatbot support.",
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
    codeUrl: "#",
    status: "In Progress",
  },
  {
    id: 2,
    title: "OCR-based Report Analyzer",
    description:
      "Extracts and analyzes medical reports using Hugging Face's TrOCR model to help screen donor health reports effectively.",
    tech: ["Python", "FastAPI", "Hugging Face", "OCR"],
    features: [
      "TrOCR integration",
      "Health keyword detection",
      "Auto-report classification",
    ],
    imageUrl:
      "https://resourceboy.com/wp-content/uploads/2022/03/modern-presentation-grid-website-mockup-1.jpg",
    liveUrl: "#",
    codeUrl: "#",
    status: "Prototype",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "My personal developer portfolio website showcasing projects, skills, resume, and blog. Fully responsive and professional layout.",
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
    codeUrl: "https://github.com/yourusername/portfolio",
    status: "Live",
  },
  {
    id: 4,
    title: "Restaurant Management App",
    description:
      "A modern restaurant web app where users can browse menu, send feedback, and admins can manage orders and customers.",
    tech: ["MERN Stack", "Nodemailer", "MongoDB Atlas"],
    features: [
      "User & admin dashboards",
      "Email notifications for contact form",
      "Menu browsing and feedback system",
    ],
    imageUrl:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg",
    liveUrl: "#",
    codeUrl: "#",
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">🚀 My Projects</h1>
      <p className="text-center text-gray-600 mb-12">
        These are some of the projects I've built — combining frontend, backend, and AI.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className=" "
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-3">
                <strong className="text-sm text-gray-600">Tech Stack:</strong>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-gray-600">Features:</strong>
                <ul className="list-disc pl-5 text-gray-600 mt-1 space-y-1 text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={project.liveUrl}
                  className="text-blue-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Live Preview
                </a>
                <a
                  href={project.codeUrl}
                  className="text-blue-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🧑‍💻 Source Code
                </a>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Status: <span className="italic">{project.status}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
