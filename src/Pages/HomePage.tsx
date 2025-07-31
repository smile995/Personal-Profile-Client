import Banner from "../Component/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <section className="my-5">
        <Banner />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I'm <span className="text-blue-600">Amir Hamza Ismail</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          A passionate <strong>Full Stack Web Developer</strong> specializing in
          React, TypeScript, and modern web technologies. I build responsive,
          user-friendly websites and web apps that solve real-world problems.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
          <ul className="text-left max-w-3xl mx-auto space-y-3 text-gray-700">
            <li>
              ⚡ Develop dynamic, responsive single-page applications using
              React and TypeScript.
            </li>
            <li>
              ⚡ Build RESTful APIs and backend services with Node.js, Express,
              and MongoDB.
            </li>
            <li>
              ⚡ Implement state management with Redux and React Context API for
              scalable apps.
            </li>
            <li>
              ⚡ Write clean, maintainable code with best practices and testing.
            </li>
            <li>
              ⚡ Continuously learn and apply the latest web development trends
              and tools.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
