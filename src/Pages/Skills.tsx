import { useEffect, useState, type JSX } from "react";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaPython } from "react-icons/fa6";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostman,
  SiAxios,
  SiMongoose,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

interface Skill {
  name: string;
  value: number;
  icon: JSX.Element;
}

const SkillsSection = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-white/85 backdrop-blur-lg rounded-2xl shadow-md p-4 w-28 hover:shadow-lg hover:scale-105 transition"
          >
            <div
              className="radial-progress text-primary w-16 h-16"
              style={
                { "--value": animate ? skill.value : 0 } as React.CSSProperties
              }
              role="progressbar"
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsPage() {
  const featured: Skill[] = [
    {
      name: "React.js",
      value: 90,
      icon: <SiReact className="text-sky-400 text-xl" />,
    },
    {
      name: "JavaScript",
      value: 88,
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
    },
    {
      name: "Node.js",
      value: 85,
      icon: <SiNodedotjs className="text-green-500 text-xl" />,
    },
    {
      name: "MongoDB",
      value: 80,
      icon: <SiMongodb className="text-green-600 text-xl" />,
    },
    {
      name: "Next.js",
      value: 60,
      icon: <RiNextjsFill className="text-black text-xl" />,
    },
  ];

  const programmingLanguages: Skill[] = [
    {
      name: "JavaScript",
      value: 88,
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
    },
    {
      name: "TypeScript",
      value: 82,
      icon: <SiTypescript className="text-blue-500 text-xl" />,
    },
    {
      name: "Python",
      value: 80,
      icon: <FaPython className="text-yellow-500 text-xl" />,
    },
    {
      name: "HTML5",
      value: 95,
      icon: <SiHtml5 className="text-orange-500 text-xl" />,
    },
    {
      name: "CSS3",
      value: 92,
      icon: <SiCss3 className="text-blue-600 text-xl" />,
    },
  ];

  const frontendSkills: Skill[] = [
    {
      name: "React.js",
      value: 90,
      icon: <SiReact className="text-sky-400 text-xl" />,
    },
    {
      name: "Next.js",
      value: 60,
      icon: <RiNextjsFill className="text-black text-xl" />,
    },
    {
      name: "Tailwind CSS",
      value: 85,
      icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
    },
    {
      name: "Redux.js",
      value: 80,
      icon: <TbBrandRedux className="text-purple-600 text-xl" />,
    },
    {
      name: "Axios",
      value: 78,
      icon: <SiAxios className="text-blue-500 text-xl" />,
    },
  ];

  const backendSkills: Skill[] = [
    {
      name: "Node.js",
      value: 85,
      icon: <SiNodedotjs className="text-green-500 text-xl" />,
    },
    {
      name: "Express.js",
      value: 80,
      icon: <SiExpress className="text-gray-600 text-xl" />,
    },
    {
      name: "MongoDB",
      value: 80,
      icon: <SiMongodb className="text-green-600 text-xl" />,
    },
    {
      name: "Mongoose",
      value: 80,
      icon: <SiMongoose className="text-[#ba2323] text-xl" />,
    },
    {
      name: "SQL",
      value: 70,
      icon: <BiLogoPostgresql className="text-blue-700 text-xl" />,
    },
  ];

  const otherSkills: Skill[] = [
    {
      name: "Git",
      value: 85,
      icon: <SiGit className="text-orange-500 text-xl" />,
    },
    {
      name: "GitHub",
      value: 85,
      icon: <SiGithub className="text-gray-800  text-xl" />,
    },
    {
      name: "Firebase",
      value: 78,
      icon: <SiFirebase className="text-yellow-500 text-xl" />,
    },
    {
      name: "Postman",
      value: 80,
      icon: <SiPostman className="text-orange-500 text-xl" />,
    },
    {
      name: "Vercel",
      value: 82,
      icon: <RiVercelLine className="text-black text-xl" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SkillsSection title="🌟 Featured Skills" skills={featured} />
      <SkillsSection
        title="💻 Programming Languages"
        skills={programmingLanguages}
      />
      <SkillsSection title="🎨 Frontend Skills" skills={frontendSkills} />
      <SkillsSection title="⚙️ Backend Skills" skills={backendSkills} />
      <SkillsSection title="🛠 Other Skills" skills={otherSkills} />
    </div>
  );
}
