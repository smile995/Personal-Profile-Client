import Container from "../Component/ReusableComps/Container";
import EducationTimeline from "../Component/ReusableComps/EducationTimeline";
import "aos/dist/aos.css";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import Lottie from "lottie-react";
import hello from "../assets/Lotties/hello.json";

const AboutPage = () => {
  return (
    <Container>
      <section>
        <HeaderTitle
          title="Introducing Myself"
          subTitle="Explore about myself with valuable informations"
        />
      </section>
      <section data-aos="fade-up" data-aos-duration="1200">
        <div className="grid grid-cols-1  md:grid-cols-5 gap-3 ">
          <div className="p-5 md:p-8 col-span-2 ">
            <Lottie className="w-full" animationData={hello} loop={true} />
          </div>
          <div className="px-5 md:px-8 space-y-3 col-span-3">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">About Me</h2>
              <p className="text-lg text-gray-700">
                I’m a passionate{" "}
                <span className="font-semibold">Full Stack Web Developer</span>{" "}
                skilled in React.js, Next.js, Node.js, Express.js, and MongoDB.
                I focus on building scalable, user-friendly applications with
                clean code and optimized performance. My goal is to leverage my
                MERN stack expertise and problem-solving mindset to create
                innovative solutions while continuously learning and growing as
                a developer.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary ">
                Currently Learning
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>
                  Advanced Next.js features (App Router, parallel routes,
                  intercepting routes)
                </li>
                <li>Machine Learning basics (from workshops & self-study)</li>
                <li>Cloud deployment and optimization for production apps</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary ">
                Hobbies and Interests{" "}
              </h2>
              <ul className="list-disc grid lg:grid-cols-2 list-inside text-lg text-gray-700 space-y-1">
                <li>Coding & competitions</li>
                <li>Exploring new tech</li>
                <li>Robotics & hardware</li>
                <li>Scalable web apps</li>
                <li>Problem-solving</li>
                <li>Open-source work</li>
                <li>AI & automation</li>
                <li>Machine & Deep Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <section data-aos="fade-up" data-aos-duration="1200">
        <div>
          <EducationTimeline />
        </div>
      </section>

      {/* Skills Summary */}
      {/* <section
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-yellow-200 "
      >
        <div>skills with animation and transection</div>
      </section> */}

      {/* Experience */}
      {/* <section
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-purple-300 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <Lottie animationData={education} loop={true} />
          </div>
          <div className="bg-blue-300 ">
            <ESwipper />
          </div>
        </div>
      </section> */}
    </Container>
  );
};

export default AboutPage;
