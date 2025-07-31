import Banner from "../Component/Banner/Banner";
import Blogs from "./Blogs";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <section className="my-5">
        <Banner />
        <Projects/>
        <Blogs/>
      </section>
     
    </>
  );
};

export default HomePage;
