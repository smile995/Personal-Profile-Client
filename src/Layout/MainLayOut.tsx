import { Outlet } from "react-router";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";

const MainLayOut = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
