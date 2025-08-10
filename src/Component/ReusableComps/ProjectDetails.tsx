import { useParams } from "react-router";
import Container from "./Container";
import { projects } from "../../Data/project";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  return (
    <Container>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Banner Image */}
        <div className="relative w-full aspect-[16/9]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Section */}
        <div className="p-5 md:p-8 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h1>
          <span
            className={`px-4 py-1 rounded-full text-sm md:text-base font-semibold self-start md:self-center
              ${project.status === "completed"
                ? "bg-green-100 text-green-800"
                : project.status === "in-progress"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"}
            `}
          >
            {project.status.replace("-", " ").toUpperCase()}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 p-5 md:p-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Short Description */}
            <section>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{project.description}</p>
            </section>

            {/* Long Description */}
            {project.longDescription && (
              <section>
                <h2 className="text-lg font-semibold mb-2">Long Description</h2>
                <p className="text-gray-700">{project.longDescription}</p>
              </section>
            )}

            {/* Tech Stack */}
            <section>
              <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-lg font-semibold mb-2">Links</h2>
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-sm md:text-base"
                  >
                    Live Demo
                  </a>
                )}
                {project.frontEndUrl && (
                  <a
                    href={project.frontEndUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm md:text-base"
                  >
                    Frontend Code
                  </a>
                )}
                {project.backEndUrl && (
                  <a
                    href={project.backEndUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition text-sm md:text-base"
                  >
                    Backend Code
                  </a>
                )}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Features */}
            <section>
              <h2 className="text-lg font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-lg font-semibold mb-2">Challenges</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Learnings */}
            {project.learnings && (
              <section>
                <h2 className="text-lg font-semibold mb-2">Learnings</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
