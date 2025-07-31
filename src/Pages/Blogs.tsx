const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks – A Beginner’s Guide",
    summary:
      "Learn the basics of React Hooks like useState, useEffect, and how they simplify your functional components.",
    date: "July 15, 2025",
    tag: "React",
  },
  {
    id: 2,
    title: "Top 10 VS Code Extensions for Web Developers",
    summary:
      "Boost your productivity with these powerful VS Code extensions every frontend developer should use.",
    date: "July 10, 2025",
    tag: "Productivity",
  },
  {
    id: 3,
    title: "How to Structure a Scalable MERN Stack Project",
    summary:
      "Explore folder structure, code splitting, and best practices for maintaining large-scale MERN applications.",
    date: "June 28, 2025",
    tag: "MERN Stack",
  },
  {
    id: 4,
    title: "Deploying Your React App with Vercel or Netlify",
    summary:
      "A step-by-step deployment guide to take your React project live using modern hosting services.",
    date: "June 20, 2025",
    tag: "Deployment",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">📝 My Blog</h1>
      <p className="text-center text-gray-600 mb-10">
        Here you'll find articles, tutorials, and thoughts on development, tools, and productivity.
      </p>

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
