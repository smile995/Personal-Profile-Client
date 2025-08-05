
import { useParams } from "react-router";
import { blogs } from "../../Data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));


  if (!blog) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 my-10 bg-white shadow-lg rounded-lg">
      {/* ID */}
      <p className="text-sm text-gray-400 mb-2">Blog ID: {blog.id}</p>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">Published on: {blog.date}</p>

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full object-cover rounded-md mb-6"
      />

      {/* Details */}
      <div className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-line">
        {blog.details}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {blog.tag.map((t, i) => (
          <span
            key={i}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
