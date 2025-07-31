import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
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
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={project.imageUrl} alt={project.title} className=" " />
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
