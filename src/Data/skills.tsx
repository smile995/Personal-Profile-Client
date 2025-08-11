import {
  SiAxios,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { Skill } from "../Tyeps";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export const featured: Skill[] = [
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

export const programmingLanguages: Skill[] = [
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

export const frontendSkills: Skill[] = [
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

export const backendSkills: Skill[] = [
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

export const otherSkills: Skill[] = [
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

export const keySkills = [
  { name: "React.js", icon: <SiReact className="text-sky-400 text-3xl" /> },
  {
    name: "Next.js",
    value: 60,
    icon: <RiNextjsFill className="text-black text-3xl" />,
  },
  {
    name: "Express.js",
    value: 80,
    icon: <SiExpress className="text-gray-600 text-3xl" />,
  },
  {
    name: "Redux.js",
    value: 80,
    icon: <TbBrandRedux className="text-purple-600 text-3xl" />,
  },
  {
    name: "TypeScript",
    value: 82,
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  {
    name: "Python",
    value: 80,
    icon: <FaPython className="text-yellow-500 text-3xl" />,
  },
  {
    name: "CSS3",
    value: 92,
    icon: <SiCss3 className="text-blue-600 text-3xl" />,
  },
  {
    name: "HTML5",
    value: 95,
    icon: <SiHtml5 className="text-orange-500 text-3xl" />,
  },
  {
    name: "Firebase",
    value: 78,
    icon: <SiFirebase className="text-yellow-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Mongoose",
    value: 80,
    icon: <SiMongoose className="text-[#ba2323] text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    value: 85,
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
];
