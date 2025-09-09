import type { TProject } from "../../Tyeps";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import "aos/dist/aos.css";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <div className="aspect-[16/9]">
          <img
            src={project?.imageUrl}
            alt={project?.title}
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{project?.title}</h2>
          {project?.description.length > 130 ? (
            <p className="text-gray-600 text-sm mb-4">
              {project?.description.slice(0, 130)}.....
            </p>
          ) : (
            <p className="text-gray-600 text-sm mb-4">{project?.description}</p>
          )}
          <div className="mb-3">
            <strong className="text-sm text-gray-600">Tech Stack:</strong>
            <ul className="flex flex-wrap gap-2 mt-1">
              {project?.tech.map((t, i) => (
                <li key={i}>
                  <button className="bg-blue-50 text-gray-500 px-3 py-1 text-sm rounded-full">
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-4 ">
            <a
              href={project?.liveUrl}
              className="bg-primary px-3 rounded-full flex font-semibold items-center gap-1 text-white hover:bg-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineExternalLink />
              Live Demo
            </a>

            {/* Add Detail button here */}
            <Link to={`/projects/${project?.id}`}>
              <button className="btn btn-outline flex items-center px-3 hover:bg-primary border-primary shadow-sm rounded-full font-semibold  hover:text-white">
                Details
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
