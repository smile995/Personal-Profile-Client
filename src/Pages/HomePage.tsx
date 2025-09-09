import Banner from "../Component/Banner/Banner";
import KeySkills from "../Component/KeySkill/KeySkills";
import EducationTimeline from "../Component/ReusableComps/EducationTimeline";
import ReviewSection from "../Component/Reviews/ReviewSection";
import Blogs from "./Blogs";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
        <Projects />
        <KeySkills />
        <Blogs />
        <EducationTimeline/>
        <ReviewSection />
      </section>
    </>
  );
};

export default HomePage;
