import Container from "../Component/ReusableComps/Container";
import EducationTimeline from "../Component/ReusableComps/EducationTimeline";
import "aos/dist/aos.css";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import Lottie from "lottie-react";
import education from "../assets/Lotties/education.json"
const AboutPage = () => {
  return (
    <Container>
      <section>
        {/* page heading */}
        <HeaderTitle
          title="Know About Myself"
          subTitle="Explore about myself with valuable informations"
        />
      </section>
      <section>
        {/* Intro about me */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 itece">
          <div>Professional Image</div>
          <div>
            {/* summary and objective */}
            <p className="text-lg text-gray-700 mb-6 ">
              Hi, I’m{" "}
              <span className="font-semibold text-primary">
                Amir Hamza Ismail
              </span>
              , a passionate Full Stack Web Developer from Bangladesh with a
              focus on building user-friendly and performance-driven web
              applications. I love turning complex problems into elegant,
              scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <div className="mb-6">
        <EducationTimeline />
      </div>

      {/* Skills Summary */}
      <section>
        <div>skills with animation and transection</div>
      </section>

      {/* Experience */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <Lottie animationData={education} loop={true}  />
          </div>
          <div>Datails of experience</div>
        </div>
      </section>

      {/* Mission or Goal */}

      {/* Fun Facts / Hobbies */}
    </Container>
  );
};

export default AboutPage;
