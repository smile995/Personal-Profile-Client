import Banner from "../Component/Banner/Banner";
import KeySkills from "../Component/KeySkill/KeySkills";
import Blogs from "./Blogs";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
        <Projects/>
        <KeySkills/>
        <Blogs/>
      </section>
     
    </>
  );
};

export default HomePage;
