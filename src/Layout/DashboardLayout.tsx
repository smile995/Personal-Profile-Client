import { Outlet } from "react-router";
import Sidebar from "../Component/Sidebar/Sidebar";

const DeshboardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-5 gap-2">
      <div className="min-h-screen md:col-span-1 bg-gray-200 py-5 px-1">
        <Sidebar/>
      </div>
      <div className="min-h-screen md:col-span-4  px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DeshboardLayout;
