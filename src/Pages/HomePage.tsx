import Banner from "../Component/Banner/Banner";
import KeySkills from "../Component/KeySkill/KeySkills";
import EducationTimeline from "../Component/ReusableComps/EducationTimeline";
import EmailSection from "../Component/ReusableComps/EmailSection";
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
        <EducationTimeline />
        <EmailSection />
        <ReviewSection/>
      </section>
    </>
  );
};

export default HomePage;
