import BannerAnimation from "../Animation/BannerAnimation";

const Banner = () => {
  return (
    <div className=" bg-base-200 px-5">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="md:max-w-sm w-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full sm:w-1/2 ">
          <h1 className="text-4xl font-extrabold mb-6">
            Hi, I'm <span className="text-blue-600 text-xl"><BannerAnimation/></span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            A passionate <strong>Full Stack Web Developer</strong> specializing
            in React, TypeScript, and modern web technologies. I build
            responsive, user-friendly websites and web apps that solve
            real-world problems.
          </p>
          <div className="flex gap-6">
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
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
