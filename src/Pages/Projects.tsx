import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import ProjectCard from "../Component/ReusableComps/ProjectCard";
import { projects } from "../Data/project";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <HeaderTitle
        titleColor="Projects"
        titleStart="🚀 My Best"
        subTitle="These are some of the projects I've built — combining frontend, backend, and AI."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
