import { Link } from "react-router";
import type { TBlog } from "../../Tyeps";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { date, id, image, summary, tag, title } = blog;
  return (
    <Link to={`/blogs/${id}`}>
      <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300  ">
        <div className="aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 ">
          <p className="text-sm text-gray-500">{date}</p>

          <h2 className="text-xl font-semibold mt-2 mb-3 text-gray-800 hover:text-blue-700 transition duration-200">
            {blog.title}
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            {summary.length > 90 ? summary.slice(0, 90) + "..." : summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tag.map((t: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
