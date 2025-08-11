import { Outlet } from "react-router";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";

const MainLayOut = () => {
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
