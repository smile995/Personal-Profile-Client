import Banner from "../Component/Banner/Banner";
import Blogs from "./Blogs";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
        <Projects/>
        <Blogs/>
      </section>
     
    </>
  );
};

export default HomePage;
