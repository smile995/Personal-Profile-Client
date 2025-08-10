import BannerAnimation from "../Animation/BannerAnimation";
import Container from "../ReusableComps/Container";

const Banner = () => {
  return (
    <Container>
      <div className="p-5 flex items-center  min-h-[550px]">
        <div className="w-full md:flex items-center space-y-5 justify-evenly  gap-5 ">
          <div className="w-full pl-3 sm:w-1/2">
            <h1 className="md:text-4xl text-2xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 text-xl">
                <BannerAnimation />
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              A passionate <strong>Full Stack Web Developer</strong>{" "}
              specializing in React, TypeScript, and modern web technologies. I
              build responsive, user-friendly websites and web apps that solve
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
          <div className="w-full mx-auto sm:w-1/2 flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/127654019"
              className="md:max-w-sm w-2/3  rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
