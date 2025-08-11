import { useEffect, useState, type JSX } from "react";
import { SiReact, SiNextdotjs,  SiNodedotjs, SiMongodb} from "react-icons/si";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const featuredSkills = [
    { name: "React.js", value: 90, icon: <SiReact className="text-sky-400" /> },
    { name: "Next.js", value: 88, icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
    { name: "Node.js", value: 85, icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", value: 82, icon: <SiMongodb className="text-green-600" /> },
  ];

  const Section = ({ title, skills }: { title: string; skills: { name: string; value: number; icon?: JSX.Element }[] }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 relative">
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{title}</span>
        <span className="absolute bottom-[-6px] left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <div
              className="radial-progress text-primary transition-all duration-1000"
              style={{ "--value": animate ? skill.value : 0 } as React.CSSProperties}
              role="progressbar"
              aria-valuenow={skill.value}
            >
              {skill.value}%
            </div>
            <p className="mt-4 font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        💡 My Skills
      </h1>

      <Section title="🌟 Featured Skills" skills={featuredSkills} />
      {/* Repeat Section for Languages, Frontend, Backend, Others with different icons */}
    </div>
  );
};

export default Skills;
