

const AboutPage = () => {
 
 
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6 text-center">
        Hi, I’m <span className="font-semibold text-primary">Amir Hamza Ismail</span>, a passionate Full Stack Web Developer from Bangladesh with a focus on building user-friendly and performance-driven web applications. I love turning complex problems into elegant, scalable solutions.
      </p>

      {/* Education & Background */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>B.Sc. in Computer Science & Engineering</li>
          <li>University: [Your University Name]</li>
          <li>Expected Graduation: [Year]</li>
        </ul>
      </div>

      {/* Skills Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">⚙️ What I Do</h2>
        <p className="text-gray-700">
          I specialize in MERN stack development — building dynamic, responsive websites and full-stack web applications. I’m confident with:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3</li>
          <li>Backend: Node.js, Express.js, MongoDB</li>
          <li>Tools: Git, GitHub, Vercel, Netlify, Figma</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">💼 Experience</h2>
        <p className="text-gray-700">Currently working on freelance and personal projects to sharpen my skills and build real-world applications. I’ve also completed several client projects and academic systems.</p>
      </div>

      {/* Mission or Goal */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🚀 My Goal</h2>
        <p className="text-gray-700">
          I want to grow as a full-stack developer and contribute to meaningful open-source and professional projects. My long-term goal is to work with a passionate tech team and build impactful digital products.
        </p>
      </div>

      {/* Fun Facts / Hobbies */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">🎯 Fun Facts</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>I love clean UI and simple UX design.</li>
          <li>I enjoy writing technical blogs and helping others learn.</li>
          <li>I’m always exploring new tech and tools in the JS ecosystem.</li>
        </ul>
      </div>
    </div>
  );
};



export default AboutPage