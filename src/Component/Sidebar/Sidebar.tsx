import { NavLink } from "react-router";
import "./sidebar.css"
const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    //     { name: "Statistics", path: "profile-statistics" },
    { name: "Add Education", path: "add-educations" },
    { name: "Add Experience", path: "add-experienecs" },
    { name: "Create Projects", path: "create-projects" },
    { name: "Create Blogs", path: "create-blogs" },
  ];

  return (
    <div className="min-h-screen md:col-span-1 py-5 px-3 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-center">Activity Manu</h2>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <NavLink className="bg-white p-2 font-semibold rounded" key={item.name} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
