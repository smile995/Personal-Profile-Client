import { Outlet } from "react-router";

const DeshboardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-5 gap-2">
      <div className="min-h-screen md:col-span-1 bg-amber-300 py-5 px-1">NavItems</div>
      <div className="min-h-screen md:col-span-4 bg-gray-600 py-5 px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DeshboardLayout;
