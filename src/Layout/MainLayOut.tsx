import { Outlet } from "react-router";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";

const MainLayOut = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Navber />
      <div className="my-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
