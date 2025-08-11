import { useEffect, useState, } from "react";
import { backendSkills, featured, frontendSkills, otherSkills, programmingLanguages } from "../Data/skills";
import type { Skill } from "../Tyeps";




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
        {skills?.map((skill) => (
          <div
            key={skill?.name}
            className="flex flex-col items-center bg-white/85 backdrop-blur-lg rounded-2xl shadow-md p-4 w-28 hover:shadow-lg hover:scale-105 transition"
          >
            <div
              className="radial-progress text-primary w-16 h-16"
              style={
                { "--value": animate ? skill?.value : 0 } as React.CSSProperties
              }
              role="progressbar"
            >
              {skill?.icon}
            </div>
            <p className="mt-2 text-sm font-medium text-center">{skill?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsPage() {


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
