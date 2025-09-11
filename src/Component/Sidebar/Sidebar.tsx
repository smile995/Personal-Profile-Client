import { Link, NavLink } from "react-router";
import "./sidebar.css";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    // { name: "Statistics", path: "profile-statistics" },
    { name: "Add Education", path: "add-educations" },
    { name: "Add Experience", path: "add-experienecs" },
    { name: "Create Projects", path: "create-projects" },
    { name: "Create Blogs", path: "create-blogs" },
  ];

  return (
    <div className="min-h-screen md:col-span-1 p-3 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-center">Activity Manu</h2>

      {/* This div grows to fill available space */}
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              className="bg-white p-2 font-semibold rounded hover:bg-gray-200"
              key={item.name}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* This stays at the bottom */}
        <div className="mt-auto">
          <Link to={"/"}>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Go Home
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
