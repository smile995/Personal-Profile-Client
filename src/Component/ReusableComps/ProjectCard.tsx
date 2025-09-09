import type { TProject } from "../../Tyeps";
import { FaArrowRight, FaLink } from "react-icons/fa6";

import "aos/dist/aos.css";
import { Link } from "react-router";


const ProjectCard = ({ project }: { project: TProject }) => {

  return (
    <div data-aos="zoom-in-up" >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <div className="aspect-[16/9]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          {/* <p className="text-gray-600 text-sm mb-4">{project.description}</p> */}
          {project.description.length > 130 ? (
            <p className="text-gray-600 text-sm mb-4">{project.description.slice(0,130)}.....</p>
          ) : (
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          )}
          <div className="mb-3">
            <strong className="text-sm text-gray-600">Tech Stack:</strong>
            <ul className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((t, i) => (
                <li key={i}>
                  <button className="bg-blue-50 text-gray-500 px-3 py-1 text-sm rounded-full">
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-4">
            <a
              href={project.liveUrl}
              className="hover:text-blue-600 flex items-center gap-1 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink /> Live Preview
            </a>

            {/* Add Detail button here */}
            <Link to={`/projects/${project.id}`}>
              <div className="tooltip" data-tip="Deatils">
                <button className="btn btn-circle hover:bg-gradient-to-r from-primary to-secondary">
                  <FaArrowRight className="hover:text-white md:text-xl" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
