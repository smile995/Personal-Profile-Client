import Container from "../Component/ReusableComps/Container";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import ProjectCard from "../Component/ReusableComps/ProjectCard";
import { projects } from "../Data/project";

const Projects = () => {
  return (
    <Container>
      <HeaderTitle
        title="My Best Projects"
        subTitle="These are some of the projects I've built — combining frontend, backend, and AI."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
  
    </Container>
  );
};

export default Projects;
