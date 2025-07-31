import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import { blogs } from "../Data/blogs";

const Blogs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
  
      <HeaderTitle
        titleColor="Blogs"
        titleStart="📝 My All"
        subTitle="  Here you'll find articles, tutorials, and thoughts on development,
        tools, and productivity."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
          >
            <span className="text-sm text-gray-500">{blog.date}</span>
            <h2 className="text-xl font-semibold mt-2 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.summary}</p>
            <button
              className="text-blue-600 hover:underline"
              title="Blog details will come soon"
              disabled
            >
              Read More
            </button>
            <div className="mt-3 text-sm bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-700">
              #{blog.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
