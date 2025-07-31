const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>

      {/* Primary Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          🚀 Primary Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "React.js",
            "Next.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 rounded-xl shadow-md p-4 hover:bg-primary/10 transition"
            >
              <p className="font-medium text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          🛠 Tools & Other Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "Git & GitHub",
            "Firebase",
            "Vercel & Netlify",
            "Figma",
            "REST API",
            "Axios",
            "JWT Auth",
            "Postman",
            "Nodemailer",
            "VS Code",
            "Linux Terminal",
            "Responsive Design",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-gray-100 rounded-xl shadow-md p-4 hover:bg-indigo-100 transition"
            >
              <p className="font-medium text-gray-800">{tool}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          📚 Currently Exploring
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>GraphQL with Apollo</li>
          <li>Advanced TypeScript Patterns</li>
          <li>CI/CD with GitHub Actions</li>
          <li>AI Integration with Hugging Face APIs</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
